import React, { MouseEvent } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageButtonProps {
    src: StaticImageData;
    altText: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ImageButton: React.FC<ImageButtonProps> = ({ src, altText, onClick }) => {
    return (
        <button
            className="image-button relative overflow-hidden border border-transparent rounded-full transition-all duration-300 focus:outline-none p-2 mx-2"
            onClick={onClick}
        >
            <Image
                src={src}
                alt={altText}
                className="block"
                height={24}
                width={24}
            />
            <span className="ripple"></span>
        </button>
    );
};

export default ImageButton;
