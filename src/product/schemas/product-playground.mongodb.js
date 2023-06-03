// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('ecom');

// Create a new document in the collection.
db.getCollection('products').insertMany([
  {
    name: 'paper',
    description: 'A piece of paper',
    price: 2,
    category: 'home',
  },
  {
    name: 'Bag',
    description: 'Random bag',
    price: 10,
    category: 'home',
  },
  {
    name: 'Shoes',
    description: 'My beautiful shoes',
    price: 4,
    category: 'fashion',
  },
  {
    name: 'Glasses',
    description: 'Drink and chill',
    price: 20,
    category: 'kitchen',
  },
  {
    name: 'Knife',
    description: 'My Knife',
    price: 12,
    category: 'kitchen',
  },
  {
    name: 'Harry Potter',
    description: 'Geek and book lover',
    price: 15,
    category: 'library',
  },
  {
    name: 'Clean code',
    description: 'My favourite book',
    price: 20,
    category: 'library',
  },
]);
