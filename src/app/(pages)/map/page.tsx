'use client';

import MapComponent from '@/components/reactMap/Map';
import { icon } from 'leaflet';
import { useGlobalContext } from '@/lib/globalContext';
import { useEffect } from 'react';
import './styles.css';
import { DEFAULT_MAP_CENTER } from '../(home)/page';
import useGetRestaurants from '@/hooks/useGetRestaurants';

const ICON = icon({
  iconUrl: '/static/penis.png',
  iconSize: [32, 32],
});

const Map = () => {
  const { mapCenter, restaurants, setRestaurants } = useGlobalContext();
  const center = mapCenter.lat === 0 ? DEFAULT_MAP_CENTER : mapCenter;

  const {
    data = [],
    error,
    refetch,
    status,
  } = useGetRestaurants({
    typeRestaurantsRequest: 'nearRestaurants',
    coordinates: center,
    radius: 1,
    enable: !!restaurants,
  });

  useEffect(() => {
    if (status === 'success' && !!restaurants) {
      setRestaurants(data);
      refetch();
    }
  }, [mapCenter, data, setRestaurants, refetch, status, restaurants]);

  // console.log(restaurants);
  // console.log('mapCenter', mapCenter);

  if (error) console.log('Errorrrr Handle me');

  return (
    <div>
      <MapComponent
        // className={styles.homeMap}
        width="800"
        height="400"
        center={[center.lat, center.lng]}
        zoom={16}
      >
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {restaurants?.map((restaurant, i) => (
              // Change i for restaurant ID (make ir unic)
              <Marker
                key={i}
                icon={ICON}
                position={[
                  restaurant.location.coordinates[0],
                  restaurant.location.coordinates[1],
                ]}
              >
                <Popup>{restaurant.name}</Popup>
              </Marker>
            ))}
          </>
        )}
      </MapComponent>
    </div>
  );
};

export default Map;
