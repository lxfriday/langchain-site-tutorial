import * as dotenv from 'dotenv'
import { OpenAI } from 'langchain/llms/openai'
import { PromptTemplate } from 'langchain/prompts'
import { LLMChain } from 'langchain/chains'
dotenv.config()

const model = new OpenAI({ modelName: 'gpt-3.5-turbo' })

const template = 'What is a good name for a company that makes {product}?'
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ['product'],
})

// # Chains: Combine LLMs and Prompts in Multi-Step Workflows
;(async () => {
  const chain = new LLMChain({ llm: model, prompt: prompt })
  const res = await chain.call({ product: 'colorful socks' })
  console.log(res) //  text: '\n\nRainbow Socks.' }
})()
