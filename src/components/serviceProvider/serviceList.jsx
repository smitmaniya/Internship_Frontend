import React, { useState } from 'react';
import "D:/internship-project/src/css/serviceProvider/service.css";
import Header from './header';
import D1 from "D:/internship-project/src/assets/d1.png";


const users = [
    { id: 1, serviceName: 'Clothes', serviceDescription: 'Little Description', serviceType: 'Washing', rating: '⭐⭐⭐⭐', addDate: '01 April 2022', price: '$15 CAD', status: 'Active', profilePic: D1 },
    { id: 2, serviceName: 'Brooklyn Simmons', serviceDescription: 'debbie.baker@example.com', serviceType: 'Washing', rating: '⭐⭐⭐⭐', addDate: '01 April 2022', price: '28 Dec 2022', status: 'Inactive', profilePic: D1 },
    { id: 3, serviceName: 'Talabi Manna', serviceDescription: 'debbie.baker@example.com', serviceType: 'Washing', rating: '⭐⭐⭐⭐', addDate: '11 Jun 2022', price: '28 Dec 2022', status: 'Pending', profilePic:D1 },
    { id: 4, serviceName: 'Devon Lane', serviceDescription: 'debbie.baker@example.com', serviceType: 'Washing', rating: '⭐⭐⭐⭐', addDate: '21 April 2022', price: '28 Dec 2022', status: 'Active', profilePic: D1 },
    // Add more entries as needed
];

const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
        case 'active':
            return 'status-active';
        case 'inactive':
            return 'status-inactive';
        case 'pending':
            return 'status-pending';
        default:
            return '';
    }
};

const ServiceTable = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleRowClick = (user) => {
        setSelectedUser(user);
    };

    const handleCloseDetail = () => {
        setSelectedUser(null);
    };

    return (
        <>
            {!selectedUser ? (
                <>
                    <Header />
                    <br />
                    <div>
                    <h1>Services</h1>
                    </div>
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
                                    <th>Status</th>
                                    <th>Actions</th>
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
                                        <td><span className={`status ${getStatusClass(user.status)}`}>{user.status}</span></td>
                                        <td><span className="actions">⋮</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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
                                    <strong>Status:</strong> <span className={getStatusClass(selectedUser.status)}>{selectedUser.status}</span>
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
                            <br/>
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
