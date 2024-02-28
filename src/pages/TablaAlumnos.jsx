import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

const students = [
  { id: 1, matricula: '22304958', nombre: 'Pedro Infante', edificio: 'Edificio H', grupo: 'SM52' },
  { id: 2, matricula: '22304959', nombre: 'Vicente Fernandez', edificio: 'Edificio H', grupo: 'SM52' },
  // Añadir 10 estudiantes más
  { id: 3, matricula: '22304960', nombre: 'Jorge Negrete', edificio: 'Edificio A', grupo: 'SA41' },
  { id: 4, matricula: '22304961', nombre: 'Maria Felix', edificio: 'Edificio B', grupo: 'SB42' },
  { id: 5, matricula: '22304962', nombre: 'Dolores del Rio', edificio: 'Edificio C', grupo: 'SC43' },
  { id: 6, matricula: '22304963', nombre: 'Cantinflas', edificio: 'Edificio D', grupo: 'SD44' },
  { id: 7, matricula: '22304964', nombre: 'Gael Garcia', edificio: 'Edificio E', grupo: 'SE45' },
  { id: 8, matricula: '22304965', nombre: 'Salma Hayek', edificio: 'Edificio F', grupo: 'SF46' },
  { id: 9, matricula: '22304966', nombre: 'Diego Luna', edificio: 'Edificio G', grupo: 'SG47' },
  { id: 10, matricula: '22304967', nombre: 'Alfonso Cuaron', edificio: 'Edificio H', grupo: 'SH48' },
];

const StudentRow = ({ matricula, nombre, edificio, grupo }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{matricula}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{nombre}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{edificio}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{grupo}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center flex justify-center">
        <button className="text-blue-700 hover:text-blue-700 mx-10">
          <FontAwesomeIcon icon={faEdit} size="1x" />
        </button>
        <button className="text-red-600 hover:text-red-700 mx-">
          <FontAwesomeIcon icon={faTrashAlt} size="1x" />
        </button>
      </td>
    </tr>
  );
};

const StudentTable = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-1 mx-auto max-w-7xl border border-gray-50 rounded-lg overflow-hidden p-0">
        <div className="my-1 overflow-x-auto sm:-mx-1 lg:-mx-1">
          <div className="py-1 align-middle inline-block min-w-full sm:px-1 lg:px-1">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Matrícula
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Nombre
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Edificio
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Grupo
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <StudentRow key={student.id} {...student} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentTable;
