import { Link } from "react-router-dom";

// import images
import logo from '../assets/Logo.png';

// import icons
import {HiOutlineBars3, HiOutlineHeart} from 'react-icons/hi2';
import {BsCart4} from 'react-icons/bs';
import {GoSearch} from 'react-icons/go';

const Navbar = () => {
  return (
    <>
    <nav>
        <header className="container">
            <div className="nav-left">
                <Link to="/" className="logo">
                    <img src={logo} alt="Next-store" />
                </Link>
                <div className="nav-catalog-btn">
                    <span><HiOutlineBars3/></span>
                    <b>Catalog</b>
                </div>
            </div>
            <div className="nav-middle">
                <input type="text" className="nav-search" placeholder="Maxsulotlarni izlash" />
                <div className="nav-search-btn">
                    <GoSearch/>
                </div>
            </div>
            <div className="nav-right">
                <Link to="/" className="nav-btn">
                    <HiOutlineHeart/>
                </Link>
                <Link to="/" className="nav-btn">
                    <BsCart4/>
                </Link>
                <Link to='/' className="nav-login">
                    Kirish
                </Link>
            </div>
        </header>
    </nav>
    <div className="navbar-free"></div>
    </>
  );
}

export default Navbar;
