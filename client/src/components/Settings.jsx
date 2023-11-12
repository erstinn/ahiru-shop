import {StyledSettings, StyledSidebar} from "../styles/Account.styled.js";
const Settings = () => {
    return (
        <StyledSettings>
            <StyledSidebar>
                <div className='profile-section'>
                    <img src="/assets/profile.png" alt=""/>
                        <img className="add-button" src="/assets/icons8-add-48.png" alt=""/>
                </div>

                <div className="options-nav">
                    <div className="option">
                        {/* preferences: light/dark mode, language; change address*/}
                        General
                    </div>
                    <div className="option">
                        Security
                    </div>
                </div>

            </StyledSidebar>

        </StyledSettings>
    );
};

export default Settings;
