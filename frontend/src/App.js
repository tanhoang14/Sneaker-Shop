import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from "./components/Navbar";
import HomePage from "./HomePage";
import NewsPage from "./components/NewsPage";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Navbar isMobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { md: `calc(100% - 240px)` }
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            {/* <Route path="/cart" element={<CartPage />} /> */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;