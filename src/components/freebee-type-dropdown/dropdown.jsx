import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import { FREEBEE_TYPES } from './consts';

const Dropdown = ({ value, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="type">Type</InputLabel>
      <Select
        value={value}
        name="type"
        onChange={onChange}
        fullWidth
      >
        {Object.values(FREEBEE_TYPES).map(type => (
          <MenuItem key={type.value} value={type.value}>
            {type.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

Dropdown.defaultProps = {
  value: FREEBEE_TYPES.Wifi,
};

export default Dropdown;
