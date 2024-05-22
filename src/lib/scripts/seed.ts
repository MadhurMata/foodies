import mongoose from 'mongoose';
import connectDB from '../connectDB';
import Restaurant from '../models/Restaurant';
import restaurantData from '../hundredRestaurants.json';

export const seedDatabase = async () => {
  await connectDB();

  try {
    // Loop through each restaurant object in the JSON data
    await restaurantData.map((restaurant) => {
      const { name, stars, contact } = restaurant;

      // Create a new restaurant document based on the schema
      return new Restaurant({
        name,
        rating: stars,
        email: contact?.email || '',
        discovered: false,
        dateDiscovered: new Date(),
        location: {
          type: 'Point',
          coordinates: contact.location,
        },
        address: {
          street: '',
          postalCode: '',
          city: '',
          country: '',
        },
      });
    });

    // Save the restaurant document to the database
    await Restaurant.insertMany(restaurantData);
    console.log('Seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect(); // Disconnect Mongoose connection after seeding
  }
};
