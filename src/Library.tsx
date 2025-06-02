import { useState } from 'react';

const Library = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const books = [
    {
      id: 1,
      title: "Inteligencia Artificial en la Educación",
      author: "María González, PhD",
      description: "Una guía completa sobre la implementación de IA en entornos educativos modernos.",
      downloadUrl: "#",
      pages: 245,
    },
    {
      id: 2,
      title: "Manual de Pedagogía Digital",
      author: "Dr. Juan Pérez",
      description: "Estrategias y metodologías para la enseñanza en la era digital.",
      downloadUrl: "#",
      pages: 180,
    },
    {
      id: 3,
      title: "Sostenibilidad en el Aula",
      author: "Ana Silva",
      description: "Guía práctica para implementar proyectos sostenibles en instituciones educativas.",
      downloadUrl: "#",
      pages: 156,
    }
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#1A3D33] mb-8">Biblioteca</h1>
        
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por título o autor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52]"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A3D33] mb-2">{book.title}</h3>
                    <p className="text-sm text-[#8BAE52] mb-1">{book.author}</p>
                    <p className="text-xs text-gray-500 mb-3">{book.pages} páginas</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{book.description}</p>
                <div className="flex flex-col gap-2">
                  <button className="w-full bg-white text-[#1A3D33] border border-[#1A3D33] py-2 px-4 rounded hover:bg-[#8BAE52] hover:text-white hover:border-[#8BAE52] transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Vista Previa
                  </button>
                  <button className="w-full bg-[#1A3D33] text-white py-2 px-4 rounded hover:bg-[#8BAE52] transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
