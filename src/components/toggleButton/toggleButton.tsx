import React from 'react';

interface ToggleButtonProps {
  label: string;
  onClick: () => void; // Path or URL to navigate to
  className?: string; // Optional additional classes
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  label,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    >
      {label}
    </button>
  );
};

export default ToggleButton;
