import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const AnimatedHome = () => {
  const { scrollYProgress } = useScroll();
  
  const backgroundColor1 = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#000000", "#4f46e5"] // black to indigo
  );
  const backgroundColor2 = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#1f1f1f", "#7c3aed"] // dark gray to purple
  );

  const floatingArrowVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const underlineVariants = {
    animate: {
      width: ["0%", "100%", "0%"],
      left: ["0%", "0%", "100%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-full h-screen z-0"
        style={{ 
          background: `linear-gradient(45deg, ${backgroundColor1}, ${backgroundColor2})`,
        }}
      />
      
      <div className="relative z-10">
        {/* Home Section */}
        <section className="h-screen flex flex-col items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-5xl font-bold mb-4 relative">
              Your Name
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-blue-500"
                variants={underlineVariants}
                animate="animate"
              />
            </h1>
            <p className="text-xl mb-12">Your Role or Tagline</p>
            
            {/* Floating arrow */}
            <motion.div
              className="mt-8"
              variants={floatingArrowVariants}
              animate="animate"
            >
              <svg 
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-transparent p-8">
          <div className="text-white max-w-2xl">
            <h2 className="text-4xl font-bold mb-6 relative inline-block">
              About Me
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-purple-500"
                variants={underlineVariants}
                animate="animate"
              />
            </h2>
            <p className="text-xl">Your about text here...</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnimatedHome;
