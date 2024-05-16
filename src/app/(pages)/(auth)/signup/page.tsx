import SignupForm from '@/components/signupForm/SignupForm';
import { Link } from '@nextui-org/react';

const SignUp = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center">
      <div className="flex items-center justify-center md:col-span-2">
        <p className="p-2 text-center">¿Estas ya registrado?</p>
        <Link href={'/auth/signin'}>Entrar</Link>
      </div>
      <SignupForm />
    </div>
  );
};

export default SignUp;
