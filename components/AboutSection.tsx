import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    description: 'With over a decade in the beauty industry, Sophia leads luxury LRP cosmetics with passion and innovation.',
    image: '/images/sophia.jpg',
  },
  {
    name: 'James Li',
    role: 'Head Chemist',
    description: 'A master formulator, James ensures that each product meets the highest standards of luxury and efficacy.',
    image: '/images/james.jpg',
  },
  {
    name: 'Olivia Brown',
    role: 'Marketing Director',
    description: 'Olivia crafts the brand’s story and ensures luxury LRP cosmetics resonates with sophistication and elegance.',
    image: '/images/olivia.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-8">About luxury LRP cosmetics</h2>
        <p className="text-lg mb-4">
          At luxury LRP cosmetics, we believe that beauty is an experience, not just a product. Our journey began with a vision to create luxurious cosmetic products that empower individuals to express their unique beauty. Each product is crafted with the finest ingredients, ensuring that you feel as radiant as you truly are.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h3>
        <p className="text-lg mb-4">
          Our mission is to redefine luxury in the cosmetics industry by delivering unparalleled quality and sophistication. We are committed to innovation, sustainability, and inclusivity, ensuring that every individual can find their perfect match in our exquisite range of products.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-sm italic mb-2">{member.role}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Our Values</h3>
        <p className="text-lg mb-4">
          luxury LRP cosmetics values integrity, quality, and customer satisfaction. We strive to create products that not only enhance beauty but also contribute to a sustainable future.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Achievements</h3>
        <p className="text-lg mb-4">
          We are proud to have been recognized as one of the top luxury cosmetic brands in the industry, with awards for innovation and product excellence. Our commitment to quality and luxury is reflected in every product we create.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;