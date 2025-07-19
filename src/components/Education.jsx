import React from 'react';
import { motion } from 'framer-motion';
import { PiGraduationCapLight } from 'react-icons/pi';

const education = [
  {
    title: 'Wadia College of Engineering, Pune',
    degree: 'B.E. in Computer Engineering',
    duration: '2022 – 2026',
    score: 'SGPA: 8.79 (Till Date)',
    color: 'from-green-500 to-green-300',
  },
  {
    title: 'Sangameshwar Junior College, Solapur',
    degree: 'Higher Secondary Certificate (HSC)',
    duration: '2020 – 2022',
    score: 'Percentage: 78.17%',
    color: 'from-blue-500 to-blue-300',
  },
  {
    title: 'Siddheshwar High School, Solapur',
    degree: 'Secondary School Certificate (SSC)',
    duration: '2011 – 2020',
    score: 'Percentage: 94.00%',
    color: 'from-pink-500 to-pink-300',
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-20 bg-white dark:bg-[#0f172a] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto relative">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-black dark:text-white"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 transform -translate-x-1 bg-gradient-to-b from-cyan-500 to-cyan-300 w-1 h-full z-0 blur-sm opacity-20"></div>

        {/* Timeline */}
        <div className="space-y-16 relative z-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={`group relative md:w-[80%] ${
                index % 2 === 0 ? 'md:ml-[10%]' : 'md:ml-auto md:mr-[10%]'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Dot */}
              <div className="absolute -left-11 top-4 w-6 h-6 bg-cyan-400 rounded-full shadow-xl group-hover:animate-ping hidden md:block"></div>

              {/* Card */}
              <div
                className={`bg-gradient-to-r ${edu.color} p-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="bg-white dark:bg-[#1e293b] p-5 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <PiGraduationCapLight size={28} className="text-cyan-500 dark:text-cyan-300" />
                    <h3 className="text-lg font-semibold text-black dark:text-white">{edu.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{edu.degree}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{edu.duration}</p>
                  <p className="text-sm text-gray-800 dark:text-gray-200 font-medium mt-2">{edu.score}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
