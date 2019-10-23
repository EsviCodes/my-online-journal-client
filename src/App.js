import React, { Component } from "react";
//import store from "./store";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import "./styles/App.css";
import JournalsListContainer from "./components/JournalsListContainer";
import JournalDetailsContainer from "./components/JournalDetailsContainer";
import LoginFormContainer from "./components/LoginFormContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/"> Home </Link>
        <Link to="/journals"> Journals </Link>
        {this.props.loggedIn ? (
          "You're logged in"
        ) : (
          <Link to="/login"> Login</Link>
        )}
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginFormContainer} />
        <Route path="/journals" exact component={JournalsListContainer} />
        <Route path="/journals/:id" exact component={JournalDetailsContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth !== null
  };
};

export default connect(mapStateToProps)(App);
