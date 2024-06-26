import React, { useState, useRef } from 'react';
import "D:/internship-project/src/css/user/serviceView.css";
import "D:/internship-project/src/css/user/serviceAddcart.css";

import ServiceViewImage from "D:/internship-project/src/assets/service.png";
import Plus from "D:/internship-project/src/assets/plus.png";

export default function ServiceView() {
    const [quantities, setQuantities] = useState(Array(7).fill(1)); // Assuming 7 deals
    const dialogRef = useRef(null);

    const handlePlusClick = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
        dialogRef.current.showModal(); // Open dialog on plus click
    };

    const deals = [
        { id: 1, discount: "$10", imgSrc: ServiceViewImage, title: "Service Name", description: "Service Type" },
        { id: 2, discount: "$20", imgSrc: ServiceViewImage, title: "Service Name 2", description: "Service Type 2" },
        // Add the rest of the deals here
    ];

    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <div>
            <h1 style={{ marginLeft: "20px" }}>Available Services</h1>
            <div className="service-container">
                {deals.map((deal, index) => (
                    <div className="service-card" key={deal.id}>
                        <div className="details">
                            <h2>{deal.title}</h2>
                            <p>{deal.description}</p>
                            <h3>{deal.discount}</h3>
                        </div>
                        <img className='service-card-img' src={deal.imgSrc} alt={`Laundry Service ${deal.id}`} />
                        <button className='service-card-plus' onClick={() => handlePlusClick(index)}>
                            {quantities[index] !== 0 && <h1>{quantities[index]}</h1>}
                            <img className='service-card-plus' src={Plus} alt={`Laundry Service ${deal.id}`} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Dialog Box */}
            <dialog ref={dialogRef} className="dialog-box-add">
                <div className="body-add">
                    <div className="container-add">
                        <div className="product-image-add">
                            <img src={ServiceViewImage} alt="Product" />
                        </div>
                        <div className="product-details-add">
                            <h1>Lorem Ipsum</h1>
                            <p className="price-add">$19.99</p>
                            <p className="description-add">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum mauris metus, eget venenatis dolor dictum a. Etiam pharetra tortor et sapien condimentum imperdiet. Pellentesque cursus efficitur accumsan.
                            </p>
                            <div className="special-instruction-add">
                                <label htmlFor="instruction">Special Instruction</label>
                                <input type="text" id="instruction" placeholder="Special Instruction" />
                            </div>
                            <button className="add-to-order-add" onClick={closeDialog}>Add 1 to Order</button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

// Ensure the following CSS is included in your CSS file (e.g., serviceView.css)
/*
.body-add {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
    margin: 0;
}

.dialog-box-add {
*/