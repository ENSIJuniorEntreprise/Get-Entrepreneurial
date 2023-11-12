import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import logoforum from '../Assets/images/16forum_blanc.png'
import './Navbar.css'; 

export default function Navbar() {
    const [moved, setMoved] = useState(false)
    const [click, setClick] = React.useState(false);
    const [charger, setCharger] = useState(false)
    const handleCharger = (val)=>{
        setCharger(val)
    }
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 0) {
            setMoved(true)
        }
        else {
            setMoved(false)
        }
    })
    return (
        <>
            <div style={{marginTop:charger? '65px':''}} className={moved ? 'navbar-container' : 'navbar-container-transparent'}  >
                <div className={!click ? '' : moved ? "main-container" : "main-container move"} onClick={() => Close()} />
                <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                    <div className="nav-container">
                        <NavLink exact to="/" className="nav-logo">
                            {/* <img  src={logoforum} alt='logo' className="logo" /> */}
                        </NavLink>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className='navigation-item'>
                                <Link
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className='link'
                                    onClick={click ? handleClick : null}
                                >
                                    Accueil
                                </Link>
                            </li>
                    
                            <li className='navigation-item'>
                                <NavLink
                                    exact
                                    to="/Program"
                                    activeClassName="active"
                                    className= 'link'
                                    onClick={click ? handleClick : null}
                                >
                                   Programme
                                </NavLink>
                            </li>
                            <li className='navigation-item'>
                                <Link
                                    exact
                                    to="/Collab"
                                    activeClassName="active"
                                    className='link' 
                                    onClick={click ? handleClick : null}
                                >
                                    Collaboration
                                </Link>
                            </li>
                            <li className='navigation-item'>
                                <Link
                                    exact
                                    to="/Register"
                                    activeClassName="active"
                                    className='link'
                                    onClick={click ? handleClick : null}
                                >
                                    Inscription
                                </Link>
                            </li>
                        </ul>
                        <div className={click ? "nav-icon-moved" : !moved ? "nav-icon" : "nav-icon-moved"} onClick={handleClick}>
                            <i class="fas fa-bars"></i>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

