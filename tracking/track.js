// tracking.js

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
    })
    .catch(error => {
        console.error('Error sending tracking data:', error);
    });
}


function sendLocationData(data) {
    print("-- location --"),
    print(data);
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

// Track user interactions or custom events as needed

// Attach the trackPageview function to the window.onload event
//window.onload = trackPageview;
