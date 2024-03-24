import React from 'react';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
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
        <List disablePadding>
          {activities_list.map((activities_list, index) => (
            <ListItem>
              <IconButton edge='end' aria-label='delete'>
                <BookmarksIcon />
              </IconButton>
              <ListItemText primary={activities_list.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};
