import React from 'react';
import { Stethoscope, Brain, Heart } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full sm:w-64">
    <div className="text-pink-400 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section className="bg-pink-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h2>
        <div className="flex flex-wrap justify-center">
          <ServiceCard
            icon={<Stethoscope size={48} />}
            title="Health Checkups"
            description="Regular comprehensive health assessments to keep you in top shape."
          />
          <ServiceCard
            icon={<Brain size={48} />}
            title="Mental Health Counseling"
            description="Professional support for your emotional and psychological wellbeing."
          />
          <ServiceCard
            icon={<Heart size={48} />}
            title="Personalized Care Plans"
            description="Tailored health strategies to meet your unique needs and goals."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;