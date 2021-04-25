import React from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

const SnowFall = () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width - 20}
      height={height}
      colors={['rgba(255, 255, 255, 0.3)']}
      confettiSource={{ x: 0, y: 60, w: width, h: 0 }}
      wind={-0.05}
      gravity={0.02}
      initialVelocityY={{ min: 1, max: 15 }}
      friction={0.99}
      drawShape={ctx => {
        ctx.beginPath();
        ctx.arc(0, 0, 2.5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }}
    />
  );
};

export default SnowFall;
