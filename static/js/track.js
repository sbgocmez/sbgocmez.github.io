

async function trackApple() {
    var is_apple = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    var is_iOS = /(iPhone|iPod|iPad)/i.test(navigator.platform);

    var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    var is_iPhone = navigator.platform == "iPhone";

    var language = navigator.language

    if (is_Mac && is_apple) {
    const data = {
        "device": "desktop",
        "platform": "MacOS",
        "language": language
    }
    return data
    } else if (is_iPhone && is_iOS){
        const data = {
        "device": "mobile",
        "platform": "iOS",
        "language": language
    }
    return data
    }
    return null
}

async function trackEverything() {

    const returned_data = trackApple()

    if (returned_data == null) {
    var platform = navigator.userAgentData.platform
    var device = navigator.userAgentData.mobile === true ? "mobile" : "desktop";
    var language = navigator.language
    
    // construct the data
    const data = {
        "device": platform,
        "platform": device,
        "language": language
    }
    console.log("my dataa")
    console.log(data)
    }

    // constructed data for apple products
    else {
        const data = returned_data
    }
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

async function myfunct(){
    var data2 = trackApple()
    console.log(data2)
}