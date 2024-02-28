import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
      <Navbar/>
      <div className="bg-white p-4 font-bold border-b border-black text-left">
        Control de Documento del Alumno
      </div>
      <div className="mt-4">
        <div className="bg-gray-100 p-4 shadow-md rounded-md w-1/2">
          <label htmlFor="matricula" className="block font-bold mb-2">Matrícula del Alumno:</label>
          <input type="text" id="matricula" name="matricula" className="w-full border border-gray-300 rounded-md p-2" />
        </div>
      </div>
      <div className="bg-gray-100 p-4 shadow-md rounded-md mt-4">
        <div className="font-bold">Reportes del Alumno</div>
        <ul className="mt-2">
          <li>Reporte 1</li>
          <li>Reporte 2</li>
          <li>Reporte 3</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4 shadow-md rounded-md mt-4">
        <div className="font-bold">Objetivos del Proyecto</div>
        <textarea rows="4" cols="50" className="mt-2 w-full border border-gray-300 rounded-md p-2"></textarea>
      </div>
      <div className="bg-gray-100 p-4 shadow-md rounded-md mt-4 flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Editar</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Descargar</button>
      </div>
    </div>
  );
};

export default Header;