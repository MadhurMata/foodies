import { ChangeEventHandler, KeyboardEventHandler } from 'react';

interface SearchbarProps {
  value: string;
  buttonLabel?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  onSelectItem: () => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  value,
  buttonLabel = 'Busqueda Favorita',
  onChange,
  onKeyDown,
  onSelectItem,
}) => {
  const handleClick = () => onSelectItem();
  return (
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
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />

        <button
          onClick={handleClick}
          className="focus:brand-300 rounded-full px-2 py-1 font-medium text-white hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <p className="text-md text-gray-400">{buttonLabel}</p>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
