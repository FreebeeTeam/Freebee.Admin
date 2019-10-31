import React from 'react';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@material-ui/core';

const Dropdown = ({
  title, name, value, onChange, items,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={name}>{title}</InputLabel>
      <Select
        value={value}
        name={name}
        onChange={onChange}
        fullWidth
      >
        {items.map((type) => (
          <MenuItem key={type.value} value={type.value}>
            {type.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
