import React from 'react';
import Logo from '../assets/medcap_logo.png'; // Adjust path based on your structure
import Header from '../components/Header'; // Assuming you have the same Header component

const LoginPage = () => {
  return (
    <div className="bg-pink-200 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-12 py-12 flex flex-col md:flex-row-reverse items-center">
        {/* Logo Section (will be on top on mobile, and on the right on larger screens) */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="bg-[#F8CDEA] w-full h-full rounded-full"></div>
            <img 
              src={Logo}
              alt="MedCap Logo"
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
            Welcome Back to MedCap!
          </h1>
          <p className="text-base md:text-xl mb-8 text-center md:text-left">
            Please log in to access your personalized healthcare dashboard.
          </p>

          <form className="space-y-6">
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
              <label htmlFor="password" className="block text-lg font-medium">
                Password
              </label>
              <input 
                type="password"
                id="password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your password"
                required
              />
            </div>

            <button className="w-full bg-pink-400 text-white px-6 py-3 rounded-full text-lg">
              Log In
            </button>
          </form>

          <p className="mt-4 text-sm text-center md:text-left">
            Don't have an account?{' '}
            <a href="/signup" className="text-pink-500 font-medium">Sign up here</a>.
          </p>
        </div>
      </main>

      {/* Statistics */}
      <div className="bg-purple-500 py-8 px-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-white text-center">
          <div className="mb-4 md:mb-0">
            <div className="text-3xl md:text-4xl font-bold">10k+</div>
            <div>Users</div>
          </div>
          <div className="mb-4 md:mb-0">
            <div className="text-3xl md:text-4xl font-bold">24/7</div>
            <div>Support</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">99.9%</div>
            <div>Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
