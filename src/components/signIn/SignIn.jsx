import React, { useState } from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle, auth} from '../../firebase/firebase.utils';

function SignIn() {
    const [authState, setAuthState] = useState({
        email: '',
        password: '',
    });
    function handleSubmit(e) {
        e.preventDefault();
        auth().signInWithEmailAndPassword(authState.email,authState.password)
        .then(() => setAuthState({email: '',password: ''}))
        .catch(console.log)
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
                <CustomButton isGoogle onClick={() => signInWithGoogle()}>
                    sign in with google
                </CustomButton>
            </form>
        </div>
    );
}

export default SignIn;
