var map = L.map('map').setView([4.7110, -74.0721], 13);

// Capa de mapa base de OpenStreetMap
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 20,
    }
).addTo(map);

// Agrega un marcador en las coordenadas de Bogotá
var marker = L.marker([4.7110, -74.0721]).addTo(map);

// Popup del marcador
marker.bindPopup("<b>Hola Bogotá!</b><br>Esta es Bogotá.").openPopup();