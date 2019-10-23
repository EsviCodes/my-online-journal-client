import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to</h2>
        <h1>My Online Journal!</h1>
        {this.props.loggedIn ? (
          <div>
            <p>You're logged in</p>
            <Link to="/journals">Go to journals</Link>
          </div>
        ) : (
          <div>
            <p>Log in to see your journals</p>
            <Link to="/login"> Login</Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth !== null
  };
};

export default connect(mapStateToProps)(Home);
