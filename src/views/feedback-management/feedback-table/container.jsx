import React, { PureComponent } from 'react';
import Table from './table';

export default class Container extends PureComponent {
  render() {
    return (
      <Table {...this.props} />
    );
  }
}
