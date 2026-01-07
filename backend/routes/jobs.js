const express = require('express')
const router = express.Router()

const {
  createJob,
  getJobs,
  getJobById,
  runJob
} = require('../controllers/jobsController')

router.post('/', createJob)
router.get('/', getJobs)
router.get('/:id', getJobById)
router.post('/run/:id', runJob)

module.exports = router
