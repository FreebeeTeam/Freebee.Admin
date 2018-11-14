import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { thunks, selectors, actions } from '../../redux/feedback';
import { getIdsByIndexes } from '../../lib/table-helpers';
import Management from './management';

class ManagementContainer extends Component {
  state = {
    isOpen: false,
  }

  componentDidMount = () => {
    const { getFeedback } = this.props;

    getFeedback();
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  deleteFeedback = (indexesToDelete) => {
    const { rawFeedback, removeFeedback } = this.props;

    const ids = getIdsByIndexes(indexesToDelete, rawFeedback);

    removeFeedback(ids);
  }

  render() {
    const {
      removeFeedback,
      updateFeedback,
      setFeedbackToEdit,
      data
    } = this.props;

    const { isOpen } = this.state;

    return (
      <Management
        data={data}
        deleteFeedback={this.deleteFeedback}
        update={updateFeedback}
        isOpen={isOpen}
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        setFeedbackToEdit={setFeedbackToEdit}
      />
    );
  }
}

const mapState = (state) => {
  const { selectFeedbackAsArray } = selectors;

  return {
    data: selectFeedbackAsArray(state),
    rawFeedback: state.feedback.list,
  };
};

const mapDispatch = (dispatch) => {
  const { getFeedback, removeFeedback, updateFeedback } = thunks;
  const { setFeedbackToEdit } = actions;

  return bindActionCreators({
    getFeedback,
    removeFeedback,
    updateFeedback,
    setFeedbackToEdit,
  }, dispatch);
};

export default connect(mapState, mapDispatch)(ManagementContainer);
