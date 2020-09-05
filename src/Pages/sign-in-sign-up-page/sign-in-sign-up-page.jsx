import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';
import './sign-in-sign-up-page.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function signInSignupPage({ user }) {
    if (user) return <Redirect to="/" />;
    return (
        <div className="sign-in-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}
const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(signInSignupPage);
