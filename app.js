import 'https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.js';


// Call function upon window loading

window.onload = () => {
  getCovidStatistics();
};

// Counter of stats

function getCovidStatistics() {
  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/223')
    .then(res => res.json())
    .then(data => {
      document.getElementById('deaths').innerHTML = data.location.latest.deaths.toLocaleString();
      document.getElementById('confirmed').innerHTML = data.location.latest.confirmed.toLocaleString();
      document.getElementById('country').innerHTML = data.location.country.toLocaleString();
      document.getElementById('updated').innerHTML = data.location.last_updated.substr(0, 10);
      document.getElementById('DR').innerHTML = 
      (Number(data.location.latest.deaths) / Number(data.location.latest.confirmed)).toLocaleString();
      document.getElementById('population').innerHTML = data.location.country_population.toLocaleString();
    })
    .catch(err => console.log('error'))

    setTimeout(getCovidStatistics, 43200000);
}

// Mapbox

const token = 'pk.eyJ1Ijoic2Ftam95Y2UiLCJhIjoiY2tiMGN3ZnlrMDZ1dDJ1bnY4amJhODJoMSJ9.J0w-aoTv7yze_o80EAK-uw';

mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
zoom: 1.5
});

function makeCovidMap() {
  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/')
    .then(res => res.json())
    .then(data => {
      const locations  = data.locations;
      locations.forEach(location => 
        console.log(location));
    })

}
makeCovidMap();