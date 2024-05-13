import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { ILocation } from './SearchLocation';

export interface IRestaurant extends Document {
  name: string;
  discovered: boolean;
  location: ILocation;
  searchLocation?: Schema.Types.ObjectId; // Reference to Location model
  address: IAdress;
  rating?: number;
  numberRatings?: number;
  email?: string;
  dateDiscovered?: Date;
  discoveredBy?: IUser;
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
  rating: {
    type: Number,
  },
  numberRatings: {
    type: Number,
  },
  email: {
    type: String,
  },
  discovered: {
    type: Boolean,
    default: false,
  },
  dateDiscovered: {
    type: Date,
  },
  discoveredBy: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  location: {
    type: pointSchema,
    required: true,
    index: '2dsphere',
  },
  searchLocation: {
    type: Schema.Types.ObjectId,
    ref: 'SearchLocation',
  }, // Reference to Location model
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
});

const Restaurant =
  mongoose.models.Restaurant ||
  mongoose.model<IRestaurant>('Restaurant', restaurantSchema);

export default Restaurant;
