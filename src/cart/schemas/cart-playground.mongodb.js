// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('ecom');

// Create a new document in the collection.
db.getCollection('carts').insertMany([
  {
    userId: '647aef8707c6188a6a2a5615',
    items: [
      {
        productId: '647af9d8ec40187c9468d7b1',
        name: 'my_paper',
        quantity: 5,
        price: 2,
        subTotalPrice: 10,
      },
      {
        productId: '647af9d8ec40187c9468d7b2',
        name: 'my_bag',
        quantity: 5,
        price: 10,
        subTotalPrice: 50,
      },
      {
        productId: '647af9d8ec40187c9468d7b3',
        name: 'my_shoes',
        quantity: 3,
        price: 4,
        subTotalPrice: 12,
      },
    ],
  },
  {
    userId: '647aef8707c6188a6a2a5616',
    items: [
      {
        productId: '647af9d8ec40187c9468d7b1',
        name: 'my_paper2',
        quantity: 5,
        price: 2,
        subTotalPrice: 10,
      },
      {
        productId: '647af9d8ec40187c9468d7b6',
        name: 'my_harry_book',
        quantity: 2,
        price: 15,
        subTotalPrice: 30,
      },
      {
        productId: '647af9d8ec40187c9468d7b7',
        name: 'my_dev_best_book',
        quantity: 1,
        price: 20,
        subTotalPrice: 20,
      },
    ],
  },
  {
    userId: '647aef8707c6188a6a2a5615',
    items: [
      {
        productId: '647af9d8ec40187c9468d7b5',
        name: 'my_knife',
        quantity: 3,
        price: 12,
        subTotalPrice: 36,
      },
      {
        productId: '647af9d8ec40187c9468d7b4',
        name: 'my_glasses',
        quantity: 5,
        price: 20,
        subTotalPrice: 100,
      },
      {
        productId: '647af9d8ec40187c9468d7b3',
        name: 'my_shoes_2',
        quantity: 5,
        price: 2,
        subTotalPrice: 10,
      },
    ],
  },
  {
    userId: '647aef8707c6188a6a2a5617',
    items: [
      {
        productId: '647af9d8ec40187c9468d7b4',
        name: 'my_glasses_2',
        quantity: 4,
        price: 20,
        subTotalPrice: 80,
      },
      {
        productId: '647af9d8ec40187c9468d7b2',
        name: 'my_bag_3',
        quantity: 1,
        price: 10,
        subTotalPrice: 15,
      },
      {
        productId: '647af9d8ec40187c9468d7b7',
        name: 'dev_is_great',
        quantity: 2,
        price: 20,
        subTotalPrice: 40,
      },
    ],
  },
  {
    userId: '647aef8707c6188a6a2a5615',
    items: [
      {
        productId: '647af9d8ec40187c9468d7b1',
        name: 'my_paper_4',
        quantity: 2,
        price: 2,
        subTotalPrice: 4,
      },
      {
        productId: '647af9d8ec40187c9468d7b2',
        name: 'my_bag_4',
        quantity: 5,
        price: 10,
        subTotalPrice: 50,
      },
      {
        productId: '647af9d8ec40187c9468d7b3',
        name: 'my_shoes',
        quantity: 5,
        price: 4,
        subTotalPrice: 20,
      },
    ],
  },
  {
    userId: '647aef8707c6188a6a2a5617',
    items: [
      {
        productId: '647af9d8ec40187c9468d7b1',
        name: 'my_paper_5',
        quantity: 2,
        price: 2,
        subTotalPrice: 4,
      },
      {
        productId: '647af9d8ec40187c9468d7b2',
        name: 'my_bag_5',
        quantity: 5,
        price: 10,
        subTotalPrice: 50,
      },
      {
        productId: '647af9d8ec40187c9468d7b3',
        name: 'my_shoes_again',
        quantity: 5,
        price: 4,
        subTotalPrice: 20,
      },
    ],
  },
]);
