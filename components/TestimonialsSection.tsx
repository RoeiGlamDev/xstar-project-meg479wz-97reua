import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
    name: string;
    photo: string;
    review: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: 'Sophia Martinez',
        photo: '/images/sophia.jpg',
        review: 'Luxury LRP cosmetics transformed my skincare routine. The glow serum is a game changer!',
        rating: 5,
    },
    {
        name: 'Isabella Thompson',
        photo: '/images/isabella.jpg',
        review: 'I love the velvety texture of the lipsticks. They last all day and feel amazing on my lips!',
        rating: 4,
    },
    {
        name: 'Ava Johnson',
        photo: '/images/ava.jpg',
        review: 'The quality of the makeup brushes is unparalleled. I can’t imagine my makeup routine without them!',
        rating: 5,
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="bg-white py-12 px-6">
            <h2 className="text-center text-4xl font-bold text-orange-600 mb-8">
                What Our Customers Say
            </h2>
            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="bg-orange-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.photo}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full border-2 border-orange-600"
                            />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-orange-600">{testimonial.name}</h3>
                                <div className="flex">
                                    {Array.from({ length: testimonial.rating }, (_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-orange-600"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10 15l-5.878 3.09 1.121-6.536L0 6.91l6.545-.582L10 0l2.455 5.328L20 6.91l-5.242 4.644 1.121 6.536L10 15z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-700 text-base">{testimonial.review}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;