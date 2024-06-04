'use client';
import React from 'react';
import useGetUser from '@/hooks/useGetUser';
import Button from '@/components/buttons/Button';

const UserProfile = ({ params }: { params: { userName: string } }) => {
  const { data: user } = useGetUser({
    userName: params.userName,
  });

  return (
    <div className="w-full max-w-screen-lg p-6 sm:pl-24 lg:pl-44">
      <div className="flex w-full gap-6">
        <div className="flex flex-col items-center">
          <img
            className="mb-2 h-20 w-20 rounded-full shadow-lg md:h-32 md:w-32 lg:min-h-40 lg:min-w-40"
            alt="Imagen de perfil"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <Button text="Editar Perfil" />
        </div>
        <div className="w-full">
          <h2 className="text-lg font-bold">{user && user[0].firstName}</h2>
          <span className="block text-sm sm:hidden">Nivel Usuario 2</span>
          <div className="mt-2 flex w-full justify-evenly">
            <div className="hidden flex-col items-center text-center sm:flex">
              <span className="text-sm">Nivel Usuario</span>
              <span className="text-sm text-brand">2</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-sm">Comida Favorita</span>
              <span className="text-sm text-brand">Asiatica</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-sm">Media Calificaciones</span>
              <span className="text-sm text-brand">6,3</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex border-b p-6">
        <ul className="flex	w-full justify-evenly">
          <li>
            <div className="flex min-w-min flex-col items-center">
              <p className="align-middle">127</p>
              <p className="text-sm">Restaurantes calificados</p>
            </div>
          </li>
          <li>
            <div className="flex min-w-min flex-col items-center">
              <p className="align-middle">127</p>
              <p className="text-sm">Seguidores</p>
            </div>
          </li>
          <li>
            <div className="flex min-w-min flex-col items-center">
              <p className="align-middle">127</p>
              <p className="text-sm">Siguiendo</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
