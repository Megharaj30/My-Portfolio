import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 
                 bg-white dark:bg-gradient-to-br dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] 
                 text-black dark:text-white transition-colors duration-300 pt-20"
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey there! I'm{' '}
        <span className="text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-white/10 px-3 py-1 rounded-lg transition">
          Megharaj Patil
        </span>
      </motion.h1>

      <motion.p
        className="text-md sm:text-lg md:text-xl max-w-3xl mt-6 text-center 
                   text-gray-600 dark:text-gray-300 transition"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        I craft intelligent solutions with clean code. From building fast, responsive web apps
        to training smart machine learning models — I merge logic with creativity.
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 
                     transition rounded-full text-white font-semibold shadow-lg cursor-pointer"
        >
          View My Work <FaArrowRight />
        </Link>
      </motion.div>
    </section>
  );
}

export default Hero;
