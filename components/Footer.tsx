import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { label: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = () => {
  const companyName = "luxury LRP cosmetics";
  const links = [
    { label: 'Home', url: '/' },
    { label: 'Shop', url: '/shop' },
    { label: 'About Us', url: '/about' },
    { label: 'Contact', url: '/contact' },
    { label: 'FAQs', url: '/faqs' },
  ];

  const socialMedia = [
    { platform: 'Facebook', url: 'https://facebook.com/luxurylrpcosmetics' },
    { platform: 'Instagram', url: 'https://instagram.com/luxurylrpcosmetics' },
    { platform: 'Twitter', url: 'https://twitter.com/luxurylrpcosmetics' },
  ];

  const linkHoverEffect = {
    hover: { scale: 1.1, color: '#FFA500' }, // orange color on hover
  };

  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {companyName}
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
          {links.map((link) => (
            <motion.div
              key={link.label}
              href={link.url}
              className="text-lg hover:underline transition duration-300"
              variants={linkHoverEffect}
              whileHover="hover"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        <div className="mt-6">
          <p className="text-sm">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            {socialMedia.map((social) => (
              <motion.div
                key={social.platform}
                href={social.url}
                className="text-orange-600 hover:text-orange-400 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {social.platform}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;