from flask import Flask, request, jsonify, send_file
import os
from flask_cors import CORS

from generator import generate_cif

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return {
        "message": "CrysText API Running"
    }


@app.route("/generate", methods=["POST"])
def generate():

    data = request.json
    prompt = data.get("prompt")

    result = generate_cif(prompt)

    return jsonify({
    "prompt": prompt,
    "generated_cif": result,
    "properties": {
        "chemicalFormula": "Zr2Cu30I",
        "crystalSystem": "Cubic",
        "density": "7.2",
        "bandGap": "1.8",
        "formationEnergy": "-2.4",
        "thermalStability": "High",
        "electricalConductivity": "5.6e5",
        "thermalConductivity": "15.3"
    }
})


@app.route("/download", methods=["POST"])
def download_cif():

    data = request.json
    prompt = data.get("prompt")

    cif_text = generate_cif(prompt)

    os.makedirs("generated_cifs", exist_ok=True)

    filepath = os.path.join(
        "generated_cifs",
        "generated_structure.cif"
    )

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(cif_text)

    return send_file(
        filepath,
        as_attachment=True,
        download_name="generated_structure.cif"
    )


if __name__ == "__main__":
    import os

    port = int(os.environ.get("PORT", 7860))

    app.run(
        host="0.0.0.0",
        port=port,
        debug=False
    )