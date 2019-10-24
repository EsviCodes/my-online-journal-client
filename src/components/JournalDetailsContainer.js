import React from "react";
import JournalDetails from "./JournalDetails";
import { connect } from "react-redux";
import { loadJournal } from "../actions/journals-actions";
import DeleteJournalButtonContainer from "./DeleteJournalButtonContainer";
import EditJournalButtonContainer from "./EditJournalFormContainer";

class JournalDetailsContainer extends React.Component {
  state = {
    editMode: false
  };

  componentDidMount() {
    this.props.loadJournal(Number(this.props.match.params.id));
  }

  onEdit = () => {
    this.setState({
      editMode: true
    });
  };

  render() {
    console.log("I AM CONNECTED");
    console.log(this.props.journal);
    return (
      <div>
        <JournalDetails journal={this.props.journal} />

        {this.state.editMode ? (
          <EditJournalButtonContainer />
        ) : (
          <button onClick={this.onEdit}>Edit Journal</button>
        )}

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
