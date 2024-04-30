import ListItem from './listItem/ListItem';

interface AutocompleteListProps {
  show: boolean;
}

const AutocompleteList: React.FC<AutocompleteListProps> = ({
  show = false,
}) => {
  const getRestaurants = () => {
    console.log('get restaurants by location');
  };
  return (
    <>
      {show && (
        <div className="rounded-md border border-gray-300 p-4">
          <h2 className="mb-4 text-lg font-bold">Box Title</h2>
          <ul>
            <ListItem
              onClick={getRestaurants}
              text="Component 1"
              iconUrl="http://www.w3.org/2000/svg"
            />
            <ListItem
              onClick={getRestaurants}
              text="Component 2"
              iconUrl="http://www.w3.org/2000/svg"
            />
          </ul>
        </div>
      )}
    </>
  );
};

export default AutocompleteList;
