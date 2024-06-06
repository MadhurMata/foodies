'use client';
import React from 'react';
import Button from '@/components/buttons/Button';
import MapComponent from '@/components/reactMap/Map';
import { DEFAULT_MAP_CENTER } from '@/app/(pages)/(home)/page';
import { icon } from 'leaflet';
import { replaceHyphenWithSpace } from '@/lib/utils/replaceHyphenWithSpace';
import Icon from '@/components/icon/Icon';

const ICON = icon({
  iconUrl: '/static/penis.png',
  iconSize: [32, 32],
});

const RestaurantPage = ({ params }: { params: { restaurant: string } }) => {
  console.log(params.restaurant);

  const restaurantName =
    params.restaurant && replaceHyphenWithSpace(params.restaurant);

  return (
    <div className="w-full max-w-screen-xl p-4 pt-14 sm:px-24 lg:px-44">
      <div className="flex w-full gap-6">
        <div className="flex flex-col items-center">
          <img
            className="mb-2 h-20 w-20 rounded-lg shadow-lg md:h-32 md:w-32 lg:min-h-40 lg:min-w-40"
            alt="Imagen de perfil"
            src="https://plus.unsplash.com/premium_photo-1673830185894-9030c9e7eba9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="flex w-full justify-between">
            <Button
              category="blind"
              icon="/icons/heart.svg"
              iconSize={30}
              strokeColor="red"
            />
            <Button
              category="blind"
              icon="/icons/star.svg"
              iconSize={30}
              strokeColor="gold"
            />
            <Button
              category="blind"
              icon="/icons/checkbox.svg"
              iconSize={30}
              strokeColor="#8b5cf6"
            />
          </div>
          {/* <Button text="Editar Perfil" /> */}
        </div>
        <div className="w-full">
          <h2 className="text-lg font-bold">{restaurantName}</h2>
          <div className="lg:max-w-60">
            <div className="flex items-center gap-6">
              <Icon
                path="/icons/cutlery.svg"
                size={20}
                strokeColor="black"
                strokeWidth="1.5"
              />
              <p className="text-sm text-brand">Fusión</p>
            </div>
            <div className="flex items-center gap-6">
              <Icon
                path="/icons/heart.svg"
                size={20}
                strokeColor="black"
                strokeWidth="1.5"
                fill="black"
              />{' '}
              <p className="text-sm">1057 Seguidores</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex gap-2">
            <div className="flex w-1/2 flex-col items-stretch py-2">
              <h2 className=" text-center font-semibold ">Valencia</h2>
              <div className="flex items-baseline gap-6 p-2">
                <h2 className="font-lg font-semibold text-neutral-500">
                  <span className="text-2xl text-brand">18</span> (2119)
                </h2>
                <p className="text-sm">General</p>
              </div>
              <div className="flex items-baseline gap-6 p-2">
                <h2 className="font-lg font-semibold text-neutral-500">
                  <span className="text-2xl text-brand">2</span> (200)
                </h2>
                <p className="text-sm">Tipo de Comida</p>
              </div>
            </div>
            <div className="w-1/2 rounded-lg border border-neutral-400 p-2">
              <div>
                <span className="text-xl font-bold text-brand md:text-2xl lg:text-4xl">
                  7,6
                </span>
                <div className="flex justify-between align-baseline">
                  <span className="text-sm lg:text-base">Comida</span>
                  <span className="font-bold text-brand lg:text-lg">8</span>
                </div>
                <div className="flex justify-between align-baseline">
                  <span className="text-sm lg:text-base">Ambiente</span>
                  <span className="font-bold text-brand lg:text-lg">7</span>
                </div>
                <div className="flex justify-between align-baseline">
                  <span className="text-sm lg:text-base">Calidad Precio</span>
                  <span className="font-bold text-brand lg:text-lg">7,7</span>
                </div>
                <div className="flex justify-between align-baseline">
                  <span className="text-sm lg:text-base">Servicio</span>
                  <span className="font-bold text-brand lg:text-lg">7,6</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4 w-full border-1 border-neutral-200" />
          <div className="my-2 flex items-center gap-6">
            <Icon
              path="/icons/location-marker.svg"
              size={20}
              strokeColor="black"
              strokeWidth="1.5"
            />{' '}
            <p className="text-sm">Plaza Diputación 2, 46110, Godella</p>
          </div>
        </div>
        <div className="h-60 w-full">
          <MapComponent
            // className={styles.homeMap}
            width="20rem"
            height="10rem"
            center={[DEFAULT_MAP_CENTER.lat, DEFAULT_MAP_CENTER.lng]}
            zoom={16}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                <Marker
                  icon={ICON}
                  position={[DEFAULT_MAP_CENTER.lat, DEFAULT_MAP_CENTER.lng]}
                >
                  <Popup>{restaurantName}</Popup>
                </Marker>
              </>
            )}
          </MapComponent>
        </div>
      </div>

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
