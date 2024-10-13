import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // To navigate on error
import AnalysisHistory from '../components/AnalysisHistory';
import UserDetails from '../components/UserDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';
import serverUrl from '../components/server_url';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [analysisHistory, setAnalysisHistory] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get token from local storage
        const token = localStorage.getItem('accessToken');
        
        if (!token) {
          // If no token, redirect to login page
          navigate('/login');
          return;
        }

        // Make the GET request with Authorization header
        const response = await axios.get(`${serverUrl}/api/auth/secure`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        // Extract user info and reports from the response
        const { user, medicalReports } = response.data;

        // Set the state with the user info and analysis history (medical reports)
        setUser(user);
        setAnalysisHistory(medicalReports.reports);

      } catch (error) {
        // If the request fails (e.g., invalid token), redirect to login page
        console.error('Failed to fetch user data:', error);
        navigate('/login'); // Redirect to login page on error
      }
    };

    // Fetch user data on component mount
    fetchUserData();
  }, [navigate]); // Adding `navigate` as a dependency so the function has access to it

  if (!user) {
    // Show a loading state while fetching data
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // Clear token on logout
    localStorage.removeItem('user'); // Clear user data
    localStorage.setItem('loggedIn', 'false'); // Set loggedIn to false
    navigate('/login'); // Redirect to login page
  };

  return (
    <>
      <Header />

      <div className="bg-pink-100 min-h-screen p-8">
        <div className="max-w-4xl mx-auto bg-pink-50 rounded-lg shadow-lg overflow-hidden">
          <h1 className="text-3xl font-bold text-center py-6 bg-pink-200 text-gray-800">User Dashboard</h1>

          <div className="p-6">
            {/* User Profile Section */}
            <div className="mb-8 text-center">
              <div className="mb-6">
                <img 
                  src={user.profilePicture || "/api/placeholder/150/150"} 
                  alt="Profile" 
                  className="w-36 h-36 rounded-full mx-auto bg-gray-300"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{`${user.firstName} ${user.lastName}`}</h2>
              <p className="text-gray-600 mb-4">{user.dateOfBirth}</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300">
                Edit Profile
              </button>
            </div>
            
            {/* User Details and Analysis History */}
            <div className="space-y-8">
              <UserDetails user={user} />
              <AnalysisHistory history={analysisHistory} />
            </div>
          </div>

          {/* Logout Button */}
          <div className="px-6 py-4 bg-gray-100 text-center">
            <button 
              className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300"
              onClick={handleLogout} // Call handleLogout on click
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserDashboard;
