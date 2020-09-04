import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import { auth } from '../../firebase/firebase.utils';

function Header({ user }) {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {!user && <Link to="/signin">SignIn</Link>}
                {user && (
                    <div className="option" onClick={() => auth().signOut()}>
                        signOut
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
