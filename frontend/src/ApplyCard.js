import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const ApplyCard = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h1>Apply for a New Card</h1>
            <p>
                Looking to upgrade or apply for a new card? Choose from a range of cards that offer premium rewards, lower interest rates, and exclusive benefits.
            </p>

            <h2>Available Card Options</h2>
            <br />

            <ul>
                <li><strong>Credit Card:</strong> Perfect for everyday purchases, featuring rewards, cashbacks, and balance transfer options.</li>
                <li><strong>Premium Card:</strong> Offers luxurious perks such as airport lounge access, priority services, and high credit limits.</li>
                <li><strong>Travel Card:</strong> Tailored for the frequent traveler, providing no foreign transaction fees and better exchange rates.</li>
            </ul>

            <button onClick={() => navigate('/CreditCard')}>Apply for Credit Card</button>
            <button onClick={() => navigate('/PremiumCard')}>Apply for Premium Card</button>
            <button onClick={() => navigate('/TravelCard')}>Apply for Travel Card</button>
            <button onClick={() => navigate('/')}>Back to Dashboard</button>
        </div>
    );
};

export default ApplyCard;
