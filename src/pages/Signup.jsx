import React from 'react';
import Logo from '../assets/medcap_logo.png'; // Adjust path based on your structure
import Header from '../components/Headder'; // Assuming the same Header component is used

const SignupPage = () => {
  return (
    <div className="bg-pink-200 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-4">
            Join MedCap Today!
          </h1>
          <p className="text-xl mb-8">
            Create your account to start your personalized health care journey.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input 
                type="text"
                id="name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input 
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="bloodtype" className="block text-lg font-medium">
                Blood Type
              </label>
              <select
                id="bloodtype"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                required
              >
                <option value="">Select your blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div>
              <label htmlFor="gender" className="block text-lg font-medium">
                Gender
              </label>
              <select
                id="gender"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact" className="block text-lg font-medium">
                Contact Number
              </label>
              <input 
                type="tel"
                id="contact"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your contact number"
                required
              />
            </div>

            <button className="w-full bg-pink-400 text-white px-6 py-3 rounded-full text-lg">
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-pink-500 font-medium">Log in here</a>.
          </p>
        </div>

        <div className="w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-#F8CDEA w-64 h-64 rounded-full"></div>
            <img 
              src={Logo}
              alt="MedCap Logo"
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </main>

      {/* Statistics */}
      <div className="bg-purple-500 py-8">
        <div className="container mx-auto flex justify-between text-white text-center">
          <div>
            <div className="text-4xl font-bold">15k+</div>
            <div>Happy Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold">10+</div>
            <div>Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold">100+</div>
            <div>Support Agents</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
