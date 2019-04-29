import { createSelector } from 'reselect';
import moment from 'moment';
import { DATE_FORMAT } from '../../config/format';
import { selectMarkerTypes } from '../markers/selectors';
import { columns } from '../../views/FeedbackManagement/FeedbackTable/columns';

const selectFeedbackList = state => state.feedback.list;
export const selectFeedbackAsArray = createSelector(
  [selectFeedbackList, selectMarkerTypes],
  (list, markerTypes) => {
    if (markerTypes.length === 0) {
      return [];
    }

    return list.map((item) => {
      return columns.map((col) => {
        if (col.field === 'creationDate') {
          return moment(item[col.field]).format(DATE_FORMAT);
        }

        if (col.field === 'location') {
          return item[col.field].coordinates.toString();
        }

        if (col.field === 'type') {
          const convertedType = markerTypes.find(
            type => type.value.toString() === item[col.field][0],
          );

          return convertedType ? convertedType.label : 'None';
        }

        return item[col.field] ? item[col.field] : null;
      });
    });
  },
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

    const selectedFeedback = {
      ...entity,
      location: entity.location.coordinates,
    };

    return selectedFeedback;
  },
);
