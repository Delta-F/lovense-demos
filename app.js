const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const apiRoutes = require('./routes/api');
const lovenseRouter = require('./routes/api/v2/lovense');

const app = express();
const port = process.env.PORT || 3000;
const port2 = 8082;
const baseURL = 'eserlexsiqht.sealosbja.site';
const baseURL2 = 'localhost';

// Add JSON and URL-encoded parsing middleware BEFORE routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars setup
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');

// Add baseURL to all render calls
app.use((req, res, next) => {
    // Determine which domain is being used
    const host = req.get('host');
    if (host.includes(baseURL2)) {
        res.locals.baseURL = baseURL2;
        res.locals.fullURL = `http://${baseURL2}:${port2}`;
    } else {
        res.locals.baseURL = baseURL;
        res.locals.fullURL = `https://${baseURL}`;
    }
    next();
});

// Static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// General
app.get('/api-introduction', (req, res) => {
    res.redirect('/general/api-introduction');
});

app.get('/toy-supported-functions', (req, res) => {
    res.redirect('/general/toy-supported-functions');
});

// Standard Solutions
app.get('/standard-api', (req, res) => {
    res.redirect('/standard-solutions/standard-api');
});

app.get('/standard-api/mobile-remote', (req, res) => {
    res.render('standard-solutions/standard-api-by-mobile-remote');
});

app.get('/standard-api/pc-remote', (req, res) => {
    res.render('standard-solutions/standard-api-by-pc-remote');
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

// Standard API routes
app.use('/standard-solutions/standard-api', apiRoutes);
app.use('/standard-solutions/standard-api-by-mobile-remote', apiRoutes);
app.use('/standard-solutions/standard-api-by-pc-remote', apiRoutes);

// Register the Lovense routes BEFORE the general API routes
app.use('/api/v2/lovense', lovenseRouter);
app.use('/', apiRoutes);

// 404 handler
app.use((req, res) => {
    if (req.path.startsWith('/api/')) {
        // Send JSON response for API routes
        res.status(404).json({
            success: false,
            message: 'API endpoint not found'
        });
    } else {
        // Send simple text for other routes
        res.status(404).send('404 - Page Not Found');
    }
});

// Start servers on both ports
app.listen(port, () => {
    console.log(`Server running at https://${baseURL}`);
    console.log(`Server listening on port ${port}`);
});

app.listen(port2, () => {
    console.log(`Server running at http://${baseURL2}:${port2}`);
    console.log(`Server listening on port ${port2}`);
}); 