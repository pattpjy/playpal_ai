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
import { textCleanup } from '../../component/common/textCleanup';
export const DisplayChat = ({ text, activities_list, user }) => {
  let displayResponseText;
  if (text) {
    displayResponseText = textCleanup({ text });
    console.log(displayResponseText.summary);
  }

  return (
    <div>
      <Box mt={5} sx={{ bgcolor: 'aliceblue', boxShadow: 5, p: 5 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant='h5'>AI Assistant:</Typography>
          <Typography variant='body1' ml={2} mb={2}>
            {displayResponseText.summary}
          </Typography>
        </Box>
        <CardContent sx={{ p: 0 }}>
          <Typography variant='h6' sx={{ p: 2 }}>
            Explore each activities in details:
          </Typography>
          <List disablePadding>
            {activities_list.map((activities_list, index) => (
              <ListItem
                key={index + 123}
                sx={{ borderBottom: 1, justifyContent: 'space-evenly' }}
              >
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
                    target='_blank'
                  >
                    <ListItemText
                      disableTypography
                      sx={{ fontWeight: 'bold', width: '70%' }}
                      key={index + 333}
                      primary={activities_list.title}
                    />
                  </ListItemButton>
                  <TextDisplay text={activities_list.Content} />
                </Box>
                <CardMedia
                  component='img'
                  key={index + 444}
                  sx={{
                    width: 150,
                    height: 100,
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                  image={activities_list.thumbnail}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Box>
    </div>
  );
};
