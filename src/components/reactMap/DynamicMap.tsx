'use client';

import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const { MapContainer } = ReactLeaflet;

export interface DynamicMapProps {
  children: React.ReactNode;
  className?: string;
  width: number;
  height: number;
}

const Map = ({ children, ...rest }) => {
  return (
    <MapContainer
      style={{ height: '600px', width: '100%', minWidth: '600px' }}
      {...rest}
    >
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  );
};

export default Map;
