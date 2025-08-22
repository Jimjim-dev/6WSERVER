const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Sample data
let users = [
  { id: 1, name: 'Carmela', email: 'mela@gmail.com', age: 25, salary: 25000 },
  { id: 2, name: 'Joseph', email: 'joe@yahoo.com', age: 35, salary: 45000 },
  { id: 3, name: 'James', email: 'james@msn.com', age: 55, salary: 30000 },
  { id: 4, name: 'John', email: 'john@gmail.com', age: 40, salary: 25000 },
  { id: 5, name: 'Frank', email: 'frank@yahoo.com', age: 45, salary: 45000 },
  { id: 6, name: 'Alex', email: 'alex@msn.com', age: 21, salary: 33000 }
];

// Root route - shows available routes
app.get('/', (req, res) => {
  res.send(`
    <h1>Available Routes</h1>
    <ul>
      <li>GET /api/users - Returns all users</li>
      <li>GET /api/users/:id - Fetches a specific user by ID</li>
      <li>GET /api/users - Retrieves and displays parameters</li>
      <li>POST /api/users - Adds a new user</li>
      <li>DELETE /api/delete/:id - Deletes a user by ID</li>
    </ul>
  `);
});

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// POST new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    salary: req.body.salary
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE user by ID
app.delete('/api/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.json({ message: `User with ID ${id} deleted successfully` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
