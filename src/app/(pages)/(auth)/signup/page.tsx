import SignupForm from '@/components/signupForm/SignupForm';
import { Link } from '@nextui-org/react';

const SignUp = () => {
  return (
    <div className="m-4 grid grid-cols-1 items-center justify-center">
      <SignupForm />
      <div className="flex items-center justify-center md:col-span-2">
        <p className="p-2 text-center">¿Estas ya registrado?</p>
        <Link href={'/signin'}>Entrar</Link>
      </div>
    </div>
  );
};

export default SignUp;
