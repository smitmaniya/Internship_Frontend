import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Select from "../components/selection";
import logo from "D:/internship-project/src/assets/logoapp.png";
import "../css/login.css"; // Import the CSS file

export default function SignUp() {
    const [name, setName] = useState('');
    const [rolenumber, setRolennumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const options = ['Service Provider', 'User', 'Driver'];

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
        switch(event.target.value) {
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

        const userData = {
            name,
            email,
            password,
            role: rolenumber,
        };

        try {
            const response = await fetch(`http://localhost:5000/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Registered successfully:", data);
                setMessage('Registered successfully!');
                if (selectedRole === 'Service Provider') {
                    navigate('/serviceProvider');
                } else if (selectedRole === 'User') {
                    navigate('/userScreen');
                } else if (selectedRole === 'Driver') {
                    navigate('/driver');
                }
            } else {
                const errorData = await response.json();
                console.error("Failed to register:", errorData.message);
                setMessage(`Failed to register: ${errorData.message}`);
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
                        <img src={logo} alt="Logo"/>
                    </div>
                    <h1>Sign Up</h1>
                    <p>Welcome to Sparkle Drop, sign up to continue</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="name" id="name" name="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="johndoe@abcmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="8 or more characters" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <label htmlFor="role">Role</label>
                        <Select name="role" id="role" value={selectedRole} options={options} onChange={handleRoleChange} />
                        <button type="submit">Sign Up</button>
                        {message && <p className="message">{message}</p>}
                        <p className="signup">Already Registered? <a href="#/login">Login</a></p>
                    </form>
                </div>
            </div>
            <div className="image"></div>
        </div>
    );
}
