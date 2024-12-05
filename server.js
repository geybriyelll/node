const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Middleware
app.use(bodyParser.json());

// SQLite Database setup
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) console.error('Database error:', err.message);
  else console.log('Connected to the SQLite database.');
});

// Creating 'items' table
db.run(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`);

// CRUD Routes (to be defined in the next steps)

app.listen(3000, () => console.log('Server is running on port 3000.'));
