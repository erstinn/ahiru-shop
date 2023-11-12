import {StyledSettings, StyledSidebar} from "../styles/Account.styled.js";
const Settings = () => {
    return (
        <StyledSettings>
            <StyledSidebar>
                <img src="/assets/profile.png" alt=""/>
                <button>
                    Upload Photo
                </button>
            </StyledSidebar>

        </StyledSettings>
    );
};

export default Settings;
