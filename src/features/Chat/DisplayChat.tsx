import React from 'react';
import { Box, Typography } from '@mui/material';
import { chatAPIResponse } from '../../model/chat';

export const DisplayChat: React.FC<chatAPIResponse> = ({
  text,
  activities_list,
}) => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <Typography variant='body1'>{text}</Typography>
        <ul>
          {activities_list.map((activities_list, index) => (
            <Typography component='li' variant='body1' key={index}>
              {activities_list.title}
            </Typography>
          ))}
        </ul>
      </Box>
    </div>
  );
};
