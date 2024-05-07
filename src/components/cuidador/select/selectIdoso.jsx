import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function SelectIndicator() {
  return (
    <Select
      placeholder="Maximo de número de idosos"
      indicator={<KeyboardArrowDown />}
      multiple
      color="primary"
      variant="solid"
      
      sx={{
        borderRadius:8,
        width: 290,
        height: 43,
        '&.MuiSelect-root': {
          backgroundColor: '#135B7A', // Cor desejada
        },
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="1">1</Option>
      <Option value="2">2</Option>
      <Option value="3">3</Option>
    </Select>
  );
}