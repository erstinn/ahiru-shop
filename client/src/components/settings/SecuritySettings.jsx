import React from 'react';
import {StyledWarningButton} from "../../styles/Account.styled.js";

const SecuritySettings = () => {
    return (
        <div>
            <h3>Security</h3>
            <h4>Password</h4>
            <h3>Billing details</h3>
            <h4>Payment Methods</h4>
            <h4>Username</h4>
            <h3>Delete account</h3>
            <p className='warning'>Permanently delete your account and your details.</p>
            <StyledWarningButton>
                Delete account
            </StyledWarningButton>
        {/*    Delete acc button*/}
        </div>
    );
};

export default SecuritySettings;
