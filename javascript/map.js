function createMap(){

var mymap = L.map('mapid')

L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",{}).addTo(mymap);
// var options = {
// key: geocoder_api_key,
// limit: 10,
// };
//
// var control = L.Control.openCageSearch(options).addTo(mymap);


mymap.setView([0,0],1);

}

/*MAPBOX TILE LATER
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  id: 'mapbox.mapbox-traffic-v1',
  accessToken: mapbox_access_token,
  }).addTo(mymap);
  */

// For adding zoom:

// var ZoomViewer = L.Control.extend({
//   onAdd: function(){
//     var guage = L.DomUtil.create('div');
//     guage.style.width = '200px';
//     guage.style.background = 'rgba(0,0,0,0.5)';
//     guage.style.textAlign = 'left';
//     mymap.on('zoomstart zoom zoomend', function(ev){
//       guage.innerHTML = ' Zoom level: ' + mymap.getZoom();
//     })
//     return guage;
//   }
// });
//
// (new ZoomViewer).addTo(mymap);


// For adding markers polygons etc:

//
//   var marker = L.marker([51.5, -0.09]).addTo(mymap);
//   var circle = L.circle([51.508, -0.11], {
//     color: "red",
//     fillColor: "#f03",
//     fillOpacity: 0.5,
//     radius: 500
//   }).addTo(mymap);
//
//   var polygon = L.polygon([
//     [51.509,-0.08],
//     [51.503, -0.06],
//     [51.51,-0.047]
//   ]).addTo(mymap);
//
//   var polyline = L.polyline([
//     [51.506, -0.08],
//     [51.502, -0.06],
//     [51.507, -0.047]
//   ]).addTo(mymap);
//
//   marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
//   circle.bindPopup("I am a circle.");
//   polygon.bindPopup("I am a polygon.");
//
//   marker.on('click', function(e){
//     mymap.setView(e.latlng,14);
//   });
//
//   circle.on('click', function(e){
//     mymap.setView(e.latlng,13);
//   });
//
//   polygon.on('click', function(e){
//     mymap.setView(e.latlng,13);
//   });
