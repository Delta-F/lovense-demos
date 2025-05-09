const express = require('express');
const router = express.Router();

router.get('/hide-pages/imooc', (req, res) => {
    res.render('api-pages/hide-pages/imooc');
});

router.get('/general/api-introduction', (req, res) => {
    res.render('api-pages/general/api-introduction');
});

router.get('/general/toy-supported-functions', (req, res) => {
    res.render('api-pages/general/toy-supported-functions');
});

// Standard Solutions
router.get('/standard-solutions/standard-api', (req, res) => {
    res.render('api-pages/standard-solutions/standard-api');
});

router.get('/standard-solutions/standard-api-by-mobile-remote', (req, res) => {
    res.render('api-pages/standard-solutions/standard-api-by-mobile-remote');
});

router.get('/standard-solutions/standard-api-by-pc-remote', (req, res) => {
    res.render('api-pages/standard-solutions/standard-api-by-pc-remote');
});

router.get('/standard-solutions/standard-api-by-server', (req, res) => {
    res.render('api-pages/standard-solutions/standard-api-by-server');
});

router.get('/standard-solutions/standard-socket', (req, res) => {
    res.render('api-pages/standard-solutions/standard-socket');
});

router.get('/standard-solutions/standard-js-sdk', (req, res) => {
    res.render('api-pages/standard-solutions/standard-js-sdk');
});

router.get('/standard-solutions/toy-events-api', (req, res) => {
    res.render('api-pages/standard-solutions/toy-events-api');
});

router.get('/standard-solutions/pattern-editor-api', (req, res) => {
    res.render('api-pages/standard-solutions/pattern-editor-api');
});

router.get('/standard-solutions/discord-bot-example', (req, res) => {
    res.render('api-pages/standard-solutions/discord-bot-example');
});

// Camera Solutions routes
router.get('/cam-solutions/cam-extension', (req, res) => {
    res.render('api-pages/cam-solutions/cam-extension');
});

router.get('/cam-solutions/cam-kit-web', (req, res) => {
    res.render('api-pages/cam-solutions/cam-kit-web');
});

router.get('/cam-solutions/custom-cam-basic-api', (req, res) => {
    res.render('api-pages/cam-solutions/custom-cam-basic-api');
});

router.get('/cam-solutions/custom-cam-js-sdk', (req, res) => {
    res.render('api-pages/cam-solutions/custom-cam-js-sdk');
});

router.get('/cam-solutions/custom-cam-socket-api', (req, res) => {
    res.render('api-pages/cam-solutions/custom-cam-socket-api');
});

// Native SDKs routes
router.get('/native-sdks/android-sdk', (req, res) => {
    res.render('api-pages/native-sdks/android-sdk');
});

router.get('/native-sdks/ios-sdk', (req, res) => {
    res.render('api-pages/native-sdks/ios-sdk');
});

router.get('/native-sdks/windows-sdk', (req, res) => {
    res.render('api-pages/native-sdks/windows-sdk');
});

// Game Engine routes
router.get('/game-engine/game-plugin', (req, res) => {
    res.render('api-pages/game-engine/game-plugin');
});

router.get('/game-engine/unity-dongle', (req, res) => {
    res.render('api-pages/game-engine/unity-dongle');
});

router.get('/game-engine/unity-mac', (req, res) => {
    res.render('api-pages/game-engine/unity-mac');
});

router.get('/game-engine/unity-mobile', (req, res) => {
    res.render('api-pages/game-engine/unity-mobile');
});

router.get('/game-engine/unity-remote', (req, res) => {
    res.render('api-pages/game-engine/unity-remote');
});

router.get('/game-engine/unity-windows', (req, res) => {
    res.render('api-pages/game-engine/unity-windows');
});

router.get('/game-engine/unreal-remote', (req, res) => {
    res.render('api-pages/game-engine/unreal-remote');
});

module.exports = router; 