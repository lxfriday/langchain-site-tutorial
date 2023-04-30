import * as dotenv from 'dotenv'
import { PromptTemplate } from 'langchain/prompts'
dotenv.config()

// # Prompt Templates: Manage Prompts for LLMs
const template = 'What is a good name for a company that makes {product}?'
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ['product'],
})
;(async () => {
  const res = await prompt.format({ product: 'colorful socks' })
  console.log(res) // What is a good name for a company that makes colorful socks?
})()
