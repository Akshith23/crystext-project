from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

generator = pipeline(
    "text-generation",
    model="./crystext_gpt2/crystext_gpt2",
    tokenizer="./crystext_gpt2/crystext_gpt2"
)

@app.route("/")
def home():
    return "CrysText AI API Running!"

@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json(silent=True) or {}

    prompt = data.get("prompt", "")

    if not isinstance(prompt, str) or not prompt.strip():
        return jsonify({
            "success": False,
            "message": 'Field "prompt" is required and must be a non-empty string.'
        }), 400

    result = generator(
        prompt.strip(),
        max_length=300,
        num_return_sequences=1,
        temperature=0.8
    )

    generated_cif = result[0]["generated_text"]

    return jsonify({
        "success": True,
        "cif_content": generated_cif
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
