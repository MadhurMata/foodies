import mongoose, { Document } from 'mongoose';

export interface ISearchLocation extends Document {
  country: string;
  city: string;
  neighborhood?: string;
}

const searchLocationSchema = new mongoose.Schema({
  country: {
    type: String,
    requied: true,
  },
  city: {
    type: String,
    requied: true,
  },
  neighborhood: String,
});

const SearchLocation =
  mongoose.models.SearchLocation ||
  mongoose.model<ISearchLocation>('SearchLocation', searchLocationSchema);

export default SearchLocation;
