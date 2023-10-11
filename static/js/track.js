

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

    //const returned_data = trackApple()

    var is_apple = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

    if (!is_apple) {
    var platform = navigator.userAgentData.platform
    var device = navigator.userAgentData.mobile === true ? "mobile" : "desktop";
    var language = navigator.language
    
    // construct the data
    const data = {
        "device": device,
        "platform": platform,
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

    // constructed data for apple products
    else {

        var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        var is_iPhone = navigator.platform == "iPhone";

        var language = navigator.language

        if (!is_iPhone) {
            const apple_data = {
            "device": "desktop",
            "platform": "MacOS",
            "language": language
            }
        fetch('https://fastapi-busra-736f01987e01.herokuapp.com/clients', {
        method: 'POST',
        body: JSON.stringify(apple_data),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => {
            // Handle the response, e.g., log success or handle errors
            console.log('Tracking data sent successfully');
            console.log(apple_data);
            console.log(body)
        })
        .catch(error => {
            console.error('Error sending tracking data:', error);
        });
        }
        else if (is_iPhone)
        {
            const iphone_data = {
            "device": "mobile",
            "platform": "iOS",
            "language": language
            }
            fetch('https://fastapi-busra-736f01987e01.herokuapp.com/clients', {
            method: 'POST',
            body: JSON.stringify(iphone_data),
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(response => {
                // Handle the response, e.g., log success or handle errors
                console.log('Tracking data sent successfully');
                console.log(iphone_data);
                console.log(body)
            })
            .catch(error => {
                console.error('Error sending tracking data:', error);
            });
        }

}
    
}

async function myfunct(){
    var data2 = trackApple()
    console.log(data2)
}