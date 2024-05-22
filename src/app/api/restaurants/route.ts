import connectDB from '@/lib/connectDB';
import Restaurant, { IRestaurant } from '@/lib/models/Restaurant';
import SearchLocation from '@/lib/models/SearchLocation';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();

  // try {
  //   const restaurants = await Restaurant.find({});
  //   return NextResponse.json(restaurants);
  // } catch (error: unknown) {
  //   if (error instanceof Error) {
  //     return NextResponse.json({ error: error.message });
  //   }
  // }
  try {
    // Obtener todos los restaurantes
    const restaurants: IRestaurant[] = await Restaurant.find();

    // Iterar sobre cada restaurante
    for (const restaurant of restaurants) {
      // Obtener el vecindario del restaurante
      const neighborhood = restaurant.address.neighborhood;

      // Encontrar la ubicación de búsqueda correspondiente al vecindario
      const searchLocation = await SearchLocation.findOne({
        type: 'neighborhood',
        neighborhood,
      });

      // Si se encuentra una ubicación de búsqueda para el vecindario
      if (searchLocation) {
        // Verificar si el restaurante ya está en la lista de restaurantes de la ubicación de búsqueda
        const restaurantExists = searchLocation.restaurants.some(
          (id: string) => id === restaurant._id,
        );

        console.log('restaurant exist', restaurantExists);
        // Si el restaurante no está en la lista, añadirlo
        if (!restaurantExists) {
          searchLocation.restaurants.push(restaurant._id);
          await searchLocation.save();
        }

        // Actualizar el campo searchLocation del restaurante
        restaurant.searchLocation = searchLocation._id;
        await restaurant.save();
      }
    }
    console.log('Actualización de ubicaciones de búsqueda exitosa.');
    return await NextResponse.json(
      'Actualización de ubicaciones de búsqueda exitosa.',
    );
  } catch (error) {
    console.error('Error al actualizar ubicaciones de búsqueda:', error);
  }
}
