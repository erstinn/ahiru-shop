import React from 'react';
import {StyledCancelBtn, StyledDeleteBtn, StyledWarningText} from "../../styles/Globals.styled.js";
import {StyledModalContainer, StyledModalBlur} from "./Modal.styled.js";

const DeleteAccountModal = ({onClose}) => {
    return (
        <StyledModalBlur>
            <StyledModalContainer>
                <div className='modal-content'>
                    <StyledWarningText>Permanently delete your account?</StyledWarningText>
                    This action is irreversible.
                </div>
                <div className='btn-container'>
                    <StyledCancelBtn onClick={onClose}>Cancel</StyledCancelBtn>
                    <StyledDeleteBtn>Delete Account</StyledDeleteBtn>
                </div>
            </StyledModalContainer>
        </StyledModalBlur>
    );
};

export default DeleteAccountModal;