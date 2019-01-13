// Date & Time
setInterval(function () {
    var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    document.getElementById('time').innerHTML = now;
}, 1000)

// Smooth Scroll
$(document).ready(function () {

    $(".scrollLink").on('click', function (event) {

        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);

    });
})

// Google Map
function initMap() {
    // The location of Hospital
    var hospitalLocation = { lat: 31.4432, lng: 73.0989 };
    // The map, centered at Hospital
    var map = new google.maps.Map(
        document.getElementById('map'),{ zoom: 16, center: hospitalLocation });
    // The marker, positioned at Hospital
    var marker = new google.maps.Marker({ position: hospitalLocation, map: map });
}
initMap();

// Footer
let date = new Date();
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;