import mongoose, { Document, Schema } from 'mongoose';
import { IRestaurant } from './Restaurants';

export interface IUser extends Document {
  name: string;
  nickName: string;
  email: string;
  resraurantsDiscovered: IRestaurant[];
}

const userSchema = new mongoose.Schema({
  name: {
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
  resraurantsDiscovered: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant',
    },
  ],
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
