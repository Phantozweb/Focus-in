
'use client';

import { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  targetValue: number;
  duration?: number; // milliseconds
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ targetValue, duration = 1000, className }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const animatedValue = Math.floor(percentage * targetValue);
      
      setCurrentValue(animatedValue);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue); // Ensure it ends exactly on target
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      startTime = null; 
    };
  }, [targetValue, duration]);

  return <span className={className}>{currentValue.toLocaleString()}</span>;
};

export default AnimatedNumber;
