// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('ecom');

// Create a new document in the collection.
db.getCollection('users').insertMany([
  {
    username: 'loic',
    email: 'my@email.com',
    password: 'pass',
    role: ['admin', 'user'],
  },
  {
    username: 'Price',
    email: 'price@email.com',
    password: 'passprice',
    role: ['user'],
  },
  {
    username: 'flint',
    email: 'flint@email.com',
    password: 'passflint',
    role: ['user'],
  },
]);
