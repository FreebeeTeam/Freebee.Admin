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

  handleChange = (name) => (e) => {
    const { feedback } = this.state;
    feedback[name] = e.target.value;

    this.setState({ feedback });
  };

  handleCoordinatesChange = (e) => {
    const { latlng: { lat, lng } } = e;

    const { feedback } = this.state;
    feedback.location = [lat, lng];

    this.setState({ feedback });
  };

  handleDecline = () => {
    const { handleClose, declineFeedback } = this.props;
    const { feedback: { id } } = this.state;

    this.setState({ isOpen: false });

    handleClose();
    declineFeedback([id]);
  };

  handleApprove = () => {
    const { approveFeedback } = this.props;
    const { feedback } = this.state;

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
        feedback={feedback}
        markerTypes={markerTypes}
        onClose={onClose}
        onChange={this.handleChange}
        onDecline={this.handleDecline}
        onApprove={this.handleApprove}
        onCoordinatesChange={this.handleCoordinatesChange}
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
