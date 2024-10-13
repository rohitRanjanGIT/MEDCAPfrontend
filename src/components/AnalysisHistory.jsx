import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const AnalysisHistory = ({ history }) => {
  // Check if history is an array and has items
  const hasHistory = Array.isArray(history) && history.length > 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Analysis History</h3>
      <div className="bg-gray-100 p-4 rounded-lg">
        {hasHistory ? (
          history.map((analysis, index) => (
            <div key={index} className="mb-2 pb-2 border-b border-gray-300 last:border-b-0 last:mb-0 last:pb-0">
              <p className="font-medium">{analysis.report}</p>
              <p className="text-sm text-gray-600">{analysis.date}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No analysis history available.</p>
        )}
      </div>
      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
        Email Latest Report
      </button>
    </div>
  );
};

// PropTypes to validate the props being passed
AnalysisHistory.propTypes = {
  history: PropTypes.array, // Expecting history to be an array
};

AnalysisHistory.defaultProps = {
  history: [], // Default to an empty array
};

export default AnalysisHistory;
