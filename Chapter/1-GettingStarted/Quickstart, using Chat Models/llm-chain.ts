import { ChatOpenAI } from 'langchain/chat_models/openai'
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from 'langchain/prompts'
import { LLMChain } from 'langchain/chains'

const chat = new ChatOpenAI({ modelName: 'gpt-3.5-turbo', temperature: 0 })

const prompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    'You are a calculator, please tell me the result  when I ask you,  the first question is: 1 + 2',
  ),
  HumanMessagePromptTemplate.fromTemplate('{text}'),
])

;(async () => {
  const chain = new LLMChain({
    prompt,
    llm: chat,
  })

  const responseA = await chain.call({
    text: 'what is the answer ',
  })
  console.log('responseA', responseA)
  const responseB = await chain.call({
    text: '+1000',
  })
  console.log('responseB', responseB)
  const responseC = await chain.call({
    text: '+10000',
  })
  console.log('responseC', responseC)
  const responseD = await chain.call({
    text: '+100000=',
  })
  console.log('responseD', responseD)
})()

// responseA { text: 'The answer is 3.' }
// responseB { text: 'The result is 1003.' }
// responseC { text: 'The result is 10003.' }
// responseD { text: '100003' }