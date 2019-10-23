import React from "react";
import JournalDetails from "./JournalDetails";
import { connect } from "react-redux";
import { loadJournal } from "../actions/journals-actions";
import DeleteJournalButtonContainer from "./DeleteJournalButtonContainer";

class JournalDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadJournal(Number(this.props.match.params.id));
  }
  render() {
    console.log("I AM CONNECTED");
    console.log(this.props.journal);
    return (
      <div>
        <JournalDetails journal={this.props.journal} />
        <DeleteJournalButtonContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  journal: state.journal
});

const mapDispatchToProps = { loadJournal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalDetailsContainer);
