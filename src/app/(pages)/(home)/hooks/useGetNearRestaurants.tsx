import { CoordinatesProps } from '@/lib/globalContext/GlobalContext';
import { IRestaurant } from '@/lib/models/Restaurants';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

interface useGetNearRestaurantsProps {
  coordinates: CoordinatesProps;
  radius: number;
}

const useGetNearRestaurants = ({
  coordinates,
  radius,
}: useGetNearRestaurantsProps): UseQueryResult<IRestaurant[]> => {
  console.log('gooooordinates', coordinates);
  const fetchRestaurants = async () => {
    const res = await fetch(
      `http://localhost:3000/api/nearRestaurants?latitude=${coordinates.lng}&longitude=${coordinates.lat}&radius=${radius}`,
    );
    return await res.json().then((data) => data);
  };
  return useQuery({
    queryKey: ['nearRestaurants'],
    queryFn: fetchRestaurants,
  });
};

export default useGetNearRestaurants;
