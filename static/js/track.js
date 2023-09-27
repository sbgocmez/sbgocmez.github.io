

function trackEverything() {
    var platform = navigator.userAgentData.platform
    var device = navigator.userAgentData.mobile === true ? "mobile" : "desktop";
    var language = navigator.language
    
    const data = {
        "device": platform,
        "platform": device,
        "language": language
    }
    console.log("my dataa")
    console.log(data)

    fetch('https://fastapi-busra-736f01987e01.herokuapp.com/clients', {
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