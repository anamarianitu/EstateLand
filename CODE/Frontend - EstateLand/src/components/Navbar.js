import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import { GiModernCity } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import AuthService from "../services/auth.service";

function Navbar() {

  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const logOut = () => {
    AuthService.logout();
    window.location.reload();
  }


  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return (
      window.removeEventListener('resize', showButton)
    )
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);


  return (
    <>
      <nav className={navbar ? 'navbar down' : 'navbar'}>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <GiModernCity className='navbar-icon' />
            EstateLand
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/properties'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Properties
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/news'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                News
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            {
              currentUser ? (
                <>
                  <li className='nav-item'>
                    <Link
                      to='/myProfile'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      My Profile
                    </Link>
                  </li>
                  <li className='nav-btn'>
                    {button ? (
                      <Link to='/login' className='btn-link' onClick={logOut}>
                        <Button buttonStyle='btn--introView'>LOG OUT</Button>
                      </Link>
                    ) : (
                      <Link to='/login' className='btn-link' onClick={logOut}>
                        <Button
                          buttonStyle='btn--outline'
                          buttonSize='btn--mobile'
                          onClick={closeMobileMenu}
                        >
                          LOG OUT
                        </Button>
                      </Link>
                    )}
                  </li>
                </>


              ) : (
                <li className='nav-btn'>
                  {button ? (
                    <Link to='/signin' className='btn-link'>
                      <Button buttonStyle='btn--introView'>SIGN IN</Button>
                    </Link>
                  ) : (
                    <Link to='/signin' className='btn-link'>
                      <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu}
                      >
                        SIGN IN
                      </Button>
                    </Link>
                  )}
                </li>
              )

            }


          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
