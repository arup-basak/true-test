import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Input from '@/components/Input';
import Button from '@/components/Button';

interface PageProps {
    onLoginSuccessful: () => void
}

const Login = (props: PageProps) => {
    const loginAttempt = useRef(0);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    const handleLogin = () => {
        if (username === USERNAME && password === PASSWORD) {
            console.log("Login Successful")
            props.onLoginSuccessful()
        } else {
            console.log('Invalid Login Attempt');
            loginAttempt.current++;
        }
    };

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="m-auto">
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
                    className="m-auto px-5 rounded-full"
                />
            </div>
        </>
    );
};

export default Login