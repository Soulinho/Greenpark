import { Link } from 'react-router-dom'
import fondoInicio from './assets/fondo-inicio.jpg'

const Login = () => {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-[32px] text-[#1A3D33] font-bold">
              Iniciar Sesión
            </h1>
            <div className="w-24 h-1 bg-[#8BAE52] mx-auto mt-2"></div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8BAE52] focus:border-[#8BAE52]"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8BAE52] focus:border-[#8BAE52]"
                  placeholder="Ingresar contraseña"
                />
              </div>
              <button className="w-full bg-[#1A3D33] text-white py-2 rounded-md hover:bg-[#8BAE52] transition-colors">
                Iniciar sesión
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                ¿No tienes una cuenta?{' '}
                <Link to="/registro" className="text-[#8BAE52] hover:text-[#1A3D33] font-medium">
                  Regístrate
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-1/2 relative">
        <div className="absolute inset-0 bg-[#1A3D33] opacity-85"></div>
        <img 
          src={fondoInicio} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
          <h2 className="text-3xl font-bold mb-4">
            Bienvenido a Cursos de Greenpark
          </h2>
          <p className="text-center text-lg">
            Accede a tu cuenta para continuar tu aprendizaje en sostenibilidad y desarrollo verde
          </p>
          <button className="mt-8 px-6 py-2 border-2 border-white rounded-md hover:bg-white hover:text-[#1A3D33] transition-colors">
            Explorar cursos
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
