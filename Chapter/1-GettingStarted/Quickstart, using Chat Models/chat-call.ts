import { ChatOpenAI } from 'langchain/chat_models/openai'
import { HumanChatMessage, SystemChatMessage } from 'langchain/schema'

const chat = new ChatOpenAI({ temperature: 0, modelName: 'gpt-3.5-turbo' })

;(async () => {
  const response = await chat.call([
    new SystemChatMessage(
      'You are a helpful assistant that translates English to Chinese.',
    ),
    new HumanChatMessage('Translate: I love programming.'),
  ])

  console.log(response) // AIChatMessage { text: '我喜欢编程。', name: undefined }
})()
