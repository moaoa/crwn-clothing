import React, { useEffect } from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import signInSingupPage from './Pages/sign-in-sign-up-page/sign-in-sign-up-page';
import { checkUserSesion } from './redux/actions/actionCreatores';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/selectors/userSelectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './Pages/Checkout/Checkout';
// import { selectCollectionsForOverview } from './redux/reducers/shop/shopSelector';

function App({ user, checkUserSesion }) {
    useEffect(() => {
        checkUserSesion();
        // let unsubscribe = null;
        // unsubscribe = auth().onAuthStateChanged(async (userAuth) => {
        //     if (userAuth) {
        //         const userRef = await createUser(userAuth);
        //         userRef.onSnapshot((snapshot) => {
        //             setUser({ id: snapshot.id, ...snapshot.data() });
        //         });
        //     } else {
        //         setUser(null);
        //     }
        // });
        // return () => {
        //     unsubscribe();
        // };
    }, []);

    return (
        <div className="App">
            <Header user={user} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signin" component={signInSingupPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
            </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
});
const mapDispatchToProps = { checkUserSesion };
export default connect(mapStateToProps, mapDispatchToProps)(App);
