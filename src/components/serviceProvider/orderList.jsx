import "D:/internship-project/src/css/serviceProvider/orderList.css";
import React, { useState } from 'react';
import ServiceViewImage from "D:/internship-project/src/assets/service.png";

export default function NewOrderList({ users }) {
    const initialServices = [
        { service: "Cloth Washing", date: "04 Sep 2019", price: "$120", status: "pending", count: 12, weight: "12 lb" },
        { service: "Cloth Washing", date: "04 Sep 2019", price: "$120", status: "pending", count: 12, weight: "12 lb" },
        { service: "Cloth Washing", date: "04 Sep 2019", price: "$120", status: "pending", count: 12, weight: "12 lb" },
        { service: "Cloth Washing", date: "04 Sep 2019", price: "$120", status: "pending", count: 12, weight: "12 lb" }
    ];

    const [selectedUser, setSelectedUser] = useState(null);
    const [services, setServices] = useState(initialServices);

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

    const handleStatusClick = (index) => {
        const updatedServices = services.map((service, i) => {
            if (i === index) {
                if (service.status === 'pending') {
                    return { ...service, status: 'active' };
                } else if (service.status === 'active') {
                    return { ...service, status: 'completed' };
                }
            }
            return service;
        });
        setServices(updatedServices);
    };

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'status3-completed';
            case 'active':
                return 'status3-active';
            case 'pending':
                return 'status3-pending';
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
                    {/* <span className="user-status-header">Status</span> */}
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
                            {/* <span className={`status3 ${getStatusClass(user.status)}`}>{user.status}</span> */}
                        </li>
                    </div>
                ))}
            </ul>
            {selectedUser && (
                <dialog id="user-dialog" className="user-dialog">
                    <div className="receipt23">
                        <div className="dialog-header21">
                            <h1>Services Details</h1>
                            <span className="close-icon21" onClick={closeDialog}>&times;</span>
                        </div>
                        <br />
                        <table>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service, index) => (
                                    <tr key={index}>
                                        <td className="service-cell">
                                            <img src={ServiceViewImage} alt="Service" className="service-image" />
                                            <div className="service-details">
                                                {service.service}<br />
                                                Count: {service.count}<br />
                                                Weight: {service.weight}
                                            </div>
                                        </td>
                                        <td>{service.date}</td>
                                        <td>{service.price}</td>
                                        <td>
                                            <span
                                                className={`status3 ${getStatusClass(service.status)}`}
                                                onClick={() => handleStatusClick(index)}
                                            >
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="summary">
                            <p>Sub Total: <span>$359.96</span></p>
                            <p>Shipping Charges: <span>$35.99</span></p>
                            <p>Estimated Tax: <span>$45.99</span></p>
                            <h2>Total (CAD): <span>$415.94</span></h2>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
}
