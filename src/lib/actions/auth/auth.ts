'use server';

import { SignupFormFields } from '@/components/signupForm/SignupForm';
import connectDB from '@/lib/connectDB';
import User from '@/lib/models/User';

export const registerUser = async (formData: SignupFormFields) => {
  try {
    await connectDB();
    const { firstName, lastName, email, password, phoneNumber } = formData;
    if (!firstName || !lastName || !email || !password) {
      return;
    }

    await User.create({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });
  } catch (e) {
    return { error: e };
  }
};
