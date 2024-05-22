import mongoose, { Document, Schema } from 'mongoose';
import { ILocation } from './SearchLocation';

export interface IRestaurant extends Document {
  name: string;
  profilePhoto?: string;
  rating?: number;
  ratings?: Schema.Types.ObjectId[];
  numberRatings?: number;
  location: ILocation;
  searchLocation?: Schema.Types.ObjectId;
  mainSearchlocation?: Schema.Types.ObjectId;
  foodType: string;
  address: IAdress;
  discovered: boolean;
  dateDiscovered?: Schema.Types.ObjectId;
  discoveredBy?: Schema.Types.ObjectId;
  plan: string;
  following?: Schema.Types.ObjectId[];
  wantToGoUsers?: Schema.Types.ObjectId[];
  email?: string;
}

export interface IAdress {
  address: string;
  postalCode?: string;
  neighborhood: string;
  city: string;
  country: string;
}

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    requied: true,
  },
  profilePhoto: String,
  rating: Number,
  ratings: [{ type: Schema.Types.ObjectId, ref: 'Rating' }],
  numberRatings: Number,
  location: {
    type: pointSchema,
    required: true,
    index: '2dsphere',
  },
  searchLocation: {
    type: Schema.Types.ObjectId,
    ref: 'SearchLocation',
  },
  mainSearchlocation: {
    type: Schema.Types.ObjectId,
    ref: 'SearchLocation',
  },
  foodType: String,
  address: {
    address: {
      type: String,
      required: true,
    },
    postalCode: String,
    city: {
      type: String,
      required: true,
    },
    neighborhood: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  discovered: {
    type: Boolean,
    requied: true,
    default: false,
  },
  dateDiscovered: {
    type: Date,
  },
  discoveredBy: { type: Schema.Types.ObjectId, ref: 'User' },
  plan: {
    type: String,
    requied: true,
    default: 'basic',
  },
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  wantToGoUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  email: String,
});

const Restaurant =
  mongoose.models.Restaurant ||
  mongoose.model<IRestaurant>('Restaurant', restaurantSchema);

export default Restaurant;
