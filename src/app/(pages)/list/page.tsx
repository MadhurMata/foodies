'use client';
import { useState } from 'react';
import { LatLngExpression, icon } from 'leaflet';
import { useMap } from 'react-leaflet';
import { useGlobalContext } from '@/lib/globalContext';
import useGetRestaurants from '@/hooks/useGetRestaurants';

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
  const { mapCenter, searchLocation } = useGlobalContext();
  const [toggleView, setToggleView] = useState(false);
  const center = mapCenter.lat === 0 ? DEFAULT_MAP_CENTER : mapCenter;

  const { data: restaurants, error } = useGetRestaurants({
    searchLocationId: searchLocation,
    coordinates: center,
    radius: 1,
  });

  const buttonLabel = toggleView ? 'List' : 'Map';

  const handleToggleView = () => setToggleView(!toggleView);

  function SetViewOnClick({ coords }: { coords: LatLngExpression }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }

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
            width="100vw"
            height="calc(100vh - 78px)"
            center={[center.lat, center.lng]}
            zoom={16}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <SetViewOnClick coords={[center.lat, center.lng]} />

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
