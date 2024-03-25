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

import { TextDisplay } from '../../component/common/Chat/TextDisplay';

export const DisplayChat = ({ text, activities_list, user }) => {
  return (
    <div>
      <Box
        sx={{
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}
        >
          <Typography variant='h5'>AI Assistant:</Typography>
          <Typography variant='body1' ml={2}>
            With what we know about {user.childName}, We'd like to recommend
            these activities.
          </Typography>
        </Box>

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
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <ListItemButton>
                      <ListItemText
                        disableTypography
                        sx={{ fontWeight: 'bold' }}
                        key={index + 333}
                        primary={activities_list.title}
                      />
                    </ListItemButton>
                    <TextDisplay text={activities_list.Content} />
                    {/* <ListItemText
                      key={index + 222}
                      primary={activities_list.Content}
                      onClick={() => setTextWrapper(!textWrapper)}
                      style={{ whiteSpace: textWrapper ? 'noWrap' : 'normal' }}
                    /> */}
                  </Box>

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
