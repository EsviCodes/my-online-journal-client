import React from "react";
import JournalDetails from "./JournalDetails";
import { connect } from "react-redux";
import { loadJournal } from "../actions/journals-actions";
import DeleteJournalButtonContainer from "./DeleteJournalButtonContainer";
import EditJournalButtonContainer from "./EditJournalButtonContainer";

class JournalDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadJournal(Number(this.props.match.params.id));
  }

  onClick = () => {
    this.render(<EditJournalButtonContainer />);
  };

  render() {
    console.log("I AM CONNECTED");
    console.log(this.props.journal);
    return (
      <div>
        <JournalDetails journal={this.props.journal} />
        {/* <button onClick={this.onClick}>Edit Journal</button> */}
        <EditJournalButtonContainer />
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
