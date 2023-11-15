import React from 'react';
import { useForm } from 'react-hook-form'
import {StyledInput} from "../../styles/Globals.styled.js";

const GeneralSettings = () => {
    return (
        <div>
            <h3>Profile Settings</h3>
            <label htmlFor=""> <h4>Username</h4></label>
            <StyledInput type="text" id="username" name="username"/>

            <h4>Email</h4>

            <h3>User Details</h3>
            <h4>First name</h4>

            <h4>Last name</h4>

        </div>
    );
};

export default GeneralSettings;
