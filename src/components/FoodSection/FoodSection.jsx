import Card from '../Card/Card';
import './FoodSection.css'

const burguers = [
    {
      id:1,
      name:'Pepe burguer',
      description:'The real spanish one, with best jamón serrano de pata negra',
      img: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNWRjMTdkZTRlZWYyYzJlYjhjZTNiNzVlYjJkMmU3MWEvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
      price:10
    },
    {
      id:2,
      name:'MilanCheese',
      description:'Best burguer with real milanesa from Argentina, with a lot of cheese',
      img: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYzFjZWZkMGM2M2U5YTk0ZjBkZDM4OWE3MGJiZjM5YWEvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
      price:20
    },
    {
      id:3,
      name:'Gomu Gomu',
      description:'The unique burguer inpired by One Piece, best anime ever',
      img: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvN2QxYmU1NmMzNjQ0YjFmNjViNjkyOWU1YmJhYWI2NWMvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
      price:15
    }
];

const FoodSection = () => {
    return (
        <>
        <section className='foodSection'>
            <h2>Our most popular burguers</h2>
            <div className='foodSectionCards'>
                {burguers.map((burguer) => {
                    return <Card name={burguer.name} description={burguer.description} img={burguer.img} />
                })}
            </div>
        </section>
        <section className='foodSection'>
            <h2>Our most popular burguers</h2>
            <div className='foodSectionCards'>
                {burguers.map((burguer) => {
                    return <Card name={burguer.name} description={burguer.description} img={burguer.img} />
                })}
            </div>
        </section>
        </>
    );
};

export default FoodSection;