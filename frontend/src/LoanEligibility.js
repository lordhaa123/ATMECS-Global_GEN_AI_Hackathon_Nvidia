import React, { useState } from 'react';
import './styles.css'; // Link to your CSS file
import { useNavigate } from 'react-router-dom';

const LoanEligibility = () => {
    // State for form data and loan suggestions
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        fullName: '',
        employmentStatus: '',
        annualIncome: '',
        creditScore: '',
        ownProperty: ''
    });
    const [loanOptions, setLoanOptions] = useState([]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        suggestLoans(); // Call the function to suggest loans
    };

    // Function to suggest loans based on input data
    const suggestLoans = () => {
        const { employmentStatus, annualIncome, creditScore, ownProperty } = formData;
        const loans = [];

        // Determine loan eligibility
        if (creditScore === 'excellent' || creditScore === 'good') {
            loans.push('Personal Loan');
        }
        if ((employmentStatus === 'employed' || employmentStatus === 'self-employed') && annualIncome > 30000 && ownProperty === 'yes') {
            loans.push('Home Loan');
        }
        if (employmentStatus === 'self-employed') {
            loans.push('Business Loan');
        }
        if (loans.length === 0) {
            loans.push('Unfortunately, no loans are available based on the provided information.');
        }
        setLoanOptions(loans);
    };

    return (
        <div className="container">
            <h1>Check Loan Eligibility</h1>
            <p>
                Our loan eligibility checker helps you determine if you qualify for a loan. Provide the following details to get an instant estimate.
            </p>
            <h2>Personal Information</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="full-name">Full Name:</label>
                <input
                    type="text"
                    id="full-name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="employment-status">Employment Status:</label>
                <select
                    id="employment-status"
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Employment Status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                </select><br />

                <label htmlFor="annual-income">Annual Income:</label>
                <input
                    type="number"
                    id="annual-income"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="credit-score">Credit Score Range:</label>
                <select
                    id="credit-score"
                    name="creditScore"
                    value={formData.creditScore}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Credit Score Range</option>
                    <option value="excellent">Excellent (750+)</option>
                    <option value="good">Good (700-749)</option>
                    <option value="fair">Fair (650-699)</option>
                    <option value="poor">Poor (Below 650)</option>
                </select><br />

                <label htmlFor="own-property">Do you own property?</label>
                <select
                    id="own-property"
                    name="ownProperty"
                    value={formData.ownProperty}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select><br />

                <button type="submit">See Available Loans</button>
            </form>

            {loanOptions.length > 0 && (
                <div id="loan-options">
                    <h2>Loan Types You Can Apply For:</h2>
                    <ul>
                        {loanOptions.map((loan, index) => (
                            <li key={index}>{loan}</li>
                        ))}
                    </ul>
                </div>
            )}

            <br />
            <button onClick={() => navigate('/')}>Back to Dashboard</button>
        </div>
    );
};

export default LoanEligibility;
