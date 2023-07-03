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
        <Link href={href}>
            <div
                className={
                    `mobile:p-2 mobile:border-
                    tablet:border-none tablet:p-1 tablet:px-2
                    px-4 text-center transition font-medium border-slate-400 border-opacity-40 rounded  
                    ${active ? "tablet:bg-[#ffffff36] tablet:text-white" : "tablet:hover:text-gray-300"}`
                }>
                {innerText}
            </div>
        </Link>
    );
};

export default LinkNavButton;
