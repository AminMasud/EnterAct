import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

const Navbar = () => {

    const location = useLocation();
    const [styleForSpan, setStyleForSpan] = useState("bg");


    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setStyleForSpan('bg');
                break;
            case '/Shop':
                setStyleForSpan('bgShop');
                break;
            case '/Blogs':
                setStyleForSpan('bgBlogs');
                break;
            case '/my-profile':
                setStyleForSpan('bgMyProfile');
                break;
            case '/create':
                setStyleForSpan('bgMyProfile');
                break;
            default:
                setStyleForSpan('bg');
        }
    }, [location.pathname]);


    const handleSpan = (styleName) => {
        setStyleForSpan(styleName);

    };


    return (
        <div className="navbar">
            <div className="logo">Enteract</div>
            <nav className="menu">
                <span className={styleForSpan}></span>
                <Link onClick={() => handleSpan("bg")} className='menu-btn' to="/">Quests</Link>
                <Link onClick={() => handleSpan("bgShop")} className='menu-btn' to="/Shop">Shop</Link>
                <Link onClick={() => handleSpan("bgBlogs")} className='menu-btn' to="/Blogs">Blogs</Link>
            </nav>
            <div className="user-name-image">
                <div className="img"></div>

                <Link onClick={() => handleSpan("bgCreate")} to="/my-profile" className='menu-btn'>@lalalaaa</Link>
                <Link onClick={() => handleSpan("bgMyProfile")} to="/create" className='menu-btn'>Create</Link>
            </div>
        </div>
    );
}

export default Navbar;