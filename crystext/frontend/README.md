# CrysText Frontend

AI-powered crystal structure generation. This React frontend turns material prompts into generated CIF content, placeholder properties, downloads, and a crystal lattice visualization.

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Backend Connection

The Demo section calls `POST /api/generate` with:

```json
{ "prompt": "Generate a lithium iron phosphate crystal structure for battery applications" }
```

Set `VITE_API_BASE_URL` to override the default backend URL of `http://localhost:4000/api`.
