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
      // sx={{
      //   padding: '10px',
      //   borderRadius: '5px',
      // }}
      >
        <Box
          mt={4}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant='h5'>AI Assistant:</Typography>
          <Typography variant='body1' ml={2} mb={2}>
            With what we know about {user.childName}, {text}
          </Typography>
        </Box>

        <Card
          sx={{
            bgcolor: 'aliceblue',
            margin: 'auto',
            p: 0,
            boxShadow: 5,
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ p: 2 }}>
              Explore each activities in details:
            </Typography>
            <List disablePadding>
              {activities_list.map((activities_list, index) => (
                <ListItem key={index + 123} sx={{ borderBottom: 1 }}>
                  {/* <CardActions key={index + 111}>
                    <IconButton edge='end' aria-label='delete'>
                      <FavoriteBorderIcon />
                    </IconButton>
                  </CardActions> */}
                  <Box
                    sx={{
                      width: '80%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <ListItemButton
                      component='a'
                      href={`http://www.education.com${activities_list.url}`}
                    >
                      <ListItemText
                        disableTypography
                        sx={{ fontWeight: 'bold', width: '65%' }}
                        key={index + 333}
                        primary={activities_list.title}
                      />
                    </ListItemButton>
                    <TextDisplay text={activities_list.Content} />
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
