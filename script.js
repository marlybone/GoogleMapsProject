var APIKEY = 'AIzaSyC75kqs_RD694ILnPBt0cOAsyzQwpSBfaU';
const myLngLat = {lat: 51.4931, lng: -0.118092};
var mapStyle = [{
          'featureType': 'all',
          'elementType': 'all',
          'stylers': [{'visibility': 'off'}]
        }, {
          'featureType': 'landscape',
          'elementType': 'geometry',
          'stylers': [{'visibility': 'on'}, {'color': '#fcfcfc'}]
        }, {
          'featureType': 'water',
          'elementType': 'labels',
          'stylers': [{'visibility': 'off'}]
        }, {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [{'visibility': 'on'}, {'hue': '#5f94ff'}, {'lightness': 60}]
        }];


var lat = ''; 
var lng = '';
var country = '';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3dcd448ec1msh2b4f01bc724171fp1ee5bdjsn24e082f33ce9',
		'X-RapidAPI-Host': 'cost-of-living-prices-by-city-country.p.rapidapi.com'
	}
};

async function fetchMapOverlapData() {
  const [geoResponse, statResponse] = await Promise.all([
    fetch('https://datahub.io/core/geo-countries/datapackage.json'),
    fetch(`'https://cost-of-living-prices-by-city-country.p.rapidapi.com/get-cities-by-country?country=${country}`)
  ]);
  const geo = await geoResponse.json();
  const stat = await statResponse.json();
  return [geo, stat];
}

fetchMapOverlapData().then(([stat, geo]) => {
}).catch(err => {
  console.log(err)
});
  
