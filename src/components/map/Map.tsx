'use client';

import Script from 'next/script';
import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';

import './Map.module.css';
import useGetNearRestaurants from '@/app/(pages)/(home)/hooks/useGetNearRestaurants';

export default function Map() {
  const [mapCenter, setMapCenter] = useState({
    lat: -73.856077,
    lng: 40.848447,
  });
  const radius = 10000;

  console.log(`lat: ${mapCenter.lat}, lng: ${mapCenter.lng}`);

  const {
    data: restaurants = [],
    isLoading,
    error,
  } = useGetNearRestaurants({
    latitude: mapCenter.lng,
    longitude: mapCenter.lat,
    radius,
  });

  console.log(restaurants);

  if (isLoading) console.log('loadingggg');
  if (error) console.log('Errorrrr Handle me');

  return (
    <div>
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""
        // src="/leaflet/leaflet.js"
        strategy="afterInteractive"
        onReady={() => {
          const map = L.map('map').setView([mapCenter.lng, mapCenter.lat], 12);
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

          for (let i = 0; i < restaurants.length; i++) {
            L.marker(
              [
                restaurants[i].location.coordinates[1],
                restaurants[i].location.coordinates[0],
              ],
              {
                icon: icon,
              },
            )
              .bindPopup(items[i].name)
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

          const isMapCenterWithinArea = () => {
            const newMapCenter = map.getCenter();

            // Calculate distance
            const distanceToCenter = L.latLngDistance(newMapCenter, mapCenter);

            // Check if new center is outside the defined range
            if (distanceToCenter >= radius) {
              console.log('New center', newMapCenter);
              setMapCenter(newMapCenter);
            }
          };

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

          map.on('dragend', function () {
            isMapCenterWithinArea();
          });
        }}
      />
      <div
        id="map"
        style={{ height: '600px', width: '100%', minWidth: '600px' }}
      ></div>
    </div>
  );
}
