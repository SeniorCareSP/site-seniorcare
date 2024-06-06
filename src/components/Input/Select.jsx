import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SelectSimple from './SelectSimple';


function SimpleSelect() {
  
  const [age, setAge] = React.useState(10);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
        <SelectSimple
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          sx={{  borderRadius: '1.3vh',

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
          },'& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#077DB0',
            borderWidth: 2,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#077DB0',
          },

        }}
      >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectSimple>
    </Box>
  ); 
}

export default SimpleSelect;