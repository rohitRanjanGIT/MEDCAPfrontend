import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import serverUrl from '../components/server_url';
import axios from 'axios';

const ReportSection = ({ reportContent }) => (
  <div className="bg-pink-100 p-6 rounded-lg mb-6">
    <h2 className="text-2xl font-bold mb-4">Your Report:</h2>
    <p className="text-gray-700">{reportContent}</p>
  </div>
);

const InfoCard = ({ icon, title, description }) => (
  <div className="bg-pink-200 p-4 rounded-lg transition-transform transform hover:scale-105 mb-4">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <div className="text-sm text-gray-700">{description}</div>
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
  const [medicalReports, setMedicalReports] = useState([]);
  const [latestAnalysis, setLatestAnalysis] = useState({});
  const [loading, setLoading] = useState(true); // Changed loading to state

  const fetchMedicalReports = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken'); // Get the accessToken from localStorage
      if (!accessToken) {
        console.error("Access token not found");
        return;
      }

      const response = await axios.get(`${serverUrl}/api/auth/secure`, {
        headers: {
          Authorization: `Bearer ${accessToken}` // Add Authorization header
        }
      });

      console.log('Medical Reports:', response.data.medicalReports); // Log the fetched reports
      setMedicalReports(response.data.medicalReports); // Store the reports in state

      // Extract the latest analysis based on createdAt
      const latestReport = response.data.medicalReports.reduce((latest, report) => {
        return new Date(report.createdAt) > new Date(latest.createdAt) ? report : latest;
      }, response.data.medicalReports[0]);

      // Parse the analysis string to JSON
      const parsedAnalysis = JSON.parse(latestReport.analysis);
      setLatestAnalysis(parsedAnalysis);
      setLoading(false); // Set loading to false when data is fetched

      console.log('Latest Analysis:', parsedAnalysis); // Log the parsed analysis
    } catch (error) {
      console.error('Error fetching medical reports:', error);
    }
  };

  useEffect(() => {
    fetchMedicalReports();
  }, []);

  // Create separate cards for each section of the Diet Plan
  const dietCards = [
    {
      title: "Foods to Eat",
      description: latestAnalysis["Diet Plan"]?.Eat?.map((food, index) => ({
        icon: <span>🍏</span>,
        title: food.Food,
        description: food.Benefit,
      })) || [], // Fallback to empty array if undefined
    },
    {
      title: "Foods to Avoid",
      description: latestAnalysis["Diet Plan"]?.Avoid?.map((food, index) => ({
        icon: <span>🚫</span>,
        title: food.Food,
        description: food.Reason,
      })) || [], // Fallback to empty array if undefined
    },
    {
      title: "Example Diet Plan",
      description: Object.entries(latestAnalysis["Diet Plan"]?.["Example Diet Plan"] || {}).map(([mealType, meal], index) => ({
        icon: <span>🍽️</span>,
        title: mealType,
        description: meal,
      })) || [], // Fallback to empty array if undefined
    },
    {
      title: "Daily Calorie Intake",
      description: [
        {
          icon: <span>📊</span>,
          title: "Recommendation",
          description: latestAnalysis["Diet Plan"]?.["Daily Calorie Intake"]?.Recommendation || 'Consult a dietitian for personalized advice.',
        },
        {
          icon: <span>🧂</span>,
          title: "Sodium Content",
          description: latestAnalysis["Diet Plan"]?.["Daily Calorie Intake"]?.SodiumContent || 'Aim for less than 2,300 mg of sodium per day.',
        },
      ],
    },
  ];

  // Flatten the dietCards to make it easier for rendering
  const flattenedDietCards = dietCards.flatMap(card => 
    card.description.map(desc => ({
      title: card.title,
      ...desc,
    }))
  );

  const lifestyleCards = [
    {
      icon: <span>🏋️‍♀️</span>,
      title: "Lifestyle Plan",
      description: (
        <div>
          <h4>Exercise Recommendations:</h4>
          <ul>
            {latestAnalysis["Lifestyle Plan"]?.Exercise?.map((exercise, index) => (
              <li key={index}>{exercise.Type} - {exercise.Frequency}, {exercise.Duration}</li>
            )) || []} {/* Fallback to empty array if undefined */}
          </ul>
          <h4>Daily Activities:</h4>
          <ul>
            {latestAnalysis["Lifestyle Plan"]?.DailyPhysicalActivities?.map((activity, index) => (
              <li key={index}>{activity}</li>
            )) || []} {/* Fallback to empty array if undefined */}
          </ul>
          <p>Minimum Exercise: {latestAnalysis["Lifestyle Plan"]?.MinimumTimes}</p>
        </div>
      ),
    },
  ];

  const precautionCards = [
    {
      icon: <span>⚠️</span>,
      title: "Precaution Plan",
      description: (
        <div>
          <h4>At-Risk Diseases:</h4>
          <p>{latestAnalysis["Precaution Plan"]?.AtRiskDiseases || 'N/A'}</p> {/* Fallback to 'N/A' if undefined */}
          <h4>Precautions:</h4>
          <p>{latestAnalysis["Precaution Plan"]?.Precautions || 'N/A'}</p> {/* Fallback to 'N/A' if undefined */}
        </div>
      ),
    },
  ];

  return (
    <>
      <Header />
      {loading ? <div>Loading...</div> : (
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-purple-600 text-white p-6 rounded-t-lg">
            <h1 className="text-3xl font-bold mb-4">Healthcare Plan</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-b-lg">
            <ReportSection reportContent={latestAnalysis["Summary of Current Condition"] || 'N/A'} />
            
            {/* Separate Carousels for each plan */}
            <CardPlanSection title="Diet Plan" cards={flattenedDietCards} />
            <CardPlanSection title="Lifestyle Plan" cards={lifestyleCards} />
            <CardPlanSection title="Precaution Plan" cards={precautionCards} />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default HealthPlanDashboard;
