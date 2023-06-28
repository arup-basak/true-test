import React, { useState, useEffect } from 'react';
import Login from '@/components/page/Login';
import AdminPanel from '@/components/page/AdminPanel';
import secureLocalStorage from "react-secure-storage";

const Admin = () => {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        const isLoginSuccessful = secureLocalStorage.getItem("is-login-successful");
        setLogin(isLoginSuccessful === "true");
    }, []);

    const handleLoginSuccessful = (username: string, password: string) => {
        setLogin(true);
        secureLocalStorage.setItem("login-username", username);
        secureLocalStorage.setItem("login-password", password);
    };

    if (!login) {
        return <Login onLoginSuccessful={handleLoginSuccessful} />;
    } else {
        return <AdminPanel />;
    }
};

export default Admin;
