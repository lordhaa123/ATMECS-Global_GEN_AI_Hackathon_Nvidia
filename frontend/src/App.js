// App.js
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom';
import BankingServices from './BankingServices'; // Adjust the path if needed
import ApplyCard from './ApplyCard';
import CheckBenefits from './CheckBenefits';
import CreditCard from './CreditCard'; 
import DebitCard from './DebitCard';
import FASTag from './FASTag';
import Funds from './Funds';
import HomeLoan from './HomeLoan';
import LoanEligibility from './LoanEligibility';
import PersonalLoan from './PersonalLoan';
import PremiumCard from './PremiumCard';
import Rewards from './Rewards';
import TravelCard from './TravelCard';
import Chatbot from './chatbot';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BankingServices />} />
                <Route path="/ApplyCard" element={<ApplyCard />} />
                <Route path="/CheckBenefits" element={<CheckBenefits />} /> 
                <Route path="/CreditCard" element={<CreditCard />} /> 
                <Route path="/DebitCard" element={<DebitCard />} />
                <Route path="/Funds" element={<Funds />} />
                <Route path="/FASTag" element={<FASTag />} />
                <Route path="/HomeLoan" element={<HomeLoan />} />
                <Route path="/LoanEligibility" element={<LoanEligibility />} />
                <Route path="/PersonalLoan" element={<PersonalLoan />} />
                <Route path="/PremiumCard" element={<PremiumCard />} />
                <Route path="/Rewards" element={<Rewards />} />
                <Route path="/TravelCard" element={<TravelCard />} />
            </Routes>
            <Chatbot />
        </BrowserRouter>
    );
};

export default App;
