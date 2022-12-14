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

async function fetchMapOverlapData() {
  const [geoResponse, statResponse] = await Promise.all([
    fetch('https://datahub.io/core/geo-countries/datapackage.json'),
    fetch('https://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0101/BE0101A/BefolkningNy')
  ]);
  const geo = await geoResponse.json();
  const stat = await statResponse.json();

  return [geo, stat];
}

fetchMapOverlapData().then(([stat, geo]) => {
  stat;
  for (const id in stat.resources) {
    if (stat.resources[id].name === 'csv')
  }
}).catch(err => {
  console.log(err)
});




