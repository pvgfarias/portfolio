'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { IconLanguage } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleChangeLanguage = (language: 'en' | 'pt') => {
    setIsOpen(false);
    setLanguage(language);
  };
  useEffect(() => {
    function handleClickOutsideMenu(event: MouseEvent): void {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutsideMenu);
    return () => document.removeEventListener('mousedown', handleClickOutsideMenu);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
        <IconLanguage size={24} />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-auto z-10"
        >
          <div className="relative">
            <div className="absolute -top-0.5 w-3 h-3 left-2 rotate-45 bg-slate-700 border-l border-t border-gray-200 dark:border-slate-700" />
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-700 rounded-lg mt-2">
              <button
                onClick={() => handleChangeLanguage('en')}
                className="block w-full text-left text-white dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 cursor-pointer"
              >
                English
              </button>
              <button
                onClick={() => handleChangeLanguage('pt')}
                className="block w-full text-left text-white dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 cursor-pointer"
              >
                Português
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
