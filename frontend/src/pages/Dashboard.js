import {useEffect, useState} from 'react'
import {getJobs, createJob, runJob} from '../services/api'
import './Dashboard.css'

function Dashboard() {
  const [jobs, setJobs] = useState([])
  const [taskName, setTaskName] = useState('')
  const [priority, setPriority] = useState('Low')

  // Fetch jobs from backend
  const loadJobs = async () => {
    try {
      const data = await getJobs()
      setJobs(data)
    } catch (error) {
      console.error('Failed to load jobs', error)
    }
  }

  // ✅ POLLING: refresh jobs every 2 seconds
  useEffect(() => {
    loadJobs()

    const intervalId = setInterval(() => {
      loadJobs()
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  // Create job
  const onCreateJob = async e => {
    e.preventDefault()
    if (!taskName) return alert('Enter task name')

    await createJob({
      taskName,
      priority,
      payload: {},
    })

    setTaskName('')
    setPriority('Low')
    loadJobs()
  }

  // Run job (backend handles status change)
  const onRunJob = async jobId => {
    await runJob(jobId)
    // no timeout needed – polling handles updates
  }

  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Job Scheduler</h1>

        {/* Create Job */}
        <form className="job-form" onSubmit={onCreateJob}>
          <input
            placeholder="Task name"
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
          />

          <select
            value={priority}
            onChange={e => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <button type="submit">Create Job</button>
        </form>

        {/* Jobs Table */}
        <table className="jobs-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map(job => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.taskName}</td>
                <td>{job.priority}</td>
                <td className={`status-${job.status}`}>
                  {job.status}
                </td>
                <td>
                  {job.status === 'pending' && (
                    <button
                      className="run-btn"
                      onClick={() => onRunJob(job.id)}
                    >
                      Run
                    </button>
                  )}
                  {job.status === 'running' && 'Running...'}
                  {job.status === 'completed' && 'Completed'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
