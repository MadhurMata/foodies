'use client';

import { useState } from 'react';
import { Button, Checkbox, Input, Link } from '@nextui-org/react';
import Icon from '@/components/icon/Icon';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerUser } from '@/lib/actions/auth/auth';

const FormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, 'El nombre tiene que tener al menos 2 caracteres')
      .max(45, 'El nombre tiene que tener menos de 45 caracteres')
      .regex(new RegExp('^[a-zA-Z ]+$'), 'Caracteres especiales no permitidos'),
    lastName: z
      .string()
      .min(2, 'Los apellidos tienen que tener al menos 2 caracteres')
      .max(45, 'Los apellidos tienen que tener menos de 45 caracteres')
      .regex(new RegExp('^[a-zA-Z ]+$'), 'Caracteres especiales no permitidos'),
    email: z.string().email('Porfavor añade una dirección de correo valida'),
    userName: z
      .string()
      .min(2, 'El nombre de usuario tiene que tener al menos 2 caracteres')
      .max(45, 'El nombre de usuario tiene que tener menos de 45 caracteres'),
    password: z
      .string()
      .min(6, 'La contraseña tiene que tener al menos 6 caracteres')
      .max(50, 'La contraseña tiene que tener menos de 50 caracteres'),
    confirmPassword: z
      .string()
      .min(6, 'La contraseña tiene que tener al menos 6 caracteres')
      .max(50, 'La contraseña tiene que tener menos de 50 caracteres'),
    accepted: z.literal(true, {
      errorMap: () => ({
        message: 'Porfavor acepta las condiciones',
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Contraseña y Confirmar Contraseña tienen que ser iguales',
    path: ['confirmPassword'],
  });

export type SignupFormFields = z.infer<typeof FormSchema>;

function SignupForm() {
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormFields>({
    resolver: zodResolver(FormSchema),
  });

  const toggleVisiblePass = () => setIsVisiblePass((prev) => !prev);

  const saveUser: SubmitHandler<SignupFormFields> = async (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { accepted, confirmPassword, ...user } = data;

    await registerUser(user);
  };

  return (
    <form
      onSubmit={handleSubmit(saveUser)}
      className="grid grid-cols-2 gap-3 rounded-md border p-2 shadow"
    >
      <Input
        errorMessage={errors.firstName?.message}
        isInvalid={!!errors.firstName}
        {...register('firstName')}
        label="Nombre"
        startContent={
          <Icon
            path="/icons/user.svg"
            size={20}
            strokeColor="black"
            strokeWidth="1.5"
          />
        }
      />
      <Input
        errorMessage={errors.lastName?.message}
        isInvalid={!!errors.lastName}
        {...register('lastName')}
        label="Apellidos"
        startContent={
          <Icon
            path="/icons/user.svg"
            size={20}
            strokeColor="black"
            strokeWidth="1.5"
          />
        }
      />
      <Input
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        {...register('email')}
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
        errorMessage={errors.userName?.message}
        isInvalid={!!errors.userName}
        {...register('userName')}
        className="col-span-2"
        label="Nombre de Usuario"
        startContent={
          <Icon
            path="/icons/user.svg"
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
      <Input
        errorMessage={errors.confirmPassword?.message}
        isInvalid={!!errors.confirmPassword}
        {...register('confirmPassword')}
        className="col-span-2"
        label="Confirmar Contraseña"
        type="password"
        startContent={
          <Icon
            path="/icons/key.svg"
            size={20}
            strokeColor="black"
            strokeWidth="1.5"
          />
        }
      />
      <Checkbox
        isInvalid={!!errors.accepted}
        {...register('accepted')}
        className="col-span-2"
      >
        Acepto las <Link href="/terms">condiciones</Link>{' '}
      </Checkbox>
      {errors.accepted && (
        <p className="text-red-500">{errors.accepted?.message}</p>
      )}

      <div className="col-span-2 flex justify-center">
        <Button className="w-48 bg-brand" type="submit">
          Registrate
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
