const BASE_URL = 'http://localhost:4000'

export async function getJobs() {
  const res = await fetch(`${BASE_URL}/jobs`)
  return res.json()
}

export async function createJob(jobData) {
  const res = await fetch(`${BASE_URL}/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jobData),
  })
  return res.json()
}

export async function runJob(jobId) {
  await fetch(`${BASE_URL}/jobs/run/${jobId}`, {
    method: 'POST',
  })
}
