const express = require('express');
const router = express.Router();
const request = require('request');

const clientId = process.env.CLIENT_ID;
const redirectUri = process.env.REDIRECT_URI;

// ...
const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;


router.get('/', (req, res) => {
  res.json({"Spotify Login" : spotifyAuthUrl});
});

module.exports = router;
