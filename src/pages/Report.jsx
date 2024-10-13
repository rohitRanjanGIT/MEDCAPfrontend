import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const MedicalReportForm = () => {
  return (
    <>
    <Header></Header>
    <div className="bg-[#fbcfe8] min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-purple-500 text-white p-6 rounded-t-lg">
          <h1 className="text-3xl font-bold">Medical Report</h1>
          <p className="mt-2">Comprehensive health assessment form including vital signs and medical history.</p>
        </div>
        
        <div className="bg-pink-200 p-6 rounded-b-lg">
          <h2 className="text-2xl font-bold mb-6">Medical Data</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Blood Pressure (mmHg)</label>
                <input type="text" className="w-full p-2 rounded" placeholder="120/80" />
              </div>
              
              <div>
                <label className="block mb-2">Heart Rate (bpm)</label>
                <input type="number" className="w-full p-2 rounded" placeholder="70" />
              </div>
              
              <div>
                <label className="block mb-2">Cholesterol (mg/dL)</label>
                <input type="number" className="w-full p-2 rounded" placeholder="200" />
              </div>
              
              <div>
                <label className="block mb-2">Blood Sugar (mg/dL)</label>
                <input type="number" className="w-full p-2 rounded" placeholder="100" />
              </div>
              
              <div>
                <label className="block mb-2">BMI</label>
                <input type="number" step="0.1" className="w-full p-2 rounded" placeholder="22.5" />
              </div>
              
              <div>
                <label className="block mb-2">Complete Blood Count</label>
                <input type="text" className="w-full p-2 rounded" placeholder="Enter results" />
              </div>
            </div>
            
            <div>
              <label className="block mb-2">Health History</label>
              <textarea className="w-full p-2 rounded" rows="3" placeholder="Enter any relevant health history"></textarea>
            </div>
            
            <div>
              <label className="block mb-2">Additional Problems</label>
              <textarea className="w-full p-2 rounded" rows="3" placeholder="Describe any additional health concerns"></textarea>
            </div>
            
            <div>
              <label className="block mb-2">Notes</label>
              <textarea className="w-full p-2 rounded" rows="3" placeholder="Any special notes or additional information"></textarea>
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
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
            
            <button type="submit" className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition duration-300">
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default MedicalReportForm;