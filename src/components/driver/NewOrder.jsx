import "D:/internship-project/src/css/serviceProvider/orderList.css";
import React, { useState } from 'react';

export default function NewOrder({Orders}) {
    const [orders, setOrders] = useState(Orders);

    const [selectedOrder, setSelectedOrder] = useState(null);

    const openDialog = (order) => {
        setSelectedOrder(order);
        const dialog = document.getElementById('order-dialog');
        if (dialog) {
            dialog.showModal();
        }
    };
    const acceptOrder = () => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order === selectedOrder ? { ...order, status: 'Accepted' } : order
            )
        );
        closeDialog();
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
        <h2>New Order</h2>
        <br/>
        <div className="listcontainer">
            <ul className="users-list">
                <li className="user-item">
                    <span className="user-id-header">Name</span>
                    <span className="user-name-header">Date</span>
                    <span className="user-joined-header">Total Items</span>
                    <span className="user-id-header">Price</span>
                    <span className="user-id-header">Distance</span>

                    <span className="user-status-header">Status</span>
                </li>
                {orders.map((order, index) => (
                    <div key={index} onClick={() => openDialog(order)} className="user-link-style">
                        <li className="user-item">
                            <span className="user-id">{order.Name}</span>
                            <span className="user-name">{order.date}</span>
                            <span className="user-joined">{order.Total_item}</span>
                            <span className="user-id">{order.price}</span>
                            <span className="user-id">{order.Total_item}</span>

                            <span className="user-id" style={{color: order.status === 'Accepted' ? 'green' : 'red'}}>{order.status}</span>
                        </li>
                    </div>
                ))}
            </ul>
            {selectedOrder && (
                <dialog id="order-dialog" className="user-dialog">
                    <div className="receipt2">
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
                      <div className="button-add-close">

                        <button className="close" onClick={closeDialog}>Close</button>
                        <button className="Accept" onClick={acceptOrder}>Accept</button>

                      </div>
                    </div>
                </dialog>
            )}
        </div>
        </>
    );
}
