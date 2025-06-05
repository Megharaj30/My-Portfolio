import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-[#0f172a] text-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
           Let's Connect
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Clickable Contact Headings */}
          <div className="flex-1 space-y-6">
            <a
              href="mailto:patilmegharaj90@gmail.com"
              className="flex items-center gap-3 text-cyan-400 text-lg font-semibold hover:text-cyan-300 transition cursor-pointer"
            >
              <FaEnvelope size={24} />
               Drop Me a Message
            </a>
            <a
              href="https://linkedin.com/in/megharaj-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cyan-400 text-lg font-semibold hover:text-cyan-300 transition cursor-pointer"
            >
              <FaLinkedin size={24} />
               Let’s Connect on LinkedIn
            </a>
            <a
              href="https://github.com/Megharaj30"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cyan-400 text-lg font-semibold hover:text-cyan-300 transition cursor-pointer"
            >
              <FaGithub size={24} />
               Explore My Code Jungle
            </a>
            <a
              href="/MegharajPatil.pdf"
              download
              className="inline-block mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 transition rounded-full text-white font-semibold shadow-lg"
            >
              📄 Download Resume
            </a>
          </div>

          {/* Contact Form */}
          <motion.form
            action="https://formsubmit.co/patilmegharaj90@gmail.com"
            method="POST"
            className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-md space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hidden inputs for behavior control */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Optional redirect after submit */}
            {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition p-3 rounded-lg font-semibold"
            >
              Send Message 
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;