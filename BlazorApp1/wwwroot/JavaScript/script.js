mapBoxFunctions = {
    initMapBox: function() {
        
        mapboxgl.accessToken = 'pk.eyJ1IjoibGFpeGVyIiwiYSI6ImNsN3J5dWxmODA4djYzb2xmZXY0Y3BuOHIifQ.2QnAMlaecjI_UBRsoSc7JQ';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [4.364940, 52.011840], // starting position [lng, lat]
            zoom: 12.5, // starting zoom
        });

    }

};

