'use client';

import MapComponent from '@/components/reactMap/Map';
import { icon } from 'leaflet';
import useGetNearRestaurants from '../(home)/hooks/useGetNearRestaurants';
import { useGlobalContext } from '@/lib/globalContext';
import { useEffect } from 'react';
import './styles.css';
import { DEFAULT_MAP_CENTER } from '../(home)/page';

const ICON = icon({
  iconUrl: '/static/penis.png',
  iconSize: [32, 32],
});

const Map = () => {
  const { mapCenter, nearRestaurants, setNearRestaurants } = useGlobalContext();
  const center = mapCenter.lat === 0 ? DEFAULT_MAP_CENTER : mapCenter;
  const restaurants = nearRestaurants;
  const {
    data = [],
    error,
    refetch,
    status,
  } = useGetNearRestaurants({
    coordinates: center,
    radius: 1,
  });

  useEffect(() => {
    if (status === 'success') {
      setNearRestaurants(data);
      refetch();
    }
  }, [mapCenter, data, setNearRestaurants, refetch, status]);

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
