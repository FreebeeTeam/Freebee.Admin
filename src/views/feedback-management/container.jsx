import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { thunks, selectors } from '../../redux/feedback';
import { getIdsByIndexes } from '../../lib/table-helpers';
import Management from './management';

class ManagementContainer extends Component {
  componentDidMount = () => {
    const { getFeedback } = this.props;

    getFeedback();
  }

  deleteFeedback = (indexesToDelete) => {
    const { rawFeedback, removeFeedback } = this.props;

    const ids = getIdsByIndexes(indexesToDelete, rawFeedback);

    removeFeedback(ids);
  }

  render() {
    const {
      removeFeedback,
      updateFeedback,
      data
    } = this.props;

    return (
      <Management
        data={data}
        deleteFeedback={this.deleteFeedback}
        update={updateFeedback}
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

  return bindActionCreators({
    getFeedback,
    removeFeedback,
    updateFeedback,
  }, dispatch);
};

export default connect(mapState, mapDispatch)(ManagementContainer);
