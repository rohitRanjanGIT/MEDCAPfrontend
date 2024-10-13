import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import Logo from '../assets/medcap_logo.png'; // Adjust path based on your structure
import Header from '../components/Header'; // Assuming the same Header component is used
import serverUrl from '../components/server_url';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
    bloodType: '',
    gender: '',
    phone: '',     // New field
    height: '',    // New field
    weight: '',    // New field
    profilePicture: null // New field for the uploaded image
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value // Handle file input separately
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Create a FormData object to handle multipart/form-data
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      const response = await axios.post(`${serverUrl}/api/auth/register`, data, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set the content type for the form data
        }
      });

      // Handle success response
      setSuccessMessage('Registration successful! Please log in.');
      setError(null);

      // Clear form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        dob: '',
        bloodType: '',
        gender: '',
        phone: '',     // Clear new field
        height: '',    // Clear new field
        weight: '',    // Clear new field
        profilePicture: null // Clear new field
      });

    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
      setSuccessMessage(null);
    }
  };

  return (
    <div className="bg-pink-200 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col md:flex-row items-start">
        {/* Form Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">Join MedCap Today!</h1>
          <p className="text-xl mb-8">
            Create your account to start your personalized health care journey.
          </p>

          {error && <div className="text-red-500 mb-4">{error}</div>}
          {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First Name Field */}
            <div>
              <label htmlFor="firstName" className="block text-lg font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your first name"
                required
              />
            </div>

            {/* Last Name Field */}
            <div>
              <label htmlFor="lastName" className="block text-lg font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your last name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-lg font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Date of Birth Field */}
            <div>
              <label htmlFor="dob" className="block text-lg font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                required
              />
            </div>

            {/* Blood Type Field */}
            <div>
              <label htmlFor="bloodType" className="block text-lg font-medium">
                Blood Type
              </label>
              <select
                id="bloodType"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
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

            {/* Gender Field */}
            <div>
              <label htmlFor="gender" className="block text-lg font-medium">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                required
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-lg font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Height Field */}
            <div>
              <label htmlFor="height" className="block text-lg font-medium">
                Height (in cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your height in cm"
                required
              />
            </div>

            {/* Weight Field */}
            <div>
              <label htmlFor="weight" className="block text-lg font-medium">
                Weight (in kg)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your weight in kg"
                required
              />
            </div>

            {/* Profile Picture Field */}
            <div>
              <label htmlFor="profilePicture" className="block text-lg font-medium">
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                accept="image/*" // Accept only image files
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

        {/* Logo Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative mt-8 md:mt-0">
            <div className="bg-[#F8CDEA] w-64 h-64 rounded-full"></div>
            <img
              src={Logo}
              alt="MedCap Logo"
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </main>

      {/* Statistics */}
      <div className="bg-purple-500 py-8 px-12">
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
