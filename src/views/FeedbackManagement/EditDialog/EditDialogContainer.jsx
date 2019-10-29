import React, { Component } from 'react';
import { connect } from 'react-redux';
import { feedbackSelectors, feedbackThunks } from 'redux/feedback';
import { markersSelectors } from 'redux/markers';
import Dialog from './EditDialog';

const defaultState = (props) => ({
  isOpen: props.isOpen || false,
  feedback: props.feedbackToEdit || {
    id: null,
    title: null,
    address: null,
    author: null,
    type: null,
    password: null,
    description: null,
    location: null,
  },
});

class DialogContainer extends Component {
  state = defaultState(this.props);

  componentWillReceiveProps({ isOpen, feedbackToEdit }) {
    this.setState({ isOpen });

    if (feedbackToEdit !== this.props.feedbackToEdit) {
      this.setState({ feedback: feedbackToEdit });
    }
  }

  handleDecline = (id) => {
    const { declineFeedback } = this.props;

    this.setState({ isOpen: false });

    declineFeedback([id]);
  };

  handleApprove = (feedback) => {
    const { approveFeedback } = this.props;

    approveFeedback(feedback);
  };

  render() {
    const { feedback, isOpen } = this.state;
    const { onClose, markerTypes } = this.props;

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
        onReset={this.handleDecline}
        onSubmit={this.handleApprove}
      />
    );
  }
}

const mapState = (state) => {
  const { selectSelectedToEditFeedback } = feedbackSelectors;

  return {
    feedbackToEdit: selectSelectedToEditFeedback(state),
    markerTypes: markersSelectors.selectMarkerTypes(state),
  };
};

const mapDispatch = {
  declineFeedback: feedbackThunks.removeFeedback,
  approveFeedback: feedbackThunks.approveFeedback,
};

export default connect(mapState, mapDispatch)(DialogContainer);
