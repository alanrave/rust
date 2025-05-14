import { motion } from 'framer-motion';
import AnglesUp from './AnglesUp';
import Candle from './Candle';
import CloudRain from './CloudRain';
import EyeSlash from './EyeSlash';
import FaceSmile from './FaceSmile';
import Ghost from './Ghost';
import Lightbulb from './LightBulb';
import Music from './Music';
import Radio from './Radio';

const svgs = [
  { Component: AnglesUp, size: 'w-8 h-8', color: 'text-blue-400' },
  { Component: Candle, size: 'w-10 h-10', color: 'text-purple-400' },
  { Component: CloudRain, size: 'w-12 h-12', color: 'text-blue-300' },
  { Component: EyeSlash, size: 'w-9 h-9', color: 'text-gray-400' },
  { Component: FaceSmile, size: 'w-11 h-11', color: 'text-yellow-400' },
  { Component: Ghost, size: 'w-10 h-10', color: 'text-gray-300' },
  { Component: Lightbulb, size: 'w-9 h-9', color: 'text-yellow-300' },
  { Component: Music, size: 'w-8 h-8', color: 'text-pink-400' },
  { Component: Radio, size: 'w-10 h-10', color: 'text-indigo-400' },
];

export default function FloatingSVGs() {
  return (
    <>
      {svgs.map(({ Component, size, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${size} ${color} opacity-70`}
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            rotate: Math.random() * 360,
          }}
          animate={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
        >
          <Component />
        </motion.div>
      ))}
    </>
  );
}