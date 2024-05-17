'use server';

import { SignupFormFields } from '@/components/signupForm/SignupForm';
import * as bcrypt from 'bcrypt';
import connectDB from '@/lib/connectDB';
import User from '@/lib/models/User';

export const registerUser = async (
  user: Omit<SignupFormFields, 'accepted' | 'confirmPassword'>,
) => {
  try {
    await connectDB();
    const { firstName, lastName, email, password, phoneNumber } = user;
    if (!firstName || !lastName || !email || !password) {
      return;
    }

    await User.create({
      firstName,
      lastName,
      email,
      password: await bcrypt.hash(user.password, 10),
      phoneNumber,
    });
  } catch (e) {
    return { error: e };
  }
};
