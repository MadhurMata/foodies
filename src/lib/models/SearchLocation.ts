import mongoose, { Document, Schema } from 'mongoose';

export interface ISearchLocation extends Document {
  location?: ILocation;
  geometry?: {
    type: string;
    coordinates: number[][][];
  };
  restaurants?: Schema.Types.ObjectId[];
  type: SearchLocationtype;
  country: string;
  city?: string;
  neighborhood?: string;
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

const polygonSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Polygon'],
  },
  coordinates: {
    type: [[[Number]]], // Array of arrays of arrays of numbers
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
  geometry: {
    type: polygonSchema,
    index: '2dsphere',
  },
  restaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
});

const SearchLocation =
  mongoose.models.SearchLocation ||
  mongoose.model<ISearchLocation>('SearchLocation', searchLocationSchema);

export default SearchLocation;
