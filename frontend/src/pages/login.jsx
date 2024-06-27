import React, { useState } from "react";
import "./login.css";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from 'antd';
import { useSnackbar } from 'notistack';

function Login() {
    
    const { enqueueSnackbar } = useSnackbar();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:5555/users/g", {
                email,
                password
            });
            setLoading(false);
            if (response.status === 200) {
                enqueueSnackbar("Login successful", { variant: "success" });
                navigate('/home');
            } else {
                enqueueSnackbar("Login failed", { variant: "error" });
            }
        } catch (error) {
            setLoading(false);
            enqueueSnackbar("Login failed: " + (error.response?.data?.message || 'Internal Server Error'), { variant: "error" });
        }
    };

    return (
        <div className="body">
            <div className="wrapper">
                <form onClick={handleLogin}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        {/* <a href="#">Forgot Password?</a> */}
                    </div>
                    <button type="submit" loading={loading}>Login</button>
                    <div className="register-link">

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
