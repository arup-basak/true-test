import React from 'react'
import { useRouter } from 'next/router';

const EditPanel = () => {
    const router = useRouter();
    const { pid } = router.query;
    return (
        <div>{pid}</div>
    )
}

export default EditPanel