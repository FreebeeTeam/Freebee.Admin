import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { thunks } from '../../redux/feedback';
import Management from './management';

class ManagementContainer extends Component {
  componentDidMount = () => {
    const { getFeedback } = this.props;

    getFeedback();
  }

  render() {
    const {
      removeFeedback,
      updateFeedback,
      list,
      isFetching,
      error,
    } = this.props;

    if (isFetching) {
      return null;
    }

    return <Management data={list} remove={removeFeedback} update={updateFeedback} />;
  }
}

const mapState = (state) => {
  return {
    ...state.feedback,
  };
};

const mapDispatch = (dispatch) => {
  const { getFeedback, removeFeedback, updateFeedback } = thunks;

  return bindActionCreators({
    getFeedback,
    removeFeedback,
    updateFeedback,
  }, dispatch);
};

export default connect(mapState, mapDispatch)(ManagementContainer);
