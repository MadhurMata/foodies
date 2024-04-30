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
  const fetchRestaurants = async () => {
    const res = await fetch(
      `http://localhost:3000/api/nearRestaurants?latitude=${coordinates.lat}&longitude=${coordinates.lng}&radius=${radius}`,
    );
    return await res.json().then((data) => data);
  };
  return useQuery({
    queryKey: ['nearRestaurants'],
    queryFn: fetchRestaurants,
  });
};

export default useGetNearRestaurants;
