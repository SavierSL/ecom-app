import React, { Component } from "react";
import Form from "../formComponent/Form";
import classes from "../signIn/SignIn.scss";
import Button from "../../customButton/Button";
import { auth, signInWithGoogle } from "../../firebase/FirebaseUtil";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <div className="form">
          <form action="" onSubmit={this.handleSubmit}>
            <Form
              name="email"
              type="email"
              value={this.state.email}
              handleChange={this.handleInput}
              label="email"
            />

            <Form
              name="password"
              type="password"
              value={this.state.password}
              handleChange={this.handleInput}
              label="password"
            />
            <div className="button">
              <Button type="submit">Sign In</Button>
              <Button onClick={signInWithGoogle}>Sign In With Google</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
