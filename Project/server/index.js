const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");
const axios = require("axios");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const url = 'https://www.ebay.com/b/Collectible-Sneakers/bn_7000259435';
const EXCLUDE_BRANDS = ["Nike", "adidas", "Jordan", "Yeezy", "New Balance"];
const EXCLUDE_SIZES = [
  "6.0", "6.5", "7.0", "7.5", "8.0", "8.5", "9.0", "9.5",
  "10.0", "10.5", "11.0", "11.5", "12.0", "12.5", "13.0", "13.5",
  "14.0", "14.5", "15.0", "15.5", "16.0 and over"
];

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
app.use(
    bodyParser.urlencoded({
        limit:"50mb",
        extended: true,
        parameterLimit: 50000,
    })
)

//ROUTES
const axiosConfig = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    }
};

app.get("/sneakers", async (req, res) => {
    try {
        const response = await axios.get(url, axiosConfig);
        const html = response.data;
        const $ = cheerio.load(html);
        const results = [];
        const limit = Number(req.query.limit); // Get limit from query (?limit=5)

        $(".seo-card", html).each(function() {
            const name = $(this).find("span").text().trim();
            const image = $(this).find("img").attr("src");

            if (!name) return;

            const isBrandOnly = EXCLUDE_BRANDS.some(brand => 
                name.toLowerCase() === brand.toLowerCase()
            );

            const isSizeOnly = EXCLUDE_SIZES.some(size => 
                name.toLowerCase().includes(size.toLowerCase())
            );

            if (!isBrandOnly && !isSizeOnly) {
                results.push({ name, image: image || null });
            }
        });

        // Apply limit AFTER collecting all results
        const finalResults = limit > 0 ? results.slice(0, limit) : results;

        res.json({
            count: finalResults.length,
            data: finalResults
        });

    } catch (error) {
        console.error("Scraping failed:", error.message);
        res.status(500).json({ 
            success: false,
            error: error.message 
        });
    }
});

//RUN 
app.listen(process.env.PORT|| 8000,()=>{
    console.log("Server is running");
});