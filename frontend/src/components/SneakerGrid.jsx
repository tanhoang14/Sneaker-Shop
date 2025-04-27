import React from 'react';
import { 
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Chip
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SneakerGrid = ({ sneakers }) => {
  // Fixed dimensions for the cards
  const cardWidth = 280; // in pixels
  const cardHeight = 380; // in pixels
  const imageHeight = 220; // in pixels

  return (
    <Box sx={{ 
      px: { xs: 2, sm: 3, md: 4 },
      py: 4,
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Grid container spacing={4} justifyContent="center">
        {sneakers.map((sneaker) => (
          <Grid item key={sneaker.id}>
            <Card sx={{
              width: cardWidth,
              height: cardHeight,
              display: 'flex',
              flexDirection: 'column',
              transition: 'box-shadow 0.3s ease',
              '&:hover': {
                boxShadow: 6
              }
            }}>
              {/* Image Container */}
              <Box sx={{ 
                position: 'relative',
                height: imageHeight,
                overflow: 'hidden'
              }}>
                <CardMedia
                  component="img"
                  image={sneaker.image}
                  alt={sneaker.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    backgroundColor: 'background.paper',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'background.paper'
                    },
                    '&:hover, .MuiCard-root:hover &': {
                      opacity: 1
                    }
                  }}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Box>

              {/* Content Area */}
              <CardContent sx={{ 
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Typography variant="h6" component="h3" gutterBottom noWrap>
                    {sneaker.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    ${sneaker.price}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  {sneaker.colors?.map((color) => (
                    <Chip
                      key={color}
                      size="small"
                      sx={{
                        backgroundColor: color,
                        width: 20,
                        height: 20,
                        minWidth: 0,
                        border: '1px solid',
                        borderColor: 'divider'
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SneakerGrid;