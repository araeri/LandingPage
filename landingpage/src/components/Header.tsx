import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/api';
import Dropdown from './Dropdown';

const Header = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getProducts();
        const uniqueCategories: string[] = Array.from(
          new Set(data.map((product: any) => product.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md p-4 border-t-8 border-t-black">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl uppercase font-bold mx-4">
          <Link
            to="/" 
            onClick={() => setMenuOpen(false)}
          >Tienda
          </Link></h1>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
          : 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>}
        </button>

        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center md:space-x-6 transition-all duration-300 z-20 shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:space-x-6 md:flex-row md:items-center w-full md:w-auto px-4 md:px-0 py-4 md:py-0 space-y-4 md:space-y-0">
            <li>
              <Link
                to="/"
                className="hover:text-gray-700 uppercase text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Dropdown title="Categorías" options={categories} />
            </li>
            <li>
              <Dropdown
                title="Usuario"
                options={['Ingreso', 'Registro']}
                alignRight
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
