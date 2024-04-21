import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IRestaurant extends Document {
  name: string;
  rating: number;
  email?: string;
  discovered: boolean;
  dateDiscovered: Date;
  discoveredBy: IUser;
  location: ILocation;
  adress: IAdress;
}

export interface IAdress {
  adress: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface ILocation {
  type: string;
  coordinates: number[];
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
    requied: true,
  },
  email: {
    type: String,
    requied: false,
  },
  discovered: {
    type: Boolean,
    requied: true,
    default: false,
  },
  dateDiscovered: {
    type: Date,
    requied: true,
    default: Date.now,
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
  adress: {
    adress: String,
    postalCode: String,
    city: String,
    country: String,
  },
});

const Restaurant =
  mongoose.models.Restaurant ||
  mongoose.model<IRestaurant>('Restaurant', restaurantSchema);

export default Restaurant;
