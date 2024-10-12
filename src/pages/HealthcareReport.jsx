import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReportSection = ({ reportContent }) => (
  <div className="bg-pink-100 p-6 rounded-lg mb-6">
    <h2 className="text-2xl font-bold mb-4">Your Report:</h2>
    <p className="text-gray-700">{reportContent}</p>
  </div>
);

const InfoCard = ({ icon, title, description }) => (
  <div className="bg-pink-200 p-4 rounded-lg">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

const CardPlanSection = ({ title, cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2 < cards.length ? prevIndex + 2 : prevIndex));
  };

  const prevCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : prevIndex));
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <div className="flex space-x-4">
          {cards.slice(currentIndex, currentIndex + 2).map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
        {currentIndex > 0 && (
          <button
            onClick={prevCards}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-300 p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {currentIndex + 2 < cards.length && (
          <button
            onClick={nextCards}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-300 p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

const HealthPlanDashboard = () => {
  const reportContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac risus nibh. Integer cursus nibh sed tincidunt volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";

  const cardPlans = [
    {
      title: "Diet Plan",
      cards: [
        { icon: <span>🥗</span>, title: "Personalized Nutrition Plans", description: "Receive a tailored nutrition plan designed specifically for your body and goals." },
        { icon: <span>👩‍🏫</span>, title: "Guidance from Certified Nutritionists", description: "Our team of experienced and certified nutritionists will provide professional guidance." },
        { icon: <span>📊</span>, title: "Food Tracking and Analysis", description: "Effortlessly track your food intake using our user-friendly app." },
        { icon: <span>📝</span>, title: "Meal Planning and Recipes", description: "Access a vast collection of delicious and healthy recipes tailored to your dietary needs." },
      ],
    },
    {
      title: "Life Style Plan",
      cards: [
        { icon: <span>🏋️‍♀️</span>, title: "Lifestyle and Behavior Coaching", description: "Work with you to develop healthy habits, address emotional eating, and provide strategies." },
        { icon: <span>🎓</span>, title: "Nutritional Education and Workshops", description: "Expand your knowledge of nutrition through informative articles and educational workshops." },
        { icon: <span>🎓</span>, title: "Nutritional Education and Workshops", description: "Expand your knowledge of nutrition through informative articles and educational workshops." },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-purple-600 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold mb-4">Healthcare Plan</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.</p>
      </div>
      <div className="bg-pink-50 p-6 rounded-b-lg">
        <ReportSection reportContent={reportContent} />
        {cardPlans.map((plan, index) => (
          <CardPlanSection key={index} title={plan.title} cards={plan.cards} />
        ))}
      </div>
    </div>
  );
};

export default HealthPlanDashboard;