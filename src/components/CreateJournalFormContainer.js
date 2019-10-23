import React from "react";
import { connect } from "react-redux";
import { createJournal } from "../actions/journals-actions";
import JournalForm from "./JournalForm";

class CreateJournalFormContainer extends React.Component {
  state = {
    title: "",
    description: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createJournal(this.state);
    this.setState({
      title: "",
      description: ""
    });
  };

  render() {
    return (
      <JournalForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createJournal }
)(CreateJournalFormContainer);
