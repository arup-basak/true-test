import Head from 'next/head';
import Image from 'next/image';
import icon_404 from 'public/icon-404.svg'

export default function Custom404() {
    return (
        <>
        <Head>
            <title>404 Not Found</title>
        </Head>
            <div className="min-h-[80vh] select-none m-auto flex justify-center items-center flex-col">
                <Image 
                    src={icon_404}
                    alt='404icon'
                    height={100}
                    width={100}
                    />
                <div className="text-6xl p-5">
                    <span className="text-transparent bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text">Oh!</span> Snap
                </div>
                <div className='text-3xl'>
                    Page Not Found
                </div>
            </div>
        </>
    );
}