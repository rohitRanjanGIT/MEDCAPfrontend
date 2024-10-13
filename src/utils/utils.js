// utils.js
export const formatDate = (dateString) => {
    if (!dateString) return '';
  
    // Try parsing as ISO format first
    const isoDate = new Date(dateString);
    if (!isNaN(isoDate)) {
      return isoDate.toLocaleDateString('en-GB'); // Use 'en-GB' for DD/MM/YYYY format
    }
  
    // If not ISO, try parsing as DD/MM/YYYY
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed in JS
      const year = parseInt(parts[2], 10);
      const parsedDate = new Date(year, month, day);
      if (!isNaN(parsedDate)) {
        return parsedDate.toLocaleDateString('en-GB');
      }
    }
  
    return 'Invalid Date';
  };


export const getLatestReport = (reports) => {
    if (!reports || reports.length === 0) return null;
  
    return reports.reduce((latest, report) => {
      return !latest || report.createdAt > latest.createdAt ? report : latest;
    }, null);
};
  