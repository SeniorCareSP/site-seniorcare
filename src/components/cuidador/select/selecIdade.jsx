import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function SelectIndicator() {
  return (
    <Select
      placeholder="Idade do idoso"
      indicator={<KeyboardArrowDown />}
      multiple
      color="primary"
      variant="solid"
      
      sx={{
        borderRadius: 8,
        width: 260,
        height: 40,
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
      <Option value="50-60">50 - 60</Option>
      <Option value="60-70">60 - 70</Option>
      <Option value="70-80">70 - 80</Option>
      <Option value="80-90">80 - 90</Option>
      <Option value="90+">90+</Option>
    </Select>
  );
}
