import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyCHpWwJqWfN-GubDxurY6kF_BVGTUFGD1M',
    authDomain: 'e-commerce-1945e.firebaseapp.com',
    databaseURL: 'https://e-commerce-1945e.firebaseio.com',
    projectId: 'e-commerce-1945e',
    storageBucket: 'e-commerce-1945e.appspot.com',
    messagingSenderId: '324196053658',
    appId: '1:324196053658:web:3247eb63a6c9242a702523',
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth().signInWithPopup(provider);
export const createUser = async (user, additionalData) => {
    const userRef = firestore().doc(`/users/${user.uid}`);
    const objSnapshot = await userRef.get();
    console.log(objSnapshot);
    if (!objSnapshot.exists) {
        const { displayName, email } = user;
        const createdAt = new Date();
        try {
            userRef.set({
                createdAt,
                displayName,
                email,
                ...additionalData,
            });
        } catch (error) {
            console.log(error);
        }
    }
    return userRef;
};
export const signUpUser = async (email, password, name) => {
    const obj = await auth().createUserWithEmailAndPassword(email, password);
    return new Promise((resolve, reject) => resolve(obj))
    console.log(obj);
};
