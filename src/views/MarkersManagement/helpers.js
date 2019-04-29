import { TABLE_TYPES } from './const';

export const getTableType = type => Object.values(TABLE_TYPES)
  .find(tableType => tableType.value === type);

export const getTableObjectFromPathname = (pathname) => {
  return Object.values(TABLE_TYPES)
    .find(tableType => pathname
      .toLowerCase()
      .includes(tableType.label.toLowerCase()));
};
