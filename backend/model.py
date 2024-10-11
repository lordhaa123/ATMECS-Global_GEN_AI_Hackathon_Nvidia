import openai

client = openai.OpenAI(
  base_url = "https://integrate.api.nvidia.com/v1",
  api_key = "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"
)



def func(prompt:str) -> str:
  completion = client.chat.completions.create(
    model="meta/llama-3.1-405b-instruct",
    messages=[{"role":"user","content":prompt}],
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
  return result
  