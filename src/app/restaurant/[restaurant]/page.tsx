'use client';
import React from 'react';
// import Button from '@/components/buttons/Button';

const RestaurantPage = ({ params }: { params: { restaurant: string } }) => {
  console.log(params.restaurant);

  return (
    <div className="relative w-full max-w-screen-xl sm:px-24 lg:px-44">
      {/* <div className="fixed top-10 w-full max-w-screen-xl bg-white p-4">
        <div className="flex flex-col gap-4 sm:pr-32 md:pr-44 lg:pr-52">
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
              <h2 className="text-lg font-bold">
                {params.restaurant && params.restaurant}
              </h2>
              <div className="flex justify-between sm:hidden">
                <span className="text-sm">
                  Nivel Usuario <span className="text-brand">2</span>
                </span>
              </div>
              <div className="flex justify-between sm:hidden">
                <span className="text-sm">
                  Comida Favorita <span className="text-brand">Asiatica</span>
                </span>
              </div>
              <div className="flex justify-between sm:hidden">
                <span className="text-sm">
                  Media <span className="text-brand lg:text-lg">6,3</span>
                </span>
              </div>
              <div className="mb-2 hidden w-full justify-around sm:flex">
                <div className="flex w-20 flex-col items-center text-center">
                  <span className="text-sm">Nivel Usuario</span>
                  <span className="text-sm text-brand lg:text-lg">2</span>
                </div>
                <div className="flex w-20 flex-col items-center text-center">
                  <span className="text-sm">Comida Favorita</span>
                  <span className="text-sm text-brand lg:text-lg">
                    Asiatica
                  </span>
                </div>
                <div className="flex w-20 flex-col items-center text-center">
                  <span className="text-sm">Media Calificaciones</span>
                  <span className="text-sm text-brand lg:text-lg">6,3</span>
                </div>
              </div>
              <div className="hidden w-full justify-around sm:flex">
                <div className="flex w-20 flex-col items-center text-center">
                  <p className="align-middle text-sm text-brand lg:text-lg">
                    127
                  </p>
                  <p className="text-sm">Restaurantes calificados</p>
                </div>
                <div className="flex w-20 flex-col items-center">
                  <p className="align-middle text-sm text-brand lg:text-lg">
                    1027
                  </p>
                  <p className="text-sm">Seguidores</p>
                </div>
                <div className="flex w-20 flex-col items-center">
                  <p className="align-middle text-sm text-brand lg:text-lg">
                    897
                  </p>
                  <p className="text-sm">Siguiendo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-around sm:hidden">
            <div className=" flex w-20 flex-col items-center text-center">
              <p className="align-middle text-sm text-brand">127</p>
              <p className="text-xs">Restaurantes calificados</p>
            </div>
            <div className="flex w-20 flex-col items-center">
              <p className="align-middle text-sm text-brand">1027</p>
              <p className="text-xs">Seguidores</p>
            </div>
            <div className="flex w-20 flex-col items-center">
              <p className="align-middle text-sm text-brand">897</p>
              <p className="text-xs">Siguiendo</p>
            </div>
          </div>
          <div className=" flex border-b pb-4">
            <ul className="flex	w-full justify-around">
              <li className="">Tipo comida</li>
              <li>Quiero ir</li>
              <li>Votado</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default RestaurantPage;
