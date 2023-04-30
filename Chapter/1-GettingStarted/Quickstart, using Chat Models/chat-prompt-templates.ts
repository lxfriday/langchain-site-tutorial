import { ChatOpenAI } from 'langchain/chat_models/openai'
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from 'langchain/prompts'

const chat = new ChatOpenAI({ temperature: 0, modelName: 'gpt-3.5-turbo' })

const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    'You are a helpful assistant that translates {input_language} to {output_language}.',
  ),
  HumanMessagePromptTemplate.fromTemplate('{text}'),
])

;(async () => {
  const responseA = await chat.generatePrompt([
    await translationPrompt.formatPromptValue({
      input_language: 'English',
      output_language: 'French',
      text: 'I love programming.',
    }),
  ])
  console.log(JSON.stringify(responseA));
})()

// {
//   "generations": [
//     [
//       {
//         "text": "J'adore la programmation.",
//         "message": { "text": "J'adore la programmation." }
//       }
//     ]
//   ],
//   "llmOutput": {
//     "tokenUsage": {
//       "completionTokens": 8,
//       "promptTokens": 28,
//       "totalTokens": 36
//     }
//   }
// }
