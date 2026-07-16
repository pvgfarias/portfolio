'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconChevronDown } from '@tabler/icons-react';
import Image from 'next/image';
import { useLanguage } from '../hooks/useLanguage';

const content = {
  en: {
    roles: [
      'Full Stack Web Developer',
      'Data Analyst',
      'Data Visualization Specialist',
      'Software Engineering Researcher',
    ],
    description:
      'passionate about creating amazing web experiences by building fast, reliable and efficient systems.',
    projects: 'Projects',
    contact: 'Contact Me',
  },
  pt: {
    roles: [
      'Desenvolvedor Web Full Stack',
      'Analista de Dados',
      'Especialista em Visualização de Dados',
      'Pesquisador em Engenharia de Software',
    ],
    description:
      'apaixonado por criar experiências web incríveis através do desenvolvimento de sistemas rápidos, confiáveis ​​e eficientes.',
    projects: 'Projetos',
    contact: 'Contato',
  },
};
const roles = [
  'Full Stack Web Developer',
  'Data Analyst',
  'Data Visualization Specialist',
  'Software Engineering Researcher',
];

const COLORS = ['#c9fb24', '#7ffb3c', '#16f978', '#e0fd8a', '#74fd9d'];

function makeParticles() {
  return Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 14 + 10,
    delay: Math.random() * -20,
    driftX: (Math.random() - 0.5) * 30,
    driftY: (Math.random() - 0.5) * 30,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const { language } = useLanguage();
  const [particles] = useState<ReturnType<typeof makeParticles>>(() => makeParticles());
  const t = content[language];

  useEffect(() => {
    const role = language === 'en' ? content.en.roles[roleIndex] : content.pt.roles[roleIndex];

    let t: ReturnType<typeof setTimeout>;

    if (!deleting && displayed === role) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed === '') {
      t = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 0);
    } else {
      t = setTimeout(
        () => {
          setDisplayed(
            deleting ? role.slice(0, displayed.length - 1) : role.slice(0, displayed.length + 1),
          );
        },
        deleting ? 40 : 70,
      );
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0 "
    >
      <div className="aurora-bg absolute inset-0" />
      {particles.map((p) => (
        <motion.div
          suppressHydrationWarning
          key={p.id}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.size}px ${p.color}`,
            opacity: 0.7,
          }}
          animate={{
            x: [0, p.driftX, 0, -p.driftX, 0],
            y: [0, p.driftY, -p.driftY, p.driftY * 0.5, 0],
            opacity: [0.7, 1, 0.5, 0.9, 0.7],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8 sm:-mt-16">
            <Image
              src={'/profile.jpg'}
              alt="Paulo Farias profile image"
              width={250}
              height={250}
              className="rounded-full border-4 border-emerald-400"
              loading="lazy"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hey there, I&apos;m{' '}
            <span className="bg-linear-to-r from-emerald-400 to-lime-200 bg-clip-text text-transparent">
              Paulo Farias
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto h-20"
          >
            <span className="font-semibold text-emerald-400 font-mono">
              {displayed}
              <span className="cursor-blink ml-0.5">|</span>
            </span>
            {t.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-emerald-500 text-white rounded-lg  font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200"
            >
              {t.projects}
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 border-2 border-emerald-400 text-emerald-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200"
            >
              {t.contact}
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute top-150 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <button onClick={() => scrollToSection('#about')} className="animate-bounce">
            <IconChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
