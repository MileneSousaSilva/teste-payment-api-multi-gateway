
const { MercadoPagoConfig } = require("mercadopago");

const client = new MercadoPagoConfig({
  accessToken: "APP_USR-1439153509143048-031210-0e8debd24fd64dfa081112556a5cdbd6-3260578921"
});

module.exports = client;