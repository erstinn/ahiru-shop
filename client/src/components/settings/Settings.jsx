import {StyledMainBody, StyledSettings, StyledSidebar} from "./Settings.styled.js";
import {NavLink, Outlet} from "react-router-dom";
import React, {useContext} from "react";
import {LocaleContext} from "../../hooks/LocaleContext.js";
const Settings = () => {
    const {prefLanguage, setPrefLanguage, lang} = useContext(LocaleContext);
    const locale = lang[prefLanguage];
    return (
        <StyledSettings>
            <StyledSidebar>
                <div className='profile-section'>
                    <img src="/assets/icons/profile.png" alt=""/>
                        <img className="add-button" src="/assets/icons/icons8-add-48.png" alt=""/>
                </div>

                <div className="options-nav">
                    <NavLink to="/settings" end className={`option ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : null}`} >
                        {/* preferences: light/dark mode, language; change address*/}
                        {locale.generalSettings}
                    </NavLink>
                    <NavLink to="preferences" className={`option ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : null}`} >
                        {locale.preferencesSettings}
                    </NavLink>
                    <NavLink to="security"
                        className={`option ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : null}`} >
                        {locale.securitySettings}
                    </NavLink>
                    <NavLink to="transactions"
                             className={`option ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : null}`} >
                        {locale.transactionSettings}
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
