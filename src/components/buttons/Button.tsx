import React from 'react';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button
      type="button"
      className="shadow-light-3 hover:shadow-light-2 inline-block rounded-md bg-neutral-100 px-4 py-2  transition duration-150 ease-in-out hover:bg-neutral-200 focus:bg-neutral-200 sm:px-6"
    >
      <p className="w-max text-xs sm:text-sm">{text}</p>
    </button>
  );
};

export default Button;
