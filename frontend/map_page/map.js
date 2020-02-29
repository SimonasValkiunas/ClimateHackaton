

let origin = {
    lat : '54.686708',
    long : '25.291454',
}

let dest = {
    lat : '54.680421',
    long : '25.282820',
}

function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);

    directionsService.route({
            origin: `${origin.lat},${origin.long}`,
            destination: `${dest.lat},${dest.long}`,
            travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            console.log(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

initMap();