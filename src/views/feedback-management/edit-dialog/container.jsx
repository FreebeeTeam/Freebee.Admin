import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors } from '../../../redux/feedback';
import Dialog from './dialog';

const defaultState = props => ({
  isOpen: props.isOpen || false,
  feedback: props.feedbackToEdit || {
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

  componentWillReceiveProps = ({ isOpen }) => {
    this.setState({ isOpen });
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

  handleClose = () => {
    const { handleClose } = this.props;

    this.setState({ isOpen: false });
    handleClose();
  }

  render() {
    const { feedback, isOpen } = this.state;
    const { feedbackToEdit } = this.props;

    if (!feedbackToEdit) {
      return null;
    }

    return (
      <Dialog
        isOpen={isOpen}
        feedback={feedbackToEdit}
        handleChange={this.handleChange}
        handleClose={this.handleClose}
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

export default connect(mapState, null)(DialogContainer);
