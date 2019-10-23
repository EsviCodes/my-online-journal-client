import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to</h2>
        <h1>My Online Journal!</h1>
        <p>Login to see your journals</p>
        <Link to="/login"> Login</Link>
      </div>
    );
  }
}
