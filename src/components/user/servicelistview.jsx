import React, { useState, useRef, useEffect } from 'react';
import "D:/internship-project/src/css/user/serviceView.css";
import "D:/internship-project/src/css/user/serviceAddcart.css";
import ServiceViewImage from "D:/internship-project/src/assets/service.png";
import Plus from "D:/internship-project/src/assets/plus.png";
import Notification from './notification';

export default function ServiceView({ serviceProviderId }) {
    const [deals, setDeals] = useState([]);
    const [message, setMessage] = useState('');
    const [quantities, setQuantities] = useState([]);
    const [selectedDeal, setSelectedDeal] = useState(null);
    const [specialInstruction, setSpecialInstruction] = useState('');
    const [notification, setNotification] = useState({ message: '', type: '', visible: false });

    const dialogRef = useRef(null);
    const userId = localStorage.getItem('userId'); // Retrieve the user ID from local storage

    useEffect(() => {
        const fetchDeals = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/service-providers/alllist', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "serviceProviderId": serviceProviderId
                    })
                });
                const data = await response.json();
                setDeals(data); // Assuming data is an array of deals
                setQuantities(Array(data.length).fill(1)); // Initialize quantities based on fetched data length

                if (data.length === 0) {
                    setMessage("No services available.");
                } else {
                    setMessage('');
                }
            } catch (error) {
                console.error("Error fetching deals:", error);
                setMessage("Error fetching services. Please try again later."); // Display an error message if fetch fails
            }
        };

        fetchDeals();
    }, [serviceProviderId]);
    console.log(message)

    const handlePlusClick = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
        setSelectedDeal(deals[index]); // Set the selected deal
        dialogRef.current.showModal(); // Open dialog on plus click
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };
    const showNotification = (message, type) => {
        setNotification({ message, type, visible: true });
        setTimeout(() => {
            setNotification({ message: '', type: '', visible: false });
        }, 1000);
    };
    const handleAddToOrder = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId,
                    services: [
                        {
                            serviceId: selectedDeal._id,
                            quantity: 1,
                        }
                    ]
                })
            });

         
            if (response.ok) {
                showNotification('Service added to cart successfully!', 'success');
            } else {
                showNotification('Failed to add service to cart.', 'error');
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
            showNotification('Error adding service to cart. Please try again later.', 'error');
        }
        closeDialog();
    };

    return (
        <div>
            <h1 style={{ marginLeft: "20px" }}>Available Services</h1>
            <div className="service-container">
                {deals.map((deal, index) => (
                    <div key={deal._id} className="service-card">
                        <div className="details">
                            <h2>{deal.name}</h2>
                            <p>{deal.type}</p>
                            <p>{deal.description}</p>
                            <h3>${deal.price}</h3>
                        </div>
                        <img className='service-card-img' src={ServiceViewImage} alt={`Laundry Service ${deal._id}`} />
                        <button className='service-card-plus' onClick={() => handlePlusClick(index)}>
                            {quantities[index] !== 0 && <h1>{quantities[index]}</h1>}
                            <img className='service-card-plus' src={Plus} alt={`Laundry Service ${deal._id}`} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Dialog Box */}
            <dialog ref={dialogRef} className="dialog-box-add">
                {selectedDeal && (
                    <div className="body-add">
                        <div className="container-add">
                            <div className="product-image-add">
                                <img src={ServiceViewImage} alt="Product" />
                            </div>
                            <div className="product-details-add">
                                <div className="dialog-header21">
                                    <h1>{selectedDeal.name}</h1>
                                    <span className="close-icon21" onClick={closeDialog}>&times;</span>
                                </div>
                                <p className="price-add">${selectedDeal.price}</p>
                                <p className="description-add">
                                    {selectedDeal.description}
                                </p>
                                <div className="special-instruction-add">
                                    <label htmlFor="instruction">Special Instruction</label>
                                    <input
                                        type="text"
                                        id="instruction"
                                        placeholder="Special Instruction"
                                        value={specialInstruction}
                                        onChange={(e) => setSpecialInstruction(e.target.value)}
                                    />
                                </div>
                                <button className="add-to-order-add" onClick={handleAddToOrder}>Add to Order</button>
                            </div>
                        </div>
                    </div>
                )}
            </dialog>
            <Notification message={notification.message} type={notification.type} visible={notification.visible} />

        </div>
    );
}
