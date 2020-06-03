window.onload(getCovidStatistics());

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
}