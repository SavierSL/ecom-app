import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmvNsxlN0DuekPYmU6PwKgZyEbIC-KLh0",
  authDomain: "my-ecom-web.firebaseapp.com",
  databaseURL: "https://my-ecom-web.firebaseio.com",
  projectId: "my-ecom-web",
  storageBucket: "my-ecom-web.appspot.com",
  messagingSenderId: "561944569035",
  appId: "1:561944569035:web:e37b5e0661499c9044274e",
  measurementId: "G-7Y05N1EPCB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(userAuth);
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userRef);

  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
