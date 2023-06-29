import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion'

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
            <motion.div
                whileHover={{

                }}
                className={
                    `mobile:p-2 mobile:border-b 
                    tablet:border-none tablet:p-1 
                    px-4 text-center transition font-medium border-slate-400 border-opacity-40
                    ${active ? "bg-slate-300 text-black" : "hover:text-slate-300"}`
                }>
                {innerText}
            </motion.div>
        </Link>
    );
};

export default LinkNavButton;
