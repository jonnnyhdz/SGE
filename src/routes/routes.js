import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/DashboardAdmin';
import StudentTable from '../pages/TablaAlumnos';
import Header from '../pages/ControlDeDocAlumno';


const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />

                <Route exact path="/Tabla" element={<StudentTable />} />

                <Route exact path="/Control" element={<Header />} />

            </Routes>
        </Router>
    );
};

export default RoutesComponent;
