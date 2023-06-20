import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import BloodModel from '@/models/report'


const Post = () => {
    const router = useRouter()
    const { slug } = router.query

    useEffect(() => {
        const getReport = async () => {
            console.log(await BloodModel)
        }

        getReport()
    }, [])

    return (
        <main>
            <Head>
                <title>{slug}</title>
            </Head>
            <div>
                post: {slug}
            </div>
        </main>
    )
}

export default Post;