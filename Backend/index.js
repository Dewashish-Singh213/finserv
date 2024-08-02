const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// GET /bfhl endpoint
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const numbers = [];
  const alphabets = [];

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false });
  }

  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === 'string' && item.length === 1) {
      alphabets.push(item);
    }
  });

  const highest_alphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];

  res.status(200).json({
    is_success: true,
    user_id: "your_fullname_dob",
    email: "your_email",
    roll_number: "your_roll_number",
    numbers,
    alphabets,
    highest_alphabet
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
