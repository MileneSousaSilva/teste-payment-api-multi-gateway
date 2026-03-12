const { Payment } = require("mercadopago");
const client = require("../config/mercadoPago");

exports.pay = async (amount, currency) => {

  const payment = new Payment(client);

  const body = {
    transaction_amount: Number(amount),
    description: "Pagamento API Node",
    payment_method_id: "pix",
    payer: {
      email: "teste@teste.com"
    }
  };

  const response = await payment.create({
    body: body
  });

  return {
    status: response.status,
    id: response.id,
    qr_code: response.point_of_interaction?.transaction_data?.qr_code
  };

};