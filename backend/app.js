const express = require('express')
const cors = require('cors')
const jobsRoutes = require('./routes/jobs')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/jobs', jobsRoutes)

const PORT = 4000
app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})
