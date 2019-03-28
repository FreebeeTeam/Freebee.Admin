import React, { PureComponent } from 'react';
import Table from './FeedbackTable';

export default class Container extends PureComponent {
  handleShowDetails = id => () => {
    const { setFeedbackToEdit, handleOpen } = this.props;

    setFeedbackToEdit(id);
    handleOpen();
  }

  render() {
    const { setFeedbackToEdit, handleOpen, ...rest } = this.props;

    return (
      <Table {...rest} handleShowDetails={this.handleShowDetails} />
    );
  }
}
