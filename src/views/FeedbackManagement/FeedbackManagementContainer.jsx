import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { feedbackActions, feedbackSelectors, feedbackThunks } from 'redux/feedback';
import { markersThunks } from 'redux/markers';
import Management from './FeedbackManagement';

const FeedbackManagementContainer = ({
  getFeedback, getMarkerTypes,
  updateFeedback,
  setFeedbackToEdit,
  removeFeedback,
  data,
}) => {
  useEffect(() => {
    getFeedback();
    getMarkerTypes();
  }, []);

  return (
    <Management
      data={data}
      updateFeedback={updateFeedback}
      setFeedbackToEdit={setFeedbackToEdit}
      deleteFeedback={removeFeedback}
    />
  );
};

const mapState = (state) => {
  const { selectFeedbackAsArray } = feedbackSelectors;

  return {
    data: selectFeedbackAsArray(state),
  };
};

const { getFeedback, removeFeedback, updateFeedback } = feedbackThunks;
const { getMarkerTypes } = markersThunks;
const { setFeedbackToEdit } = feedbackActions;

const mapDispatch = {
  getFeedback,
  getMarkerTypes,
  removeFeedback,
  updateFeedback,
  setFeedbackToEdit,
};

export default connect(mapState, mapDispatch)(FeedbackManagementContainer);
