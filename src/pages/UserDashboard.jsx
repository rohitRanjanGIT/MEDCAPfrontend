import AnalysisHistory from '../components/AnalysisHistory'
import UserDetails from '../components/UserDetails'
import Headder from '../components/Headder'
import Footer from '../components/Footer'


const UserDashboard = () => {
  // Mock user data
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-01-01',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900'
  };
  // Mock analysis history
  const analysisHistory = [
    { date: '2023-10-15', report: 'Annual Check-up' },
    { date: '2023-08-22', report: 'Blood Test' },
    { date: '2023-06-10', report: 'Allergy Test' },
  ];

  return (
    <>
    <Headder></Headder>
    <div className="bg-pink-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-pink-50 rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-center py-6 bg-pink-200 text-gray-800">User Dashboard</h1>
        
        <div className="p-6">
          {/* User Profile Section */}
          <div className="mb-8 text-center">
            <div className="mb-6">
              <img 
                src="/api/placeholder/150/150" 
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
          <button className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300">
            Logout
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default UserDashboard;