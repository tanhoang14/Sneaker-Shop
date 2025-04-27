import React, { useState } from "react";
import { 
  Box, 
  Container, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Chip, 
  CardActionArea, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  TextField, 
  Skeleton, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { styled } from "@mui/system";

// Fixed dimensions
const CARD_WIDTH = 800;
const CARD_HEIGHT = 200;
const IMAGE_WIDTH = 200;

const StyledCard = styled(Card)({
  height: CARD_HEIGHT,
  width: CARD_WIDTH,
  display: "flex",
  marginBottom: 24,
  transition: "transform 0.2s",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
  }
});

const SearchWrapper = styled(Box)({
  display: "flex",
  gap: 16,
  margin: "0 auto 24px",
  alignItems: "center",
  maxWidth: CARD_WIDTH,
});

const newsData = [
  {
    id: 1,
    headline: "Nike Air Max 2024 Release Date Announced",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "The highly anticipated Nike Air Max 2024 collection is set to release next month with groundbreaking technology.",
    date: new Date(),
    author: "John Smith",
    brand: "Nike",
    category: "releases"
  },
  {
    id: 2,
    headline: "Adidas Collaborates with Popular Artist",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    description: "Adidas announces an exciting collaboration with a renowned artist for a limited edition collection.",
    date: new Date(),
    author: "Emma Wilson",
    brand: "Adidas",
    category: "industry"
  },
  {
    id: 3,
    headline: "New Balance Sustainable Line Launch",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570",
    description: "New Balance introduces eco-friendly sneaker line made from recycled materials.",
    date: new Date(),
    author: "Mike Johnson",
    brand: "New Balance",
    category: "releases"
  }
];

const brands = ["All", "Nike", "Adidas", "New Balance", "Puma"];
const categories = ["All", "releases", "reviews", "industry"];

const NewsDisplay = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredNews = newsData.filter(news => {
    const matchesBrand = selectedBrand === "All" || news.brand === selectedBrand;
    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
    const matchesSearch = news.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesCategory && matchesSearch;
  });

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleCardClick = (article) => {
    setSelectedArticle(article);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedArticle(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Sneakers News
      </Typography>

      <SearchWrapper>
        <TextField
          fullWidth
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: <Search sx={{ mr: 1, color: 'action.active' }} />
          }}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Brand</InputLabel>
          <Select
            value={selectedBrand}
            label="Brand"
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            {brands.map(brand => (
              <MenuItem key={brand} value={brand}>{brand}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={selectedCategory}
            label="Category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </SearchWrapper>

      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3
      }}>
        {loading ? (
          [...Array(3)].map((_, index) => (
            <Skeleton 
              key={index} 
              variant="rectangular" 
              width={CARD_WIDTH}
              height={CARD_HEIGHT} 
              sx={{ borderRadius: 1 }}
            />
          ))
        ) : (
          filteredNews.map(news => (
            <StyledCard key={news.id}>
              <CardActionArea 
                onClick={() => handleCardClick(news)} 
                sx={{ display: "flex", flexDirection: "row", height: '100%' }}
              >
                <CardMedia
                  component="img"
                  sx={{ 
                    width: IMAGE_WIDTH, 
                    height: '100%', 
                    objectFit: "cover",
                    flexShrink: 0
                  }}
                  image={news.image}
                  alt={news.headline}
                />
                <CardContent sx={{ 
                  flex: 1, 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "space-between",
                  overflow: 'hidden'
                }}>
                  <Box sx={{ overflow: 'hidden' }}>
                    <Typography 
                      gutterBottom 
                      variant="h6" 
                      component="h2"
                      noWrap
                    >
                      {news.headline}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {news.description}
                    </Typography>
                  </Box>
                  <Box>
                    <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                      <Chip label={news.brand} size="small" />
                      <Chip label={news.category} size="small" />
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      By {news.author} • {formatDate(news.date)}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          ))
        )}
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedArticle && (
          <>
            <DialogTitle>{selectedArticle.headline}</DialogTitle>
            <DialogContent>
              <CardMedia
                component="img"
                height="300"
                image={selectedArticle.image}
                alt={selectedArticle.headline}
                sx={{ mb: 2, borderRadius: 1 }}
              />
              <Typography variant="body1" paragraph>
                {selectedArticle.description}
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                <Chip label={selectedArticle.brand} />
                <Chip label={selectedArticle.category} />
              </Box>
              <Typography variant="body2" color="text.secondary">
                Published {formatDate(selectedArticle.date)} by {selectedArticle.author}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default NewsDisplay;