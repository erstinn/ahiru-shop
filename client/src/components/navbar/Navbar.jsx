import React, {useEffect, useState} from 'react';
import {StyledDropdown, StyledNavbar} from './StyledNavbar.js'
import {Link, NavLink} from "react-router-dom";
import {createPortal} from "react-dom";
import LoginModal from "../authentication/LoginModal.jsx";

const Navbar = () => {
    const [isMobile, setMobile] = useState(false);
    const [showLoginModal, setLoginModal] = useState(false);

    const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);


    useEffect(() => {
        setMobile(window.innerWidth <= 720)
    }, [])


    const showDropdownContents = (profile) => {
        if (profile) {
            if (cartDropdownVisible)
                setCartDropdownVisible(!cartDropdownVisible)

            setProfileDropdownVisible(!profileDropdownVisible);

        } else {
            if (profileDropdownVisible)
                setProfileDropdownVisible(!profileDropdownVisible)

            setCartDropdownVisible(!cartDropdownVisible);
        }
    };


    return (
        <StyledNavbar>
            <li><NavLink to='/'
                    className={`option 
                        ${({ isActive, isPending }) => isPending ?
                        "pending" : isActive ?
                        "active" : null}` }>
                Dashboard
            </NavLink></li>
            <li><NavLink to='/farm'
                    className={`option 
                        ${({ isActive, isPending }) => isPending ? 
                        "pending" : isActive ?
                        "active" : null}` }>
                Farm
            </NavLink></li>


            <div className="right-container">

                <StyledDropdown className="dropdown-cart" >
                    <img src="/assets/cart.png" onClick={() => showDropdownContents(false)} alt="🔻"/>
                    <div className={`dropdown-cart-content ${cartDropdownVisible ? 'visible' : 'hidden'}`}>
                        <h3>My Farm</h3>
                        <button>
                            <img className='mini-img' src="/assets/add-to-cart.png" alt=""/>
                        </button>

                    </div>
                </StyledDropdown>

                <StyledDropdown className="dropdown-profile" >
                    <img src="/assets/profile.png" onClick={() => showDropdownContents(true)} alt="🔻"/>
                    <div className={`dropdown-profile-content ${profileDropdownVisible ? 'visible' : 'hidden'}`} onClick={() => showDropdownContents(true)}>
                        <li><img className='mini-img' src="/assets/icons8-settings-48.png" alt=""/>
                        <Link to='/settings'> Settings </Link></li>
                        <li>
                            <img className='mini-img' src="/assets/icons8-login-48.png" alt=""/>
                            {
                                isMobile ? (<Link to='/login'> LoginZ </Link>)
                                    : (<span onClick={() => setLoginModal(true)}> LoginA </span>)
                            }


                        </li>
                        {showLoginModal && createPortal(
                            <LoginModal onClose={() => setLoginModal(false)} />
                            , document.body
                        )
                        }


                        <li><img className='mini-img' src="/assets/icons8-logout-48.png" alt=""/>
                        <Link to='/register'> Logout </Link></li>
                    </div>
                </StyledDropdown>


            </div>
        </StyledNavbar>
    );
};

export default Navbar;
