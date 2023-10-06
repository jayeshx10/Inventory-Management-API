const express = require(express);
const itemsRouter = express.Router();
const { addItem, fetchAllItems } = require('../services/items.services');

itemsRouter.post('/', async (req, res) => {
  const newItem = req.body;
  try {
    const addedItem = await addItem(newitem);
    if (addedItem) {
      res.status(201).json({ status: 201, message: "New item added successfully.", data: addeditem})
    } else {
      res.status(400).json({ status: 400, message: "Bad request."})
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal server error.", error: error})
  }
})

itemsRouter.get('/', async (req, res) => {
  try {
    const allItems = await fetchAllItems();
    if (allItems) {
      res.status(200).json({ status: 200, message: "Items fetched successfully.", data: allItems})
    } else {
      res.status(400).json({ status: 400, message: "Bad request."})
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal server error.", error: error})
  }
})

module.exports = itemsRouter;