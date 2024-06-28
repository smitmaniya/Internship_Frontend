import React, { useState } from 'react';
import "D:/internship-project/src/css/serviceProvider/service.css";
import Header from './header';
import D1 from "D:/internship-project/src/assets/d1.png";

const users = [
    { id: 1, serviceName: 'Clothes', serviceDescription: 'Little Description', serviceType: 'Washing', rating: '⭐⭐⭐⭐', addDate: '01 April 2022', price: '$15 CAD', status: 'Active', profilePic: D1 },
    { id: 2, serviceName: 'Brooklyn Simmons', serviceDescription: 'debbie.baker@example.com', serviceType: 'Washing', rating: '⭐⭐⭐⭐', addDate: '01 April 2022', price: '28 Dec 2022', status: 'Inactive', profilePic: D1 },
    { id: 3, serviceName: 'Talabi Manna', serviceDescription: 'debbie.baker@example.com', serviceType: 'Washing', rating: '⭐⭐⭐⭐', addDate: '11 Jun 2022', price: '28 Dec 2022', status: 'Pending', profilePic: D1 },
    { id: 4, serviceName: 'Devon Lane', serviceDescription: 'debbie.baker@example.com', serviceType: 'Washing', rating: '⭐⭐⭐⭐', addDate: '21 April 2022', price: '28 Dec 2022', status: 'Active', profilePic: D1 },
    // Add more entries as needed
];

const ServiceTable = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [profilePic, setProfilePic] = useState(D1);

    const handleRowClick = (user) => {
        setSelectedUser(user);
    };

    const handleCloseDetail = () => {
        setSelectedUser(null);
    };

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

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
        <>
            {!selectedUser ? (
                <>
                    <Header />
                    <br />
                    <div className='headerdiv'>
                        <h1 className='h1tag'>Services</h1>
                        <button className='addservice-btn' onClick={openDialog}>Add Service</button>
                    </div>
                    <br />
                    <br />
                    <div className="table-container">
                        <table className="service-table">
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Service Name</th>
                                    <th>Service Type</th>
                                    <th>Rating</th>
                                    <th>Add Date</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.id} onClick={() => handleRowClick(user)}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="service-name">
                                                <div className="service-details">
                                                    <span>{user.serviceName}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{user.serviceType}</td>
                                        <td><span className="rating">{user.rating}</span></td>
                                        <td>{user.addDate}</td>
                                        <td>{user.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <dialog id="order-dialog" className="add-service-dialog-provider" open={dialogOpen}>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
  <span style={{ fontSize: "30px", paddingRight: "20px"}} className="" onClick={closeDialog}>&times;</span>
</div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="profile-pic-container-service-addd">
                                <input type="file" id="profile-pic-upload" style={{ display: 'none' }} onChange={handleImageChange} />
                                <img src={profilePic} alt="Profile" className="profile-pic-service-addd" onClick={() => document.getElementById('profile-pic-upload').click()} />
                            </div>
                            <label htmlFor="Name">Service Name</label>
                            <input type="text" id="Institution" name="Institution" placeholder="Clothes, Jacket, Bedsheet" required />
                            <label htmlFor="Type">Service Type</label>
                            <input type="text" id="type" name="type" placeholder="Washing, Drying, Iron" required />
                            <label htmlFor="Description">Description</label>
                            <input type="text" id="description" name="description" placeholder="Add Description" required />
                            <label htmlFor="Price">Price</label>
                            <input type="text" id="price" name="price" placeholder="$ 0" required />
                           
                            <button type="submit">Add / Edit </button>
                        </form>
                    </dialog>
                </>
            ) : (
                <div className="service-detail">
                    <div className="detail-header">
                        <h2>{selectedUser.serviceName} {selectedUser.serviceType}</h2>
                        <button onClick={handleCloseDetail} className="close-detail">Remove Service</button>
                    </div>
                    <div className="detail-body">
                        <div className="profile-section">
                            <img src={selectedUser.profilePic} alt="Profile" className="profile-pic-large" />
                            <div className="profile-info">
                                <div className="detail-section">
                                    <strong>Service ID:</strong> {selectedUser.id}
                                </div>
                                <div className="detail-section">
                                    <strong>Rating:</strong> {selectedUser.rating}
                                </div>
                                <div className="detail-section">
                                    <strong>Launch date:</strong> {selectedUser.addDate}
                                </div>
                            </div>
                        </div>
                        <div className="detail-description">
                            <h3>Service Description</h3>
                            <p>{selectedUser.serviceDescription}</p>
                        </div>
                        <div className="detail-reviews">
                            <h3>Reviews</h3>
                            <br />
                            <div className="review">
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.</p>
                                <span className="review-time">6:38 pm</span>
                            </div>
                            <div className="review">
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.</p>
                                <span className="review-time">6:38 pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServiceTable;
