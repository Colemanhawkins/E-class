
const server = require('express').Router();
const SpotifyWebApi = require('spotify-web-api-node');

server.post('/', async (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    })
        //sistema de autorizacion de la api
    spotifyApi.authorizationCodeGrant(code).then(data =>{
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch( (err) =>{
        console.log(err)
        res.status(400).send(err)
    })
});


server.post('/refreshToken', (req, res) => {

    const refreshToken = req.body.refreshToken;

    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken
    })
    //refresco el token
    spotifyApi.refreshAccessToken()
    .then((data) => {
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in
        })
    }).catch( (err) =>{
        console.log(err)
        res.status(400).send(err)
    })
})

module.exports = server;
