import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import serverUrl from '../components/server_url';
import LoadingPopup from '../components/LoadingPopup';
import { formatDate } from '../utils/utils';
import { useNavigate, Link } from 'react-router-dom';

const InputField = ({ label, name, type = "text", value, onChange, min, max }) => (
  <div>
    <label className="block mb-2">{label}</label>
    <input
      type={type}
      name={name}
      className="w-full p-2 rounded"
      placeholder={`Enter ${label.toLowerCase()}`}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    />
  </div>
);

const MedicalReportForm = () => {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    bloodPressure: '',
    heartRate: '',
    cholesterol: '',
    bloodSugar: '',
    bmi: '',
    bloodCount: '',
    healthHistory: '',
    additionalProblems: '',
    notes: '',
    vegetarian: false,
    reportFile: null,
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false); // New loading state for data fetching
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData] = useState(null); // New state for user data
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setAccessToken(token);

    if (token) {
      setLoadingData(true); // Start loading data
      axios.get(`${serverUrl}/api/auth/secure`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUserData(response.data.user);
        setFormData(prev => ({
          ...prev,
          height: response.data.user.height || '',
          weight: response.data.user.weight || '',
          // vegetarian: response.data.user.vegetarian || false,
        }));
      })
      .catch(err => {
        console.error('Error fetching user data:', err);
        setError(true);
        setErrorMessage('Failed to load user data.');
      })
      .finally(() => {
        setLoadingData(false); // Stop loading data
      });
    }
  }, [serverUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, reportFile: file });
    setUploadedFile(file);
  };

  const handleRemoveFile = () => {
    setFormData({ ...formData, reportFile: null });
    setUploadedFile(null);
  };

  const handleSliderChange = (e) => {
    setFormData({ ...formData, vegetarian: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.email) {
      alert('User not logged in');
      setLoading(false);
      return;
    }

    const { email } = user;
    let newReport = '';

    newReport += 
      `first name: ${userData.firstName} \n`+
      `bloodType: ${userData.bloodType} \n`+
      `gender: ${userData.gender} \n`+
      `date of birth: ${formatDate(userData.dob)} \n`+
      `is Vegetarian: ${formData.vegetarian} \n`

    for (const [key, value] of Object.entries(formData)) {
      if (value && key !== 'reportFile' && key !== 'vegetarian') {
        newReport += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n `;
      }
    }
    
    const form = new FormData();
    form.append('email', email);
    form.append('newReport', newReport);

    if (formData.reportFile) {
      form.append('reportFile', formData.reportFile);
    } else {
      console.log('No file uploaded!');
    }

    try {
      await axios.put(`${serverUrl}/api/auth/update`, {
        ...userData,
        height: formData.height,
        weight: formData.weight,
        vegetarian: formData.vegetarian,
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(form);

      await axios.post(`${serverUrl}/api/report/addrecord`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      navigate('/healthcareplan');
    } catch (error) {
      console.error('Error submitting report:', error);
      setError(true);
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-[#fbcfe8] min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-500 text-white p-6 rounded-t-lg">
            <h1 className="text-3xl font-bold">Medical Report</h1>
            <p className="mt-2">Comprehensive health assessment form including vital signs and medical history.</p>
          </div>
          
          <div className="bg-pink-100 p-6 rounded-b-lg">
            <h2 className="text-2xl font-bold mb-4">Upload Document</h2>
            <div className="flex items-center justify-center w-full mb-6">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, DOC, JPG or PNG (MAX. 10MB)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
              </label>
            </div>

            {uploadedFile && (
              <div className="mt-4 flex items-center space-x-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7a1 1 0 00-1-1h-3M5 11V7a1 1 0 011-1h10a1 1 0 011 1v4m-6 4v-2m0 2v2m0-2h-4m4 0h4"></path>
                </svg>
                <span className="text-gray-700">{uploadedFile.name}</span>
                <button type="button" onClick={handleRemoveFile} className="text-red-500 ml-2">Remove</button>
              </div>
            )}

            <h2 className="text-2xl font-bold mb-6 mt-8">Medical Data</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Height (cm)" name="height" type="number" value={formData.height} onChange={handleChange} min="50" max="300" />
                <InputField label="Weight (kg)" name="weight" type="number" value={formData.weight} onChange={handleChange} min="30" max="500" />
                <InputField label="Blood Pressure (mmHg)" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} />
                <InputField label="Heart Rate (bpm)" name="heartRate" type="number" value={formData.heartRate} onChange={handleChange} min="30" max="200" />
                <InputField label="Cholesterol (mg/dL)" name="cholesterol" type="number" value={formData.cholesterol} onChange={handleChange} min="100" max="500" />
                <InputField label="Blood Sugar (mg/dL)" name="bloodSugar" type="number" value={formData.bloodSugar} onChange={handleChange} min="50" max="400" />
                <InputField label="BMI" name="bmi" type="number" value={formData.bmi} onChange={handleChange} min="10" max="50" />
                <InputField label="Blood Count" name="bloodCount" value={formData.bloodCount} onChange={handleChange} />
              </div>

              <div>
                <label className="block mb-2">Health History</label>
                <textarea
                  name="healthHistory"
                  className="w-full p-2 rounded"
                  placeholder="Enter your health history"
                  value={formData.healthHistory}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-2">Additional Problems</label>
                <textarea
                  name="additionalProblems"
                  className="w-full p-2 rounded"
                  placeholder="Any additional problems?"
                  value={formData.additionalProblems}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-2">Notes</label>
                <textarea
                  name="notes"
                  className="w-full p-2 rounded"
                  placeholder="Any notes?"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">Preferences</h2>
              <div className="flex items-center mb-4">
                <label className="block mb-2">Vegetarian</label>
                <input
                  type="checkbox"
                  name="vegetarian"
                  checked={formData.vegetarian}
                  onChange={handleSliderChange}
                  className="ml-4"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition"
              >
                Submit Report
              </button>
            </form>

            {loadingData && <LoadingPopup />} {/* Show loading popup while fetching data */}
            {loading && <LoadingPopup message="Generating Healthcare Plans..."/>} {/* Show loading popup while submitting report */}
            {error && <LoadingPopup message='Error Occured Please try again'/>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MedicalReportForm;
