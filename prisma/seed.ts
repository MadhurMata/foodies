import prisma from '.';
import restaurants from '../src/app/api/restaurantsApi/restaurants.json'; // Replace with your actual JSON file path

async function seedRestaurants() {
  for (const restaurant of restaurants) {
    const {
      name,
      stars,
      contact: { location },
    } = restaurant;

    // Assuming location is an array of [longitude, latitude]
    const newRestaurant = await prisma.restaurant.create({
      data: {
        name,
        rating: stars,
        discovered: false, // Set discovered to false by default
        location: {
          create: {
            type: 'Point', // Assuming location type is Point
            coordinates: {
              create: {
                latitude: location[1],
                longitude: location[0],
              },
            },
          },
        },
      },
    });

    console.log(`Restaurant seeded: ${newRestaurant.name}`);
  }
}

seedRestaurants()
  .catch((e) => {
    console.error('Seeding failed!', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
