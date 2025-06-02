interface ProfileProps {
  isAdminPanel?: boolean;
}

const Profile = ({ isAdminPanel = false }: ProfileProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#1A3D33]">Sin nombre</h2>
          <p className="text-gray-600">{isAdminPanel ? 'Administrador' : 'Sin especificar'}</p>
          <p className="text-[#8BAE52]">Sin email</p>
          <button className="mt-2 px-4 py-1 text-sm bg-[#8BAE52] text-white rounded-md hover:bg-[#1A3D33] transition-colors">
            Editar Perfil
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-[#1A3D33] mb-4 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Información Personal
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
            <p className="mt-1 text-gray-400 italic">Sin especificar</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
            <p className="mt-1 text-gray-400 italic">Sin especificar</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-gray-400 italic">Sin especificar</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rol</label>
            <p className="mt-1 text-[#1A3D33]">{isAdminPanel ? 'Administrador' : 'Sin especificar'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
