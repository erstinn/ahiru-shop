import React, {useContext, useState} from 'react';
import {
    CenterDiv,
    StyledAuthContainer,
    StyledGreeting,
    StyledRegBody,
    StyledRegBtn,
    StyledRegInput
} from "./Login.styled.js";
// import { useForm } from 'react-hook-form';
import { Formik } from "formik";
import * as yup from "yup";

const Register = () => {
    const usersAPI = import.meta.env.VITE_APP_USER_API_URL;
    // const language = useContext(LocaleContext);    // const { register, handleSubmit, formState: { errors } } = useForm();

    const loginSchema = yup.object().shape({
        email: yup.string().email("invalid email").required("required"),
        password: yup.string().required("required"),
    });

    const initialValuesLogin = {
        email: "",
        password: "",
    };
    const onSubmit = (data) => {
        // fetch(`${usersAPI}/register`).then(res => res.json()).then(data =>{
        //
        // })
        console.log(data);
    };

    return (
        <CenterDiv>
            <StyledAuthContainer>
                <StyledGreeting>Register</StyledGreeting>

                <form >
                    <StyledRegBody>
                        <label>First name
                            <StyledRegInput />
                        </label>

                        <label>Last name
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

                        <label>Confirm password
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