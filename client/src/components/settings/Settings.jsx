import {StyledMainBody, StyledSettings, StyledSidebar} from "./Settings.styled.js";
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
                    <NavLink to="/settings" end className={`option ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : null}`} >
                        {/* preferences: light/dark mode, language; change address*/}
                        General
                    </NavLink>
                    <NavLink to="preferences" className={`option ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : null}`} >
                        Preferences
                    </NavLink>
                    <NavLink to="security"
                        className={`option ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : null}`} >
                        Security
                    </NavLink>
                    <NavLink to="transactions"
                             className={`option ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : null}`} >
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
