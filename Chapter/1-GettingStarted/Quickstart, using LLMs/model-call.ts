import * as dotenv from 'dotenv'
import { OpenAI } from 'langchain/llms/openai'
dotenv.config()

const model = new OpenAI({ modelName: 'gpt-3.5-turbo' })

// # LLMs: Get Predictions from a Language Model
;(async () => {
  const res = await model.call(
    'What would be a good company name a company that makes colorful socks?',
  )
  console.log(res) // Rainbow Socks Co.
})()
