
# Multi-Gateway Payment API (Node.js)

API RESTful para processamento de pagamentos utilizando múltiplos gateways.

Sem banco de dados — apenas memória.

## Tecnologias

- Node.js
- Express
- Thunder Client

## Instalação

1. Instale Node.js
2. Abra a pasta do projeto
3. Execute:

npm install

## Rodar API

npm start

Servidor:

http://localhost:3000

## Teste no Thunder Client

### Criar pagamento

POST
http://localhost:3000/payments

Body JSON:

{
 "gateway": "stripe",
 "amount": 100,
 "currency": "BRL"
}

Gateways disponíveis:

stripe
mercadopago
paypal

### Consultar pagamento

GET

http://localhost:3000/payments/{id}

