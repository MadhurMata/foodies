import mongoose from 'mongoose';
import connectDB from '../connectDB';
import SearchLocation from '../models/SearchLocation';
import searchLocations from '../searchLocations.json';

export const seedDatabase = async () => {
  await connectDB();

  try {
    // Loop through each neighborhood array in the JSON data
    for (const neighborhood of searchLocations.neighborhoods) {
      // Create a new searchLocation document based on the schema
      const newSearchLocation = new SearchLocation({
        country: searchLocations.country,
        city: searchLocations.city,
        neighborhood,
      });

      // Save the restaurant document to the database
      await newSearchLocation.save();
      console.log(`Restaurant "${neighborhood}" seeded successfully.`);
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect(); // Disconnect Mongoose connection after seeding
  }
};
