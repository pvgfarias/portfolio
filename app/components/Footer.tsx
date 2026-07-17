'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { useLanguage } from '../hooks/useLanguage';
import { useEffect, useState } from 'react';

const socialLinks = [
  { name: 'GitHub', icon: IconBrandGithub, url: 'https://github.com/pvgfarias' },
  { name: 'LinkedIn', icon: IconBrandLinkedin, url: 'https://linkedin.com/in/pvgfarias' },
  { name: 'Email', icon: IconMail, url: 'mailto:pvgfarias@gmail.com' },
];

const quickLinks = [
  { name: 'Home', ptName: 'Início', href: '#home' },
  { name: 'About', ptName: 'Sobre', href: '#about' },
  { name: 'Projects', ptName: 'Projetos', href: '#projects' },
  { name: 'Contact', ptName: 'Contato', href: '#contact' },
];

const content = {
  en: {
    subtitle: 'Full Stack Developer passionate about creating amazing Web experiences.',
    connect: 'Connect',
    quickLinks: 'Quick Links',
    rights: 'All Rights Reserved.',
    links: ['Home', 'About', 'Projects', 'Contact'],
  },
  pt: {
    subtitle: 'Desenvolvedor Full Stack apaixonado por criar experiências Web incríveis',
    connect: 'Conectar',
    quickLinks: 'Links Rápidos',
    rights: 'Todos os Direitos Reservados.',
    links: ['Início', 'Sobre', 'Projetos', 'Contato'],
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-emerald-200 dark:bg-slate-900 text-gray-700 dark:text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Paulo Farias</h3>
            <p className="text-gray-900 dark:text-gray-400">{t.subtitle}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-900 dark:text-gray-400 hover:text-white transition-colors"
                  >
                    {language === 'en' ? link.name : link.ptName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t.connect}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-400 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <link.icon size={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-900 dark:text-gray-400">
            © {new Date().getFullYear()} Paulo Farias. {t.rights}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
