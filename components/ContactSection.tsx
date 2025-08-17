import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'Inquiries',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.reason) newErrors.reason = 'Please select a reason';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-white p-8">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }} 
        className="max-w-xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center text-orange-600">Contact luxury LRP cosmetics</h2>
        <p className="text-center text-gray-600 mb-4">For inquiries, please fill out the form below.</p>
        
        {submitted ? (
          <div className="text-center text-green-600">Thank you for your message!</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500" 
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500" 
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="reason" className="block text-gray-700">Reason for Contact</label>
              <select 
                name="reason" 
                id="reason" 
                value={formData.reason} 
                onChange={handleChange} 
                className="border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="Inquiries">Inquiries</option>
                <option value="Partnerships">Partnerships</option>
                <option value="Customer Support">Customer Support</option>
              </select>
              {errors.reason && <p className="text-red-500">{errors.reason}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={4} 
                value={formData.message} 
                onChange={handleChange} 
                className="border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.message && <p className="text-red-500">{errors.message}</p>}
            </div>

            <button 
              type="submit" 
              className="bg-orange-600 text-white p-2 w-full hover:bg-orange-500 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-orange-600">Business Information</h3>
          <p className="text-gray-600">luxury LRP cosmetics</p>
          <p className="text-gray-600">123 Luxury St, Glamour City, CA 90210</p>
          <p className="text-gray-600">Business Hours: Mon - Fri, 9 AM - 6 PM</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;