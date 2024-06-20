import React from 'react';
import "D:/internship-project/src/css/user/serviceProviderDetail.css";
import ServiceImage from "D:/internship-project/src/assets/loginImage.png";
import { useNavigate } from 'react-router-dom';
export default function ExclusiveDeals({discount}) {
    const deals = [
        { id: 1, discount: "-40%", imgSrc: ServiceImage, title: "Service Name", description: "Service Type" },
        { id: 2, discount: "-20%", imgSrc: ServiceImage, title: "Lorem ipsum", description: "Lorem ipsum" },
        { id: 3, discount: "-17%", imgSrc: ServiceImage, title: "Lorem ipsum", description: "Lorem ipsum" },
        { id: 4, discount: "-17%", imgSrc: ServiceImage, title: "Lorem ipsum", description: "Lorem ipsum" },
        { id: 5, discount: "-17%", imgSrc: ServiceImage, title: "Lorem ipsum", description: "Lorem ipsum" },
        { id: 6, discount: "-17%", imgSrc: ServiceImage, title: "Lorem ipsum", description: "Lorem ipsum" },
        { id: 7, discount: "-17%", imgSrc: ServiceImage, title: "Lorem ipsum", description: "Lorem ipsum" },
        { id: 8, discount: "-17%", imgSrc: ServiceImage, title: "Lorem ipsum", description: "Lorem ipsum" },
    ];
const navigate = useNavigate();
const handleSubmit = (event) => {
    event.preventDefault();
  navigate('/serviceDetailUser')
};
    return (
        <div className="scroll-container">
            {deals.map(deal => (
                <div className="card" key={deal.id} onClick={handleSubmit}>
                  { discount===true && <div className="discount">{deal.discount}</div>}
                    <img src={deal.imgSrc} alt={`Laundry Service ${deal.id}`} />
                    <div className="text">
                        <h2>{deal.title}</h2>
                        <p>{deal.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
