import React, {useState} from 'react';
import {StyledDropdown, StyledNavbar} from '../styles/StyledNavbar.js'
import {Link} from "react-router-dom";

const Navbar = () => {
    const [dropdown_class, setDropdownContents] = useState('dropdown-menu hidden')
    const [isDropdownClicked, setDropdownClicked] = useState(false);
    const showDropdownContents = () => {
        if (!isDropdownClicked) {
            setDropdownContents('dropdown-menu visible');
        } else {
            setDropdownContents('dropdown-menu hidden')
        }
        setDropdownClicked(!isDropdownClicked);
    }

    return (
        <StyledNavbar>
            <li><Link to='/'> Dashboard </Link></li>
            <li><Link to='/farm'> Farm </Link></li>

            <StyledDropdown className="dropdown-menu" >
                <img src="/assets/icons8-user-50.png" onClick={showDropdownContents}  alt="🔻"/>
                <div className={dropdown_class}>
                    <li><img className='mini-img' src="/assets/icons8-settings-48.png" alt=""/>
                    <Link to='/settings'> Settings </Link></li>
                    <li><img className='mini-img' src="/assets/icons8-login-48.png" alt=""/>
                    <Link to='/login'> Login </Link></li>
                    <li><img className='mini-img' src="/assets/icons8-logout-48.png" alt=""/>
                    <Link to='/logout'> Logout </Link></li>
                </div>
            </StyledDropdown>

        </StyledNavbar>
    );
};

export default Navbar;
