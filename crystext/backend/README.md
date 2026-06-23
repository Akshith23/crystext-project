# CrysText Backend

Express API between the CrysText frontend and the Python Flask GPT-2 inference service.

## Getting Started

```bash
npm install
npm start
```

The API runs at `http://localhost:4000` by default. The Flask service should expose `POST /predict` at `AI_SERVICE_URL`, which defaults to `http://localhost:5000`.

## API

### `GET /api/health`

Liveness check.

### `POST /api/generate`

Request:

```json
{ "prompt": "Generate a lithium iron phosphate crystal structure for battery applications" }
```

Response:

```json
{
  "success": true,
  "cif_content": "...generated CIF...",
  "properties": {
    "formula": "LiFePO4",
    "crystalSystem": "Orthorhombic",
    "density": "3.6",
    "bandGap": "3.8",
    "formationEnergy": "-4.2",
    "thermalStability": "High",
    "electricalConductivity": "Moderate",
    "thermalConductivity": "4.5"
  }
}
```

All errors follow `{ "success": false, "message": "..." }`.

## Flask Contract

```text
POST {AI_SERVICE_URL}/predict
Request:  { "prompt": "..." }
Response: { "success": true, "cif_content": "..." }
```
