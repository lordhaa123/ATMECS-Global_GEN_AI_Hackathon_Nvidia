// bank.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './styles.css';

const Bank_HomePg = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>BankX - Your Trusted Financial Partner</h1>
                <p>Explore our wide range of banking and financial services designed just for you!</p>
            </header>

            {/* Cards Section */}
            <section className="card-section">
                <h2>Our Card and Loan Services</h2>
                <div className="cards-container">
                    <Link to="/CreditCard">
                        <div className="card-box">Credit Card</div>
                    </Link>
                    <Link to="/DebitCard">
                        <div className="card-box">Debit Card</div>
                    </Link>
                    <Link to="/PersonaLoan">
                        <div className="card-box">Personal Loan</div>
                    </Link>
                    <Link to="/HomeLoan">
                        <div className="card-box">Home Loan</div>
                    </Link>
                    <Link to="/PremiumCard">
                        <div className="card-box">Premium Card</div>
                    </Link>
                    <Link to="/TravelCard">
                        <div className="card-box">Travel Card</div>
                    </Link>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="service-section">
                <h2>Banking Services</h2>
                <div className="services-container">
                    <Link to="/CheckBenefits">
                        <div className="service-box">Check Your Benefits</div>
                    </Link>
                    <Link to="/LoanEligibility">
                        <div className="service-box">Check Loan Eligibility</div>
                    </Link>
                    <Link to="/ApplyCard">
                        <div className="service-box">Apply for a New Card</div>
                    </Link>
                    <Link to="/FASTag">
                        <div className="service-box">FASTag Services</div>
                    </Link>
                    <Link to="/Funds">
                        <div className="service-box">Funds Transfer</div>
                    </Link>
                    <Link to="/Rewards">
                        <div className="service-box">Rewards and Cashback Offers</div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Bank_HomePg;
