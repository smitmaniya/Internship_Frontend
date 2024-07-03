import React, { useState } from 'react';
import "D:/internship-project/src/css/driver/profile.css";
import D1 from "D:/internship-project/src/assets/d1.png";
import UserHeader from './userHeader';
export default function ProfileUser(){
    const [profilePic, setProfilePic] = useState(D1);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePic(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
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
            <div style={{width:"40%"}}>
                <div className="form-container">
                    <label htmlFor="Name1">Full Name</label>
                    <input type="text" id="Name1" name="Name" placeholder="John Deo" required />
                    <label htmlFor="Address">Address</label>
                    <input type="text" id="Address" name="Address" placeholder="1499, pope st" required />
                    <label htmlFor="Province">Province</label>
                    <input type="text" id="Province" name="Province" placeholder="Ontario" required />
                    <label htmlFor="Country">Country</label>
                    <input type="text" id="Country" name="Country" placeholder="Canada" required />
                    <label htmlFor="Postal">Postal Code</label>
                    <input type="text" id="Postal" name="Postal" placeholder="N9J 3R8" required />
                    <label htmlFor="Contact">Contact Number</label>
                    <input type="text" id="Contact" name="Contact" placeholder="+1 5199919698" required />
                </div>
              
            <button style={{backgroundColor:"#020066"}}>Update Profile</button>
            </div>
        </div>
        </div>
    );
}