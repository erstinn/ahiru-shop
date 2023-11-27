import React from 'react';
import {StyledSettingsInput} from "./Settings.styled.js";
import {BorderedHeader} from "../../styles/Globals.styled.js";

const GeneralSettings = () => {
    return (
        <div>
            <BorderedHeader>Profile Settings</BorderedHeader>
            <label htmlFor=""> <h4>Username</h4></label>
            <StyledSettingsInput type="text" id="username" name="username"/>

            <h4>Email</h4>
            <StyledSettingsInput type="text" id="username" name="username"/>

            <BorderedHeader>User Details</BorderedHeader>
            <h4>First name</h4>
            <StyledSettingsInput type="text" id="firstname" name="firstname"/>

            <h4>Last name</h4>
            <StyledSettingsInput type="text" id="lastname" name="lastname"/>

        </div>
    );
};

export default GeneralSettings;
