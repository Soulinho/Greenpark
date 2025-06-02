const CourseCreator = () => {
  return (
    <div className="h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-[#1A3D33] mb-6">Nuevo Curso</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#1A3D33] mb-4">Información del curso</h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Título del Curso
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52] focus:bg-[#8BAE52]/5 outline-none"
                    placeholder="Ingrese título del curso"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Imagen del Curso
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-[#8BAE52] focus-within:border-[#8BAE52] focus-within:bg-[#8BAE52]/5">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#8BAE52] hover:text-[#1A3D33]">
                          <span>Subir archivo</span>
                          <input type="file" className="sr-only" accept="image/*"/>
                        </label>
                        <p className="pl-1">o arrastrar y soltar</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Herramientas:
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52] focus:bg-[#8BAE52]/5 outline-none"
                    placeholder="Listado de herramientas que se utilizarán"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aprenderás:
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52] focus:bg-[#8BAE52]/5 outline-none"
                    placeholder="Lista de aprendizajes que obtendrán los estudiantes"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duración (horas)
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-32 px-4 py-2 border border-gray-300 rounded-md focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52] focus:bg-[#8BAE52]/5 outline-none"
                    placeholder="40"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#1A3D33] mb-4">Bienvenida al Curso</h3>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52] focus:bg-[#8BAE52]/5 outline-none"
                placeholder="Escribe un mensaje de bienvenida para tus estudiantes..."
              />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#1A3D33] mb-4">Módulos del Curso</h3>
              <div className="mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Ingrese nombre del módulo"
                      className="w-full p-2 border border-gray-300 rounded-md focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52] focus:bg-[#8BAE52]/5 outline-none"
                    />
                    <textarea
                      placeholder="Ingrese una breve descripción de lo que se tratará el módulo."
                      className="w-full p-2 border border-gray-300 rounded-md focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52] focus:bg-[#8BAE52]/5 outline-none resize-none"
                      rows={4}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Título del enlace"
                        className="w-full p-2 border border-gray-300 rounded-md focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52] focus:bg-[#8BAE52]/5 outline-none"
                      />
                      <input
                        type="url"
                        placeholder="URL (https://ejemplo.com)"
                        className="w-full p-2 border border-gray-300 rounded-md focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52] focus:bg-[#8BAE52]/5 outline-none"
                      />
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-[#1A3D33] text-white px-4 py-2 rounded-md hover:bg-[#152f27]">
                        Adjuntar Archivos
                      </button>
                      <button className="bg-[#8BAE52] text-white px-4 py-2 rounded-md hover:bg-[#7a9947]">
                        Agregar Quiz
                      </button>
                      <span className="text-sm text-gray-500 self-center">
                        0 Archivos Seleccionados
                      </span>
                    </div>
                  </div>
                </div>
                <button className="mt-4 text-[#8BAE52] hover:text-[#7a9947] font-medium">
                  + Agregar nuevo módulo
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#1A3D33] mb-4">Configuración del curso</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de Inicio
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52] focus:bg-[#8BAE52]/5 outline-none"
                      placeholder="dd/mm/aaaa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de Finalización
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52] focus:bg-[#8BAE52]/5 outline-none"
                      placeholder="dd/mm/aaaa"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Acceso
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#8BAE52] focus:ring-1 focus:ring-[#8BAE52] focus:bg-[#8BAE52]/5 outline-none">
                    <option value="">Seleccione tipo de acceso</option>
                    <option value="docente">Docente</option>
                    <option value="alumno">Alumno</option>
                    <option value="apoderado">Apoderado</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button className="px-6 py-2 border border-[#1A3D33] text-[#1A3D33] rounded-md hover:bg-gray-50">
                Cancelar
              </button>
              <button className="px-6 py-2 bg-[#8BAE52] text-white rounded-md hover:bg-[#1A3D33]">
                Crear Curso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCreator;
