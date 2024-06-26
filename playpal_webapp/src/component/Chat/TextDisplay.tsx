import React from 'react';
import { useState } from 'react';
import { Box, ListItemText } from '@mui/material';
export const TextDisplay = ({ text }: { text: string }) => {
  const [textWrapper, setTextWrapper] = useState(true);
  //how do I fix listitemtext width issue  width: '800px' this is bad practice, hard code value, not responsive???

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          whiteSpace: 'normal',
          p: 2,
        }}
      >
        <ListItemText
          primaryTypographyProps={{ noWrap: textWrapper }}
          primary={text}
          onClick={() => setTextWrapper(!textWrapper)}
          sx={{ width: '95%' }}
        />
      </Box>
    </>
  );
};
