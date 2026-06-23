from transformers import GPT2LMHeadModel, GPT2Tokenizer

MODEL_PATH = "crystext_cif_model"

print("Loading model...")

tokenizer = GPT2Tokenizer.from_pretrained(MODEL_PATH)
model = GPT2LMHeadModel.from_pretrained(MODEL_PATH)

print("Model loaded successfully!")

def generate_cif(prompt):

    inputs = tokenizer(
        prompt,
        return_tensors="pt"
    )

    outputs = model.generate(
    **inputs,
    max_length=512,
    do_sample=True,
    temperature=0.7
)

    result = tokenizer.decode(
        outputs[0],
        skip_special_tokens=True
    )

    return result