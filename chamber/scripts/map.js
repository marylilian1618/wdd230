document.addEventListener('DOMContentLoaded', function () {
    const mapCenter = [-12.06513, -75.20486]; // Huancayo coordinates
    const map = L.map('map').setView(mapCenter, 12);

    //Add OpenStreetMap as the base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    //Add a marker to the map
    L.marker(mapCenter).addTo(map);
});