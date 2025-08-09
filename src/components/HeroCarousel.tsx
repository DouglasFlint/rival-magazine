"use client"

import React, { useState, useEffect } from 'react';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "El Fútbol Como Agente de Cambio",
      subtitle: "Transformando comunidades a través del deporte",
      description: "Exploramos cómo el deporte rey trasciende las canchas para generar impacto real en la sociedad.",
      bgColor: "from-green-700 via-green-600 to-green-800"
    },
    {
      title: "Voces del Barrio",
      subtitle: "Historias reales desde las bases",
      description: "Conoce las iniciativas locales que están cambiando vidas a través del fútbol comunitario.",
      bgColor: "from-blue-700 via-blue-600 to-blue-800"
    },
    {
      title: "Inclusión Sin Límites",
      subtitle: "Rompiendo barreras en el deporte",
      description: "Documentamos proyectos que promueven la diversidad, igualdad y accesibilidad en el fútbol.",
      bgColor: "from-purple-700 via-purple-600 to-purple-800"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            {/* Imagen de fondo completa */}
            <div className="absolute inset-0">
              {/* Placeholder para imagen - aquí irán las imágenes reales */}
              <div className={`w-full h-full bg-gradient-to-br ${slide.bgColor} relative`}>
                {/* Simulación de imagen con patrón */}
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full flex items-center justify-center text-[20rem] leading-none">
                    {index === 0 && "⚽"}
                    {index === 1 && "🏘️"}
                    {index === 2 && "🤝"}
                  </div>
                </div>
              </div>
              
              {/* Overlay oscuro para legibilidad del texto */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            {/* Contenido de texto superpuesto */}
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-4xl">
                  <div className="space-y-6 text-white">
                    <div className="space-y-4">
                      <p className="text-xl font-medium text-white/90 tracking-wide uppercase">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                    </div>
                    <p className="text-2xl lg:text-3xl leading-relaxed text-white/90 max-w-4xl font-light">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 pt-8">
                      <button className="bg-white text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition transform hover:scale-105">
                        Explorar Historias
                      </button>
                      <button className="border-2 border-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition transform hover:scale-105">
                        Suscríbete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicador de slide en la esquina */}
            <div className="absolute bottom-6 right-6 z-20 text-white/70">
              <p className="text-sm font-medium">
                {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación mejorados */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition backdrop-blur-md border border-white/20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition backdrop-blur-md border border-white/20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores rediseñados */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-12' : 'bg-white/50 w-6'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator minimalista */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-white/70 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-8 bg-white/50"></div>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;