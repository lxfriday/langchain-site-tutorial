import { OpenAI } from 'langchain/llms/openai'
import { HNSWLib } from 'langchain/vectorstores/hnswlib'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import {
  VectorStoreToolkit,
  createVectorStoreAgent,
  VectorStoreInfo,
} from 'langchain/agents'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export const run = async () => {
  const model = new OpenAI({ temperature: 0, modelName: 'gpt-3.5-turbo' })
  const directory = 'src/VectorStore/data'
  const vectorStore = await HNSWLib.load(directory, new OpenAIEmbeddings())

  /* Create the agent */
  const vectorStoreInfo: VectorStoreInfo = {
    name: 'langchain_site',
    description: 'langchain_site docs',
    vectorStore,
  }

  const toolkit = new VectorStoreToolkit(vectorStoreInfo, model)
  const agent = createVectorStoreAgent(model, toolkit)

  const input = 'Tell me how to manage prompts for LLMs, and show me the code'
  console.log(`Executing: ${input}`)
  const result = await agent.call({ input })
  console.log(`Got output ${result.output}`)
  console.log(
    `Got intermediate steps ${JSON.stringify(
      result.intermediateSteps,
      null,
      2,
    )}`,
  )
}

run()
