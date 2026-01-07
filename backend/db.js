const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./jobs.db', err => {
  if (err) {
    console.error('DB Error:', err.message)
  } else {
    console.log('Connected to SQLite database')
  }
})

const createTableQuery =
  "CREATE TABLE IF NOT EXISTS jobs (" +
  "id INTEGER PRIMARY KEY AUTOINCREMENT," +
  "taskName TEXT NOT NULL," +
  "payload TEXT," +
  "priority TEXT NOT NULL," +
  "status TEXT DEFAULT 'pending'," +
  "createdAt TEXT," +
  "completedAt TEXT" +
  ")"

db.run(createTableQuery)

module.exports = db
