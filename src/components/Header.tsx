import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const isUser = localStorage.getItem('userRole') === 'user';
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <header className="bg-white shadow-sm relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="GreenPark Logo" className="h-12" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-[#1A3D33] hover:text-[#8BAE52] px-3 py-2 text-sm font-medium transition-colors">
                Inicio
              </Link>
              <Link to="/cursos" className="text-[#1A3D33] hover:text-[#8BAE52] px-3 py-2 text-sm font-medium transition-colors">
                Cursos
              </Link>
              <Link to="/biblioteca" className="text-[#1A3D33] hover:text-[#8BAE52] px-3 py-2 text-sm font-medium transition-colors">
                Biblioteca
              </Link>
              <Link to="/contacto" className="text-[#1A3D33] hover:text-[#8BAE52] px-3 py-2 text-sm font-medium transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated && isUser && (
              <button
                onClick={() => navigate('/user/profile')}
                className="bg-[#8BAE52] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1A3D33] transition-colors"
              >
                Panel Usuario
              </button>
            )}
            {isAdmin && (
              <button
                onClick={() => navigate('/admin')}
                className="bg-[#8BAE52] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1A3D33] transition-colors"
              >
                Panel Admin
              </button>
            )}
            <Link 
              to="/registro" 
              className="bg-[#1A3D33] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#8BAE52] transition-colors"
            >
              Registrarse
            </Link>
            <Link 
              to="/login" 
              className="border border-[#F0F0F0] text-[#1A3D33] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#F0F0F0] transition-colors"
            >
              Iniciar sesión
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1A3D33] hover:text-[#8BAE52] p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute left-0 right-0 bg-white z-50 shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block text-[#1A3D33] hover:bg-[#8BAE52]/10 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/cursos" 
              className="block text-[#1A3D33] hover:bg-[#8BAE52]/10 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Cursos
            </Link>
            <Link 
              to="/biblioteca" 
              className="block text-[#1A3D33] hover:bg-[#8BAE52]/10 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Biblioteca
            </Link>
            <Link 
              to="/contacto" 
              className="block text-[#1A3D33] hover:bg-[#8BAE52]/10 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            {isAuthenticated && isUser && (
              <button
                onClick={() => {
                  navigate('/user/profile');
                  setIsMenuOpen(false);
                }}
                className="w-full text-left text-[#1A3D33] hover:bg-[#8BAE52]/10 px-3 py-2 rounded-md text-base font-medium"
              >
                Panel Usuario
              </button>
            )}
            {isAdmin && (
              <button
                onClick={() => {
                  navigate('/admin');
                  setIsMenuOpen(false);
                }}
                className="w-full text-left text-[#1A3D33] hover:bg-[#8BAE52]/10 px-3 py-2 rounded-md text-base font-medium"
              >
                Panel Admin
              </button>
            )}
            <Link 
              to="/registro" 
              className="block bg-[#1A3D33] text-white px-3 py-2 rounded-md text-base font-medium hover:bg-[#152f27]"
              onClick={() => setIsMenuOpen(false)}
            >
              Registrarse
            </Link>
            <Link 
              to="/login" 
              className="block border border-[#F0F0F0] text-[#1A3D33] px-3 py-2 rounded-md text-base font-medium hover:bg-[#F0F0F0]"
              onClick={() => setIsMenuOpen(false)}
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;