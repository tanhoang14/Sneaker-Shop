import React from 'react';
import { Link } from 'react-router-dom';
import { 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Box, 
  Typography,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
    Menu,
    Close,
    Home,
    Newspaper,
    ShoppingCart,
  } from '@mui/icons-material';

const Navbar = ({ isMobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'News', icon: <Newspaper />, path: '/news' },
    { text: 'My Cart', icon: <ShoppingCart />, path: '/cart' }
  ];

  const drawerContent = (
    <Box className="w-full md:w-64 bg-gray-800 text-white p-4 h-full">
      <Typography variant="h6" className="mb-6" sx={{ fontWeight: 'bold', display: 'flex',
    justifyContent: 'center', marginTop:'2rem', marginBottom:'2rem' }}>
        Sneaker Shop
      </Typography>
      <nav style={{display:'flex', justifyContent:'center'}}>
        <List sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          {navItems.map((item) => (
            <ListItem sx={{display:'flex', justifyContent:'center'}}key={item.text} disablePadding>
              <ListItemButton component={Link} 
                to={item.path}
                 className="hover:text-yellow-400 transition">
                  {item.icon}
                <ListItemText sx={{marginLeft:'10px'}} primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ 
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: theme.zIndex.drawer + 1
          }}
        >
          {isMobileOpen ? <Close /> : <Menu />}
        </IconButton>
      )}
      
      <Box
        component="nav"
        sx={{ width: { md: 240 }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? isMobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
              bgcolor: 'white',
              color: 'black'
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;