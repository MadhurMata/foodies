import {
  CoordinatesProps,
  TypeRestaurantsRequest,
} from '@/lib/globalContext/GlobalContext';
import { IRestaurant } from '@/lib/models/Restaurants';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

interface useGetRestaurantsProps {
  typeRestaurantsRequest: TypeRestaurantsRequest;
  enable?: boolean;
  coordinates?: CoordinatesProps;
  radius?: number;
  searchLocationId?: string;
}

const useGetRestaurants = ({
  typeRestaurantsRequest,
  enable = true,
  coordinates,
  radius,
  searchLocationId,
}: useGetRestaurantsProps): UseQueryResult<IRestaurant[]> => {
  const params =
    typeRestaurantsRequest === 'nearRestaurants'
      ? `latitude=${coordinates?.lat}&longitude=${coordinates?.lng}&radius=${radius}`
      : searchLocationId;

  const fetchRestaurants = async () => {
    const res = await fetch(
      `http://localhost:3000/api/nearRestaurants?type=${typeRestaurantsRequest}&${params}`,
    );
    return await res.json().then((data) => data);
  };
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: fetchRestaurants,
    enabled: enable,
  });
};

export default useGetRestaurants;
