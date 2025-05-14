import { motion } from 'framer-motion';
import { useRef } from 'react';
import FloatingSVGs from './FloatingSVGs';

// Add this inside the section tag, before the content div:
<FloatingSVGs />
export default function Hero() {
  const constraintsRef = useRef(null);
  
  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden"
      ref={constraintsRef}
    >
      {/* Floating SVGs will go here */}
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The AI Design Studio for Graphic Designers
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafted to make you <span className="font-bold">faster</span> and more <span className="font-bold">creative</span>.<br />
          AI studio for graphic designers, entrepreneurs, and influencers.
        </motion.p>
        
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start For Free →
        </motion.button>
        
        <p className="mt-4 text-gray-500">
          No Credit Card Required
        </p>
      </div>
    </section>
  );
}