require('dotenv').config();
const express = require('express');
const bot = require('./bot'); // we will fix this line in a second

const app = express();
app.use(express.json());

// Temporary route to check
app.get('/', (req, res) => {
  res.send('Benedict Loyalty Backend is alive!');
});

// Future proxy route for iiko (we will use this when you get the API key)
app.post('/api/iiko-proxy', async (req, res) => {
  res.json({ message: 'iiko proxy not active yet – waiting for API key' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});