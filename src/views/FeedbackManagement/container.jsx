import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunks, selectors, actions } from '../../redux/feedback';
import { thunks as markersThunks } from '../../redux/markers';
import { getIdsByIndexes } from '../../lib/tableHelpers';
import Management from './FeedbackManagement';

class ManagementContainer extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    const { getFeedback, getMarkerTypes } = this.props;

    getFeedback();
    getMarkerTypes();
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  deleteFeedback = (indexesToDelete) => {
    const { rawFeedback, removeFeedback } = this.props;

    const ids = getIdsByIndexes(indexesToDelete, rawFeedback);

    removeFeedback(ids);
  };

  render() {
    const {
      updateFeedback,
      setFeedbackToEdit,
      data,
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

const { getFeedback, removeFeedback, updateFeedback } = thunks;
const { getMarkerTypes } = markersThunks;
const { setFeedbackToEdit } = actions;

const mapDispatch = {
  getFeedback,
  getMarkerTypes,
  removeFeedback,
  updateFeedback,
  setFeedbackToEdit,
};

export default connect(mapState, mapDispatch)(ManagementContainer);
