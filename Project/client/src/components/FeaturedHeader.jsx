import React from 'react';
import { 
  Box,
  Typography,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FeaturedHeader = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 4,
      padding:'2rem',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: { xs: 2, sm: 0 }
    }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
        Featured Sneakers
      </Typography>
      
      <Box sx={{ 
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        width: { xs: '100%', sm: 'auto' }
      }}>
        <TextField
          placeholder="Search sneakers..."
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '28px',
              width: { xs: '100%', sm: 220 }
            }
          }}
        />
        
        <FormControl size="small" sx={{ minWidth: 180 }}>
          <Select
            defaultValue=""
            displayEmpty
            inputProps={{ 'aria-label': 'Sort by' }}
            sx={{ borderRadius: '28px' }}
          >
            <MenuItem value="">
              <em>Sort by</em>
            </MenuItem>
            <MenuItem value="price-low">Price: Low to High</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default FeaturedHeader;