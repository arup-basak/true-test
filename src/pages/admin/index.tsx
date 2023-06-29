import React, { useState, useEffect } from 'react';
import Login from '@/components/pages/Login';
import AdminPanel from '@/components/pages/AdminPanel';

const Admin = () => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLoginRequest = (user: string, pass: string) => {
    if (
      user === String(process.env.NEXT_PUBLIC_ADMIN_USERNAME) &&
      pass === String(process.env.NEXT_PUBLIC_ADMIN_PASSWORD)
    ) {
      localStorage.setItem("login-username", user);
      localStorage.setItem("login-password", pass);
      setLogin(true);
      setLoading(false)
    } else {
      console.log('Invalid username or password');
    }
  };

  useEffect(() => {
    const USERNAME = localStorage.getItem("login-username");
    const PASSWORD = localStorage.getItem("login-password");

    if (USERNAME && PASSWORD) {
      handleLoginRequest(USERNAME, PASSWORD);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!login) {
    return <Login login={handleLoginRequest} />;
  } else {
    return <AdminPanel />;
  }
};

export default Admin;
