import React from 'react';
import { useState } from 'react';
import "D:/internship-project/src/css/user/serviceView.css";
import ServiceViewImage from "D:/internship-project/src/assets/service.png";
import Plus from "D:/internship-project/src/assets/plus.png";

export default function ServiceView() {
    const [quantities, setQuantities] = useState(Array(7).fill(1)); // Assuming 7 deals
    const handlePlusClick = (index) => {

        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };
    const deals = [
        { id: 1, discount: "$10", imgSrc: ServiceViewImage, title: "Service Name", description: "Service Type" },
        { id: 1, discount: "$10", imgSrc: ServiceViewImage, title: "Service Name", description: "Service Type" },
        { id: 1, discount: "$10", imgSrc: ServiceViewImage, title: "Service Name", description: "Service Type" },
        { id: 1, discount: "$10", imgSrc: ServiceViewImage, title: "Service Name", description: "Service Type" },
        { id: 1, discount: "$10", imgSrc: ServiceViewImage, title: "Service Name", description: "Service Type" },
        { id: 1, discount: "$10", imgSrc: ServiceViewImage, title: "Service Name", description: "Service Type" },
        { id: 1, discount: "$10", imgSrc: ServiceViewImage, title: "Service Name", description: "Service Type" },


    ];

    return (
        <div >
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
                            {quantities ===! 0 && <h1>{quantities}</h1>}
                            <img className='service-card-plus' src={Plus} alt={`Laundry Service ${deal.id}`} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
