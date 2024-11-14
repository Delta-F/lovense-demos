const express = require('express');
const router = express.Router();

// Store the latest callback data
let latestCallbackData = null;

// Specific POST handler for /callback/latest
router.post('/callback/latest', (req, res) => {
    try {
        // Log the incoming request for debugging
        // console.log('Received POST callback:');
        // console.log('Headers:', req.headers);
        // console.log('Body:', req.body);
        
        // Validate and store the request body
        if (!req.body) {
            return res.status(400).json({
                success: false,
                message: 'Missing request body'
            });
        }

        // Store the callback data
        latestCallbackData = req.body;
        
        // Send a success response
        res.status(200).json({
            success: true,
            message: 'Callback processed successfully',
            receivedData: req.body
        });
    } catch (error) {
        console.error('Callback processing error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
});

// GET handler to retrieve the latest callback data
router.get('/callback/latest', (req, res) => {
    res.json(latestCallbackData || { message: 'No callback data received yet' });
});

module.exports = router; 