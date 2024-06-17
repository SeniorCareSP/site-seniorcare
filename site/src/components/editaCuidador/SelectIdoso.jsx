import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';

const StyledOutlinedInput = styled(OutlinedInput)({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#077DB0',
    borderWidth: 2,
    borderRadius: '1.5vh',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#077DB0',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#077DB0',
  },
});

export default function BasicSelectIdoso() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          input={<StyledOutlinedInput label="" />}
          MenuProps={{
            disableScrollLock: true, // Desabilitar o bloqueio de rolagem no Menu
          }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

