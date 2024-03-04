import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    StyledDropdown,
    NavbarStyled,
    StyledProfile,
    StyledCart,
    StyledProfileDropdownIcon,
    StyledCartDropdownIcon
} from './Navbar.styled.js'
import {Link, NavLink} from "react-router-dom";
import {createPortal} from "react-dom";
import LoginModal from "../authentication/LoginModal.jsx";
import {StyledIconMedium} from "../../styles/Globals.styled.js";
import * as events from "events";

//TODO another dropdown approach: https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/
// on another project, or other part of the code, i'll keep it simple for now
const Navbar = () => {

    // const locale = useContext(LocaleContext)

    const profileRef = useRef(null);
    const cartRef = useRef(null);

    const [isMobile, setMobile] = useState(false);
    const [showLoginModal, setLoginModal] = useState(false);

    //navbar menus
    const [openedDropdownMenu, setOpenedDropdownMenu] = useState({
      menus: [
        {
          cart: false,
        }, {
          profile: false,
          submenu: [
            {
              theme: false
            }, {
              language: false
            }
          ]
        }
      ]
    })

    useEffect(() => {
        setMobile(window.innerWidth <= 720)
    }, [])



    useEffect(() => {
        const handler = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target))
                handleDropdown('profile', null, true);
            if (cartRef.current && !cartRef.current.contains(event.target))
                handleDropdown('cart', null, true);
        }
        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleDropdown = (key, sub, resetToggle) => {
        if (resetToggle === true) {
          return
        }
        //     setOpenedDropdownMenu((dropdown) => {
        //         dropdown.map((menu) => {
        //             if (menu.hasOwnProperty('submenu')){
        //                 menu.submenu.map((sub, index) => {
        //                     sub[index] = false;
        //                 })
        //             } else {
        //                 menu = false;
        //             }
        //         })
        //     })
        //     console.log('reset', openedDropdownMenu)
        // }


      if (sub !== null) {
         const openedSubMenu = openedDropdownMenu.menus.map(menu => {
            if (menu.hasOwnProperty('submenu')){

            }
         })
      } else {
         const openedMenu = openedDropdownMenu.menus.map(menu => {
             const others = Object.keys(menu)[0]
             key === others ? menu[key] = !menu[key] : menu[others] = false
             return menu
         });
            setOpenedDropdownMenu({menus: openedMenu})
         }


    }


    return (
      <NavbarStyled>
          <li><NavLink to='/'
                       className={`option 
                        ${({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : null}`}>
              Dashboard
          </NavLink></li>
          <li><NavLink to='/farm'
                       className={`option 
                        ${({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : null}`}>
              Farm
          </NavLink></li>


          <div className="right-container">
              <StyledDropdown ref={cartRef}>
                  <StyledCart>
                      <StyledIconMedium src="/assets/icons/cart.png" onClick={() => handleDropdown('cart', null, false)} alt="🔻"/>
                      <div className={`cart-content ${openedDropdownMenu.menus.some(menu => menu.cart) ? 'visible' : 'hidden'}`}>
                          <h3>My Farm</h3>
                          <button>
                              <StyledCartDropdownIcon className='icon' src="/assets/icons/add-to-cart.png" alt=""/>
                          </button>
                      </div>
                  </StyledCart>
              </StyledDropdown>

              <StyledDropdown ref={profileRef}>
                  <StyledProfile>
                      <StyledIconMedium src="/assets/icons/profile.png" onClick={() => handleDropdown('profile', null, false)} alt="🔻"/>
                      <div className={`profile-content 
                        ${openedDropdownMenu.menus.some(menu => menu.profile) ? 'visible' : 'hidden'}`}>

                          <li>
                              <StyledProfileDropdownIcon src="/assets/icons/settings.png" alt=""/>
                              <Link to='/settings'>Settings</Link>
                          </li>


                          <li onMouseEnter={() => handleDropdown('profile', 'theme', false)}
                              onMouseLeave={() => handleDropdown('profile', 'theme', false)}>
                              <StyledProfileDropdownIcon src="/assets/icons/darkmode.png" alt=""/>
                              <span>Theme</span>
                          </li>
                          {
                              openedDropdownMenu['profile'] ?
                                openedDropdownMenu['profile']['theme'] &&
                            <div className={`profile-content visible`}>

                            </div>
                                : ''
                          }

                          <li>
                              <StyledProfileDropdownIcon src="/assets/icons/language.png" alt=""/>
                              <span>Language</span>

                              {/*{&&}*/}
                          </li>


                          <li>
                              <StyledProfileDropdownIcon src="/assets/icons/login.png" alt=""/>
                              {
                                  isMobile ? (<Link to='/login'> LoginZ </Link>)
                                    : (<span onClick={() => setLoginModal(true)}>LoginA</span>)
                              }
                          </li>

                          {showLoginModal && createPortal(
                            <LoginModal onClose={() => setLoginModal(false)}/>
                            , document.body
                          )
                          }


                          <li>
                              <StyledProfileDropdownIcon src="/assets/icons/logout.png" alt=""/>
                              <Link to='/register'>Logout</Link>
                          </li>
                      </div>
                  </StyledProfile>
              </StyledDropdown>


          </div>
      </NavbarStyled>
    );
};

export default Navbar;