import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
    href?: string;
    innerText: string;
}

const LinkNavButton = ({ innerText, href = `/${innerText.toLowerCase()}`, }: Props) => {
    const router = useRouter();
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(router.pathname.includes(href));
    }, [router.pathname, href]);

    return (
        <div className={`px-3 ${active ? "bg-red-500" : ""}`}>
            <Link href={href}>{innerText}</Link>
        </div>
    );
};

export default LinkNavButton;
