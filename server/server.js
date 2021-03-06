const express = require('express')
const app = express()
const path = require('path');
const manifest = require('./mockdata/manifest.json');
const physics = require('./mockdata/physics.json');
const r = require('./mockdata/characters/r.json');
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../lib/index.html"))
})

//load test manifest
app.get('/game/manifest/:id', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(manifest));
})

/**
 * Map handling start
 */

//map handling
app.get('/game/map/:id/skybox/:name', function (req, res) {
    let mapName = req.params.id;
    let skyboxName = req.params.name;
    res.sendFile(path.join(__dirname, "../lib/dist/assets/maps/" + mapName + "/skybox/" + skyboxName));
})


//map handling
app.get('/game/map/:id/physics', function (req, res) {
    let mapName = req.params.id;
    let physicsName = req.params.name;

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(physics));
})

app.get('/game/map/:id/texture/:name', function (req, res) {
    let mapName = req.params.id;
    let textureName = req.params.name;
    res.sendFile(path.join(__dirname, "../lib/dist/assets/maps/" + mapName + "/" + textureName));
})

app.get('/game/map/:id/heightmap/:name', function (req, res) {
    let mapName = req.params.id;
    let heightMapName = req.params.name;
    res.sendFile(path.join(__dirname, "../lib/dist/assets/maps/" + mapName + "/" + heightMapName));
})

/**
 * Map handling end
 */

/**
 * Character handling start
 */


app.get('/game/characters/:id/textures/:name', function (req, res) {
    let id = req.params.id;
    let name = req.params.name;
    res.sendFile(path.join(__dirname, "../lib/dist/assets/commanders/" + id + "/textures/" + name));
})

app.get('/game/characters/:id/sounds/:name', function (req, res) {
    let id = req.params.id;
    let name = req.params.name;
    res.sendFile(path.join(__dirname, "../lib/dist/assets/commanders/" + id + "/sounds/" + name));
});


app.get('/game/characters/:id/meshes/:name', function (req, res) {
    let id = req.params.id;
    let name = req.params.name;
    res.sendFile(path.join(__dirname, "../lib/dist/assets/commanders/" + id + "/meshes/" + name));
})


app.get('/game/characters/:id/manifest', function (req, res) {
    let name = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(r));
})

/**
 * Character handling end
 */


/**
 * Handling of game data
 */

app.get('/game/campaign/:id', function (req, res) {
    let id = req.params.id;
    res.sendFile(path.join(__dirname, "./mockdata/game/" + id + "/details.json"));
})

app.use('/dist/static', express.static(path.join(__dirname, "../lib/dist/static")))
app.use('/dist/vendors', express.static(path.join(__dirname, "../lib/dist/vendors")))

app.listen(3000, function () {
    console.log('Test server running on 3000');
    console.log('Have you run webpack to compile the latest changes?');
})