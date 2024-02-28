import React from 'react';

const StudentProjects = () => {
  const students = [
    {
      matricula: '21394165',
      title: 'Artificial Intelligence: A Modern Approach',
      author: 'Stuart Russell y Peter Norvig',
    },
    {
      matricula: '21789633',
      title: 'Refactoring: Improving the Design of Existing Code',
      author: 'Martin Fowler',
    },
    {
      matricula: '21458693',
      title: 'User Story Mapping',
      author: 'Jeff Patton',
    },
    {
      matricula: '21954529',
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      author: 'Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides',
    },
    {
      matricula: '21784563',
      title: 'The pragmatic programmer',
      author: 'Andrew Hunt y David Thomas',
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="header flex items-center justify-between border-b-2 py-4">
        <h2 className="text-4xl font-bold">Student Projects</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Student
        </button>
      </div>
      <table className="w-full mt-8">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-gray-500">Matricula</th>
            <th className="px-6 py-3 text-left text-gray-500">Title</th>
            <th className="px-6 py-3 text-left text-gray-500">Author</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.matricula}>
              <td className="border-b border-gray-200 py-4 pl-6 pr-4 text-gray-800">
                {student.matricula}
              </td>
              <td className="border-b border-gray-200 py-4 pl-6 pr-4 text-gray-800">
                {student.title}
              </td>
              <td className="border-b border-gray-200 py-4 pl-6 pr-4 text-gray-800">
                {student.author}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentProjects;