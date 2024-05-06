import { ButtonHTMLAttributes } from 'react';

interface ListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  iconUrl: string;
  isFocused: boolean;
  onClick: () => void;
  onMouseOver: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  text,
  iconUrl,
  isFocused = false,
  onClick,
  onMouseOver,
}) => {
  // TO DO: chnahe this
  const focusStyles = isFocused && 'bg-neutral-200';

  return (
    <li
      onMouseOver={onMouseOver}
      onClick={onClick}
      className={`flex items-center justify-between rounded-lg p-2 ${focusStyles}`}
    >
      {/* <button
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={onClick}
      > */}
      <div className="rounded-md bg-neutral-200 p-2">
        {/* <svg
            xmlns={iconUrl}
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />

            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 018 8c0 1.657-.5 3.193-1.348 4.488l4.637 4.637a1 1 0 11-1.414 1.414l-4.637-4.637A7.96 7.96 0 0110 18a8 8 0 110-16zm0 2a6 6 0 100 12 6 6 0 000-12zm0 2a2 2 0 00-2 2c0 .345.088.665.232.947l-1.316 1.316A3.953 3.953 0 006 10a4 4 0 114-4zm0 2a2 2 0 11-4 0 2 2 0 014 0z"
              clipRule="evenodd"
            />
          </svg> */}
        <svg
          xmlns={iconUrl}
          className="h-8 w-8"
          viewBox="0 0 384 512"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          />
        </svg>
      </div>
      <p className=" text-base font-medium leading-5 text-neutral ">{text}</p>
      {/* </button> */}
    </li>
  );
};

export default ListItem;
