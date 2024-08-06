import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId'); // Retrieve the user ID from local storage

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(`/userScreen/${userId}`); // Correctly use the template literal
        }, 3000); // 3 seconds delay

        // Cleanup the timer if the component is unmounted
        return () => clearTimeout(timer);
    }, [navigate, userId]);

    return (
        <div className="thank-you-container">
            <h1>Thank You!</h1>
            <p>Your order has been placed successfully.</p>
        </div>
    );
}
