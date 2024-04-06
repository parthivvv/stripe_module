// src/components/PaymentForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/PaymentForm.css'; 

const PaymentForm = () => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState(''); // State to store the error message

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear existing errors

        try {
            const response = await axios.post('http://localhost:3000/payments', {
                amount: Number(amount), // Ensure amount is a number
                currency: 'usd',
            });
            console.log('Payment successful:', response.data);
            // Handle success here (e.g., redirecting to a success page or showing a success message)
        } catch (error) {
            console.error('Payment error:', error);
            setError('Failed to process payment. Please try again.'); // Set a user-friendly error message
        }
    };

    // Return statement directly without a nested function
    return (
        <div className="payment-form-container">
            <form onSubmit={handleSubmit} className="payment-form">
                <div className="form-group">
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                    />
                </div>
                <button type="submit">Pay Now</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default PaymentForm;


/*
FOR DYNAMIC FRONTEND CHANGES


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentDetails = ({ paymentIntentId }) => {
    const [paymentDetails, setPaymentDetails] = useState(null);

    useEffect(() => {
        const fetchPaymentDetails = async () => {
            try {
                // Replace this URL with your actual endpoint that returns payment intent details
                const response = await axios.get(`http://localhost:3000/payments/details/${paymentIntentId}`);
                setPaymentDetails(response.data);
            } catch (error) {
                console.error("Failed to fetch payment details:", error);
                // Handle error appropriately
            }
        };

        fetchPaymentDetails();
    }, [paymentIntentId]);

    if (!paymentDetails) {
        return <p>Loading payment details...</p>;
    }

    return (
        <div>
            {Object.entries(paymentDetails).map(([key, value]) => (
                <div key={key}>
                    <strong>{key}:</strong> {value.toString()}
                </div>
            ))}
        </div>
    );
};

export default PaymentDetails;

*/
