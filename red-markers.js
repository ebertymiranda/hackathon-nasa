var map = L.map('map').setView([-15.5989, -56.0949], 14);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=kdWPIS1d6kfpw3NHzYVE',).addTo(map);

var circle = L.circle([-15.5989, -56.0249],
  {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
  }).addTo(map);

var circle1 = L.circle([-15.5989, -56.0349],
{
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 100
}).addTo(map);

var circle2 = L.circle([-15.5929, -56.1349],
{
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 100
}).addTo(map);

var circle3 = L.circle([-15.5979, -56.1049],
{
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 100
}).addTo(map);
