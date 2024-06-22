// Function to update current year dynamically
function updateCurrentYear() {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
  }
  
  // Function update the last modified date dynamically
  function updateLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;
  }
  
  // Call the function when document load
  document.addEventListener('DOMContentLoaded', function() {
    updateCurrentYear();
    updateLastModified();
  });
  