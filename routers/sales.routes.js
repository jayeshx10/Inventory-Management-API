const express = require('express');
const salesRouter = express.Router();
const { addSale, fetchAllSales } = require('../services/sales.services');

salesRouter.post('/', async (req, res) => {
  try{
    const addedSale = await addSale(sale);
    if (addedSale) {
      res.status(201).json({ status: 201, message: "New sale successfully added.", data: addedSale})
    } else {
      res.status(400).json({ status: 400, message: "Bad request."})
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal server error.", error: error})
  }
})

salesRouter.get('/', async (req, res) => {
  try {
    const allSales = await fetchAllSales();
    if (allSales) {
      res.status(200).json({ status: 200, message: "Sales fetched successfully.", data: allSales})
    } else {
      res.status(400).json({ status: 400, message: "Bad request."})
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal server error.", error: error})
  }
})

module.exports = salesRouter;