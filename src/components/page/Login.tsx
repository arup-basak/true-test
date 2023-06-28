import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { motion } from 'framer-motion'

interface PageProps {
    onLoginSuccessful: (username: string, password: string) => void
}

const Login = (props: PageProps) => {
    const loginAttempt = useRef(0);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    const handleLogin = () => {
        if (loginAttempt.current <= 5)
            if (username === USERNAME && password === PASSWORD) {
                console.log("Login Successful")
                props.onLoginSuccessful(username, password)
            } else {
                console.log('Invalid Login Attempt');
                loginAttempt.current++;
            }
        else
            console.log("You have tried Max Attemps")
    };

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className='h-screen w-full flex items-center justify-center select-none'>
                <motion.div 
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.2
                    }}
                    className="p-6 rounded-md shadow-lg flex flex-col justify-center border-blue-900 opacity-0">
                    <span className='text-xl text-center p-4'>
                        Admin Login
                    </span>
                    <Input
                        label="Username"
                        className="min-w-[300px]"
                        maxLen={10}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        type="password"
                        label="Password"
                        className="min-w-[300px]"
                        maxLen={10}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        innerText="Login"
                        onClick={handleLogin}
                        className="m-3 mx-auto px-5 rounded-full"
                    />
                </motion.div>
            </div>
        </>
    );
};

export default Login