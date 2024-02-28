// routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/DashboardAdmin';


const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
