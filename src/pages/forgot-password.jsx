import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import logo from "D:/internship-project/src/assets/logoapp.png";
import "../css/login.css"; // Import the CSS file

export default function ForgotPassword() {
    // const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email) {
            setMessage('Please enter your email address.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/users/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Password reset email sent:", data);
                setMessage('Password reset email sent!');
                // Optionally navigate to another page or show additional instructions
            } else {
                const errorData = await response.json();
                console.error("Failed to send password reset email:", errorData.message);
                setMessage(`Failed to send password reset email: ${errorData.message}`);
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
                    <h1>Forgot Password</h1>
                    <p>Enter your email to receive password reset instructions</p>
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
                        <button type="submit">Submit</button>
                        {message && <p className="message">{message}</p>}
                        <br/> 
                        <p className="login">Remembered your password? <a href="/#/login">Login</a></p>
                    </form>
                </div>
            </div>
            <div className="image"></div>
        </div>
    );
}
