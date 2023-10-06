const mongoose = require(mongoose);

const saleSchema = new mongoose.Schema({
  description: String,
  amount: Number,
})

const sale = mongoose.model('sale', saleSchema);
module.exports = sale;