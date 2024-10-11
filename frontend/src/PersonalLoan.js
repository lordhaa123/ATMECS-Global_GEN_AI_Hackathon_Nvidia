import React, { useState } from 'react';
import './styles.css'; // Link to your CSS file

const PersonalLoan = () => {
    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        phone: '',
        loanAmount: '',
        income: '',
        employment: ''
    });

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
        console.log("Form submitted: ", formData);
        alert("Your Personal Loan Application has been submitted successfully!");

        // Optionally reset the form data
        setFormData({
            name: '',
            dob: '',
            email: '',
            phone: '',
            loanAmount: '',
            income: '',
            employment: ''
        });
    };

    return (
        <div className="container">
            <h1>Personal Loan Application</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="dob">Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="loan-amount">Loan Amount:</label>
                <input
                    type="number"
                    id="loan-amount"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="income">Annual Income:</label>
                <input
                    type="number"
                    id="income"
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="employment">Employment Status:</label>
                <select
                    id="employment"
                    name="employment"
                    value={formData.employment}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Employment Status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                </select><br />

                <button type="submit">Apply for Personal Loan</button>
            </form>
        </div>
    );
};

export default PersonalLoan;
