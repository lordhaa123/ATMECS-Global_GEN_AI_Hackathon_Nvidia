import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

const CreditCard = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        phone: '',
        income: '',
        employment: 'employed', // Default employment status
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
        e.preventDefault(); 
        console.log('Form submitted:', formData);
        alert("Your Credit Card application has been submitted successfully!");
    
        setFormData({
            name: '',
            dob: '',
            email: '',
            phone: '',
            income: '',
            employment: 'employed',
        });
    };

    return (
        <div className="container">
            <h1>Credit Card Application</h1>
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
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                </select><br />

                <button type="submit">Apply for Credit Card</button>
            </form>
        </div>
    );
};

export default CreditCard;
