import './Card.css'
import Counter from '../Counter/Counter.jsx'

const Card = (props) => {
    return (
    <article className="card">
        <div className="cardImgCont">
            <img src={props.img}/>
        </div>
        <div className="cardTxtCont">
            <h3>{props.name}</h3>
            <p>{props. description}</p>
        </div>
        <Counter counter={0} />
    </article>
    );
};

export default Card;