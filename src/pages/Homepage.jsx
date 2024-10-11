import React from 'react';
import Heart from '../assets/mdc_logo.png';
import Logo from '../assets/medcap_logo.png'
import Header from '../components/Headder';


const HomePage = () => {
  return (
    <div className="bg-pink-200 min-h-screen flex flex-col">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-4">
            Cap your health,<br />with MedCap!
          </h1>
          <p className="text-xl mb-8">
            Get a personalized health care plan to maximize your wellbeing
            and live life to the fullest
          </p>
          <button className="bg-pink-400 text-white px-6 py-3 rounded-full text-lg">
            Get started
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-#F8CDEA w-64 h-64 rounded-full"></div>
            <img 
              src={Heart}
              alt="Heart with ECG" 
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </main>

      {/* Statistics */}
      <div className="bg-purple-500 py-8">
        <div className="container mx-auto flex justify-between text-white text-center">
          <div>
            <div className="text-4xl font-bold">8+</div>
            <div>Experienced</div>
          </div>
          <div>
            <div className="text-4xl font-bold">122+</div>
            <div>Teams</div>
          </div>
          <div>
            <div className="text-4xl font-bold">563+</div>
            <div>Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold">232+</div>
            <div>Project Done</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;