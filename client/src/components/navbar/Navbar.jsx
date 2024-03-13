import React, {useEffect, useRef, useState} from 'react';
import {
   NavbarStyled,
   StyledCart,
   StyledCartDropdownIcon,
   StyledDropdown,
   StyledProfile,
   StyledProfileDropdownIcon
} from './Navbar.styled.js'
import {Link, NavLink} from "react-router-dom";
import {createPortal} from "react-dom";
import LoginModal from "../authentication/LoginModal.jsx";
import {StyledIconMedium} from "../../styles/Globals.styled.js";

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
            if (profileRef.current && !profileRef.current.contains(event.target) )
                resetDropdowns('profile');
            if (cartRef.current && !cartRef.current.contains(event.target))
                resetDropdowns('cart');
        }
        document.addEventListener('click', handler);
        // document.addEventListener('mouseout', handler)

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleDropdown = (key, sub) => {
        if (sub !== null) {
         const openedSubMenu = openedDropdownMenu.menus.map(menu => {
            if (menu.hasOwnProperty('submenu')){
               menu['submenu'].map((submenu) => {
                  const others = Object.keys(submenu)[0]
                  sub === others ?  submenu[sub] = !submenu[sub] : submenu[others] = false
               })
            }
            return menu;
         })
           console.log(openedSubMenu)
           setOpenedDropdownMenu({menus: openedSubMenu})
        } else {
            const openedMenu = openedDropdownMenu.menus.map(menu => {
                const others = Object.keys(menu)[0]
                key === others ? menu[key] = !menu[key] : menu[others] = false
                return menu
            });
               setOpenedDropdownMenu({menus: openedMenu})
         }
       }

    const resetDropdowns = (key) => {
       const closed = openedDropdownMenu.menus
          .map(opened =>{
          opened[key] = false

          if (opened.hasOwnProperty('submenu'))
             opened.submenu.map((openedSub) => openedSub = false)
          return opened;
       })
       setOpenedDropdownMenu({menus: closed})
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
                      <StyledIconMedium src="/assets/icons/cart.png" onClick={() => handleDropdown('cart', null)} alt="🔻"/>
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
                      <StyledIconMedium src="/assets/icons/profile.png" onClick={() => handleDropdown('profile', null)} alt="🔻"/>
                     <div className={`content profile 
                        ${openedDropdownMenu.menus.some(menu => menu.profile) ? 'visible' : 'hidden'}`}>
                        <Link to='/settings'>
                           <li onClick={() => resetDropdowns('profile')}>
                              <StyledProfileDropdownIcon src="/assets/icons/settings.png" alt=""/>
                              <span>Settings</span>
                           </li>
                        </Link>

                        <li onClick={() => handleDropdown('profile', 'theme')}>
                           <StyledProfileDropdownIcon src="/assets/icons/darkmode.png" alt=""/>
                           <span>Theme</span>
                        </li>
                           {openedDropdownMenu.menus.filter(menu => menu.profile)
                                 .map(menu => menu.submenu.some(sub =>  sub.theme)).includes(true) &&
                              <ul className='submenu content visible'>
                                 <li onClick={() => handleDropdown('profile', 'theme')}>
                                    <StyledProfileDropdownIcon src="/assets/icons/darkmode.png" alt=""/>
                                    <span>Dark mode</span>
                                 </li>
                                 <li onClick={() => handleDropdown('profile', 'theme')}>
                                    <StyledProfileDropdownIcon src="/assets/icons/lightmode.png" alt=""/>
                                    <span>Light mode</span>
                                 </li>
                              </ul>
                           }


                        <li onClick={() => handleDropdown('profile', 'language')}>
                           <StyledProfileDropdownIcon src="/assets/icons/language.png" alt=""/>
                           <span>Language</span>
                        </li>

                        {openedDropdownMenu.menus.filter(menu => menu.profile).map(menu => menu.submenu.some(sub => sub.language)).includes(true) &&
                           <ul className='submenu content visible'>
                              <li>
                                 <span>English</span>

                              </li>
                              <li>
                                 <span>Japanese</span>
                              </li>
                           </ul>
                        }


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

                        <Link to='/register'>
                           <li>
                              <StyledProfileDropdownIcon src="/assets/icons/logout.png" alt=""/>
                              <span>Logout</span>
                           </li>
                        </Link>
                     </div>
                  </StyledProfile>
              </StyledDropdown>


          </div>
      </NavbarStyled>
    );
};

export default Navbar;