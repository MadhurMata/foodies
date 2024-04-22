'use client';

import DynamicMap from '@/components/reactMap/Map';
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './styles.css';
import { icon } from 'leaflet';
import useGetNearRestaurants from '../(home)/hooks/useGetNearRestaurants';

const DEFAULT_CENTER = [40.848447, -73.856077];

const ICON = icon({
  iconUrl: '/static/penis.png',
  iconSize: [32, 32],
});

const Map = () => {
  const {
    data: restaurants = [],
    isLoading,
    error,
  } = useGetNearRestaurants({
    latitude: -73.856077,
    longitude: 40.848447,
    radius: 10,
  });

  console.log(restaurants);

  if (isLoading) console.log('loadingggg');
  if (error) console.log('Errorrrr Handle me');

  return (
    <div>
      <DynamicMap
        // className={styles.homeMap}
        width="800"
        height="400"
        center={DEFAULT_CENTER}
        zoom={12}
      >
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {restaurants?.map((restaurant) => (
              <Marker
                key={restaurant.id}
                icon={ICON}
                position={[
                  restaurant.location.coordinates[1],
                  restaurant.location.coordinates[0],
                ]}
              >
                <Popup>{restaurant.name}</Popup>
              </Marker>
            ))}
          </>
        )}
      </DynamicMap>
    </div>
  );
};

export default Map;
