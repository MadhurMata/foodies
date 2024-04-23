'use client';
import NavigateButton from '../navigateButton/NavigateButton';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();

  const buttonProps =
    pathName === '/'
      ? { label: 'Map', href: '/map' }
      : { label: 'Home', href: '/' };

  return (
    <>
      <div className=" sticky top-0 z-10 flex items-center justify-around bg-white px-6 pt-3.5">
        <div className="max-w-md overflow-auto rounded-full border shadow-md">
          <div className="relative flex h-12 w-full items-center overflow-hidden rounded-lg bg-white p-2 focus-within:shadow-lg">
            <div className="grid h-full w-12 place-items-center text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full pr-2 text-sm text-gray-700 outline-none"
              type="text"
              id="search"
              placeholder="Search something.."
            />

            <div>
              <h5 className="text-gray-400">Valencia</h5>
            </div>
          </div>
        </div>
        <div className="align-middle	">
          <NavigateButton label={buttonProps.label} href={buttonProps.href} />
        </div>
      </div>
      <div className="h-3 w-auto"></div>
    </>
  );
};

export default Header;
