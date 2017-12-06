function initMap() {
    //map options
    var options = {
        zoom: 13,
        center: {
            lat: 34.673242,
            lng: 135.496866
        }
    }
    var map = new
    google.maps.Map(document.getElementById('map'), options);
    //Add marker
    var marker = new google.maps.Marker({
        position: {
            lat: 34.673242,
            lng: 135.496866
        },
        map: map
    });
}