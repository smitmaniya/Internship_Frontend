import React from 'react';
import "D:/internship-project/src/css/user/serviceView.css";
import ServiceViewImage from "D:/internship-project/src/assets/service.png";

export default function ServiceView() {
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
        <div className="service-container">
            {deals.map(deal => (
                <div className="service-card" key={deal.id}>
                    <div className="details">
                        <h2>{deal.title}</h2>
                        <p>{deal.description}</p>
                        <h3>{deal.discount}</h3>
                    </div>
                    <img src={deal.imgSrc} alt={`Laundry Service ${deal.id}`} />
                </div>
            ))}
        </div>
    );
}
