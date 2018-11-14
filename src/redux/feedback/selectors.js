import { createSelector } from 'reselect';
import moment from 'moment';
import { DATE_FORMAT } from '../../config/format';
import { columns } from '../../views/feedback-management/feedback-table/columns';

const selectFeedbackList = state => state.feedback.list;
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

const selectSelectedToEditId = state => state.feedback.selectedFeedbackToEdit;
const selectFeedback = state => state.feedback.list;
export const selectSelectedToEditFeedback = createSelector(
  [selectSelectedToEditId, selectFeedback],
  (id, feedback) => {
    const entity = feedback.find(e => e.id === id);

    if (!entity) {
      return null;
    }

    const selectedFeedback = { ...entity };

    return selectedFeedback;
  },
);
