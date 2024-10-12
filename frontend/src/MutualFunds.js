import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file

const MutualFunds = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        investorName: '',
        investorID: '',
        fundType: '',
        amount: '',
        investmentType: '',
        scheduleDate: '',
        scheduleTime: '',
        description: '',
    });

    const [isScheduled, setIsScheduled] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle investment type change
    const handleInvestmentTypeChange = (e) => {
        const value = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            investmentType: value,
        }));
        setIsScheduled(value === 'scheduled');
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Mutual funds investment submitted:', formData);
        alert("Your mutual funds investment request has been submitted successfully!");

        // Reset form data
        setFormData({
            investorName: '',
            investorID: '',
            fundType: '',
            amount: '',
            investmentType: '',
            scheduleDate: '',
            scheduleTime: '',
            description: '',
        });
    };

    // Set minimum date for the date input to today
    const setMinDate = () => {
        const today = new Date();
        const minDate = today.toISOString().split('T')[0];
        return minDate;
    };

    // Set minimum time based on the selected date
    const setMinTime = () => {
        const scheduleDate = formData.scheduleDate;
        const today = new Date();
        const selectedDate = new Date(scheduleDate);
        const timeInput = document.getElementById('schedule-time');

        if (selectedDate.toDateString() === today.toDateString()) {
            const hh = String(today.getHours()).padStart(2, '0');
            const mm = String(today.getMinutes()).padStart(2, '0');
            timeInput.setAttribute('min', `${hh}:${mm}`);
        } else {
            timeInput.removeAttribute('min'); // Allow all times for future dates
        }
    };

    useEffect(() => {
        if (isScheduled) {
            setMinTime(); // Update min time whenever schedule option is selected
        }
    }, [formData.scheduleDate, isScheduled]);

    return (
        <div className="container">
            <h1>Mutual Funds Investment</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="investor-name">Investor Name:</label>
                <input
                    type="text"
                    id="investor-name"
                    name="investorName"
                    value={formData.investorName}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="investor-id">Investor ID (PAN or Aadhar):</label>
                <input
                    type="text"
                    id="investor-id"
                    name="investorID"
                    value={formData.investorID}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="fund-type">Mutual Fund Type:</label>
                <select
                    id="fund-type"
                    name="fundType"
                    value={formData.fundType}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Fund Type</option>
                    <option value="equity">Equity Fund</option>
                    <option value="debt">Debt Fund</option>
                    <option value="hybrid">Hybrid Fund</option>
                    <option value="index">Index Fund</option>
                </select><br />

                <label htmlFor="amount">Investment Amount:</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="investment-type">Investment Type:</label>
                <select
                    id="investment-type"
                    name="investmentType"
                    value={formData.investmentType}
                    onChange={handleInvestmentTypeChange}
                    required
                >
                    <option value="">Select Investment Type</option>
                    <option value="lumpsum">Lump Sum Investment</option>
                    <option value="sip">Systematic Investment Plan (SIP)</option>
                    <option value="scheduled">Scheduled Investment</option>
                </select><br />

                {/* Schedule options */}
                {isScheduled && (
                    <div id="schedule-options" className="schedule-options">
                        <label htmlFor="schedule-date">Schedule Date:</label>
                        <input
                            type="date"
                            id="schedule-date"
                            name="scheduleDate"
                            value={formData.scheduleDate}
                            onChange={handleChange}
                            required
                            min={setMinDate()}
                        /><br />

                        <label htmlFor="schedule-time">Schedule Time:</label>
                        <input
                            type="time"
                            id="schedule-time"
                            name="scheduleTime"
                            value={formData.scheduleTime}
                            onChange={handleChange}
                            required
                        /><br />
                    </div>
                )}

                <label htmlFor="description">Description (optional):</label>
                <textarea
                    id="description"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea><br />
                <br />

                <button type="submit">Submit Investment</button>
            </form>
        </div>
    );
};

export default MutualFunds;