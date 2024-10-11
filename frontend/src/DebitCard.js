// DebitCardApplication.js
import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

const DebitCard = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        phone: '',
        accountNumber: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log('Form submitted:', formData);
        alert("Your Debit Card application has been submitted successfully!");
    
        // Optionally reset the form data
        setFormData({
            name: '',
            dob: '',
            email: '',
            phone: '',
            accountNumber: '',
            // Add other fields as needed
        });
    };

    return (
        <div className="container">
            <h1>Debit Card Application</h1>
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

                <label htmlFor="account-number">Bank Account Number:</label>
                <input
                    type="text"
                    id="account-number"
                    name="accountNumber" // Adjusted name to follow camelCase
                    value={formData.accountNumber}
                    onChange={handleChange}
                    required
                /><br />

                <button type="submit">Apply for Debit Card</button>
            </form>
        </div>
    );
};

export default DebitCard;
