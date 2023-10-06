const mongoose = require('mongoose');

// access mongoAtlas secret key 
const mySecret = process.env['MONGO_DB']

// connection
const initializeDatabase = () => {
  if (mySecret) {
    console.log('Enter your secret key.')
  }
  try{
    const connection = await mongoose.connect(mySecret, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    if (connection) {
      console.log('Connection successful.')
    }
  } catch (error) {
    console.log('Connection failed: ', error);
  }
};

module.exports = initializeDatabase;