import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';
import './sign-in-sign-up-page.scss';

function signInSignupPage() {
    return (
        <div className="sign-in-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default signInSignupPage;
