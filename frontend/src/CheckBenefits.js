// CheckBenefits.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './styles.css'; // Import your CSS file

const CheckBenefits = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="container">
            <h1>Check Your Benefits</h1>
            <p>
                As a valued customer, you can unlock exclusive benefits that come with your card. Whether you own a Credit Card, Debit Card, or Premium Card, your financial products are tailored to offer maximum advantages.
            </p>
            
            <h2>Benefits by Card Type</h2>
            <br />
            <ul>
                <li><strong>Credit Card:</strong> Enjoy cashback on daily purchases, zero annual fees for the first year, complimentary airport lounge access, and special travel insurance.</li>
                <li><strong>Debit Card:</strong> Instant access to your funds, no monthly maintenance fees, and zero liability for unauthorized transactions.</li>
                <li><strong>Premium Card:</strong> Access to exclusive events, concierge services, higher credit limits, and extended warranties on purchases.</li>
                <li><strong>Travel Card:</strong> Foreign currency loaded at competitive exchange rates, no foreign transaction fees, and global ATM access.</li>
            </ul>

            <button onClick={() => navigate('/')}>Back to Dashboard</button>
        </div>
    );
};

export default CheckBenefits;