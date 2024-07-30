import React, { useState } from 'react';
import "D:/internship-project/src/css/driver/profile.css";
import D1 from "D:/internship-project/src/assets/d1.png";
import UserHeader from './userHeader';
import Notification from './notification';

export default function ProfileUser() {
    const [notification, setNotification] = useState({ message: '', type: '', visible: false });

    const [profilePic, setProfilePic] = useState(D1);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePic(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            name,
            country,
            address,
            city,
            province,
            postalCode,
            phoneNumber: contact,
            profileImage: profilePic
        };

        try {
            const response = await fetch('http://localhost:5000/api/users/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log(response)
                setMessage('Profile updated successfully!');
                showNotification('Profile updated successfully', 'success');

            } else {
                const errorData = await response.json();
                console.error('Response error data:', errorData);
                setMessage('Failed to update profile. Please try again.');
                showNotification('Failed to update profile. Please try again.', 'error');

            }
        } catch (error) {
            console.error('Fetch error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };
    const showNotification = (message, type) => {
        setNotification({ message, type, visible: true });
        setTimeout(() => {
            setNotification({ message: '', type: '', visible: false });
        }, 1000);
    };
    return (
        <div style={{backgroundColor:"#EEF9FF"}}>
            <UserHeader/>
            <br/>
            <div className='center-profile-driver'>
                <div className="">
                    <input type="file" id="profile-pic-upload" style={{ display: 'none' }} onChange={handleImageChange} />
                    <img src={profilePic} alt="Profile" className="image-preview20" onClick={() => document.getElementById('profile-pic-upload').click()} />
                </div>
                <form style={{width:"40%"}} onSubmit={handleSubmit}>
                    <div className="form-container">
                        <label htmlFor="Name1">Full Name</label>
                        <input type="text" id="Name1" name="Name" placeholder="John Deo" value={name} onChange={(e) => setName(e.target.value)} required />
                        <label htmlFor="Address">Address</label>
                        <input type="text" id="Address" name="Address" placeholder="1499, pope st" value={address} onChange={(e) => setAddress(e.target.value)} required />
                        <label htmlFor="City">City</label>
                        <input type="text" id="City" name="City" placeholder="Windsor" value={city} onChange={(e) => setCity(e.target.value)} required />
                        <label htmlFor="Province">Province</label>
                        <input type="text" id="Province" name="Province" placeholder="Ontario" value={province} onChange={(e) => setProvince(e.target.value)} required />
                        <label htmlFor="Country">Country</label>
                        <input type="text" id="Country" name="Country" placeholder="Canada" value={country} onChange={(e) => setCountry(e.target.value)} required />
                        <label htmlFor="Postal">Postal Code</label>
                        <input type="text" id="Postal" name="Postal" placeholder="N9J 3R8" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
                        <label htmlFor="Contact">Contact Number</label>
                        <input type="text" id="Contact" name="Contact" placeholder="+1 5199919698" value={contact} onChange={(e) => setContact(e.target.value)} required />
                    </div>
                    <button style={{backgroundColor:"#020066"}} type="submit">Update Profile</button>
                </form>
                <Notification message={notification.message} type={notification.type} visible={notification.visible} />

            </div>
        </div>
    );
}
