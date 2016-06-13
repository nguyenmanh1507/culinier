function initMap() {

  const latLng = new google.maps.LatLng(49.183121, -2.110599),
        image = 'https://cdn2.iconfinder.com/data/icons/shiny-fruits/100/watermelon-3-48.png',
        content = `<h4>Culinier</h4>
        <div>This is text text text</div>`

  const map = new google.maps.Map(document.getElementById('gMap'), {
    center: latLng,
    zoom: 19,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  })

  const marker = new google.maps.Marker({
    position: latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: image,
    title: 'Culinier HQ'
  })
  marker.addListener('click', () => {
    infoWindow.open(map, marker)
  })

  const infoWindow = new google.maps.InfoWindow({
    content: content
  })

}
