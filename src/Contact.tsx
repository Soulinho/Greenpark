const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[32px] text-[#1A3D33] font-bold text-center">
            Contacto
          </h1>
          <div className="w-24 h-1 bg-[#8BAE52] mx-auto mt-2 mb-16"></div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-2 border-[#1A3D33] rounded-lg p-8">
              <h2 className="text-xl font-semibold text-[#1A3D33] mb-6">
                Envíanos un mensaje
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8BAE52] focus:border-[#8BAE52]"
                    placeholder="Escribe tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8BAE52] focus:border-[#8BAE52]"
                    placeholder="ejemplo@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8BAE52] focus:border-[#8BAE52]"
                    placeholder="Escribe tu mensaje..."
                  />
                </div>
                <button className="w-full bg-[#1A3D33] text-white py-3 rounded-md hover:bg-[#8BAE52] transition-colors flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <div className="border-2 border-[#1A3D33] rounded-lg p-8">
              <h2 className="text-xl font-semibold text-[#1A3D33] mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-4">
                <div className="flex items-start bg-[#F0F0F0] p-4 rounded-lg">
                  <div className="bg-[#1A3D33] p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A3D33]">Dirección</h3>
                    <p className="text-gray-600">Los Damascos s/n, Osorno, Chile</p>
                  </div>
                </div>

                <div className="flex items-start bg-[#F0F0F0] p-4 rounded-lg">
                  <div className="bg-[#1A3D33] p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A3D33]">Teléfono</h3>
                    <p className="text-gray-600">+569 5817 1194</p>
                  </div>
                </div>

                <div className="flex items-start bg-[#F0F0F0] p-4 rounded-lg">
                  <div className="bg-[#1A3D33] p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A3D33]">Correo electrónico</h3>
                    <p className="text-gray-600">contacto@greenpark.cl</p>
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <a href="#" className="w-10 h-10 bg-[#F0F0F0] hover:bg-[#8BAE52] rounded-full flex items-center justify-center transition-colors group">
                    <svg className="w-5 h-5 text-[#1A3D33] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#F0F0F0] hover:bg-[#8BAE52] rounded-full flex items-center justify-center transition-colors group">
                    <svg className="w-5 h-5 text-[#1A3D33] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-[#1A3D33]">Ubicación</h2>
            <div className="w-24 h-1 bg-[#8BAE52] mx-auto mt-2"></div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.5598700231766!2d-73.1351!3d-40.5742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9618397cc6c8cd93%3A0x8e5fde76df0e4376!2sLos%20Damascos%2C%20Osorno%2C%20Regi%C3%B3n%20de%20Los%20Lagos%2C%20Chile!5e0!3m2!1ses!2s!4v1623456789012!5m2!1ses!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de Greenpark"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
