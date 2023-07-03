import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

interface PDFViewerProps {
  blobData: Blob;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ blobData }) => {
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await fetch(URL.createObjectURL(blobData));
        const arrayBuffer = await response.arrayBuffer();
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
        setNumPages(pdf.numPages);
      } catch (error) {
        console.log('Error while loading PDF:', error);
      }
    };

    fetchPDF();
  }, [blobData]);

  const calculateScale = () => {
    const screenWidth = window.innerWidth;
    const pageWidth = 595.28; // Assuming PDF page width of 595.28 points (standard A4 size)
    const scale = screenWidth / pageWidth;
    return scale;
  };

  return (
    <div className="pdf-container">
      <Document
        file={URL.createObjectURL(blobData)}
        onLoadError={(error) => console.log('Error while loading PDF:', error)}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            className="pdf-page"
            renderTextLayer={false}
            renderAnnotationLayer={false}
            scale={calculateScale()} // Dynamically calculate scale based on screen width
          />
        ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
