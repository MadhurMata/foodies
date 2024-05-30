import { CoordinatesProps } from '@/lib/globalContext/GlobalContext';
import { IRestaurant } from '@/lib/models/Restaurant';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

interface useGetRestaurantsProps {
  enable?: boolean;
  coordinates?: CoordinatesProps;
  radius?: number;
  searchLocationId?: string;
}

const useGetRestaurants = ({
  enable = true,
  coordinates,
  radius,
  searchLocationId,
}: useGetRestaurantsProps): UseQueryResult<IRestaurant[]> => {
  const fetchRestaurants = async () => {
    const res = await fetch(
      `http://localhost:3000/api/restaurants/nearRestaurants?latitude=${coordinates?.lat}&longitude=${coordinates?.lng}&radius=${radius}`,
    );
    return await res.json().then((data) => data);
  };

  const fetchRestaurantsBySearch = async (searchLocationId: string) => {
    const res = await fetch(
      `http://localhost:3000/api/restaurantsBySearch?searchLocation=${searchLocationId}`,
    );
    return await res.json().then((data) => data);
  };
  return useQuery({
    queryKey: ['restaurants', searchLocationId, coordinates],
    queryFn: searchLocationId
      ? () => fetchRestaurantsBySearch(searchLocationId)
      : fetchRestaurants,
    enabled: enable,
  });
};

export default useGetRestaurants;
