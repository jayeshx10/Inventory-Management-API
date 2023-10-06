const express = require('express');
const itemsRouter = require('../routers/items.routes');
const salesRouter = require('../routers/sales.routes')

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Express app started.")
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

app.use('/items', itemsRouter);
app.use('/sales', salesRouter);