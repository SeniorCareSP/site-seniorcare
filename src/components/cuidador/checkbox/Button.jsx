import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';

export default function IconlessCheckbox() {
  return (
    <Box sx={{ width: 343 }}>
      <Typography id="topping" level="body-lg" fontWeight="lg" mb={1}>
      </Typography>
      <div role="group" aria-labelledby="topping">
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--List-weight': '8px',
            '--ListItem-radius': '10px',
          }}
        >
          {[
            'Remover filtros    X',
            
          ].map((item, index) => (
            <ListItem key={item}>
              <Checkbox
               size='md'
                overlay
                disableIcon
                variant="soft"
                label={item}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Box>
  );
}