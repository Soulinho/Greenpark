const Records = () => {
  const registros = [
    {
      id: 1,
      usuario: 'Martina Carrasco',
      email: 'Martina_Carrasco@greenpark.cl',
      fecha: '19/05/2025',
      tipo: 'Docente',
      estado: 'Aprobado'
    }
  ];

  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-semibold text-[#1A3D33] mb-6">Registros</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usuario
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha de Registro
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tipo de Usuario
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {registros.map((registro) => (
              <tr key={registro.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <div className="text-sm font-medium text-[#1A3D33]">{registro.usuario}</div>
                    <div className="text-sm text-gray-500">{registro.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {registro.fecha}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {registro.tipo}
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {registro.estado}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm bg-[#8BAE52] text-white rounded-md hover:bg-[#1A3D33] transition-colors">
                      Aprobar
                    </button>
                    <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                      Rechazar
                    </button>
                    <button className="px-3 py-1 text-sm border border-[#1A3D33] text-[#1A3D33] rounded-md hover:bg-[#1A3D33] hover:text-white transition-colors">
                      Ver
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Records;
