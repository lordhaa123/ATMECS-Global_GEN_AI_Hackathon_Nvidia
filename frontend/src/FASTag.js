// FASTagApplication.js
import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

const FASTag = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        name: '',
        dob: '',
        vehicleNumber: '',
        pan: '',
        aadhar: '',
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
        alert("Your FASTag application has been submitted successfully!");
    
        // Optionally reset the form data
        setFormData({
            phone: '',
            email: '',
            name: '',
            dob: '',
            vehicleNumber: '',
            pan: '',
            aadhar: '',
            // Add other fields as needed
        });
    };

    return (
        <div className="container">
            <h1>Apply for FASTag</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="phone">Aadhar linked Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
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

                <label htmlFor="vehicle-number">Vehicle Number:</label>
                <input
                    type="text"
                    id="vehicle-number"
                    name="vehicleNumber" // CamelCase for consistency
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="pan">PAN:</label>
                <input
                    type="text"
                    id="pan"
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="aadhar">12-digit Aadhar Number:</label>
                <input
                    type="text"
                    id="aadhar"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    required
                /><br />

                <button type="submit">Apply for FASTag</button>
            </form>
        </div>
    );
};

export default FASTag;
