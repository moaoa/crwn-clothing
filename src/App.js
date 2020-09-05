import React, { useEffect } from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import signInSingupPage from './Pages/sign-in-sign-up-page/sign-in-sign-up-page';
import { auth, createUser } from './firebase/firebase.utils';
import { setUser } from './store/actions/actionCreatores';
import { connect } from 'react-redux';

function App({ user, setUser }) {
    useEffect(() => {
        let unsubscribe = null;
        unsubscribe = auth().onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUser(userAuth);

                userRef.onSnapshot((snapshot) => {
                    setUser({ id: snapshot.id, ...snapshot.data() });
                });
            } else {
                setUser(null);
            }
            return () => {
                console.log(unsubscribe);
                unsubscribe();
            };
        });
    }, []);

    return (
        <div className="App">
            <Header user={user} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signin" component={signInSingupPage} />
            </Switch>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
};
const mapDispatchToProps = { setUser };
export default connect(mapStateToProps, mapDispatchToProps)(App);
