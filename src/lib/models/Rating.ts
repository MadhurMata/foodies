import mongoose, { Document, Schema } from 'mongoose';

export interface IRating extends Document {
  priceQuality: number;
  foodQuality: number;
  atmosphere: number;
  service: number;
  restaurant: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  date: Date;
  comment?: string;
}

const ratingSchema = new mongoose.Schema({
  priceQuality: {
    type: String,
    requied: true,
  },
  foodQuality: {
    type: String,
    requied: true,
  },
  atmosphere: {
    type: String,
    requied: true,
  },
  service: {
    type: String,
    requied: true,
  },
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  comment: String,
});

const Rating = mongoose.model<IRating>('User', ratingSchema);

export default Rating;
