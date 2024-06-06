import React, { ButtonHTMLAttributes } from 'react';
import Icon from '../icon/Icon';
import { ButtonCategoryType } from './types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category?: ButtonCategoryType;
  text?: string;
  icon?: string;
  iconSize?: number;
  strokeColor?: string;
}

const Button = ({
  category = 'primary',
  text,
  icon,
  iconSize,
  strokeColor,
}: ButtonProps) => {
  const getStylesByCategory = (category: ButtonCategoryType) => {
    let styles;
    switch (category) {
      case 'blind':
        styles = 'bg-transparent p-0 hover:bg-transparent focus:bg-transparent';
        break;
      case 'primary':
        styles =
          'shadow-light-3 hover:shadow-light-2 bg-neutral-100 px-4 py-2  transition duration-150 ease-in-out hover:bg-neutral-200 focus:bg-neutral-200 sm:px-6';
        break;
    }

    return styles;
  };

  return (
    <button
      type="button"
      className={`inline-block rounded-md  ${getStylesByCategory(category)}`}
    >
      {!icon && <p className="w-max text-xs sm:text-sm">{text}</p>}
      {icon && (
        <Icon
          path={icon}
          size={iconSize}
          strokeColor={strokeColor}
          strokeWidth="1.5"
        />
      )}
    </button>
  );
};

export default Button;
