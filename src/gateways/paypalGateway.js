
exports.pay = async (amount, currency) => {

  console.log("Processing payment with PAYPAL");

  return {
    status: "approved",
    provider: "paypal"
  };

};
