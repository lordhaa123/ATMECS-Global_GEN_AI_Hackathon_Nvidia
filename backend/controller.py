from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

from model import func


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PromptRequest(BaseModel):
    prompt: str

@app.post("/postRequest")
async def root(request: PromptRequest):
    prompt = request.prompt  # Extract the 'prompt' field from the request
    # print(prompt)
    
    result = func(prompt)  # Your function that processes the prompt
    print(result)
    # result = json.dumps(result)
    # print(result)
    
    return result
