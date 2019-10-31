import React from 'react';
import { connect } from 'react-redux';
import { feedbackSelectors, feedbackThunks } from 'redux/feedback';
import { markersSelectors } from 'redux/markers';
import Dialog from './EditDialog';

function DialogContainer({
  declineFeedback,
  approveFeedback,
  onClose, markerTypes, isOpen, feedback,
}) {
  const handleDecline = (id) => {
    declineFeedback([id]);
  };

  const handleApprove = (feedback) => {
    approveFeedback(feedback);
  };

  if (!feedback || !feedback.id) {
    return null;
  }

  return (
    <Dialog
      isOpen={isOpen}
      title="Edit feedback"
      feedback={feedback}
      markerTypes={markerTypes}
      onClose={onClose}
      onReset={handleDecline}
      onSubmit={handleApprove}
    />
  );
}

const mapState = (state) => {
  const { selectSelectedToEditFeedback } = feedbackSelectors;

  return {
    feedback: selectSelectedToEditFeedback(state),
    markerTypes: markersSelectors.selectMarkerTypes(state),
  };
};

const mapDispatch = {
  declineFeedback: feedbackThunks.removeFeedback,
  approveFeedback: feedbackThunks.approveFeedback,
};

export default connect(mapState, mapDispatch)(DialogContainer);
