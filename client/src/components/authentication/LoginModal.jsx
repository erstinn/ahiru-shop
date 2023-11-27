import React from 'react';
import {StyledModalWrapper} from "../modals/Modal.styled.js";
import {StyledLoginModal} from "./Login.styled.js";
import {StyledCancelBtn, StyledConfirmBtn} from "../../styles/Globals.styled.js";

const LoginModal = () => {
    return (
        <StyledModalWrapper>
            <StyledLoginModal>


                <div className='btn-container'>
                    <StyledCancelBtn>Cancel</StyledCancelBtn>
                    <StyledConfirmBtn>Confirm</StyledConfirmBtn>
                </div>
            </StyledLoginModal>

        </StyledModalWrapper>
    );
};

export default LoginModal;