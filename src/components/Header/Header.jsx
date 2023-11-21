import './Header.css'

const Header = () => {
    return(
        <nav>
            <ul className='navLeft'>
                <li className='navTitle'>Bergner Restaurant</li>
                <li>Menu</li>
                <li>Reservations</li>
            </ul>
            <ul className='navRight'>
                <li>Take away</li>
                <li>Login</li>
            </ul>
        </nav>
    );
};

export default Header;