import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav>
            <ul className='navLeft'>
                <li className='navTitle'>
                    <Link to="/">
                        Bergner Restaurant
                    </Link>
                </li>
                <li>Menu</li>
                <li>
                    <Link to="/reservationForm"> 
                        Reservations
                    </Link>
                </li>
            </ul>
            <ul className='navRight'>
                <li>Take away</li>
                <li>Login</li>
            </ul>
        </nav>
    );
};

export default Header;