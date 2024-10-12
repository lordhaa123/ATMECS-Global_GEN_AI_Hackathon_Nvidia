import openai
from catogory_to_link import catogory_to_link

client = openai.OpenAI(
  base_url = "https://integrate.api.nvidia.com/v1",
  api_key = "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"
)



def func(prompt:str) -> str:
  
  addition_prompt = "After responding to the above user prompt classify the above request in to one of the following categories:credit card, debit card , personal loan, home loan , premium card , travel card , benifits , eligibility,new card , FASTTag , funds transfer , rewards and cashback. Respond to this in the following format:<<Category>>: category_name where category_name is the category."
  
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
  
  print("\n\n\n\n\n ###")
  print(catogory)
  
  catogory = catogory_to_link[catogory]
  
  result = "\n".join(result[:-1])
  
  result += "\n" + catogory
  
  return result
  