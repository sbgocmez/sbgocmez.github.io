// tracking.js
//const XLSX = require('xlsx');
//XLSX.utils

function trackEverything() {
    userAgent = navigator.userAgent;
    userAgentData = navigator.userAgentData;
    pageview = 1;
    location = document.location;

    const XLSX = require('xlsx');

// Create an array of data (each element represents a row)
const data = [
  ['Header 1', 'Header 2', 'Header 3'],
  [userAgent, userAgentData, pageview, location],
  //['More Data 1', 'More Data 2', 'More Data 3'],
  // Add more rows as needed
];

// Create a new workbook and add a worksheet
const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.aoa_to_sheet(data); // Use aoa_to_sheet for an array of arrays

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Create a blob from the workbook
const blob = XLSX.write(workbook, { bookType: 'xlsx', type: 'blob' });

// Create a URL for the blob
const url = URL.createObjectURL(blob);

// Create a link to download the file
const a = document.createElement('a');
a.href = url;
const name = navigator.userAgentData.platform;
a.download = String(name);

// Trigger a click event to start the download
a.click();

// Clean up the URL and remove the link
URL.revokeObjectURL(url);


}
// Function to send tracking data to your backend
function sendTrackingData(data) {
    // Send data to your backend using an AJAX request or other methods
    // Example: You can use the Fetch API to send data to your server
    fetch('/your-tracking-endpoint', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        // Handle the response, e.g., log success or handle errors
        console.log('Tracking data sent successfully');
        console.log(data);
        console.log(body)
    })
    .catch(error => {
        console.error('Error sending tracking data:', error);
    });
}


function sendLocationData(data) {
    console.log("-- location --"),
    console.log(data);
}

// Track a pageview

function trackUserLocation() {
    const data = {
        event: 'location',
        path: document.location,
    };
    sendLocationData(data)
}
function trackPageview() {
    const data = {
        event: 'pageview',
        path: window.location.pathname,
        timestamp: new Date().toISOString()
        // Add more custom data if needed
    };
    sendTrackingData(data);
}

function sendUserAgent(data)
{
    console.log("-- user agent --");
    console.log(data);
    console.log(navigator.userAgentData);
}
function trackUserAgent()
{
    const data = {
        event: 'userAgent',
        data: navigator.userAgent
    };
    sendUserAgent(data)

}

// Track user interactions or custom events as needed

// Attach the trackPageview function to the window.onload event
window.onload = trackPageview;
