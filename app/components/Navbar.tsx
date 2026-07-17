'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconMenu, IconXMark } from '@tabler/icons-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../hooks/useLanguage';

const navLinks = [
  { name: 'Home', ptName: 'Início', href: '#home' },
  { name: 'About', ptName: 'Sobre', href: '#about' },
  { name: 'Experience', ptName: 'Experiência', href: '#experience' },
  { name: 'Skills', ptName: 'Habilidades', href: '#skills' },
  { name: 'Projects', ptName: 'Projetos', href: '#projects' },
  { name: 'Resume', ptName: 'Currículo', href: '#resume' },
  { name: 'Contact', ptName: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white-50/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavClick('#home')}
            className="text-2xl font-bold text-gray-900  hover:text-emerald-500 dark:text-white transition-colors duration-200"
          >
            Paulo Farias
          </button>
          {/* Web Nav */}
          <div className="hidden md:flex space-x-8 justify-center items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 cursor-pointer transition-colors duration-200"
              >
                {language === 'en' ? link.name : link.ptName}
              </button>
            ))}
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <div className="md:hidden flex flex-row items-center justify-center gap-4">
            <LanguageToggle />
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
              {isOpen ? <IconXMark size={24} /> : <IconMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-emerald-500 dark:bg-slate-800 rounded-lg mt-2 ">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400"
                >
                  {language === 'en' ? link.name : link.ptName}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
