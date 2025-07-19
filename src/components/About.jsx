import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaUsers, FaRocket } from 'react-icons/fa';

const aboutPoints = [
  {
    icon: <FaCode />,
    title: 'Tech Enthusiast',
    description:
      'Proficient in Python, C++, and Java, with a strong grasp of DSA, OOP, and DBMS. I enjoy solving complex problems through clean and efficient code.',
  },
  {
    icon: <FaRocket />,
    title: 'Builder at Heart',
    description:
      'From full-stack web apps to predictive ML models, I love building things that are useful, beautiful, and scalable.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Constant Learner',
    description:
      'I pursue knowledge with passion — from MongoDB and Docker to AI certifications. I enjoy staying updated with emerging technologies.',
  },
  {
    icon: <FaUsers />,
    title: 'Team Player',
    description:
      'With strong communication skills, leadership qualities, and an active listening attitude, I thrive in collaborative environments.',
  },
];

// Animations
const cardVariants = {
  offscreen: { opacity: 0, y: 50, rotate: -3 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      type: 'spring',
    },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 bg-gradient-to-br from-white via-sky-100 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-300 dark:to-blue-400"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
  className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  I'm <span className="text-cyan-600 font-semibold dark:text-cyan-400 bg-cyan-100 dark:bg-white/10 px-2 py-1 rounded-md">
    Megharaj Patil
  </span>, a Computer Engineering undergrad with a deep interest in full-stack development, data science, and scalable systems. Whether it's designing intuitive UI or implementing complex ML models, I blend creativity and logic into every project I build.
</motion.p>


        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {aboutPoints.map((point, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative bg-white/60 dark:bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-transform duration-300 group"
            >
              <div className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl shadow-lg group-hover:rotate-6 transition-transform">
                {point.icon}
              </div>

              <div className="pl-14 text-left">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-1">{point.title}</h3>
                <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
