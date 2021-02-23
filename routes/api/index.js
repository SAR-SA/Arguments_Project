const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

// Quote routes
router.get("/quotes", async (req, res) => {
    try {
        const response = await axios.create({
            baseURL: "https://api.igdb.com/v4/games",
            headers: {'Client-ID': process.env.ClientID, 'Authorization': process.env.Bearer}
        })
        res.json(response.data)
    }
    catch (err) {
        res.status(500).json(err)
    }
});