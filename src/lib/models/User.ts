import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  surname: string;
  nickName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  thumnail?: string;
  bio?: string;
  savedLocation?: string;
  favouriteRestaurants?: Schema.Types.ObjectId[];
  wantToGoRestaurants?: Schema.Types.ObjectId[];
  discoveredRestaurants?: Schema.Types.ObjectId[];
  following?: Schema.Types.ObjectId[];
  Followers?: Schema.Types.ObjectId[];
  privacy: {
    openProfile: boolean;
  };
  ratings?: Schema.Types.ObjectId[];
  averageRating?: number;
  userLevel?: string;
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requied: true,
  },
  surname: {
    type: String,
    requied: true,
  },
  nickName: {
    type: String,
    requied: true,
  },
  email: {
    type: String,
    requied: true,
  },
  password: {
    type: String,
    requied: true,
  },
  phoneNumber: String,
  thumnail: String,
  bio: String,
  savedLocation: String,
  favouriteRestaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
  wantToGoRestaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
  discoveredRestaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  Followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  privacy: {
    openProfile: Boolean,
    requied: true,
    default: false,
  },
  ratings: [{ type: Schema.Types.ObjectId, ref: 'Rating' }],
  averageRating: Number,
  userLevel: String,
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
