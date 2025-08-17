import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Johnson',
    position: 'Founder & CEO',
    image: '/images/team/sophia.jpg',
  },
  {
    name: 'Liam Smith',
    position: 'Chief Makeup Artist',
    image: '/images/team/liam.jpg',
  },
  {
    name: 'Olivia Davis',
    position: 'Marketing Director',
    image: '/images/team/olivia.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-orange-600">
      <header className="text-center py-12">
        <motion.div 
          className="text-5xl font-bold mb-4" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          About luxury LRP cosmetics
        </motion.h1>
        <motion.div 
          className="text-xl max-w-2xl mx-auto" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          At luxury LRP cosmetics, we believe in the fusion of elegance and innovation. Our journey started with a dream to revolutionize the cosmetics world, offering products that embody luxury while being accessible to all beauty enthusiasts.
        </motion.p>
      </header>

      <section className="py-12">
        <motion.div 
          className="text-3xl font-semibold text-center mb-8" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Our History
        </motion.h2>
        <motion.div 
          className="text-lg max-w-3xl mx-auto text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          Founded in 2020, luxury LRP cosmetics emerged from a passion for high-quality beauty products. Our founder, Sophia Johnson, envisioned a brand that not only enhances beauty but also empowers individuals. With a commitment to sustainability and cruelty-free practices, we continuously strive to redefine luxury in cosmetics.
        </motion.p>
      </section>

      <section className="py-12 bg-orange-100">
        <motion.div 
          className="text-3xl font-semibold text-center mb-8 text-orange-600" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <img src={member.image} alt={member.name} className="rounded-full mb-4 w-32 h-32 mx-auto"/>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-md text-orange-600">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <motion.div 
          className="text-3xl font-semibold text-center mb-8" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Our Values
        </motion.h2>
        <motion.div 
          className="text-lg max-w-2xl mx-auto text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          At luxury LRP cosmetics, our core values revolve around integrity, innovation, and inclusivity. We prioritize creating a diverse range of products that cater to all skin types and tones, ensuring that everyone can experience the luxury of beauty.
        </motion.p>
      </section>
    </div>
  );
};

export default About;