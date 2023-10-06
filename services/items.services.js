const Item = require('../models/item.model');

const addItem = async (item) => {
  try {
    const newItem = new Item(item);
    const savedItem = await newItem.save();
    return savedItem;
  } catch (error) {
    throw error;
  }
}

const fetchAllItems = async () => {
  try {
    const allItems = await Item.find();
    return allItems;
  } catch (error) {
    throw error;
  } 
}

module.exports = { addItem, fetchAllItems };