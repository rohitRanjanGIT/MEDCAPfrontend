import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import serverUrl from '../components/server_url';

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
    reportFile: null
  });

  const [uploadedFile, setUploadedFile] = useState(null); // Track uploaded file

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, reportFile: file });
    setUploadedFile(file); // Store file info to display
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.email) {
      alert('User not logged in');
      return;
    }
  
    const { email } = user;
  
    // Prepare the newReport string
    let newReport = '';
    for (const [key, value] of Object.entries(formData)) {
      if (value && key !== 'reportFile') {
        newReport += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
      }
    }
  
    // Prepare the form data to send
    const form = new FormData();
    form.append('email', email); // Append email to form data
    form.append('newReport', newReport); // Append newReport to form data
  
    if (formData.reportFile) {
      form.append('reportFile', formData.reportFile); // Append report file to form data
    } else {
      console.error('No file uploaded!');
    }
  
    try {
      // Send the request to the backend
      console.log(form);

      const response = await axios.post(`${serverUrl}/api/report/addrecord`, form, {
        headers: {
          'Content-Type': 'multipart/form-data' // Ensure form-data headers are set
        }
      });
  
      console.log(response.data);
      alert('Medical report submitted successfully!');
    } catch (error) {
      console.error('Error submitting report:', error);
  
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
  
      alert('Failed to submit the report. Please try again.');
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
            <h2 className="text-2xl font-bold mb-6">Medical Data</h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">Height (cm)</label>
                  <input type="number" name="height" className="w-full p-2 rounded" placeholder="Enter height in cm" value={formData.height} onChange={handleChange} />
                </div>

                <div>
                  <label className="block mb-2">Weight (kg)</label>
                  <input type="number" name="weight" className="w-full p-2 rounded" placeholder="Enter weight in kg" value={formData.weight} onChange={handleChange} />
                </div>
              </div>

              {/* Other Medical Data */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">Blood Pressure (mmHg)</label>
                  <input type="text" name="bloodPressure" className="w-full p-2 rounded" placeholder="120/80" value={formData.bloodPressure} onChange={handleChange} />
                </div>
                
                <div>
                  <label className="block mb-2">Heart Rate (bpm)</label>
                  <input type="number" name="heartRate" className="w-full p-2 rounded" placeholder="70" value={formData.heartRate} onChange={handleChange} />
                </div>

                <div>
                  <label className="block mb-2">Cholesterol (mg/dL)</label>
                  <input type="number" name="cholesterol" className="w-full p-2 rounded" placeholder="200" value={formData.cholesterol} onChange={handleChange} />
                </div>

                <div>
                  <label className="block mb-2">Blood Sugar (mg/dL)</label>
                  <input type="number" name="bloodSugar" className="w-full p-2 rounded" placeholder="100" value={formData.bloodSugar} onChange={handleChange} />
                </div>

                <div>
                  <label className="block mb-2">BMI</label>
                  <input type="number" step="0.1" name="bmi" className="w-full p-2 rounded" placeholder="22.5" value={formData.bmi} onChange={handleChange} />
                </div>

                <div>
                  <label className="block mb-2">Complete Blood Count</label>
                  <input type="text" name="bloodCount" className="w-full p-2 rounded" placeholder="Enter results" value={formData.bloodCount} onChange={handleChange} />
                </div>
              </div>

              <div>
                <label className="block mb-2">Health History</label>
                <textarea name="healthHistory" className="w-full p-2 rounded" rows="3" placeholder="Enter any relevant health history" value={formData.healthHistory} onChange={handleChange}></textarea>
              </div>

              <div>
                <label className="block mb-2">Additional Problems</label>
                <textarea name="additionalProblems" className="w-full p-2 rounded" rows="3" placeholder="Describe any additional health concerns" value={formData.additionalProblems} onChange={handleChange}></textarea>
              </div>

              <div>
                <label className="block mb-2">Notes</label>
                <textarea name="notes" className="w-full p-2 rounded" rows="3" placeholder="Any special notes or additional information" value={formData.notes} onChange={handleChange}></textarea>
              </div>

              <div>
                <label className="block mb-2">Upload Document</label>
                <div className="flex items-center justify-center w-full">
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
              </div>

              {/* Show file name and icon if a file is uploaded */}
              {uploadedFile && (
                <div className="mt-4 flex items-center space-x-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7a1 1 0 00-1-1h-3M5 11V7a1 1 0 011-1h10a1 1 0 011 1v4m-6 4v-2m0 2v2m0-2h-4m4 0h4"></path>
                  </svg>
                  <span className="text-gray-700">{uploadedFile.name}</span>
                </div>
              )}

              <button type="submit" className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition duration-300">
                Submit Report
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MedicalReportForm;
