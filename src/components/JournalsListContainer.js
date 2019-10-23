import React from "react";
import { getJournals } from "../actions/journals-actions";
import { connect } from "react-redux";
import JournalsList from "./JournalsList";
import CreateJournalFormContainer from "./CreateJournalFormContainer";

class JournalsListContainer extends React.Component {
  componentDidMount() {
    this.props.getJournals();
  }

  render() {
    return (
      <div>
        <JournalsList journals={this.props.journals} />
        <CreateJournalFormContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { journals: state.journals };
};

const mapDispatchToProps = { getJournals };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalsListContainer);
