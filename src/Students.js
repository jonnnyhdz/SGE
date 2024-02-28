import React from 'react';

const Students = () => {
  const [matricula, setMatricula] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');

  return (
    <div className="container mx-auto">
      <div className="header flex justify-between items-center border-b-2 py-4">
        <h2 className="text-4xl font-bold">Acceso a Datos de estudiantes donantes</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Modificar
        </button>
      </div>
      <div className="mt-8">
        <div className="flex items-center mb-4">
          <div className="w-1/3 text-gray-500">Matricula</div>
          <div className="w-2/3">
            <input
              type="text"
              className="w-full py-2 px-3 border border-gray-300 rounded"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3 text-gray-500">Titulo</div>
          <div className="w-2/3">
            <input
              type="text"
              className="w-full py-2 px-3 border border-gray-300 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3 text-gray-500">Autor</div>
          <div className="w-2/3">
            <input
              type="text"
              className="w-full py-2 px-3 border border-gray-300 rounded"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;