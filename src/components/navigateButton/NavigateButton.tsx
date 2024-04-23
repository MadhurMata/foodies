import React from 'react';
import Link from 'next/link';

interface NavigateButtonProps {
  label: string;
  href: string; // Path or URL to navigate to
  className?: string; // Optional additional classes
}

const NavigateButton: React.FC<NavigateButtonProps> = ({
  label,
  href,
  className = '',
}) => {
  return (
    <Link
      href={href}
      className={`rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    >
      {label}
    </Link>
  );
};

export default NavigateButton;
