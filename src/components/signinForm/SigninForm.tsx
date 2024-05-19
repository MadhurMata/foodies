'use client';

import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import Icon from '@/components/icon/Icon';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
  email: z.string().email('Porfavor añade una dirección de correo valida'),
  password: z.string({ required_error: 'Porfavor introduce la contraseña' }),
});
export type SigninFormFields = z.infer<typeof FormSchema>;

export interface SigninFormProps {
  callbackUrl?: string;
}

function SigninForm({ callbackUrl }: SigninFormProps) {
  const router = useRouter();
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormFields>({
    resolver: zodResolver(FormSchema),
  });

  const toggleVisiblePass = () => setIsVisiblePass((prev) => !prev);

  const saveUser: SubmitHandler<SigninFormFields> = async (user) => {
    const result = await signIn('credentials', {
      redirect: false,
      username: user.email,
      password: user.password,
    });
    if (!result?.ok) return;
    router.push(callbackUrl ? callbackUrl : '/');
  };

  return (
    <form
      onSubmit={handleSubmit(saveUser)}
      className="flex w-full flex-col gap-2 rounded-md border p-2 shadow"
    >
      <Input
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        {...register('email')}
        autoComplete="on"
        className="col-span-2"
        label="Email"
        startContent={
          <Icon
            path="/icons/mail.svg"
            size={20}
            strokeColor="black"
            strokeWidth="1.5"
          />
        }
      />
      <Input
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        {...register('password')}
        autoComplete="on"
        className="col-span-2"
        label="Contraseña"
        type={isVisiblePass ? 'text' : 'password'}
        startContent={
          <Icon
            path="/icons/key.svg"
            size={20}
            strokeColor="black"
            strokeWidth="1.5"
          />
        }
        endContent={
          isVisiblePass ? (
            <Icon
              styles="cursor-pointer"
              path="/icons/eye.svg"
              size={20}
              strokeColor="black"
              strokeWidth="1.5"
              onClick={toggleVisiblePass}
            />
          ) : (
            <Icon
              styles="cursor-pointer"
              path="/icons/eye-off.svg"
              size={20}
              strokeColor="black"
              strokeWidth="1.5"
              onClick={toggleVisiblePass}
            />
          )
        }
      />
      <div className="col-span-2 flex justify-center">
        <Button
          className="w-48 bg-brand"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          type="submit"
        >
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </Button>
      </div>
    </form>
  );
}

export default SigninForm;
