import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  emailVerified?: string;
  password: string;
  phoneNumber?: string;
  profilePhoto?: string;
  bio?: string;
  savedLocation?: Schema.Types.ObjectId;
  favouriteRestaurants?: Schema.Types.ObjectId[];
  wantToGoRestaurants?: Schema.Types.ObjectId[];
  discoveredRestaurants?: Schema.Types.ObjectId[];
  following?: Schema.Types.ObjectId[];
  followers?: Schema.Types.ObjectId[];
  // privacy: {
  //   openProfile?: boolean;
  // };
  ratings?: Schema.Types.ObjectId[];
  averageRating?: number;
  userLevel?: string;
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    requied: true,
  },
  lastName: {
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
  emailVerified: Date,
  password: {
    type: String,
    requied: true,
  },
  phoneNumber: String,
  profilePhoto: String,
  bio: String,
  savedLocation: { type: Schema.Types.ObjectId, ref: 'SearchLocation' },
  favouriteRestaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
  wantToGoRestaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
  discoveredRestaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  // privacy: {
  //   openProfile: Boolean,
  //   default: false,
  // },
  ratings: [{ type: Schema.Types.ObjectId, ref: 'Rating' }],
  averageRating: Number,
  userLevel: String,
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
