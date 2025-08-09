import React from 'react';

const NewsletterContact: React.FC = () => {
  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" }
  ];

  return (
    <section id="contacto" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Mantente Conectado</h2>
            <p className="text-gray-300 text-lg">
              Recibe nuestros artículos más impactantes directamente en tu correo. 
              Una vez por semana, sin spam.
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                />
                <button className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                  Suscribirse
                </button>
              </div>
              <p className="text-gray-400 text-sm">
                Al suscribirte, aceptas recibir emails de Fútbol Social. Puedes cancelar en cualquier momento.
              </p>
            </div>
          </div>

          {/* Contacto y Redes */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Conversemos</h2>
            <p className="text-gray-300 text-lg">
              ¿Tienes una historia, sugerencia o quieres colaborar? 
              Nos encanta conectar con nuestra comunidad.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-green-400">📧</span>
                <span>contacto@futbolsocial.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">📱</span>
                <span>@FutbolSocialMX</span>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition"
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Fútbol Social. El deporte como agente de cambio.</p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterContact;