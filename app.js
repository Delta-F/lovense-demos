const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;
const baseURL = 'https://cyjvxkqqlyge.sealosbja.site';

// Handlebars setup
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');

// Add baseURL to all render calls
app.use((req, res, next) => {
    res.locals.baseURL = baseURL;
    next();
});

// Static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/standard-api', (req, res) => {
    res.redirect('/standard-solutions/standard-api');
});

app.get('/standard-socket', (req, res) => {
    res.redirect('/standard-solutions/standard-socket');
});

app.get('/standard-js-sdk', (req, res) => {
    res.redirect('/standard-solutions/standard-js-sdk');
});

app.get('/toy-events-api', (req, res) => {
    res.redirect('/standard-solutions/toy-events-api');
});

app.get('/cam-extension', (req, res) => {
    res.redirect('/cam-solutions/cam-extension');
});

app.get('/cam-kit-web', (req, res) => {
    res.redirect('/cam-solutions/cam-kit-web');
});

app.get('/custom-cam-basic-api', (req, res) => {
    res.redirect('/cam-solutions/custom-cam-basic-api');
});

app.get('/custom-cam-socket-api', (req, res) => {
    res.redirect('/cam-solutions/custom-cam-socket-api');
});

app.get('/custom-cam-js-sdk', (req, res) => {
    res.redirect('/cam-solutions/custom-cam-js-sdk');
});

app.get('/ios-sdk', (req, res) => {
    res.redirect('/native-sdks/ios-sdk');
});

app.get('/android-sdk', (req, res) => {
    res.redirect('/native-sdks/android-sdk');
});

app.get('/windows-sdk', (req, res) => {
    res.redirect('/native-sdks/windows-sdk');
});

app.get('/unity-remote', (req, res) => {
    res.redirect('/game-engine/unity-remote');
});

app.get('/unity-mobile', (req, res) => {
    res.redirect('/game-engine/unity-mobile');
});

app.get('/unity-windows', (req, res) => {
    res.redirect('/game-engine/unity-windows');
});

app.get('/unity-dongle', (req, res) => {
    res.redirect('/game-engine/unity-dongle');
});

app.get('/unity-mac', (req, res) => {
    res.redirect('/game-engine/unity-mac');
});

app.get('/unreal-remote', (req, res) => {
    res.redirect('/game-engine/unreal-remote');
});

// Use API routes
app.use('', apiRoutes);

app.listen(port, () => {
    console.log(`Server running at ${baseURL}`);
}); 