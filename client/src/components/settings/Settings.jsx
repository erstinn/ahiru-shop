import {StyledMainBody, StyledSettings, StyledSidebar} from "../../styles/Account.styled.js";
import {NavLink, Outlet} from "react-router-dom";
import React from "react";
const Settings = () => {
    return (
        <StyledSettings>
            <StyledSidebar>
                <div className='profile-section'>
                    <img src="/assets/profile.png" alt=""/>
                        <img className="add-button" src="/assets/icons8-add-48.png" alt=""/>
                </div>

                <div className="options-nav">
                    <NavLink to="/settings" className={`option ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}`} >
                        {/* preferences: light/dark mode, language; change address*/}
                        General
                    </NavLink>
                    <NavLink to="preferences" className={`option ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}`} >
                        Preferences
                    </NavLink>
                    <NavLink to="security"
                        className={`option ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}`} >
                        Security
                    </NavLink>
                    <NavLink to="transactions"
                             className={`option ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}`} >
                        Transaction History
                    </NavLink>
                </div>
            </StyledSidebar>

            <StyledMainBody>
                <Outlet />
            </StyledMainBody>

        </StyledSettings>
    );
};

export default Settings;
