import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface Props {
    src: StaticImageData;
    alt?: string;
    size?: number;
    href?: string;
}

const SocialMediaIcons: React.FC<Props> = ({
    src,
    alt = 'Image',
    size = 24,
    href,
}) => {
    const renderLink = (children: React.ReactNode) =>
        href ? <Link href={href}>{children}</Link> : children;

    return (
        <div className=''>
            {renderLink(
                <Image 
                    src={src} 
                    alt={alt} 
                    height={size} 
                    width={size} />
            )}
        </div>
    );
};

export default SocialMediaIcons;
