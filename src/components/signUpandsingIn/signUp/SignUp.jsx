import React, { Component } from "react";
import Form from "../formComponent/Form";
import Button from "../../customButton/Button";
import { auth, createUserProfileDocument } from "../../firebase/FirebaseUtil";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, displayName, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, displayName, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up</span>
        <form action="" className="sign-upForm" onClick={this.handleSubmit}>
          <Form
            type="text"
            name="displayName"
            label="Display Name"
            onChange={this.handleChange}
            value={displayName}
          />
          <Form
            type="email"
            name="email"
            label="Your email"
            onChange={this.handleChange}
            value={email}
          />
          <Form
            type="password"
            name="password"
            label="Your password"
            onChange={this.handleChange}
            value={password}
          />
          <Form
            type="password"
            name="confirmPassword"
            label="confirm Password"
            onChange={this.handleChange}
            value={confirmPassword}
          />
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
