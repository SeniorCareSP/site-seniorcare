import React from 'react';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';

function DatePicker({ value, onChange }) {
  return (
    <div>
      <TextField
        id="date"
        label="Data de nascimento"
        type="date"
        value={value}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: '1900-01-01',
          max: format(new Date(), 'yyyy-MM-dd'),
        }}
        sx={{
          width: '20.5vw',
        }}
      />
    </div>
  );
}

export default DatePicker;
