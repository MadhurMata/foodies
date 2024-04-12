import { useState, useEffect } from 'react';

interface GeoLocation {
  latitude: number;
  longitude: number;
}

function useLocation() {
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => setError(err.message),
        { enableHighAccuracy: true }, // Optional for higher accuracy
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);

  return { location, error };
}

export default useLocation;
