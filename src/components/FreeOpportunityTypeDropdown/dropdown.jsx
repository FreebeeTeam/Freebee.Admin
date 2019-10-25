import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, } from '@material-ui/core';

const Dropdown = ({ value, onChange, types }) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="type">Type</InputLabel>
      <Select
        value={value}
        name="type"
        onChange={onChange}
        fullWidth
      >
        {types.map(type => (
          <MenuItem key={type.value} value={type.value}>
            {type.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
