import { Link } from "react-router-dom";
import '../css/navbar.css';

const Navbar = () => {

    return(
        <>
            <nav className='navbar'>
                 <h2 className='navtitle'>
                    theLylabean
                </h2>
                    <div className="navlinks">
                        <Link to='/'>
                            Home
                        </Link>
                        <Link to='/portfolio'>
                            Portfolio
                        </Link>
                        <Link to='/aboutme'>
                            About Me
                        </Link>
                    </div>
            </nav>
        </>
    )
}

export default Navbar