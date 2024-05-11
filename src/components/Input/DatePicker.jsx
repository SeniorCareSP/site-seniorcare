import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <TextField
        id="date"
        label="Data de nascimento"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
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