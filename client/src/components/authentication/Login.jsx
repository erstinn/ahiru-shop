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
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues:{
            username: '',
            password:''
        }
    });
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <StyledAuthContainer>
                <StyledGreeting isMobile={true}>Welcome back</StyledGreeting>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <StyledLoginBody>
                        <div className='modal-content'>
                            <label> Username
                                <StyledLoginInput {...register(
                                    'username',
                                    {
                                        required: 'Please input your e-mail or username',
                                    })}
                                />
                                {errors.auth && <StyledErrorText> {errors.auth.message} </StyledErrorText>}
                            </label>

                            <label> Password
                                <StyledLoginInput {...register(
                                    'password',
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
                        </div>
                    </StyledLoginBody>
                </form>

        </StyledAuthContainer>
    );
};

export default Login;
