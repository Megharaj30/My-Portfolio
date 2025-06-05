import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiCplusplus, SiMysql, SiMongodb, SiJavascript,
  SiHtml5, SiCss3, SiPhp, SiReact, SiPandas, SiNumpy,
  SiFlask, SiTailwindcss
} from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';
import { GiCircuitry, GiNetworkBars } from 'react-icons/gi'; // For DSA & OOP icons

const categories = [
  {
    title: 'Languages & Fundamentals',
    skills: [
      { name: 'C++', icon: <SiCplusplus size={28} color="#004482" /> },
      { name: 'Python', icon: <SiPython size={28} color="#3472A6" /> },
      { name: 'Java', icon: <BiLogoJava size={28} color="#ED8B00" /> },
      { name: 'Data Structures & Algorithms (DSA)', icon: <GiNetworkBars size={28} color="#34d399" /> },
      { name: 'Object Oriented Programming (OOP)', icon: <GiCircuitry size={28} color="#60a5fa" /> },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 size={28} color="#E34F26" /> },
      { name: 'CSS3', icon: <SiCss3 size={28} color="#1572B6" /> },
      { name: 'JavaScript', icon: <SiJavascript size={28} color="#F7DF1E" /> },
      { name: 'React.js', icon: <SiReact size={28} color="#61DAFB" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} color="#38BDF8" /> },
      { name: 'PHP', icon: <SiPhp size={28} color="#8892BF" /> },
      { name: 'Flask', icon: <SiFlask size={28} color="#000000" /> },
    ],
  },
  {
    title: 'Data Science & Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql size={28} color="#00758F" /> },
      { name: 'MongoDB', icon: <SiMongodb size={28} color="#4DB33D" /> },
      { name: 'Pandas', icon: <SiPandas size={28} color="#150458" /> },
      { name: 'NumPy', icon: <SiNumpy size={28} color="#013243" /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-[#1e293b] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
           My Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/10 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-md hover:shadow-cyan-500/30 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-cyan-300 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"
                  >
                    {skill.icon}
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
