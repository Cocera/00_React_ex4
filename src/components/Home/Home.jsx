import './Home.css'
import FoodSection from './FoodSection/FoodSection.jsx';

const burguers = [
    {
      id: crypto.randomUUID(),
      name:'Pepe burguer',
      description:'The real spanish one, with best jamón serrano de pata negra',
      img: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNWRjMTdkZTRlZWYyYzJlYjhjZTNiNzVlYjJkMmU3MWEvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
      price:10
    },
    {
      id: crypto.randomUUID(),
      name:'MilanCheese',
      description:'Best burguer with real milanesa from Argentina, with a lot of cheese',
      img: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYzFjZWZkMGM2M2U5YTk0ZjBkZDM4OWE3MGJiZjM5YWEvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
      price:20
    },
    {
      id: crypto.randomUUID(),
      name:'Gomu Gomu',
      description:'The unique burguer inpired by One Piece, best anime ever',
      img: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvN2QxYmU1NmMzNjQ0YjFmNjViNjkyOWU1YmJhYWI2NWMvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
      price:15
    }
  ];

const burguers2 = [
    {
      id: crypto.randomUUID(),
      name:'Cheese Sandwich',
      description:'Literally, a basic sandwich with loooot of melted cheese.',
      img: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYjVkMjhlZDQzNmExMTVhZjJlOGE4NWU3MjNlNzExMDYvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
      price:10
    },
    {
      id: crypto.randomUUID(),
      name:'Lettuce Burger',
      description:'Just bread and lettuce. Very original recipeand best option for vegans.',
      img: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZDhkMzY2ZWE5ZTgxODYyODk5NWU3NzZkNDAzYmI3ODYvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
      price:20
    },
    {
      id: crypto.randomUUID(),
      name:'Chips x5',
      description:'Enough chips to cover your needs for a week. Healthy and vegan.',
      img: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvN2U2ZjUxM2EzMjYxOGY0Nzc4MGQ1YjBiMzZhMGUzZWYvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
      price:15
    }
];

const Home = () => {
    return(
        <>
        <div className='contFoodSection'>
            <FoodSection id={crypto.randomUUID()} sectionTitle="Most popular burguers" menuObject={burguers}/>
            <FoodSection id={crypto.randomUUID()} sectionTitle="Our burguer menus" menuObject={burguers2}/>
        </div>
        </>
    )
};

export default Home;