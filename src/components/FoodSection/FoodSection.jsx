import Card from '../Card/Card';
import './FoodSection.css'

const FoodSection = (props) => {
    return (
        <>
        <section className='foodSection'>
            <h2>{props.sectionTitle}</h2>
            <div className='foodSectionCards'>
                {props.menuObject.map((menuItem) => {
                    return <Card name={menuItem.name} description={menuItem.description} img={menuItem.img} price={menuItem.price}/>
                })}
            </div>
        </section>
        </>
    );
};

export default FoodSection;