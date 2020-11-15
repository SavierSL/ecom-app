import React from "react";
import logo from "./logo.svg";
import Homepage from "../src/components/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import Shop from "./components/collection/Shop";
import Nav from "../src/components/navigator/Nav";
import SignInandSignUp from "../src/components/signUpandsingIn/SignInandSignUp";
import classes from "./App.scss";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/FirebaseUtil";
import { setCurrentUser } from "./redux/user/User.function";
import { connect } from "react-redux";
import Checkout from "../src/components/page/Checkout";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Route path="/" render={() => <Nav />} />
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/sign-in" component={SignInandSignUp} />
        <Route exact path="/checkout" component={Checkout} />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
