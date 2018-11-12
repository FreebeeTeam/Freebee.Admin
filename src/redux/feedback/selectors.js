import { createSelector } from 'reselect';
import moment from 'moment';
import { DATE_FORMAT } from '../../config/format';
import { columns } from '../../views/feedback-management/feedback-table/columns';

const selectFeedbackList = state => state.feedback.list;
// eslint-disable-next-line import/prefer-default-export
export const selectFeedbackAsArray = createSelector(
  selectFeedbackList,
  list => list.map((item) => {
    const itemAsArray = columns.map((col) => {
      if (col.field === 'creationDate') {
        return moment(item[col.field]).format(DATE_FORMAT);
      }

      return item[col.field] ? item[col.field] : null;
    });

    return itemAsArray;
  }),
);
