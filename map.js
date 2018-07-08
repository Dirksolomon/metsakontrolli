var map;
function initMap()
{
  map = new google.maps.Map(document.getElementById('map'),
  {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
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

}
