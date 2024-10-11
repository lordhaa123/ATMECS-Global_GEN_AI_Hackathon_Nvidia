import React from 'react';
import './styles.css'; // Ensure your styles are linked properly
import { useNavigate } from 'react-router-dom';

const Rewards = () => {
    const handleBackClick = () => {
        window.location.href = 'bank.html'; // Redirect to the bank dashboard
    };

    const navigate = useNavigate(); 

    return (
        <div className="container">
            <h1>Rewards and Cashback Offers</h1>
            <p>Maximize your spending by taking advantage of our rewards and cashback programs. Whether you are shopping, traveling, or dining out, enjoy exclusive deals and earn rewards points with every purchase.</p>

            <h2>Current Offers</h2>
            <br />
            <ul>
                <li><strong>5% Cashback:</strong> On dining and entertainment purchases using your Premium Card.</li>
                <li><strong>10x Reward Points:</strong> On online shopping with your Credit Card. Redeem points for flights, hotel stays, or gift cards.</li>
                <li><strong>2% Cashback:</strong> On fuel purchases with your Travel Card.</li>
                <li><strong>Bonus Points:</strong> Earn 1,000 bonus points on your first transaction within 30 days of card activation.</li>
            </ul>

            <button onClick={() => navigate('/')}>Back to Dashboard</button>
        </div>
    );
};

export default Rewards;
