import React from 'react';
import {StyledModalWrapper} from "../modals/Modal.styled.js";
import {StyledGreeting, StyledLoginInput, StyledLoginModal} from "./Login.styled.js";
import {StyledConfirmBtn} from "../../styles/Globals.styled.js";
import {useForm} from "react-hook-form";

const LoginModal = ({onClose}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <StyledModalWrapper onClick={onClose}>
            <StyledLoginModal onClick={e => e.stopPropagation()}>
                <StyledGreeting isMobile={false}>Welcome back</StyledGreeting>

                <div className='modal-content'>
                    <label>Username/E-mail
                        <StyledLoginInput {...register(
                            'auth',
                            {
                                required: 'Please input your e-mail or username',
                            })}
                        />
                    </label>

                    <label>Password
                        <StyledLoginInput {...register(
                            'pw',
                            {
                                required: 'Please input your password',
                            })}
                        />
                    </label>
                    <StyledConfirmBtn>Login</StyledConfirmBtn>

                </div>

            </StyledLoginModal>

        </StyledModalWrapper>
    );
};

export default LoginModal;