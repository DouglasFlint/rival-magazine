"use client"

import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detectar scroll para ocultar/mostrar navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determinar si scrolleamos hacia abajo o arriba
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideNavbar(true); // Scrolling down - ocultar navbar
      } else {
        setHideNavbar(false); // Scrolling up - mostrar navbar
      }
      
      // Determinar si aplicar efectos de scroll
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Artículos', href: '#articulos' },
    { label: 'Sobre Rival', href: '#sobre-rival' },
    { label: 'Impacto Social', href: '#impacto' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    // Scroll suave a la sección
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      {/* Header Sticky - Solo cuando no está oculto */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hideNavbar ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled 
            ? 'bg-stone-100/90 backdrop-blur-md shadow-lg' 
            : 'bg-stone-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo R */}
            <div className={`transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <div className="w-12 h-12 bg-stone-800 text-stone-100 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <span className="text-xl font-bold">R</span>
              </div>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative w-10 h-10 flex flex-col justify-center items-center space-y-1 transition-all duration-300 ${
                isScrolled ? 'scale-90' : 'scale-100'
              }`}
              aria-label="Menu"
            >
              <span 
                className={`block w-6 h-0.5 bg-stone-800 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-stone-800 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-stone-800 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* R y Hamburguesa Floating - Siempre visible cuando navbar está oculto */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hideNavbar ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo R Floating */}
            <div className="w-12 h-12 bg-stone-800 text-stone-100 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer scale-90 hover:scale-100">
              <span className="text-xl font-bold">R</span>
            </div>

            {/* Hamburger Menu Floating */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex flex-col justify-center items-center space-y-1 scale-90 hover:scale-100 transition-all duration-300"
              aria-label="Menu"
            >
              <span 
                className={`block w-6 h-0.5 bg-stone-800 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-stone-800 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-stone-800 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay Menu Full Screen */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        {/* Background más translúcido */}
        <div className="absolute inset-0 bg-stone-100/75 backdrop-blur-xl"></div>
        
        {/* Menu Content */}
        <div className="relative h-full flex items-center justify-center pt-20">
          <nav className="text-center space-y-8">
            {menuItems.map((item, index) => (
              <div key={item.href}>
                <button
                  onClick={() => handleMenuClick(item.href)}
                  className={`block text-4xl lg:text-5xl font-bold text-stone-800 hover:text-stone-600 transition-all duration-300 transform hover:scale-110 ${
                    isMenuOpen 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                  }}
                >
                  {item.label}
                </button>
                {/* Línea decorativa */}
                {index < menuItems.length - 1 && (
                  <div 
                    className={`w-20 h-px bg-stone-400 mx-auto mt-6 transition-all duration-500 ${
                      isMenuOpen 
                        ? 'scale-x-100 opacity-50' 
                        : 'scale-x-0 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${(index * 100) + 50}ms` : '0ms'
                    }}
                  />
                )}
              </div>
            ))}
            
            {/* Social links en el menú */}
            <div 
              className={`pt-12 flex justify-center space-x-6 transition-all duration-500 ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? '500ms' : '0ms'
              }}
            >
              {['📘', '📷', '🐦', '📺'].map((icon, index) => (
                <button
                  key={index}
                  className="w-12 h-12 bg-stone-200 hover:bg-stone-300 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="text-xl">{icon}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Close instruction */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p 
            className={`text-stone-600 text-sm transition-all duration-500 ${
              isMenuOpen 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-4 opacity-0'
            }`}
            style={{
              transitionDelay: isMenuOpen ? '600ms' : '0ms'
            }}
          >
          </p>
        </div>
      </div>

      {/* Spacer para compensar el header fixed */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;