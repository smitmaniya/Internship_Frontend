import "D:/internship-project/src/css/login.css"
import logo from "D:/internship-project/src/assets/logoapp.png"
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Select from "../components/selection";

export default function SignUp() {
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();
    const options = ['Service Provider', 'User', 'Driver'];

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedRole === 'Service Provider') {
            navigate('/serviceProvider');
        }else if (selectedRole === 'User') {
            navigate('/userScreen');
        }else if (selectedRole === 'Driver') {
            navigate('/driver');
        }
         else {
            console.log("Registered as:", selectedRole);
        }
    };
    return (

        <div class="container">
        <div class="login-form">
            <div className="inside-login">
            <div class="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <h1>Login</h1>
            <p>Welcome to Sparkle Drop login to continue</p>
            <form action="/">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="johndoe@abcmail.com" required/>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="8 or more characters" required/>
                <label for="role">Role</label>

                <Select name="role" id="role" value={selectedRole} options={options} onChange={handleRoleChange} />

                <button type="submit" onClick={handleSubmit}>Sign Up</button>
            
                <p class="signup">Already Registered? <a href="/">Login</a></p>
                
            </form>
            </div>
        </div>
        <div class="image">
        </div>
    </div>

    )
}