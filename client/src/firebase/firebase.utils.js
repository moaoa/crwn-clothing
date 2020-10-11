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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth().signInWithPopup(googleProvider);
export const createUser = async (user, additionalData) => {
    const userRef = firestore().doc(`/users/${user.uid}`);
    const objSnapshot = await userRef.get();
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
    return new Promise((resolve, reject) => resolve(obj));
};

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore().collection(collectionKey);

    const batch = firestore().batch();
    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });
    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};
export const checkUserAuthState = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
};

export const getUserData = () => {
    return new Promise(async (resolve, reject) => {
        const user = await auth().currentUser
        try {
            const userRef = await firestore().doc(
                `/users/${user?.uid}`
            );
            const snapshot = await userRef.get();
            resolve({ userRef, userData: snapshot.data() });
        } catch (error) {
            reject(error);
        }
    });
};
