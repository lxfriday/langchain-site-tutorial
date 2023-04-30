import { ChatOpenAI } from 'langchain/chat_models/openai'
import { HumanChatMessage, SystemChatMessage } from 'langchain/schema'

const chat = new ChatOpenAI({ temperature: 0, modelName: 'gpt-3.5-turbo' })

;(async () => {
  const responseC = await chat.generate([
    [
      new SystemChatMessage(
        'You are a helpful assistant that translates English to French.',
      ),
      new HumanChatMessage(
        'Translate this sentence from English to French. I love programming.',
      ),
    ],
    [
      new SystemChatMessage(
        'You are a helpful assistant that translates English to French.',
      ),
      new HumanChatMessage(
        'Translate this sentence from English to French. I love artificial intelligence.',
      ),
    ],
  ])

  console.log(JSON.stringify(responseC))
})()

// {
//   "generations": [
//     [
//       {
//         "text": "J'aime programmer.",
//         "message": { "text": "J'aime programmer." }
//       }
//     ],
//     [
//       {
//         "text": "J'aime l'intelligence artificielle.",
//         "message": { "text": "J'aime l'intelligence artificielle." }
//       }
//     ]
//   ],
//   "llmOutput": {
//     "tokenUsage": {
//       "completionTokens": 16,
//       "promptTokens": 73,
//       "totalTokens": 89
//     }
//   }
// }
