import { Link } from "react-router-dom";

// import images
import logo from '../assets/Logo.png';

// import icons
import {HiOutlineBars3, HiOutlineHeart} from 'react-icons/hi2';
import {BsCart4} from 'react-icons/bs';
import {GoSearch} from 'react-icons/go';
import { useState } from "react";

const Navbar = () => {

    const [catalog, setCatalog] = useState(true);
    const [select, setSelect] = useState(null);

  return (
    <>
    <nav>
        <header className="container">
            <div className={catalog ? "catalog-data": "catalog-data none"}>
                <div className="nav-sidebar">
                    {
                        catalogData.map(item=>(
                            <div key={item.id} className={select === item.id ? "nav-side-item active":"nav-side-item"} onClick={()=>setSelect(item.id)}>
                                {item.name}
                            </div>
                        ))
                    }
                </div>
                <div className="nav-body">
                    {
                        select !== null ? catalogData[select - 1].brands.map(item=>(
                            <Link key={item.id} to={'/'} className="nav-body-item">
                                {item.name}
                            </Link>
                        )):""
                    }
                </div>
            </div>
            <div className="nav-left">
                <Link to="/" className="logo">
                    <img src={logo} alt="Next-store" />
                </Link>
                <div onClick={()=>setCatalog(!catalog)} className="nav-catalog-btn">
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



let catalogData = [
    {
        id: 1,
        name: 'Noutbuk',
        brands: [
            {
                id: 1,
                name: 'Apple',
            },
            {
                id: 2,
                name: 'Xioami',
            },
            {
                id: 3,
                name: 'REDmi',
            },
            {
                id: 4,
                name: 'Apple',
            },
            {
                id: 5,
                name: 'Xioami',
            },
            {
                id: 6,
                name: 'REDmi',
            },
            {
                id: 7,
                name: 'Apple',
            },
            {
                id: 8,
                name: 'Xioami',
            },
            {
                id: 9,
                name: 'REDmi',
            },
            {
                id: 10,
                name: 'Apple',
            },
            {
                id: 11,
                name: 'Xioami',
            },
            {
                id: 12,
                name: 'REDmi',
            },
        ]
    },
    {
        id: 2,
        name: 'Phone',
        brands: [
            {
                id: 1,
                name: 'Apple',
            },
            {
                id: 2,
                name: 'Xioami',
            },
            {
                id: 3,
                name: 'REDmi',
            },
            {
                id: 4,
                name: 'Samsung',
            },
        ]
    },
    {
        id: 3,
        name: 'Tv',
        brands: [
            {
                id: 1,
                name: 'Bek',
            },
            {
                id: 2,
                name: 'Jinlipu',
            },
            {
                id: 3,
                name: 'Artel',
            },
            {
                id: 4,
                name: 'Samsung',
            },
        ]
    },
]
