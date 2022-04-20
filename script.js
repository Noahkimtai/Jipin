let map = L.map('map') // To innitialize the map on our page

// Add basemap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
    ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
    maxZoom:18
}).addTo(map)

// Center the map around the users location
map.setView([],)