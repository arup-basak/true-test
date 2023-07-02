import React, { MouseEvent } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageButtonProps {
    src: StaticImageData;
    altText: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    text?: string;
    className?: string,
    size?: number
}

const ImageButton: React.FC<ImageButtonProps> = ({ src, altText, onClick, text, className, size=24 }) => {
    return (
        <button
            className={`${className} image-button relative overflow-hidden border border-transparent rounded-full transition-all duration-300 focus:outline-none p-2 mx-2 flex items-center`}
            onClick={onClick}
        >
            <Image
                src={src}
                alt={altText}
                className="block"
                height={size}
                width={size}
            />
            {text && <span className="button-text p-2 text-lg">{text}</span>} {/* Render the text if it exists */}
            <span className="ripple"></span>
        </button>
    );
};

export default ImageButton;
