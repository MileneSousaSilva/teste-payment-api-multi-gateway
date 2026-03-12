
const express = require('express');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
app.use(express.json());

app.use('/payments', paymentRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Payment API running on port ${PORT}`);
});
