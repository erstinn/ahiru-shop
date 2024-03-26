import React from 'react';
import {StyledModalWrapper} from "../modals/Modal.styled.js";
import {StyledGreeting, StyledLoginInput, StyledLoginModal} from "./Login.styled.js";
import {StyledConfirmBtn} from "../../styles/Globals.styled.js";
import {useForm} from "react-hook-form";
import useToken from "../../hooks/useToken.jsx";
import {Login} from "../../hooks/user.jsx";

// modal form approach is different from non-modal login for reference only
const LoginModal = ({onClose}) => {
    const usersAPI = import.meta.env.VITE_APP_USER_API_URL;
    const {token, setToken} = useToken()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data)
            // const token = await Login({
            // //     todo
            // })
            // setToken(token);

        } catch (e) {
            console.error('Login failed: ', e);
        }
    }

    return (
        <StyledModalWrapper onClick={onClose}>
            <StyledLoginModal onClick={e => e.stopPropagation()}>
                <StyledGreeting isMobile={false}>Welcome back</StyledGreeting>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='modal-content'>
                        <label>Username
                            <StyledLoginInput {...register(
                                'username',
                                {
                                    required: 'Please input your username',
                                })}
                            />
                        </label>

                        <label>Password
                            <StyledLoginInput {...register(
                                'password',
                                {
                                    required: 'Please input your password',
                                })}
                            />
                        </label>
                        <StyledConfirmBtn type='submit'>Login</StyledConfirmBtn>

                    </div>
                </form>

            </StyledLoginModal>

        </StyledModalWrapper>
    );
};

export default LoginModal;