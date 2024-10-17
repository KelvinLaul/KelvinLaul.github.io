// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 80


// Middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Rose and Co. Beauty Salon Marketing',
        emailjs_user_id: process.env.EMAILJS_USER_ID,
        emailjs_service_id: process.env.EMAILJS_SERVICE_ID,
        emailjs_template_id: process.env.EMAILJS_TEMPLATE_ID
    });
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { firstName, lastName, email, phone, companyName, position } = req.body;

    
    // Log the received form data to the console
    console.log('Form data received:');
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Company Name: ${companyName}`);
    console.log(`Position: ${position}`);


    // For now, just return a success response
    res.status(200).send('Form submitted successfully!');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
