import React, { useState } from 'react';
import "D:/internship-project/src/css/driver/bankDetail.css";

export default function BankAccount() {
    const [institutionNumber, setInstitutionNumber] = useState('');
    const [transitNumber, setTransitNumber] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountHolder, setAccountHolder] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            institutionNumber,
            transitNumber,
            accountNumber,
            bankName,
            accountHolder
        };

        try {
            const response = await fetch('http://localhost:5000/api/bank-details/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Bank details added/updated successfully!');
            } else {
                const errorData = await response.json();
                console.error('Response error data:', errorData);
                setMessage('Failed to add/update bank details. Please try again.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="main-bank-container">
            <div className="bank-container">
                <h1>Bank Details</h1>
                <br/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Institution">Institution Number</label>
                    <input type="text" id="Institution" name="Institution" placeholder="029" value={institutionNumber} onChange={(e) => setInstitutionNumber(e.target.value)} required />
                    <label htmlFor="Transit">Transit Number</label>
                    <input type="text" id="Transit" name="Transit" placeholder="eg. 04536" value={transitNumber} onChange={(e) => setTransitNumber(e.target.value)} required />
                    <label htmlFor="Account">Account Number</label>
                    <input type="text" id="Account" name="Account" placeholder="eg. 4567389" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required />
                    <label htmlFor="Bank">Bank Name</label>
                    <input type="text" id="Bank" name="Bank" placeholder="Royal Bank" value={bankName} onChange={(e) => setBankName(e.target.value)} required />
                    <label htmlFor="Holder">Account Holder</label>
                    <input type="text" id="Holder" name="Holder" placeholder="John Deo" value={accountHolder} onChange={(e) => setAccountHolder(e.target.value)} required />
                    <button type="submit">Add / Edit</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}
