import React from 'react';
import "D:/internship-project/src/css/user/serviceView.css";
import logo from "D:/internship-project/src/assets/logoapp.png";

export default function CustomerReviews() {
    const reviews = [
        {
            name: 'St Glk',
            location: 'South Windsor',
            date: '24th September, 2023',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            rating: 4
        },
        {
            name: 'St Glk',
            location: 'South Windsor',
            date: '24th September, 2023',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            rating: 4
        },
        {
            name: 'St Glk',
            location: 'South Windsor',
            date: '24th September, 2023',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            rating: 4
        },
        
        {
            name: 'St Glk',
            location: 'South Windsor',
            date: '24th September, 2023',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            rating: 4
        },
        {
            name: 'St Glk',
            location: 'South Windsor',
            date: '24th September, 2023',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            rating: 4
        },
        // Repeat similar objects for more reviews
    ];

    return (
        <div className="reviews-container">
            <h2>Customer Reviews</h2>
            <div className="reviews-wrapper">
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <div className="review-header">
                            <div className='user-detail'>
                            <img src={logo} alt="User Avatar" className="user-avatar" />
                            <div className="user-info">
                                <h4>{review.name}</h4>
                                <p>{review.location}</p>
                            </div>
                            </div>
                            <div className="review-rating">
                            {'⭐'.repeat(review.rating)}
                            <div className="review-date">
                            <p>{review.date}</p>
                            </div>
                            </div>
                       
                        
                     </div>
                       
                        <p className="review-text">{review.review}</p>
                       
                    </div>
                ))}
            </div>

        </div>
    );
}
