import React from 'react';


const AnalysisHistory = ({ history }) => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Analysis History</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        {history.map((analysis, index) => (
          <div key={index} className="mb-2 pb-2 border-b border-gray-300 last:border-b-0 last:mb-0 last:pb-0">
            <p className="font-medium">{analysis.report}</p>
            <p className="text-sm text-gray-600">{analysis.date}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
        Email Latest Report
      </button>
    </div>
  );

export default AnalysisHistory;