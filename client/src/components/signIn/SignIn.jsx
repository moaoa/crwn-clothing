import React, { useState } from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {
    googleSignInStart,
    emailSignInStart,
} from '../../redux/actions/actionCreatores';
import { connect } from 'react-redux';

function SignIn({ signInWithGoogle, signInWithEmail }) {
    const [authState, setAuthState] = useState({
        email: '',
        password: '',
    });
    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = authState;

        signInWithEmail(email, password);
    }

    function handleChange(e) {
        const { value, name } = e.target;
        setAuthState((prevState) => ({ ...prevState, [name]: value }));
    }
    return (
        <div className="sign-in shadow">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    handleChange={handleChange}
                    name="email"
                    value={authState.email}
                    type="email"
                    required
                    label="email"
                />
                <FormInput
                    handleChange={handleChange}
                    name="password"
                    value={authState.password}
                    type="password"
                    required
                    label="password"
                />
                <CustomButton type="submit">submit form</CustomButton>
                <CustomButton
                    type="button"
                    isGoogle
                    onClick={() => signInWithGoogle()}
                >
                    sign in with google
                </CustomButton>
            </form>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    signInWithGoogle: () => dispatch(googleSignInStart()),
    signInWithEmail: (email, password) =>
        dispatch(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);
