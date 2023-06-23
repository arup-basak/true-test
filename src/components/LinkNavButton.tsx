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
                className={`p-1 px-4 transition rounded-full font-medium ${active ? "bg-slate-300 text-black" : "hover:text-slate-300"}`}>
                {innerText}
            </motion.div>
        </Link>
    );
};

export default LinkNavButton;
