import mongoose from 'mongoose';
import connectDB from '../connectDB';
import SearchLocation from '../models/SearchLocation';
import searchLocations from '../searchLocations.json';

export const seedDatabase = async () => {
  await connectDB();

  try {
    // Loop through each neighborhood array in the JSON data
    for (const searchItem of searchLocations) {
      // Create a new searchLocation document based on the schema
      const newSearchLocation = new SearchLocation({
        location: {
          type: 'Point',
          coordinates: [searchItem.location?.lat, searchItem.location?.lng],
        },
        type: searchItem.type,
        country: searchItem.country,
        city: searchItem.city,
        neighborhood: searchItem.neighborhood,
      });

      // Save the restaurant document to the database
      await newSearchLocation.save();
    }
    console.log(`Restaurant seeded successfully.`);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect(); // Disconnect Mongoose connection after seeding
  }
};
