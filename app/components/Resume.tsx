'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { FiFileText } from 'react-icons/fi';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Resume() {
  const [isViewing, setIsViewing] = useState(true);
  const ViewIcon = isViewing ? FaEyeSlash : FaEye;
  const viewLabel = isViewing ? 'Hide' : 'View';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Paulo_Farias_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    setIsViewing((prev) => !prev);
  };

  return (
    <section id="resume" className="py-20 bg-emerald-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download or view my resume to learn more about my experience and qualifications.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-emerald-50 dark:bg-slate-800 rounded-xl p-8 mb-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row flex-1 justify-between">
                {/* Ttile */}
                <div className="flex flex-row justify-center items-center">
                  <FiFileText className="w-8 h-8 text-emerald-500 dark:text-emerald-400 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Paulo Farias - Resume
                  </h3>
                </div>
                {/* Buttons */}
                <div className="flex flex-row justify-center items-center gap-4">
                  <button
                    onClick={handleView}
                    className="flex items-center justify-center px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-all duration-200 "
                  >
                    <ViewIcon className="w-5 h-5 text-white mr-2" />
                    {viewLabel}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center justify-center px-6 py-3 border-2 border-green-500 text-green-500 dark:border-emerald-400 dark:text-emerald-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-white transition-all duration-200"
                  >
                    <FaDownload className="w-5 h-5 mr-2" />
                    Download
                  </button>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all duration-200"
                  >
                    <FaExternalLinkAlt className="w-5 h-5 mr-2" /> Open
                  </a>
                </div>
              </div>
              {/* Resume Viewer */}
              {isViewing && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-stone-800 rounded-xl shadow-lg overflow-hidden mt-4"
                >
                  <div className="p-4 bg-gray-100 dark:bg-slate-700 border-b">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Resume Preview
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Click -Download- for the full version
                    </p>
                  </div>

                  <div className="relative w-full" style={{ height: '800px' }}>
                    <iframe
                      src="/PauloFariasResume.pdf"
                      title="Resume Preview"
                      className="w-full h-full border-0"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
