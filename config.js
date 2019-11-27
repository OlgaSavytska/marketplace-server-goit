const username = "Kate";
const password = "Sulfur%Warpten13";

const config = {
  port: 3001,
  DB :  `mongodb+srv://${username}:${password}@product-delivery-fufgk.mongodb.net/test?retryWrites=true`,
};

module.exports  = config;