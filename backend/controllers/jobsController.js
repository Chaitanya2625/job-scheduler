const db = require('../db')
const sendWebhook = require('../services/webhook')

exports.createJob = (req, res) => {
  const { taskName, payload, priority } = req.body

  if (!taskName || !priority) {
    return res.status(400).json({ message: 'Missing fields' })
  }

  const job = {
    taskName,
    payload: JSON.stringify(payload || {}),
    priority,
    status: 'pending',
    createdAt: new Date().toISOString()
  }

  db.run(
    'INSERT INTO jobs (taskName, payload, priority, status, createdAt) VALUES (?, ?, ?, ?, ?)',
    Object.values(job),
    function () {
      res.json({ id: this.lastID })
    }
  )
}

exports.getJobs = (req, res) => {
  db.all('SELECT * FROM jobs', [], (err, rows) => {
    res.json(rows)
  })
}

exports.getJobById = (req, res) => {
  db.get(
    'SELECT * FROM jobs WHERE id = ?',
    [req.params.id],
    (err, row) => {
      if (!row) {
        return res.status(404).json({ message: 'Job not found' })
      }
      res.json(row)
    }
  )
}

exports.runJob = (req, res) => {
  const jobId = req.params.id

  db.run('UPDATE jobs SET status = ? WHERE id = ?', ['running', jobId])

  setTimeout(() => {
    const completedAt = new Date().toISOString()

    db.run(
      'UPDATE jobs SET status = ?, completedAt = ? WHERE id = ?',
      ['completed', completedAt, jobId]
    )

    sendWebhook({
      jobId,
      status: 'completed',
      completedAt
    })
  }, 3000)

  res.json({ message: 'Job started' })
}
