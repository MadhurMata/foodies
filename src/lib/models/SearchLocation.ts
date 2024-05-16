import mongoose, { Document, Schema } from 'mongoose';

export interface ISearchLocation extends Document {
  location: ILocation;
  restaurants?: Schema.Types.ObjectId[];
  type: SearchLocationtype;
  country: string;
  city?: string;
  neighborhood?: string;
  neighborhoods?: Schema.Types.ObjectId[];
  cities?: Schema.Types.ObjectId[];
}

export type SearchLocationtype = 'neighborhood' | 'city' | 'country';

export interface ILocation {
  type: string;
  coordinates: number[];
}

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
  },
  coordinates: {
    type: [Number],
  },
});

const searchLocationSchema = new mongoose.Schema({
  type: String,
  country: String,
  city: String,
  neighborhood: String,
  location: {
    type: pointSchema,
    index: '2dsphere',
  },
  restaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
  neighborhoods: [{ type: Schema.Types.ObjectId, ref: 'SearchLocation' }],
  cities: [{ type: Schema.Types.ObjectId, ref: 'SearchLocation' }],
});

const SearchLocation =
  mongoose.models.SearchLocation ||
  mongoose.model<ISearchLocation>('SearchLocation', searchLocationSchema);

export default SearchLocation;
