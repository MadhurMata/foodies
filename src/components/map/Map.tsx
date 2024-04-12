'use client';

import Script from 'next/script';
import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const [latLng, setLatLng] = useState({
    lat: '',
    lng: '',
  });

  console.log(`lat: ${latLng.lat}, lng: ${latLng.lng}`);

  return (
    <div>
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""
        // src="/leaflet/leaflet.js"
        strategy="afterInteractive"
        onReady={() => {
          const map = L.map('map').setView([11.8166, 122.0942], 8);
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution:
              '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          }).addTo(map);

          //   you can use any icon you want
          const icon = L.icon({
            iconUrl: '/static/penis.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
          });

          const locations = [
            ['LOCATION_1', 11.8166, 122.0942],
            ['LOCATION_3', 10.7202, 122.5621],
            ['LOCATION_4', 11.3889, 122.6277],
            ['LOCATION_5', 10.5929, 122.6325],
          ];

          for (let i = 0; i < locations.length; i++) {
            L.marker([locations[i][1], locations[i][2]], {
              icon: icon,
            })
              .bindPopup(locations[i][0])
              .addTo(map);
          }

          //   var circle = L.circle([51.508, -0.11], {
          //     color: "red",
          //     fillColor: "#f03",
          //     fillOpacity: 0.5,
          //     radius: 500,
          //   }).addTo(map);

          //   var polygon = L.polygon([
          //     [51.509, -0.08],
          //     [51.503, -0.06],
          //     [51.51, -0.047],
          //   ]).addTo(map);

          //   marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
          //   circle.bindPopup("I am a circle.");
          //   polygon.bindPopup("I am a polygon.");

          //   var popup = L.popup()
          //     .setLatLng([51.513, -0.09])
          //     .setContent("I am a standalone popup.")
          //     .openOn(map);

          //   function onMapClick(e) {
          //     alert("You clicked the map at " + e.latlng);
          //   }

          //   map.on("click", onMapClick);

          //   var popup = L.popup();

          //   function onMapClick(e) {
          //     popup
          //       .setLatLng(e.latlng)
          //       .setContent("You clicked the map at " + e.latlng.toString())
          //       .openOn(map);
          //   }

          //   map.on("click", onMapClick);

          function onMapClick(e) {
            let marker = null;
            // remove previous marker
            if (marker) {
              map.removeLayer(marker);
            }

            console.log(e.latlng);
            setLatLng(e.latlng);

            const txt = e.latlng.toString();

            marker = L.marker(e.latlng, { icon: icon })
              .addTo(map)
              .bindPopup(txt)
              .openPopup();
          }

          map.on('click', onMapClick);
        }}
      />
      <div id="map"></div>
      {/* <style jsx>{`
        #map {
          height: 600px;
          width: 100%;
          min-width: 600px;
        }
      `}</style> */}
    </div>
  );
}
