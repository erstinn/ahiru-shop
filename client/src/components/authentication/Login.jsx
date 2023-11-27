import React from 'react';
import {
    StyledGreeting,
    StyledAuthContainer,
    StyledLoginBody,
    StyledLoginInput,
    StyledLoginBtn, StyledErrorText
} from "./Login.styled.js";
import {StyledLink} from "../../styles/Globals.styled.js";
import {useForm} from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        console.log('skdjaskd');
    };

    return (
        <StyledAuthContainer>
                <StyledGreeting>Welcome back</StyledGreeting>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <StyledLoginBody>
                        <label> Username/E-mail
                            <StyledLoginInput {...register(
                                'auth',
                                {
                                    required: 'Please input your e-mail or username',
                                })}
                            />
                            {errors.auth && <StyledErrorText> {errors.auth.message} </StyledErrorText>}
                        </label>

                        <label> Password
                            <StyledLoginInput {...register(
                                'pw',
                                {
                                    required: 'Please input your password',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters',
                                    },
                                })}

                            />
                            {errors.pw && <StyledErrorText> {errors.pw.message} </StyledErrorText>}

                        </label>
                        <p> No account yet? <StyledLink to="/register"> Sign up</StyledLink></p>
                        <StyledLoginBtn type='submit'> Login </StyledLoginBtn>
                    </StyledLoginBody>
                </form>

        </StyledAuthContainer>
    );
};

export default Login;
