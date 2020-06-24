import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: String,
      password: String,
      token: String
    }
    this.loginChange = this.loginChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.submit = this.submit.bind(this)
  }
  submit(event) {
    event.preventDefault();
    console.log(this.state)
    fetch('http://localhost:9000/api/auth/sign_in', {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: 'login=' + this.state.login + '&password=' + this.state.password
    })
      .then(response => response.json())
      .then(result => {
        localStorage.setItem("token", result["token"])
        localStorage.setItem("authorized", 1)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  loginChange(event) {
    this.state.login = event.target.value
  }
  passwordChange(event) {
    this.setState({ password: event.target.value })
  }
  render() {
    if (localStorage.getItem("token") == null) {
      return (
        <div className="container">
          <h2>Login</h2>
          <form id="login" onSubmit={this.submit}>
            First name:<br></br>
            Login user: <br></br>
            <input type="text" onChange={this.loginChange} name="login"></input>
            <p>password:</p>
            <input type="password" onChange={this.passwordChange} name="password"></input>
            <br></br>
            <p><input type="submit"></input></p>
          </form>
        </div>
      );
    }
    else {
      return (
        <div className="container">
          <h2>Login</h2>
        You authorized
        </div>
      );
    }
  }
}

export default Login;