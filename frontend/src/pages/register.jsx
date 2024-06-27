import React, { useState } from "react";
import "./login.css";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:5555/users", { email, password });
            setLoading(false);

            if (response.status === 200) {
                enqueueSnackbar("User registered successfully", { variant: "success" });
                navigate("/login");
            } else {
                enqueueSnackbar("Registration failed", { variant: "error" });
            }
        } catch (error) {
            setLoading(false);
            enqueueSnackbar("Error during registration: " + (error.response?.data?.message || 'Internal Server Error'), { variant: "error" });
        }
    };
        //setMessage("Registration successful!");
        //navigate('/home'); // Use navigate instead of history.push
        //} catch (error) {
        //setMessage("Registration failed!");
        //}


    return (
        <div className="body">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Email"
                            //autoComplete="off"
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
                            //autoComplete='off'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FaLock className="icon" />
                    </div>
                    <button type="submit">{loading ? "Registering..." : "Register"}</button>
                    <div className="register-link">
                        <p>
                            Already have an account? <a href="/login">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
