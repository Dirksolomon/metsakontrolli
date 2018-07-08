var map;
function initMap()
{
  map = new google.maps.Map(document.getElementById('map'),
  {
    center: {lat: 62.681703, lng: 25.257346},
    zoom: 12
  });

  map.addListener('click', function(e)
  {
      placeMarker(e.latLng, map);
  });

  function placeMarker(position, map)
  {
      var marker = new google.maps.Marker({
          position: position,
          map: map
      });
      map.panTo(position);
  }
//Forest array
  var forestCoords = [
    {lat: 62.681703, lng: 25.257346},
    {lat: 62.681988, lng: 25.253087},
    {lat: 62.683357, lng: 25.254524},
    {lat: 62.683091, lng: 25.260050}
  ];
//Draw forestplot
  var forestPlot = new google.maps.Polygon({
    paths: forestCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });



//Content to the infowindow
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

//Setup infowindow
  var infowindow = new google.maps.InfoWindow(
  {
      content: contentString
  });
//Set forestplo to map
  forestPlot.setMap(map);
//Add funtionality when forestplot is clicked and open infowindow on click spot
  google.maps.event.addListener(forestPlot, 'click', function(event) {
    if (event)
    {
      point = event.latLng;
    }
    infowindow.setPosition(point);
    infowindow.open(map);
  });



}
