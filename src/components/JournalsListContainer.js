import React from "react";
import { getJournals } from "../actions/journals-actions";
import { connect } from "react-redux";
import JournalsList from "./JournalsList";

class JournalsListContainer extends React.Component {
  componentDidMount() {
    this.props.getJournals();
  }

  render() {
    return <JournalsList journals={this.props.journals} />;
  }
}

function mapStateToProps(state) {
  return { journals: state.journals };
}

const mapDispatchToProps = { getJournals };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalsListContainer);
