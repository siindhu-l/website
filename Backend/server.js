const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse JSON and form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, JS)
app.use(express.static("public")); // Make sure your frontend is in a 'public' folder

// Route to handle the form submission
app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required!" });
    }

    // Simulate account creation (e.g., saving to a database)
    console.log(`✅ User created: ${username}`);

    // Send a success response
    res.status(200).json({ message: "Account created successfully!" });
});

// Start the backend server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
