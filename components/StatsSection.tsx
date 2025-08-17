import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

interface StatsSectionProps {
  achievements: {
    title: string;
    count: number;
  }[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ achievements }) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-10">
          Achievements of luxury LRP cosmetics
        </h2>
        <div className="flex justify-around flex-wrap">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-semibold">{achievement.title}</h3>
              <motion.div
                className="text-5xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <CountUp start={0} end={achievement.count} duration={2} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUp: React.FC<{ start: number; end: number; duration: number }> = ({ start, end, duration }) => {
  const [count, setCount] = React.useState(start);

  React.useEffect(() => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default StatsSection;