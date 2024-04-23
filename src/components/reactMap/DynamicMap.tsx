'use client';

import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useGlobalContext } from '@/lib/globalContext';

const { MapContainer, useMapEvents } = ReactLeaflet;

const Map = ({ children, ...rest }) => {
  return (
    <MapContainer
      style={{ height: '600px', width: '100%', minWidth: '600px' }}
      {...rest}
    >
      <>
        <MapCenterLocation />
        {children(ReactLeaflet, Leaflet)}
      </>
    </MapContainer>
  );
};

const MapCenterLocation = () => {
  const { setMapCenter } = useGlobalContext();

  useMapEvents({
    dragend: (e) => {
      console.log('in, mappp ', e.target.getCenter());
      setMapCenter(e.target.getCenter());
    },
  });
  return null;
};

export default Map;
