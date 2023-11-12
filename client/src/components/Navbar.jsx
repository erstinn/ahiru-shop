import React, {useState} from 'react';
import {StyledDropdown, StyledNavbar} from '../styles/StyledNavbar.js'
import {Link} from "react-router-dom";

const Navbar = () => {
    const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

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
            <li><Link to='/'> Dashboard </Link></li>
            <li><Link to='/farm'> Farm </Link></li>


            <div className="right-container">

                <StyledDropdown className="dropdown-cart" >
                    <img src="/assets/cart.png" onClick={() => showDropdownContents(false)}  alt="🔻"/>
                    <div className={`dropdown-cart-content ${cartDropdownVisible ? 'visible' : 'hidden'}`}>
                        <h3>My Farm</h3>
                        <button>
                            <img className='mini-img' src="/assets/add-to-cart.png" alt=""/>
                        </button>

                    </div>
                </StyledDropdown>

                <StyledDropdown className="dropdown-profile" >
                    <img src="/assets/profile.png" onClick={() => showDropdownContents(true)}  alt="🔻"/>
                    <div className={`dropdown-profile-content ${profileDropdownVisible ? 'visible' : 'hidden'}`} onClick={() => showDropdownContents(true)}>
                        <li><img className='mini-img' src="/assets/icons8-settings-48.png" alt=""/>
                        <Link to='/settings'> Settings </Link></li>
                        <li><img className='mini-img' src="/assets/icons8-login-48.png" alt=""/>
                        <Link to='/login'> Login </Link></li>
                        <li><img className='mini-img' src="/assets/icons8-logout-48.png" alt=""/>
                        <Link to='/logout'> Logout </Link></li>
                    </div>
                </StyledDropdown>


            </div>
        </StyledNavbar>
    );
};

export default Navbar;
