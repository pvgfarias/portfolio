'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { experiences } from '../data/experience';
import { FaBriefcase, FaMapPin, FaCalendar, FaAward } from 'react-icons/fa';
import { div } from 'framer-motion/client';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-emerald-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and education
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-20 w-0.5 h-full bg-emerald-200 dark:bg-emerald-800 transform -translate-x-1/2" />
              )}

              <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-emerald-500 rounded-full transform -translate-x-1/2 z-10" />

              <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-emerald-50 dark:bg-slate-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-emerald-100 dark:border-slate-600">
                    <div className="flex items-center mb-3">
                      <FaBriefcase className="w-5 h-5 text-emerald-500 mr-2" />
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          experience.type === 'work'
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
                            : experience.type === 'internship'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : experience.type === 'project'
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
                                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}
                      >
                        {experience.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {experience.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-green-500 dark:text-emerald-400 mb-2 flex items-center gap-2">
                      {experience.logo && (
                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          width={40}
                          height={40}
                          className="object-contain rounded"
                        />
                      )}{' '}
                      {experience.company}
                    </h4>

                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <FaMapPin className="w-4 h-4 mr-1" />
                      <span className="mr-4">{experience.location}</span>
                      <FaCalendar className="w-4 h-4 mr-1" />
                      <span>{experience.duration}</span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {experience.description}
                    </p>

                    {experience.technologies && (
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Technologies:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {experience.achievements && (
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <FaAward className="w-4 h-4 mr-1" />
                          Key Achievements:
                        </h5>
                        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-emerald-500 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
