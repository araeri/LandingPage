import React, { useState } from 'react';

const FooterSection = ({ title, items }: { title: string; items: string[] }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <div className='border-b-2 border-white md:border-none'>
        <div
          onClick={toggleOpen}
          className="flex items-center justify-between md:block cursor-pointer"
          >
          <h3 className="text-lg font-semibold mb-4 md:mb-0">{title}</h3>
          <span className="md:hidden">
            {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            )}
          </span>
        </div>
        <ul
          className={`space-y-2 text-sm ${
            isOpen ? 'block' : 'hidden'
          } md:block mt-2 md:mt-4`}
        >
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  const Footer = () => {
    return (
      <footer className="bg-black text-white pt-10 pb-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <FooterSection
            title="Atención al cliente"
            items={['Contáctanos', 'Preguntas frecuentes']}
          />
          <FooterSection
            title="Tienda"
            items={[
              'Trabaja con nosotros',
              'Cambios y devoluciones',
              'Medios de pago',
              'Información de envíos',
            ]}
          />
          <FooterSection
            title="Quienes Somos"
            items={[
              'Sobre TIENDA',
              'Ubicaciones',
              'Términos y condiciones',
              'Política de privacidad',
            ]}
          />
          <FooterSection
            title="Más"
            items={['Suscríbete', 'Bases y Condiciones']}
          />
        </div>
  
        <div className="mt-10 border-t border-stone-700 pt-4 text-center text-sm text-stone-400">
          © 2025 Tienda. Todos los derechos reservados.
        </div>
      </footer>
    );
  };
  
  export default Footer;
