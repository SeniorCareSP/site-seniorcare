import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';



export default function IconlessCheckbox() {
  return (
    <Box sx={{
       width: {
          xs: 100, //0
          sm: 200, //600
          md: 300, //900
          lg: 300, //1200
          xl: 320,
       },
     
      
    }}>
      <Typography id="topping" level="body-sm" fontWeight="lg" mb={1}>

      </Typography>
      <div role="group" aria-labelledby="topping">
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--color': '#252F46',
            '--List-gap': '8px',
        
          
          }}
        >
          {[
            'Do',
            'Se',
            'Te',
            'Qua',
            'Qui',
            'Se',
            'Sa'
          ].map((item, index) => (
            <ListItem key={item}>
              <Checkbox
                // disabled={index === 0}
                overlay
                disableIcon
                variant="soft"
                label={item}
                sx={{
                  width: {
                    xs: 100, //0
                    sm: 200, //600
                    md: 10, //900
                    lg: 12, //1200
                    xl: 14, //1536
                 },
                
                  background: '#2C7595',
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Box>
  );
}