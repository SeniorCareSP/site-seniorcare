import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import SelectSimple from './SelectSimple';

function SimpleSelect({ value, onChange }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <SelectSimple
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={onChange}
        sx={{ 
          borderRadius: '1.3vh',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#077DB0',
            borderWidth: 2,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#077DB0',
            borderWidth: 2,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: '#077DB0',
            borderWidth: 2,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#077DB0',
            borderWidth: 2,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#077DB0',
          },
        }}
      >
        <MenuItem value={'Ten'}>Ten</MenuItem>
        <MenuItem value={'Twenty'}>Twenty</MenuItem>
        <MenuItem value={'Thirty'}>Thirty</MenuItem>
      </SelectSimple>
    </Box>
  );
}

export default SimpleSelect;
