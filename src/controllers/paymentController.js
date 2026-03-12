
const paymentService = require('../services/paymentService');

exports.createPayment = async (req, res) => {
  try {
    const { gateway, amount, currency } = req.body;

    const payment = await paymentService.processPayment({
      gateway,
      amount,
      currency
    });

    res.json(payment);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPaymentStatus = async (req, res) => {
  try {
    const payment = paymentService.getPayment(req.params.id);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.json(payment);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
