import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectors, thunks } from '../../../redux/feedback';
import Dialog from './dialog';

const defaultState = props => ({
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
  state = defaultState(this.props)

  componentWillReceiveProps = ({ isOpen, feedbackToEdit }) => {
    this.setState({ isOpen });

    if (feedbackToEdit !== this.props.feedbackToEdit) {
      this.setState({ feedback: feedbackToEdit });
    }
  }

  handleChange = name => (e) => {
    const { feedback } = this.state;
    feedback[name] = e.target.value;

    this.setState({ feedback });
  }

  handleCoordinatesChange = (e) => {
    const { latlng: { lat, lng } } = e;

    const { feedback } = this.state;
    feedback.location = [lat, lng];

    this.setState({ feedback });
  }

  handleDecline = () => {
    const { handleClose, declineFeedback } = this.props;
    const { feedback: { id } } = this.state;

    this.setState({ isOpen: false });

    handleClose();
    declineFeedback([id]);
  }

  handleApprove = () => {
    const { approveFeedback } = this.props;
    const { feedback } = this.state;
    console.log(feedback);
    approveFeedback(feedback);
  }

  render() {
    const { feedback, isOpen } = this.state;
    const { handleClose } = this.props;

    if (!feedback) {
      return null;
    }

    return (
      <Dialog
        isOpen={isOpen}
        feedback={feedback}
        handleClose={handleClose}
        handleChange={this.handleChange}
        handleDecline={this.handleDecline}
        handleApprove={this.handleApprove}
        handleCoordinatesChange={this.handleCoordinatesChange}
      />
    );
  }
}

const mapState = (state) => {
  const { selectSelectedToEditFeedback } = selectors;

  return {
    feedbackToEdit: selectSelectedToEditFeedback(state),
  };
};

const mapDispatch = (dispatch) => {
  const { approveFeedback, removeFeedback } = thunks;

  return bindActionCreators({
    declineFeedback: removeFeedback,
    approveFeedback,
  }, dispatch);
};

export default connect(mapState, mapDispatch)(DialogContainer);
