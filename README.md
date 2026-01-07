# Job Scheduler & Automation System

A full-stack mini job scheduling and automation system that allows users to create, run, and track background jobs with real-time status updates.

---

## 🚀 Project Overview

This application simulates a real-world job scheduler used in systems like email sending, report generation, and background task processing.

Users can:
- Create jobs
- Assign priority
- Run jobs manually
- Track job lifecycle (Pending → Running → Completed)
- View job status updates in real time

---

## 🧱 Tech Stack

### Frontend
- React (Create React App)
- CSS (custom styling)
- Fetch API

### Backend
- Node.js
- Express.js
- SQLite
- CORS

---

## ✨ Features

- Create background jobs
- Store jobs in SQLite database
- Run jobs manually
- Simulated background execution
- Automatic status updates using polling
- Clean UI with gradient background
- Persistent data (jobs remain after refresh)

---

## 📊 Job Lifecycle

Pending → Running → Completed

yaml
Copy code

- **Pending**: Job created but not started
- **Running**: Job execution in progress
- **Completed**: Job finished successfully

---

## 📂 Project Structure

job-scheduler/
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── services/
│ ├── db.js
│ ├── app.js
│ └── jobs.db
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Dashboard.js
│ │ │ └── Dashboard.css
│ │ ├── services/
│ │ │ └── api.js
│ │ ├── App.js
│ │ └── index.css
│ └── package.json
│
└── README.md

yaml
Copy code

---

## ⚙️ How to Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/job-scheduler.git
cd job-scheduler
2️⃣ Start Backend
bash
Copy code
cd backend
npm install
node app.js
Backend runs at:

arduino
Copy code
http://localhost:4000
3️⃣ Start Frontend
bash
Copy code
cd frontend
npm install
npm start
Frontend runs at:

arduino
Copy code
http://localhost:3000
🧪 Testing the Application
Open http://localhost:3000

Enter a task name

Select priority

Click Create Job

Click Run

Watch status change automatically:

arduino
Copy code
pending → running → completed
🧠 Key Implementation Highlights
SQLite used for lightweight persistence

Polling implemented to sync frontend with async backend execution

Modular code structure (controllers, services, routes)

Clean UI with white gradient overlay for readability

📸 Screenshots
Add screenshots here if required

📌 Future Enhancements
Webhook trigger on job completion

Job filtering by status and priority

Job detail page

Authentication & authorization

WebSocket real-time updates

