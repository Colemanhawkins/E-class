
const server = require('express').Router();
const SpotifyWebApi = require('spotify-web-api-node');

server.post('/', async (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    })

    spotifyApi.authorizationCodeGrant(code).then(data =>{
        res.json({
            accessToken: data.body.access_Token,
            refreshToken: data.body.refresh_Token,
            expiresIn: data.body.expires_In
        })
    }).catch( (err) =>{
        res.status(400).send(err)
    })
});


module.exports = server;
