import firebase from "firebase/firebase-app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("FT45Za83xf4pWMrcoN3C")
  .collection("cartItems")
  .doc("8ysMTgicGXPTmR07XDAu");
