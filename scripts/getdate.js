// Select the DOM element for output (moved outside the block)
const outputElement = document.querySelector("#full");

// Use the last modified date of the document
const lastModifiedDate = new Date(document.lastModified);

// Display the last modified date in the "full" paragraph
outputElement.textContent = `©️ 2024 • Matt Felber • Last modified: ${lastModifiedDate.toLocaleString()}`;