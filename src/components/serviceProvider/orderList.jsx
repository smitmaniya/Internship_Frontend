import "D:/internship-project/src/css/serviceProvider/orderList.css";
import React, { useState } from 'react';

export default function NewOrderList({ users }) {
    const [selectedUser, setSelectedUser] = useState(null);

    const openDialog = (user) => {
        setSelectedUser(user);
        const dialog = document.getElementById('user-dialog');
        if (dialog) {
            dialog.showModal();
        }
    };

    const closeDialog = () => {
        setSelectedUser(null);
        const dialog = document.getElementById('user-dialog');
        if (dialog) {
            dialog.close();
        }
    };

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'status-completed';
            case 'active':
                return 'status-active';
            case 'pending':
                return 'status-pending';
            default:
                return '';
        }
    };

    return (
        <div className="listcontainer">
            <ul className="users-list">
                <li className="user-item">
                    <span className="user-id-header">OrderId</span>
                    <span className="user-name-header">Date</span>
                    <span className="user-type-header">Name</span>
                    <span className="user-joined-header">Time</span>
                    <span className="user-id-header">Amount</span>
                    <span className="user-id-header">Address</span>
                    <span className="user-status-header">Status</span>
                </li>
                {users.map(user => (
                    <div key={user.id} onClick={() => openDialog(user)} className="user-link-style">
                        <li className="user-item">
                            <span className="user-id">{user.orderId}</span>
                            <span className="user-name">{user.date}</span>
                            <span className="user-type">{user.name}</span>
                            <span className="user-joined">{user.time}</span>
                            <span className="user-status">{user.amount}</span>
                            <span className="user-id">{user.address}</span>
                            <span className={`status ${getStatusClass(user.status)}`}>{user.status}</span>
                        </li>
                    </div>
                ))}
            </ul>
            {selectedUser && (
                <dialog id="user-dialog" className="user-dialog">
                    <h2>User Information</h2>
                    <p><strong>Order Number:</strong> {selectedUser.id}</p>
                    <p><strong>Name:</strong> {selectedUser.name}</p>
                    <p><strong>Contact Number:</strong> {selectedUser.contact}</p>
                    <p><strong>Ordered Date:</strong> {selectedUser.orderDate}</p>
                    <p><strong>Amount:</strong> {selectedUser.price}</p>
                    <button onClick={closeDialog}>Close</button>
                </dialog>
            )}
        </div>
    );
}
