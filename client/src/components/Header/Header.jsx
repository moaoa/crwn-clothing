import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import CartIcon from '../cartIcon/cartIcon';
import CartDropDown from '../CardDropDown/CartDropDown';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/selectors/cartSelectors';
import { signOutUserStart } from '../../redux/actions/actionCreatores';

function Header({ user, hidden, signOutUser }) {
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
                    <div className="option" onClick={() => signOutUser()}>
                        signOut
                    </div>
                )}
                <CartIcon />
            </div>
            {hidden ? null : <CartDropDown />}
        </div>
    );
}
const mapStateToProps = (state) => ({ hidden: selectCartHidden(state) });
const mapDispatchToProps = { signOutUser: signOutUserStart };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
