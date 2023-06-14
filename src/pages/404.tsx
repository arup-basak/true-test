import Head from 'next/head';

export default function Custom404() {
    return (
        <>
        <Head>
            <title>404 Not Found</title>
        </Head>
            <div className="overflow-hidden select-none m-auto w-screen h-screen flex justify-center items-center flex-col">
                <div className="text-6xl p-5">
                    Oh! Snap
                </div>
                <div className='text-3xl'>
                    Page Not Found
                </div>
            </div>
        </>
    );
}