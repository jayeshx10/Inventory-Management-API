# Inventory Management API
This Express.js application, powered by Mongoose, provides a robust and scalable API for managing inventory data. It offers a comprehensive set of endpoints to perform few of the CRUD operations on inventory items.

## API Endpoints
### 1. Adding an Item to Inventory
- Endpoint: `/items`
- Method: POST
- Description: Allows users to add a new item to the inventory.
- Request Body:
  
        name (string, required): Name of the item.
        quantity (integer, required): Quantity of the item.
        price (float, required): Price of the item.

### 2. Fetching Items from Inventory
- Endpoint: `/items`
- Method: GET
- Description: Retrieves a list of all items in the inventory.
      
### 3. Adding a Sale
- Endpoint: `/sales`
- Method: POST
- Description: Allows users to add a new sale.
- Request Body:
  
        description (string, required): Description of the sale.
        amount (float, required): Amount of the sale.
          
### 4. Fetching Sales
- Endpoint: `/sales`
- Method: GET
- Description: Retrieves a list of all sales.
      
## Getting Started
### 1. Clone the repository:
    git clone https://github.com/jayeshx10/inventory-management-api.git
### 2. Install dependencies:
    cd inventory-management-api
    npm install
### Start the server:
    npm start

## Tech Stack
- Node.js: JavaScript runtime for server-side execution.
- Express.js: Minimal and flexible Node.js web application framework.
- Mongoose: Elegant MongoDB object modeling for Node.js.
- RESTful Architecture: Follows best practices for designing RESTful APIs.

## Documentation
[View the entire documentation here](https://documenter.getpostman.com/view/29099763/2s9YJdV2A8)
  
## Contributing
Contributions are welcome! Feel free to open an issue or create a pull request for any improvements or features you'd like to add.

*Happy coding folks 😄*
