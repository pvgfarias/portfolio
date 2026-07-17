'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconSend } from '@tabler/icons-react';
import { contactInfo } from '../data/contactInfo';
import { useLanguage } from '../hooks/useLanguage';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const content = {
  en: {
    title: 'Contact',
    subtitle: 'Get in touch with me',
    connect: "Let's Connect",
    connectMsg:
      'Feel free to reach out about any projects, opportunities, if you want to collaborate, or just want to say hi. I would love to hear from you.',
    name: 'Name',
    message: 'Message',
    sending: 'Sending',
    sendMessage: 'Send Message',
  },
  pt: {
    title: 'Contato',
    subtitle: 'Entre em contato comigo',
    connect: 'Vamos Conversar',
    connectMsg:
      'Fique à vontade para entrar em contato sobre projetos ou oportunidades, se quiser colaborar ou apenas quiser dar um "oi". Adoraria receber sua mensagem.',
    name: 'Nome',
    message: 'Mensagem',
    sending: 'Enviando',
    sendMessage: 'Enviar Mensagem',
  },
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    const mailtoLink = `mailto:pvgfarias@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="contact" className="py-20 bg-white-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.connect}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">{t.connectMsg}</p>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-500 rounded-lg">
                    <info.icon className="w-6 h-6 text-emerald-500 dark:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {language === 'en' ? info.label : info.ptLabel}
                    </p>
                    <a
                      href={info.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-70 dark:text-gray-300 mb-2"
              >
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-70 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-70 dark:text-gray-300 mb-2"
              >
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-6 py-3 bg-linear-to-r from-emerald-500 to-lime-400 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  {t.sending}
                </>
              ) : (
                <>
                  <IconSend size={20} className="mr-2" />
                  {t.sendMessage}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
