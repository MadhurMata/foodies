interface ListItemProps {
  text: string;
  iconUrl: string;
  onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ text, iconUrl, onClick }) => {
  return (
    <li className="flex items-center justify-between py-2">
      <button
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={onClick}
      >
        <svg
          xmlns={iconUrl}
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 018 8c0 1.657-.5 3.193-1.348 4.488l4.637 4.637a1 1 0 11-1.414 1.414l-4.637-4.637A7.96 7.96 0 0110 18a8 8 0 110-16zm0 2a6 6 0 100 12 6 6 0 000-12zm0 2a2 2 0 00-2 2c0 .345.088.665.232.947l-1.316 1.316A3.953 3.953 0 006 10a4 4 0 114-4zm0 2a2 2 0 11-4 0 2 2 0 014 0z"
            clipRule="evenodd"
          />
        </svg>
        <span>{text}</span>
      </button>
    </li>
  );
};

export default ListItem;
