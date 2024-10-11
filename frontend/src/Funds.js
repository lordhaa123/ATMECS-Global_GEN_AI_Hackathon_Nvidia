import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file

const Funds = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        fromAccount: '',
        toAccount: '',
        amount: '',
        transferType: '',
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

    // Handle transfer type change
    const handleTransferTypeChange = (e) => {
        const value = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            transferType: value,
        }));
        setIsScheduled(value === 'scheduled');
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Funds transfer submitted:', formData);
        alert("Your funds transfer request has been submitted successfully!");
        
        // Reset form data
        setFormData({
            fromAccount: '',
            toAccount: '',
            amount: '',
            transferType: '',
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
            <h1>Funds Transfer</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="from-account">From Account Number:</label>
                <input
                    type="text"
                    id="from-account"
                    name="fromAccount"
                    value={formData.fromAccount}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="to-account">To Account Number:</label>
                <input
                    type="text"
                    id="to-account"
                    name="toAccount"
                    value={formData.toAccount}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="amount">Transfer Amount:</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="transfer-type">Transfer Type:</label>
                <select
                    id="transfer-type"
                    name="transferType"
                    value={formData.transferType}
                    onChange={handleTransferTypeChange}
                    required
                >
                    <option value="">Select Transfer Type</option>
                    <option value="immediate">Immediate Transfer</option>
                    <option value="scheduled">Scheduled Transfer</option>
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

                <button type="submit">Transfer Funds</button>
            </form>
        </div>
    );
};

export default Funds;
