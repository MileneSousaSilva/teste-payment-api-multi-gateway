
const { MercadoPagoConfig } = require("mercadopago");

const client = new MercadoPagoConfig({
  accessToken: "token_de_acceso",
});

module.exports = client;