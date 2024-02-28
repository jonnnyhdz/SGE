import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-950 p-6 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <Link to='/'>
        <img
          src="/logo.png"  
          alt="Logo"
          className="h-9 w-auto max-w-32 mr-20" 
        />
        </Link>

        <div className="space-x-9 font-thin italic">
          <Link to='Control'>
          <button className="text-white">Proyectos</button>
          </Link>
          <button className="text-white">Asesores</button>
          <button className="text-white">Docentes</button>
          <button className="text-white">Documentos</button>
          <Link to='Tabla'>
          <button className="text-white">Alumnos</button>
          </Link>
          <button className="text-white">Roles</button>
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-white p-2 rounded-md mr-4"
        />
      </div>
    </nav>
  );
};

export default Navbar;
