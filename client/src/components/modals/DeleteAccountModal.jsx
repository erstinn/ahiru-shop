import React from 'react';
import {StyledCancelBtn, StyledDeleteBtn, StyledWarningText} from "../../styles/Globals.styled.js";
import {StyledModalContainer, StyledModalWrapper} from "./Modal.styled.js";

const DeleteAccountModal = ({onClose}) => {
    return (
        <StyledModalWrapper onClick={onClose}>
            <StyledModalContainer onClick={e => e.stopPropagation()}>
                <div className='modal-content'>
                    <StyledWarningText>Permanently delete your account?</StyledWarningText>
                    This action is irreversible.
                </div>
                <div className='btn-container'>
                    <StyledCancelBtn onClick={onClose}>Cancel</StyledCancelBtn>
                    <StyledDeleteBtn>Delete Account</StyledDeleteBtn>
                </div>
            </StyledModalContainer>
        </StyledModalWrapper>
    );
};

export default DeleteAccountModal;