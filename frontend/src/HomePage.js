import HeaderSlider from "./components/HeaderSlider";
import SneakerGrid from "./components/SneakerGrid";
import { Sneakers } from "./Data/Sneakers";
import FeaturedHeader from "./components/FeaturedHeader";
import { Box } from '@mui/material';

function HomePage() {
  return (
    <Box>
    <HeaderSlider />
    <FeaturedHeader/>
    <SneakerGrid sneakers={Sneakers}/>
    </Box>
  );
}

export default HomePage;