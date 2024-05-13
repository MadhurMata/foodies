import mongoose from 'mongoose';
import connectDB from '../connectDB';
import Restaurant from '../models/Restaurants';
import restaurantData from '../resElCarmen.json';

export const seedDatabase = async () => {
  await connectDB();

  try {
    const { results, country, neighborhood, city } = restaurantData;
    // Loop through each restaurant object in the JSON data
    for (const restaurant of results) {
      const { name, rating, user_ratings_total, geometry, formatted_address } =
        restaurant;

      // Create a new restaurant document based on the schema
      const newRestaurant = new Restaurant({
        name,
        rating,
        numberRatings: user_ratings_total,
        location: {
          type: 'Point',
          coordinates: [geometry.location.lat, geometry.location.lng],
        },
        address: {
          address: formatted_address || '',
          postalCode: '',
          city,
          country,
          neighborhood,
        },
      });

      // Save the restaurant document to the database
      await newRestaurant.save();
      console.log(`Restaurant "${name}" seeded successfully.`);
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect(); // Disconnect Mongoose connection after seeding
  }
};
