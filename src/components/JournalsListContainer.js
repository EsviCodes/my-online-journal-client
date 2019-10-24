import React from "react";
import { getJournals } from "../actions/journals-actions";
import { connect } from "react-redux";
import JournalsList from "./JournalsList";
import CreateJournalFormContainer from "./CreateJournalFormContainer";
import "../styles/JournalsListContainer.css";

class JournalsListContainer extends React.Component {
  state = {
    add: false
  };

  componentDidMount() {
    this.props.getJournals();
  }

  add = () => {
    this.setState({
      add: true
    });
  };
  render() {
    return (
      <div>
        <h2>My Online Journals</h2>
        <JournalsList journals={this.props.journals} />
        {this.state.add ? (
          <div>
            <h3>Add A New Journal</h3>
            <CreateJournalFormContainer />
          </div>
        ) : (
          <button onClick={this.add}>Add a new journal</button>
        )}
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
