import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Button content='a' href='/user' color='inherit'>
            User Info
          </Button>
          <Button color='inherit'>Collection</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
