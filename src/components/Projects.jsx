import React from 'react';
import Tilt from 'react-parallax-tilt';
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
    title: "Movie Recommender System",
    description:
      "Suggests top 30 similar movies using TF-IDF & cosine similarity based on genres, cast, and crew.",
    tech: ["Python", "Flask", "Sklearn"],
    github: "https://github.com/Megharaj30",
  },
];

const ProjectCard = ({ title, description, tech, github, index }) => {
  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.25} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="bg-gray-100 dark:bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-cyan-500/30 transition"
      >
        <h3 className="text-black dark:text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-800 dark:text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-cyan-600 text-white text-xs px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 dark:text-cyan-400 text-sm hover:underline"
        >
          GitHub
        </a>
      </motion.div>
    </Tilt>
  );
};

function Projects() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-[#0f172a] text-black dark:text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
