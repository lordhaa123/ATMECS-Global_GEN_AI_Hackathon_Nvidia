import React, { useState } from 'react';
import './styles.css'; // Ensure your styles are linked properly

const TravelCard = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        phone: '',
        passport: '',
        travelFrequency: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Your Travel Card Application has been submitted successfully!");

        // Optionally reset the form data
        setFormData({
            name: '',
            dob: '',
            email: '',
            phone: '',
            passport: '',
            travelFrequency: ''
        });
    };

    return (
        <div className="container">
            <h1>Travel Card Application</h1>
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

                <label htmlFor="passport">Passport Number:</label>
                <input
                    type="text"
                    id="passport"
                    name="passport"
                    value={formData.passport}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="travel-frequency">Frequency of Travel:</label>
                <select
                    id="travel-frequency"
                    name="travelFrequency"
                    value={formData.travelFrequency}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Frequency</option>
                    <option value="frequent">Frequent Traveler</option>
                    <option value="occasional">Occasional Traveler</option>
                </select><br />

                <button type="submit">Apply for Travel Card</button>
            </form>
        </div>
    );
};

export default TravelCard;
