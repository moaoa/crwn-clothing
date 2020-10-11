import React, { lazy, useEffect, Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import HomePage from './Pages/HomePage/HomePage';
// import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

// import signInSingupPage from './Pages/sign-in-sign-up-page/sign-in-sign-up-page';
// import CheckoutPage from './Pages/Checkout/Checkout';
import { checkUserSesion } from './redux/actions/actionCreatores';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/selectors/userSelectors';
import { createStructuredSelector } from 'reselect';
// import { selectCollectionsForOverview } from './redux/reducers/shop/shopSelector';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./Pages/ShopPage/ShopPage'));
const signInSingupPage = lazy(() =>
    import('./Pages/sign-in-sign-up-page/sign-in-sign-up-page')
);
const CheckoutPage = lazy(() => import('./Pages/Checkout/Checkout'));

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
            

            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route path="/signin" component={signInSingupPage} />
                        <Route
                            exact
                            path="/checkout"
                            component={CheckoutPage}
                        />
                    </Switch>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
});
const mapDispatchToProps = { checkUserSesion };
export default connect(mapStateToProps, mapDispatchToProps)(App);
