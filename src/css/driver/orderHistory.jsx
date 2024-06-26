import "D:/internship-project/src/css/serviceProvider/orderList.css";
import React, { useState } from 'react';

export default function OrderCompleted({Orders}) {
    
    const [selectedOrder, setSelectedOrder] = useState(null);

    const openDialog = (order) => {
        setSelectedOrder(order);
        const dialog = document.getElementById('order-dialog');
        if (dialog) {
            dialog.showModal();
        }
    };

    const closeDialog = () => {
        setSelectedOrder(null);
        const dialog = document.getElementById('order-dialog');
        if (dialog) {
            dialog.close();
        }
    };

    return (
        <>
        <h1>Order History</h1>
        <br/>
        <div className="listcontainer">
            <ul className="users-list">
                <li className="user-item">
                    <span className="user-id-header">Name</span>
                    <span className="user-name-header">Date</span>
                    <span className="user-joined-header">Total Items</span>
                    <span className="user-id-header">Price</span>
                    <span className="user-id-header">Accept Time</span>

                    <span className="user-id-header">Completed time</span>

                    <span className="user-status-header">Status</span>
                </li>
                {Orders.map((order, index) => (
                    <div key={index} onClick={() => openDialog(order)} className="user-link-style">
                        <li className="user-item">
                            <span className="user-id">{order.Name}</span>
                            <span className="user-name">{order.date}</span>
                            <span className="user-joined">{order.Total_item}</span>
                            <span className="user-status">{order.price}</span>
                            <span className="user-status">{order.Accept_time}</span>

                            <span className="user-status">{order.Completed_time}</span>

                            <span className="user-id" style={{color:"green"}}>{order.status}</span>
                        </li>
                    </div>
                ))}
            </ul>
            {selectedOrder && (
                <dialog id="order-dialog" className="user-dialog">
                    <div className="receipt">
                        <div className="header">
                            <h1>Address Detail</h1>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Address</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                   
                                    <td>{selectedOrder.Address}</td>
                                </tr>
                            </tbody>
                        </table>
                      
                        <button onClick={closeDialog}>Close</button>
                    </div>
                </dialog>
            )}
        </div>
        </>
    );
}
