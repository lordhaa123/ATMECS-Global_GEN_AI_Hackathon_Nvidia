import openai
from catogory_to_link import catogory_to_link
import re

from dotenv import load_dotenv
import os

load_dotenv()

ACCESS_TOKEN = os.getenv("ACCESS_TOKEN")

client = openai.OpenAI(
  base_url = "https://integrate.api.nvidia.com/v1",
  api_key = ACCESS_TOKEN
)

def func(prompt:str) -> str:
  
  addition_prompt = "After responding to the above user prompt classify the above request in to one of the following categories:credit card, debit card , personal loan, home loan , premium card , travel card , benifits , eligibility,new card , FASTTag , mutual funds , rewards and cashback. Respond to this in the following format:<<Category>>: category_name where category_name is the category."
  
  completion = client.chat.completions.create(
    model="meta/llama-3.1-405b-instruct",
    messages=[{"role":"user","content":prompt+" "+addition_prompt}],
    temperature=0.2,
    top_p=0.7,
    max_tokens=1024,
    stream=True
  )
  
  result = ""
  for chunk in completion:
    if chunk.choices[0].delta.content is not None:
      result += chunk.choices[0].delta.content
      #print(chunk.choices[0].delta.content, end="")
    
  result = result.split("\n")
  
  catogory = result[-1]
  
  catogory = catogory.split(':')
  catogory = catogory[-1].strip()
  catogory = re.sub(r'[^A-Za-z0-9\s]', '', catogory)
  catogory = catogory.replace(" ", "").lower()
  print("\n\n\n\n\n ###")
  print(catogory)
  
  catogory = catogory_to_link[catogory]
  
  result = "\n".join(result[:-1])
  
  result += "\n" + catogory
  
  return result
  