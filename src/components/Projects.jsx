import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Blood Donation Management",
    description:
      "Full-stack blood management app with donor/recipient UI, admin dashboard, and real-time monitoring.",
    tech: ["React", "MongoDB", "REST API"],
    github: "https://github.com/Megharaj30",
  },
  {
    title: "Carbon Footprint Calculator",
    description:
      "Tracks user activities and calculates carbon footprint. Suggests ways to reduce carbon usage.",
    tech: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/Megharaj30",
  },
  {
    title: "Flight Price Prediction Model",
    description:
      "Flask web app integrating ML model to predict flight prices. Achieved high R² score on large dataset.",
    tech: ["Python", "Flask", "Sklearn"],
    github: "https://github.com/Megharaj30",
  },
];

// Unique color and hover effect per project title
const titleColorVariants = [
  'text-fuchsia-600 group-hover:text-orange-500',
  'text-teal-500 group-hover:text-lime-400',
  'text-rose-600 group-hover:text-amber-400',
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-[#0f172a] text-black dark:text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/90 dark:bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:scale-[1.015] hover:shadow-cyan-500/40 transition-all duration-300 group"
            >
              <h3
                className={`text-xl font-semibold mb-2 transition group-hover:scale-[1.02] ${titleColorVariants[index % titleColorVariants.length]}`}
              >
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-cyan-600 text-white text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 dark:text-cyan-400 text-sm hover:underline"
              >
                GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
