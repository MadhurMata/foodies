const fetchRestaurants = async () => 
   await fetch('../api/restaurantsApi/restaurants.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
;

export default function Home() {
  fetchRestaurants();
  return <h1>App Pageeee</h1>;
}
