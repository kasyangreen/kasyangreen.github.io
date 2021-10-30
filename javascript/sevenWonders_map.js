function createMap(){

var mymap = L.map('mapid')

L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",{}).addTo(mymap);


const IndiaLocation = {lat: 27.173891, lng: 78.042068};
const ChinaLocation = {lat: 40.431908, lng: 116.570374};
const JordanLocation = {lat: 30.328960, lng: 35.444832};
const BrazilLocation = {lat: -22.908333, lng: -43.196388};
const PeruLocation = {lat: -13.163068, lng: -72.545128};
const MexicoLocation = {lat: 20.684285, lng: -88.567783};
const RomeLocation = {lat: 41.890209, lng: 12.492231};

const IndiaString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Taj Mahal</h1>' +
    "<img src='https://www.lonelyplanet.com/news/wp-content/uploads/2019/06/taj-mahal.jpg' width='300' height='220'>"+
    '<div id="bodyContent">' +
    "<p>The <b>Taj Mahal</b> is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.</p>" +
    '<p>Attribution: Taj Mahal, <a href="https://en.wikipedia.org/wiki/Taj_Mahal">'+
    "https://en.wikipedia.org/wiki/Taj_Mahal</a> " + "(last visited October 16, 2021).</p>" +
    "</div>" +
    "</div>";

const ChinaString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Great Wall of China</h1>' +
    "<img src='https://cdn.britannica.com/54/122154-050-4DA0F697/Great-Wall-of-China.jpg' width='300' height='220'>"+
    '<div id="bodyContent">' +
    "<p>The <b>Great Wall of China</b> is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC, with selective stretches later joined together by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains. Later on, many successive dynasties built and maintained multiple stretches of border walls. The most well-known sections of the wall were built by the Ming dynasty (1368–1644).</p>" +
    '<p>Attribution: Great Wall of China, <a href="https://en.wikipedia.org/wiki/Great_Wall_of_China">'+
    "https://en.wikipedia.org/wiki/Great_Wall_of_China</a> " + "(last visited October 16, 2021).</p>" +
    "</div>" +
    "</div>";

const JordanString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Petra</h1>' +
    "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/View_of_Petra.jpg/520px-View_of_Petra.jpg' width='300' height='220'>"+
    '<div id="bodyContent">' +
    "<p><b>Petra</b>, originally known to its inhabitants as Raqmu or Raqēmō is a historic and archaeological city in southern Jordan. It is adjacent to the mountain of Jabal Al-Madbah, in a basin surrounded by mountains forming the eastern flank of the Arabah valley running from the Dead Sea to the Gulf of Aqaba. The area around Petra has been inhabited from as early as 7000 BC, and the Nabataeans might have settled in what would become the capital city of their kingdom, as early as the 4th century BC. Archaeological work has only discovered evidence of Nabataean presence dating back to the second century BC, by which time Petra had become their capital. The Nabataeans were nomadic Arabs who invested in Petra's proximity to the incense trade routes by establishing it as a major regional trading hub.</p>" +
    '<p>Attribution: Petra, <a href="https://en.wikipedia.org/wiki/Petra">'+
    "https://en.wikipedia.org/wiki/Petra</a> " + "(last visited October 16, 2021).</p>" +
    "</div>" +
    "</div>";

const BrazilString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Christ the Redeemer</h1>' +
    "<img src='https://static.toiimg.com/photo/77612158.cms' width='300' height='220'>"+
    '<div id="bodyContent">' +
    "<p><b>Christ the Redeemer</b> is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide.</p>" +
    '<p>Attribution: Christ the Redeemer, <a href="https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)">'+
    "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)</a> " + "(last visited October 16, 2021).</p>" +
    "</div>" +
    "</div>";

const PeruString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Machu Piccu</h1>' +
    "<img src='https://scitechdaily.com/images/Machu-Picchu-Peru.jpg' width='300' height='220'>"+
    '<div id="bodyContent">' +
    "<p><b>Machu Picchu</b> is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cuzco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate.</p>" +
    '<p>Attribution: Machu Piccu, <a href="https://en.wikipedia.org/wiki/Machu_Picchu">'+
    "https://en.wikipedia.org/wiki/Machu_Picchu</a> " + "(last visited October 16, 2021).</p>" +
    "</div>" +
    "</div>";

const MexicoString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Chichen Itza Pyramid</h1>' +
    "<img src='https://www.shoreexcursionsgroup.com/img/tour/CAPRCHICHENITZA2-2.jpg' width='300' height='220'>"+
    '<div id="bodyContent">' +
    "<p><b>Chichen Itza</b> was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archeological site is located in Tinúm Municipality, Yucatán State, Mexico.</p>" +
    '<p>Attribution: Chichen Itza, <a href="https://en.wikipedia.org/wiki/Chichen_Itza">'+
    "https://en.wikipedia.org/wiki/Chichen_Itza</a> " + "(last visited October 16, 2021).</p>" +
    "</div>" +
    "</div>";

const RomeString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">The Colosseum</h1>' +
    "<img src='http://res.cloudinary.com/dsmafmqwi/image/upload/v1610556414/virtualtrips/tours/txnaaolvr9xlzqqfegzo.jpg' width='300' height='220'>"+
    '<div id="bodyContent">' +
    "<p>The <b>Colosseum</b> is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age. Construction began under the emperor Vespasian (r. 69–79 AD) in 72 and was completed in 80 AD under his successor and heir, Titus (r. 79–81). Further modifications were made during the reign of Domitian (r. 81–96). The three emperors that were patrons of the work are known as the Flavian dynasty, and the amphitheatre was named the Flavian Amphitheatre by later classicists and archaeologists for its association with their family name (Flavius).</p>" +
    '<p>Attribution: The Colosseum, <a href="https://en.wikipedia.org/wiki/Colosseum">'+
    "https://en.wikipedia.org/wiki/Colosseum</a> " + "(last visited October 16, 2021).</p>" +
    "</div>" +
    "</div>";


var Indiamarker = L.marker(IndiaLocation)
              .addTo(mymap)
              .bindPopup(IndiaString)
              .on('click', function(e){
                mymap.setView(e.latlng,4);
              });
var Chinamarker = L.marker(ChinaLocation)
              .addTo(mymap)
              .bindPopup(ChinaString)
              .on('click', function(e){
                mymap.setView(e.latlng,4);
              });
var Jordanmarker = L.marker(JordanLocation)
              .addTo(mymap)
              .bindPopup(JordanString)
              .on('click', function(e){
                mymap.setView(e.latlng,4);
              });
var Brazilmarker = L.marker(BrazilLocation)
              .addTo(mymap)
              .bindPopup(BrazilString)
              .on('click', function(e){
                mymap.setView(e.latlng,4);
              });
var Perumarker = L.marker(PeruLocation)
              .addTo(mymap)
              .bindPopup(PeruString)
              .on('click', function(e){
                mymap.setView(e.latlng,4);
              });
var Mexicomarker = L.marker(MexicoLocation)
              .addTo(mymap)
              .bindPopup(MexicoString)
              .on('click', function(e){
                mymap.setView(e.latlng,4);
              });
var Romemarker = L.marker(RomeLocation)
              .addTo(mymap)
              .bindPopup(RomeString)
              .on('click', function(e){
                mymap.setView(e.latlng,4);
              });






mymap.setView([25,100],2);

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
