import React, {useState} from 'react';
import {StyledAuthContainer, StyledGreeting, StyledRegBody, StyledRegBtn, StyledRegInput} from "./Login.styled.js";
import { useForm } from 'react-hook-form';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <StyledAuthContainer>
            <StyledGreeting>Register</StyledGreeting>

            <StyledRegBody>
                <label htmlFor="">Full name</label>
                <StyledRegInput type='text' id='email' name='email' onChange={() => setEmail}/>

                <label htmlFor="">E-mail</label>
                <StyledRegInput type='text' id='email' name='email' onChange={() => setEmail}/>

                <label htmlFor="username">Username</label>
                <StyledRegInput type='text' id='username' name='username'/>

                <label htmlFor="password">Password</label>
                <StyledRegInput type='text' id='pasword' name='password'/>

                <StyledRegBtn>Sign up</StyledRegBtn>
            </StyledRegBody>
        </StyledAuthContainer>
    );
};

export default Register;