import { IRestaurant } from '@/lib/models/Restaurants';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

interface useGetNearRestaurantsProps {
  latitude: number;
  longitude: number;
  radius: number;
}

const useGetNearRestaurants = ({
  latitude,
  longitude,
  radius,
}: useGetNearRestaurantsProps): UseQueryResult<IRestaurant[]> => {
  const fetchRestaurants = async () => {
    const res = await fetch(
      `http://localhost:3000/api/nearRestaurants?latitude=${latitude}&longitude=${longitude}&radius=${radius}`,
    );
    return await res.json().then((data) => data);
  };
  return useQuery({
    queryKey: ['nearRestaurants'],
    queryFn: fetchRestaurants,
  });
};

export default useGetNearRestaurants;
