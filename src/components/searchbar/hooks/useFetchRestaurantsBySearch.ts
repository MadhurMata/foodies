import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { IRestaurant } from '@/lib/models/Restaurants';

const useFetchRestaurantsBySearch = (
  searchLocationId: string,
): UseQueryResult<IRestaurant[], Error> => {
  const fetchRestaurants = async () => {
    const res = await fetch(
      `http://localhost:3000/api/restaurantsBySearch?id=${searchLocationId}`,
    );
    if (!res.ok) {
      throw new Error('Error al obtener los restaurantes');
    }
    return res.json().then((data) => data);
  };

  return useQuery({
    queryKey: ['restaurants', searchLocationId],
    queryFn: fetchRestaurants,
  });
};

export default useFetchRestaurantsBySearch;
