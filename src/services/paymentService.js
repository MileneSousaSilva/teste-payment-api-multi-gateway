
const { v4: uuid } = require('uuid');

const stripeGateway = require('../gateways/stripeGateway');
const mercadopagoGateway = require('../gateways/mercadoPagoGateway');
const paypalGateway = require('../gateways/paypalGateway');

const payments = [];

exports.processPayment = async ({ gateway, amount, currency }) => {

  let result;

  switch (gateway) {

    case "stripe":
      result = await stripeGateway.pay(amount, currency);
      break;

    case "mercadopago":
  result = await mercadopagoGateway.pay(amount, currency);
  break;

    case "paypal":
      result = await paypalGateway.pay(amount, currency);
      break;

    default:
      throw new Error("Gateway not supported");
  }

  const payment = {
    id: uuid(),
    gateway,
    amount,
    currency,
    status: result.status
  };

  payments.push(payment);

  return payment;
};

exports.getPayment = (id) => {
  return payments.find(p => p.id === id);
};
