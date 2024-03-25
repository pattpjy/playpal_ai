import React, { useState } from 'react';
import {
  Box,
  CardActions,
  CardMedia,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export const DisplayChat = ({ text, activities_list, user }) => {
  const [textWrapper, setTextWrapper] = useState(false);

  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <Typography variant='body1'>
          With what we know about {user.childName}, We'd like to recommend these
          activities.
        </Typography>
        <Card>
          <CardContent>
            <List disablePadding>
              {activities_list.map((activities_list, index) => (
                <ListItem key={index + 123}>
                  <CardActions key={index + 111}>
                    <IconButton edge='end' aria-label='delete'>
                      <FavoriteBorderIcon />
                    </IconButton>
                  </CardActions>
                  <ListItemButton>
                    <ListItemText
                      key={index + 333}
                      primary={activities_list.title}
                    />
                  </ListItemButton>
                  <ListItemText
                    key={index + 222}
                    primary={activities_list.Content}
                    onClick={() => setTextWrapper(!textWrapper)}
                    style={{ whiteSpace: textWrapper ? 'pre-wrap' : 'nowrap' }}
                  />
                  <CardMedia
                    component='img'
                    key={index + 444}
                    sx={{ width: 151 }}
                    image={activities_list.thumbnail}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};
