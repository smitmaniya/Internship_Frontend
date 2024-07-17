import React, { useState } from 'react';
import "D:/internship-project/src/css/driver/profile.css";
import D1 from "D:/internship-project/src/assets/d1.png";

// Adjust the path as necessary

export default function ServiceProfileInfo() {
    const [profilePic, setProfilePic] = useState(D1);
    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState('');
    const [licenseImage, setLicenseImage] = useState(null);
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

    const handleLicenseImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setLicenseImage(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            company_name: companyName,
            address,
            city,
            province,
            postalCode,
            cnumber: contact,
            description,
            email,
            service_name: ["Service1", "Service2"],
            price: 5
        };

        try {
            const response = await fetch('http://localhost:5000/api/service-providers/profile-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Profile updated and service added successfully!');
            } else {
                const errorData = await response.json();
                console.error('Response error data:', errorData);
                setMessage('Failed to update profile. Please try again.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className='center-profile-driver'>
            <div>
                <input type="file" id="profile-pic-upload" style={{ display: 'none' }} onChange={handleImageChange} />
                <img src={profilePic} alt="Profile" className="image-preview20" onClick={() => document.getElementById('profile-pic-upload').click()} />
            </div>
            <form className="main-profile-container" onSubmit={handleSubmit}>
                <div className="form-container">
                    <label htmlFor="Name1">Company Name</label>
                    <input type="text" id="Name1" name="Name" placeholder="John Deo" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
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
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="smit@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-container">
                    <label htmlFor="Contact">Contact Number</label>
                    <input type="number" id="Contact" name="Contact" placeholder="5199919698" value={contact} onChange={(e) => setContact(e.target.value)} required />
                    <label htmlFor="Description">Description</label>
                    <input type="text" id="Description" name="Description" placeholder="About your company" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    <label htmlFor="license-upload">Business License</label>
                    <input type="file" id="license-upload" accept="image/*" onChange={handleLicenseImageChange} style={{ display: 'block', marginBottom: '10px' }} />
                    {licenseImage && (
                        <>
                            <div>
                                <img src={licenseImage} alt="Driving License Preview" style={{ width: '95%', height: 'auto' }} />
                            </div>
                            <br />
                        </>
                    )}
                </div>
                <button style={{ backgroundColor: "#020066" }} type="submit">Update Profile and Add Service</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
