import React from 'react'
import Input from '@/components/Input'
import Head from 'next/head'
import Button from '@/components/Button'
import { useState, useRef } from 'react'

const Login = () => {
    const loginAttempt = useRef(0)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {

    };


    return (
        <>
            <Head>
                <title>LogIn</title>
            </Head>
            <div className='m-auto'>
                <Input
                    label='Username'
                    className=' min-w-[300px]'
                    maxLen={10}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type='password'
                    label='Password'
                    className=' min-w-[300px]'
                    maxLen={10}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    innerText='Login'
                    onClick={handleLogin}
                    className='m-auto px-5 rounded-full'
                />

            </div>
        </>
    )
}

const admin = () => {
    return <Login />
}

export default Login