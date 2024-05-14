'use client';
import { useEffect, useState } from 'react';
import useGetRestaurants from '@/hooks/useGetRestaurants';
import { icon } from 'leaflet';
import { useGlobalContext } from '@/lib/globalContext';

import MapComponent from '@/components/reactMap/Map';
import ToggleButton from '@/components/toggleButton/toggleButton';
import { DEFAULT_MAP_CENTER } from '../(home)/page';
import './styles.css';
import RestaurantCard from '@/components/restaurantCard/RestaurantCard';

const ICON = icon({
  iconUrl: '/static/penis.png',
  iconSize: [32, 32],
});

const List = () => {
  const { mapCenter, restaurants, setRestaurants } = useGlobalContext();
  const [toggleView, setToggleView] = useState(false);
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

  const buttonLabel = toggleView ? 'List' : 'Map';

  const handleToggleView = () => setToggleView(!toggleView);

  if (error) console.log('Errorrrr Handle me');

  return (
    <div className="relative z-0 h-full ">
      <div>
        {!toggleView ? (
          <div>
            {restaurants &&
              restaurants?.map((restaurant) => (
                <RestaurantCard key={restaurant._id} restaurant={restaurant} />
              ))}
          </div>
        ) : (
          <MapComponent
            // className={styles.homeMap}
            width="100%"
            height="100%"
            center={[center.lat, center.lng]}
            zoom={16}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {restaurants?.map((restaurant) => (
                  <Marker
                    key={restaurant._id}
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
        )}
      </div>
      <ToggleButton
        className="fixed bottom-[6rem] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform"
        label={buttonLabel}
        onClick={handleToggleView}
      />
    </div>
  );
};

export default List;
