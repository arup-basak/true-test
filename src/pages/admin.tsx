import React, { useState, useEffect } from 'react';
import Login from '@/components/page/Login';
import AdminPanel from '@/components/page/AdminPanel';
import secureLocalStorage from "react-secure-storage";
import axios from 'axios';

const Admin = () => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleLoginRequest = async (user: any, pass: any) => {
    try {
      const response = await axios.post('api/admin/login', {
        username: user,
        password: pass
      });

      const jsonData = response.data;
      console.log(jsonData)
      if (jsonData.message === 'success') {
        secureLocalStorage.setItem("login-username", user);
        secureLocalStorage.setItem("login-password", pass);
        setLogin(true);
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
        console.log(error)
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const USERNAME = secureLocalStorage.getItem("login-username");
    const PASSWORD = secureLocalStorage.getItem("login-password");

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
