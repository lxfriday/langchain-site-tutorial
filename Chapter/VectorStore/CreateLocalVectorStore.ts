import { HNSWLib } from 'langchain/vectorstores/hnswlib'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import * as fs from 'fs'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export const run = async () => {
  /* Load in the file we want to do question answering over */
  const text = fs.readFileSync('files/langchain-site.md', 'utf8')
  /* Split the text into chunks */
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 })
  const docs = await textSplitter.createDocuments([text])
  /* Create the vectorstore */
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings())

  // Save the vector store to a directory
  const directory = 'src/VectorStore/data'
  await vectorStore.save(directory)
  console.log('Data Saved')
}

run()
