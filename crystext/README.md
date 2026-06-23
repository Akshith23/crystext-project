# CrysText

**AI-Powered Crystal Structure Generation**

CrysText converts natural language material prompts into generated CIF content and demo material properties using a GPT-2 model.

This repository contains two projects:

```text
crystext/
  frontend/   React + Vite + Tailwind + Framer Motion + React Three Fiber
  backend/    Node.js + Express API plus a Python Flask GPT-2 inference service
```

## Running Locally

### Backend

```bash
cd backend
npm install
npm start
```

Runs at `http://localhost:4000`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs at `http://localhost:5173`.

### Python AI Service

```bash
cd backend
python flask_api.py
```

The Express backend expects Flask at `http://localhost:5000` by default.
