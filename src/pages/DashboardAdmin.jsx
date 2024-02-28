import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <Link to='Control'>
          <div className="bg-gray-200 p-20 rounded-md shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-blue-800 text-lg font-semibold mb-4">Proyectos</h3>
              <p className="text-gray-600 text-center">Proyectos en el área de ingeniería</p>
            </div>
          </div>
        </Link>
          <div className="bg-gray-200 p-20 rounded-md shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-blue-800 text-lg font-semibold mb-4">Asesores</h3>
              <p className="text-gray-600 text-center">Asesores disponibles para consulta</p>
            </div>
          </div>

          <div className="bg-gray-200 p-20 rounded-md shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-blue-800 text-lg font-semibold mb-4">Docentes</h3>
              <p className="text-gray-600 text-center">Docentes de la facultad</p>
            </div>
          </div>

          <div className="bg-gray-200 p-20 rounded-md shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-blue-800 text-lg font-semibold mb-4">Documentos</h3>
              <p className="text-gray-600 text-center">Documentos relevantes para la carrera</p>
            </div>
          </div>
          <div className="bg-gray-200 p-20 rounded-md shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-blue-800 text-lg font-semibold mb-4">Alumnos</h3>
              <p className="text-gray-600 text-center">Información sobre los alumnos</p>
            </div>
          </div>
          <div className="bg-gray-200 p-20 rounded-md shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-blue-800 text-lg font-semibold mb-4">Roles</h3>
              <p className="text-gray-600 text-center">Roles y responsabilidades en el sistema</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
