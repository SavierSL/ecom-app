import React from "react";
import SignIn from "../signUpandsingIn/signIn/SignIn";
import classes from "../signUpandsingIn/SignInandSignUp.scss";
import SignUp from "../signUpandsingIn/signUp/SignUp";

const SignInandSignUp = () => {
  return (
    <div className="sign-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInandSignUp;
