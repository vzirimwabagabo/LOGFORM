const express = require('express');
const app = express();
const port = 3000; // You can change this port if needed

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle login requests
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Here, you would validate the email and password
    // For simplicity, let's just check if both are present
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    // Assuming validation passed, you would typically check credentials against a database
    // For demo purposes, just log the received data
    console.log('Received login request:', email, password);
    // Send a success response
    res.json({ message: 'Login successful' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
