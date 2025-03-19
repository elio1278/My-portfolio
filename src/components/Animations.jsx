import { motion } from 'framer-motion';
import React from 'react';

const Animations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Floating arrows on the right */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="space-y-4"
        >
          <div className="w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45"></div>
          <div className="w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45"></div>
        </motion.div>
      </div>

      {/* Animated corner decorations */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-white"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated dots */}
      <div className="absolute bottom-8 left-8">
        <motion.div
          className="flex space-x-2"
          animate={{
            x: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Animations;
