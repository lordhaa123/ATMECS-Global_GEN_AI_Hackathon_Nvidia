from fastapi import FastAPI
from model import func
import json

app = FastAPI()

@app.post("/postRequest")
async def root(prompt):
    result = func(prompt)
    result = json.dumps(result)
    print(result)
    return result

