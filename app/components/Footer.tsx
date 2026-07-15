'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/pvgfarias' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/pvgfarias' },
  { name: 'Email', icon: MdEmail, url: 'mailto:pvgfarias@gmail.com' },
];

const quickLinks = {
  Home: '#home',
  About: '#about',
  Projects: '#projects',
  Contact: '#contact',
};

export default function Footer() {
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
            <p className="text-gray-900 dark:text-gray-400">
              Full Stack Developer passionate about creating amazing Web experiences.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {Object.entries(quickLinks).map(([label, url]) => (
                <li key={label}>
                  <Link
                    href={url}
                    className="text-gray-900 dark:text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
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
            © {new Date().getFullYear()} Paulo Farias. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
