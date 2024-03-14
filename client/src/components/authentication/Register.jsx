import React, {useState} from 'react';
import {
    CenterDiv,
    StyledAuthContainer,
    StyledGreeting,
    StyledRegBody,
    StyledRegBtn,
    StyledRegInput
} from "./Login.styled.js";
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <CenterDiv>
            <StyledAuthContainer>
                <StyledGreeting>Register</StyledGreeting>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <StyledRegBody>
                        <label>Full name
                            <StyledRegInput />
                        </label>

                        <label>E-mail
                        <StyledRegInput />
                        </label>

                        <label>Username
                        <StyledRegInput />
                        </label>

                        <label>Password
                        <StyledRegInput />
                        </label>

                    </StyledRegBody>
                    <StyledRegBtn type='submit'>Sign up</StyledRegBtn>
                </form>
            </StyledAuthContainer>
        </CenterDiv>
    );
};

export default Register;