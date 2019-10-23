import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteJournal } from "../actions/journals-actions";
import { Redirect } from "react-router-dom";

class DeleteJournalButtonContainer extends Component {
  state = {
    deleted: false
  };

  handleClick = () => {
    const { id } = this.props;
    this.props.deleteJournal(id);
    this.setState({ deleted: true });
  };

  render() {
    if (this.state.deleted) {
      return <Redirect to="/journals" />;
    }
    return <button onClick={this.handleClick}>Delete Journal</button>;
  }
}

const mapStateToProps = ({ journal }) => ({ id: journal.id });
const mapDispatchToProps = { deleteJournal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteJournalButtonContainer);
