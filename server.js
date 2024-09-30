const express = require('express');
const calculatorRouter = require('./routes/v1/calculator');
const app = express();
const PORT = process.env.PORT || 3000;  // Use the Render-assigned port, default to 4991 if not available

// Middleware to parse JSON
app.use(express.json());

// Route for calculator
app.use('/v1/calculator', calculatorRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
