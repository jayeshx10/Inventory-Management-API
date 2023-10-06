const Sale = require('../models/sale.model');

const addSale = async (newSale) => {
  try {
    const newSale = new Sale(newSale);
    const savedSale = await newSale.save();
    return savedSale;
  } catch (error) {
    throw error;
  }
}

const fetchAllSales = async () => {
  try {
    const allSales = await Sale.find();
    return allSales;
  } catch (error) {
    throw error;
  }
}

module.exports = { addSale, fetchAllSales };