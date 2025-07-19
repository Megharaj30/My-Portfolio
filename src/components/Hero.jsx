import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

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

      {/* 👇 Updated font size and deleteSpeed */}
      <motion.p
        className="text-xl sm:text-2xl mt-10 text-center font-semibold 
                   bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                   bg-clip-text text-transparent dark:from-cyan-400 dark:via-indigo-400 dark:to-pink-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Typewriter
          words={[
            'I am a Software Developer.',
            'I craft intelligent solutions with clean code.',
            'I am open for Internships and Full-time roles.'
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={35}  
          delaySpeed={1000}
        />
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 
                     transition rounded-full text-white font-semibold shadow-lg cursor-pointer"
        >
          About Me <FaArrowRight />
        </Link>
      </motion.div>
    </section>
  );
}

export default Hero;
