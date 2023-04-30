import * as dotenv from 'dotenv'
import { OpenAI } from 'langchain/llms/openai'
import { BufferMemory } from 'langchain/memory'
import { ConversationChain } from 'langchain/chains'
dotenv.config()

const model = new OpenAI({ modelName: 'gpt-3.5-turbo' })
// # Memory: Add State to Chains and Agents

const memory = new BufferMemory()
const chain = new ConversationChain({ llm: model, memory: memory })
;(async () => {
  const res1 = await chain.call({ input: "Hi! I'm Jim." })
  console.log(res1) // {response: " Hi Jim, my name is AI. It's nice to meet you. What brings you here today?"}
  const res2 = await chain.call({ input: "What's my name?" })
  console.log(res2) // { response: ' Your name is Jim.' }
})()
