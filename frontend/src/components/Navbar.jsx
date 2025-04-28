import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [styleForSpan, setStyleForSpan] = useState('bg');
    const [user, setUser] = useState(null);

    useEffect(() => {
        // load user from localStorage on every route change
        const stored = localStorage.getItem('user');
        setUser(stored ? JSON.parse(stored) : null);

        // underline/highlight logic
        switch (location.pathname) {
            case '/': setStyleForSpan('bg'); break;
            case '/Shop': setStyleForSpan('bgShop'); break;
            case '/Blogs': setStyleForSpan('bgBlogs'); break;
            case '/my-profile':
            case '/create': setStyleForSpan('bgMyProfile'); break;
            default: setStyleForSpan('bg');
        }
    }, [location.pathname]);

    const handleSpan = s => setStyleForSpan(s);
    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/signin');
    };

    return (
        <div className="navbar">
            <div className="logo">EnterAct</div>

            <nav className="menu">
                <span className={styleForSpan}></span>
                <Link onClick={() => handleSpan('bg')} className='menu-btn' to="/">Quests</Link>
                <Link onClick={() => handleSpan('bgShop')} className='menu-btn' to="/Shop">Shop</Link>
                <Link onClick={() => handleSpan('bgBlogs')} className='menu-btn' to="/Blogs">Blogs</Link>
            </nav>

            <div className="user-name-image">
                {user ? (
                    <>
                        <div className="img"></div>
                        <Link onClick={() => handleSpan('bgCreate')} to="/my-profile" className='menu-btn'>
                            @{user.username}
                        </Link>

                        {/* only creators can see “Create” */}
                        {user.role === 'creator' && (
                            <Link onClick={() => handleSpan('bgCreate')} to="/create" className='menu-btn'>
                                Create Quest
                            </Link>
                        )}

                        <button
                            onClick={handleLogout}
                            className="menu-btn"
                            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link onClick={() => handleSpan('bgCreate')} to="/signup" className='menu-btn'>
                            Sign Up
                        </Link>
                        <Link onClick={() => handleSpan('bgCreate')} to="/signin" className='menu-btn'>
                            Login
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
