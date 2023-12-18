var map = L.map('map').setView([-18.8792, 47.5079], 7); // Centre sur Madagascar

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'OpenStreetMap' }).addTo(map);

    // Positions manuelles de quelques restaurants et plages à Madagascar
    var restaurantPositions = [
        [-18.8792, 47.5079],
        [-19.0000, 47.0000],
        // Ajoutez d'autres positions au besoin
    ];

    var plagePositions = [
        [-18.8000, 47.6000],
        [-19.1000, 47.2000],
        // Ajoutez d'autres positions au besoin
    ];

    // Fonction pour définir des icônes personnalisées
    function getCustomIcon(category) {
        var iconUrl = ''; // URL de l'icône
        switch (category) {
            case 'restaurant':
                iconUrl = 'assets/img/maplocalization_89142.png'; // Remplacez par le lien réel
                break;
            case 'plage':
                iconUrl = 'assets/img/cocotier.png'; // Remplacez par le lien réel
                break;
            // Ajoutez d'autres catégories selon vos besoins
            default:
                iconUrl = 'lien_vers_icone_par_defaut.png'; // Remplacez par le lien réel
        }

        return L.icon({
            iconUrl: iconUrl,
            iconSize: [30, 30], // Taille de l'icône en pixels
            iconAnchor: [15, 30], // Point d'ancrage de l'icône
            popupAnchor: [0, -30] // Point d'ancrage de la fenêtre contextuelle
        });
    }

    // Ajoutez des marqueurs pour chaque restaurant
    restaurantPositions.forEach(function (position) {
        var marker = L.marker(position, { icon: getCustomIcon('restaurant') }).addTo(map);
        marker.bindPopup("Restaurant").openPopup();
    });

    // Ajoutez des marqueurs pour chaque plage
    plagePositions.forEach(function (position) {
        var marker = L.marker(position, { icon: getCustomIcon('plage') }).addTo(map);
        marker.bindPopup("Plage").openPopup();
    });