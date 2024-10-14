import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AnalysisHistory from '../components/AnalysisHistory';
import UserDetails from '../components/UserDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EditProfileForm from '../components/EditProfileForm'; // Import the new component
import serverUrl from '../components/server_url';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [analysisHistory, setAnalysisHistory] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // State to control edit form visibility
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get(`${serverUrl}/api/auth/secure`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const { user, medicalReports } = response.data;

        setUser(user);
        setAnalysisHistory(medicalReports.reports);

      } catch (error) {
        console.error('Failed to fetch user data:', error);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    localStorage.setItem('loggedIn', 'false');
    navigate('/login');
  };

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser); // Update the user state with the new data
  };

  return (
    <>
      <Header />

      <div className=" min-h-#fffff p-8">
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
              <button 
                className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300"
                onClick={() => setIsEditing(true)} // Show the edit form on click
              >
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
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Editing Profile */}
      {isEditing && (
        <EditProfileForm 
          user={user}
          onClose={() => setIsEditing(false)} // Close the form
          onUpdate={handleUpdateUser} // Pass the update function
        />
      )}

      <Footer />
    </>
  );
};

export default UserDashboard;
