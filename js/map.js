var map = L.map('map').setView([11.172680151718392, -74.23318947598895], 16);

// Capa de mapa base de OpenStreetMap
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
    {
        attribution: '',
        maxZoom: 40,
    }
).addTo(map);

// Agrega un marcador en las coordenadas de Bogotá
var marker = L.marker([11.172680151718392, -74.23318947598895]).addTo(map);

// Popup del marcador
marker.bindPopup("<b>Playa Santúa</b><br>Calle 74 con carrera 2da con carrera 2da, Pozos Colorados, Santa Marta.").openPopup();