import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function SelectIndicator() {
  return (
    <Select
      placeholder="Trabalho regular"
      indicator={<KeyboardArrowDown />}
      multiple
     backgroundColor="#135B7A"
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
      <Option value="sim">Sim</Option>
      <Option value="nao">Não</Option>
    </Select>
  );
}