'use client';

import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
//import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';
import { useGlobalContext } from '@/lib/globalContext';
//const provider = new OpenStreetMapProvider();
const { MapContainer, useMapEvents } = ReactLeaflet;

const Map = ({ children, ...rest }) => {
  // const fetchSearch = async () => {
  //   return await provider.search({ query: 'VAlencia' });
  // };
  // fetchSearch().then((data) => console.log('resultssss', data));
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
      setMapCenter(e.target.getCenter());
    },
  });
  return null;
};

export default Map;
