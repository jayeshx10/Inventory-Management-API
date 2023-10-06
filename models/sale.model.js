const mongoose = require(mongoose);

const saleSchema = new mongoose.Schema({
  description: String,
  amount: Number,
})

const Sale = mongoose.model('sale', saleSchema);
module.exports = Sale;