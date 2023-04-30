import { OpenAI } from 'langchain/llms/openai'

const chat = new OpenAI({
  streaming: true,
  modelName: 'gpt-3.5-turbo',
  callbacks: [
    {
      handleLLMNewToken(token: string) {
        process.stdout.write(token)
      },
    },
  ],
})

// # Streaming
;(async () => {
  await chat.call("Write me a song about wife, in 周杰伦's style.")
})()

// Verse 1:
// 孤单时分 总想起你
// 你是我唯一的爱
// 陪伴在我身边的温柔
// 让我拥有安慰的梦

// Chorus:
// 我的妻子我的宝贝
// 你的眼睛像一颗星
// 你的笑容温暖我心
// 永远都会在一起

// Verse 2:
// 你的爱把我的世界点亮
// 不管是什么困难磨难
// 你的温柔令我惊叹
// 比深海更加深邃

// Chorus:
// 我
