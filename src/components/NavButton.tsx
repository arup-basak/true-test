import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

interface NavBarProps {
    link: string;
    innerText: string;
    imageIcon?: StaticImageData;
}

const NavButton: React.FC<NavBarProps> = (props) => {
    const { link, innerText, imageIcon } = props;

    return (
        <div className='p-2 px-4 bg-purple-800 rounded text-white ml-3'>
            <Link href={link}>
                <button className="flex justify-center">
                    {imageIcon && (
                        <Image
                            src={imageIcon}
                            alt="download-icon"
                            height={24}
                            width={24}
                            className="mr-1"
                            priority
                        />
                    )}
                    <span className='whitespace-nowrap w-fit'>{innerText}</span>
                </button>
            </Link>
        </div>

    );
};

export default NavButton;
