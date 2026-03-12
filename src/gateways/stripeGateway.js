
exports.pay = async (amount, currency) => {

  console.log("Processing payment with STRIPE");

  return {
    status: "approved",
    provider: "stripe"
  };

};
