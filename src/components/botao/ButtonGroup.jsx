import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import * as React from 'react';

function ButtonGroupSpacing(){
    const [value, setValue] = React.useState(['default']);
    <ToggleButtonGroup
    spacing={2}
    color="primary"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
   />
}

export default ButtonGroupSpacing;