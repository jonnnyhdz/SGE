// routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/DashboardAdmin';
import StudentTable from '../pages/TablaAlumnos';


const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/Tabla" element={<StudentTable />} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
