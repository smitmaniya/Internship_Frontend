import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Select from "../components/selection";
import logo from "D:/internship-project/src/assets/logoapp.png";
import "../css/login.css"; // Import the CSS file

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rolenumber, setRolennumber] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [message, setMessage] = useState('');
    const options = ['Service Provider', 'User', 'Driver'];

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
        switch (event.target.value) {
            case 'Service Provider':
                setRolennumber('2');
                break;
            case 'User':
                setRolennumber('0');
                break;
            case 'Driver':
                setRolennumber('1');
                break;
            default:
                setRolennumber('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !password || !rolenumber) {
            setMessage('Please fill in all fields.');
            return;
        }

        const loginData = {
            email,
            password,
            role: rolenumber,
        };

        if (!options.includes(selectedRole)) {
            setMessage('Please select a valid role.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Logged in successfully:", data);
                setMessage('Logged in successfully!');
                // Handle successful login, e.g., store user info, navigate to a different page, etc.
                // navigate to the appropriate page based on the role
                if (selectedRole === 'Service Provider') {
                    navigate('/serviceProvider');
                } else if (selectedRole === 'User') {
                    navigate('/userScreen');
                } else if (selectedRole === 'Driver') {
                    navigate('/driver');
                }
            } else {
                const errorData = await response.json();
                console.error("Failed to log in:", errorData.message);
                setMessage(`Failed to log in: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="login-form">
                <div className="inside-login">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <h1>Login</h1>
                    <p>Welcome to Sparkle Drop login to continue</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="johndoe@abcmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="role">Role</label>
                        <Select
                            name="role"
                            id="role"
                            value={selectedRole}
                            options={options}
                            onChange={handleRoleChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="8 or more characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <a href="/#/forgot-password" className="forgot-password">Forgot password?</a>
                        <br /><br /><br />
                        <button type="submit">Login</button>
                        {message && <p className="message">{message}</p>}
                        <p className="signup">New to Sparkle Drop? <a href="/#/userScreen">Sign up</a></p>
                    </form>
                </div>
            </div>
            <div className="image"></div>
        </div>
    );
}
