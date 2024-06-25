import React, { useEffect, useState } from 'react';
import "D:/internship-project/src/css/user/serviceProviderDetail.css";
import ServiceImage from "D:/internship-project/src/assets/loginImage.png";
import { useNavigate } from 'react-router-dom';

export default function ExclusiveDeals({ discount }) {
    const [deals, setDeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDeals = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/users/all-service-providers');
                const data = await response.json();
                setDeals(data);
            } catch (error) {
                console.error("Error fetching deals:", error);
            }
        };

        fetchDeals();
    }, []);

    const handleSubmit = (event, id) => {
        event.preventDefault();
        navigate(`/serviceDetailUser`);
    };

    return (
        <div className="scroll-container">
            {deals.map(deal => (
                <div className="card" key={deal._id} onClick={(event) => handleSubmit(event, deal._id)}>
                    {discount === true && <div className="discount">{deal.discount}</div>}
                    <img src={ServiceImage} alt={`Service ${deal._id}`} />
                    <div className="text">
                        <h2>{deal.company_name}</h2>
                        <p>{deal.email}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
