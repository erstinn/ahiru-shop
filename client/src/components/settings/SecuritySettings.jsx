import React, {useEffect, useState} from 'react';
import {StyledPaymentContainer, StyledWarningBtn} from "./Settings.styled.js";
import {StyledInput} from "../../styles/Globals.styled.js";
import deleteAccountModal from "../modals/DeleteAccountModal.jsx";
import {createPortal} from "react-dom";
import DeleteAccountModal from "../modals/DeleteAccountModal.jsx";

const SecuritySettings = () => {
    const [showDeleteModal, setDeleteModal] = useState(false);


    useEffect(() => {
        fetch()
    }, []);

    return (
        <div>
            <h3>Security</h3>
            <h4>Password</h4>
            <StyledInput type="text" id="firstname" name="firstname"/>

            <h3>Billing details</h3>
            <h4>Payment Methods</h4>
            <StyledInput type="text" id="firstname" name="firstname"/>

            <h3>Linked Accounts</h3>
            <StyledPaymentContainer>
                <div className='add-button'> <img src="/assets/remove-50.png" className="btn-26" alt=""/> </div>
                <div className='details'>
                    <h4 className='account-title'>Gcash</h4>
                    <p> <b>Account No.: </b> 12355</p>
                </div>
            </StyledPaymentContainer>

            <StyledPaymentContainer>
                <div className='add-button'><img src="/assets/add-50.png" alt="" className='btn-26'/></div>
                <div className='add-title'> <h4> Add mode of payment</h4> </div>
            </StyledPaymentContainer>
            <h4>Username</h4>
            
            
            <h3>Delete account</h3>
            <p className='warning'>Permanently delete your account and your details.</p>
            <StyledWarningBtn onClick={() => setDeleteModal(true)}>
                Delete account
            </StyledWarningBtn>
            {   showDeleteModal && createPortal(
                    <DeleteAccountModal onClose={() => setDeleteModal(false)} />,
                    document.body
            )}
        </div>
    );
};

export default SecuritySettings;
