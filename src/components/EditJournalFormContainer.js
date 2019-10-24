import React, { Component } from "react";
import { connect } from "react-redux";
import { updateJournal } from "../actions/journals-actions";

class EditJournalButtonContainer extends Component {
  state = {
    title: this.props.journal.title,
    description: this.props.journal.description
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.updateJournal(this.props.journal.id, this.state);
  };

  render() {
    console.log("PROPS IN EDIT", this.props);
    console.log("STATE IN EDIT", this.state);
    return (
      <form onSubmit={this.onSubmit}>
        <label>Journal Title:</label>
        <input value={this.state.title} name="title" onChange={this.onChange} />
        <label>description:</label>
        <input
          value={this.state.description}
          name="description"
          onChange={this.onChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  journal: state.journal
});

const mapDispatchToProps = { updateJournal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditJournalButtonContainer);
