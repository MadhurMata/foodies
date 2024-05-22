'use server';

import connectDB from '@/lib/connectDB';
import { CoordinatesProps } from '@/lib/globalContext/GlobalContext';
import Restaurant, { IRestaurant } from '@/lib/models/Restaurant';

export const getRestaurants = async ({
  coordinates,
  radius,
}: {
  coordinates: CoordinatesProps;
  radius: number;
}) => {
  try {
    await connectDB();

    const center = {
      type: 'Point',
      coordinates: [coordinates.lat, coordinates.lng],
    };
    // Obtener todos los restaurantes
    const restaurants: IRestaurant[] = await Restaurant.find({
      location: {
        $nearSphere: {
          $geometry: center,
          $maxDistance: radius * 1000, // Radius in meters
        },
      },
    });

    console.log('Actualización de ubicaciones de búsqueda exitosa.');
    return { success: restaurants };
  } catch (error) {
    console.error('Error retrieving restaurants:', error);
  }
};
