import Head from 'next/head'
import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query

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