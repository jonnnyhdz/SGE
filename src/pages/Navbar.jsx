import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-950 p-6 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <img
          src="/logo.png"  
          alt="Logo"
          className="h-9 w-auto max-w-32 mr-20" 
        />

        <div className="space-x-9 font-thin italic">
          <button className="text-white">Proyectos</button>
          <button className="text-white">Asesores</button>
          <button className="text-white">Docentes</button>
          <button className="text-white">Documentos</button>
          <button className="text-white">Alumnos</button>
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
