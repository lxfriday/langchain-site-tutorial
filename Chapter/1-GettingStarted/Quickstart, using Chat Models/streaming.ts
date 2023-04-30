import { HumanChatMessage } from 'langchain/schema'
import { ChatOpenAI } from 'langchain/chat_models/openai'
const chat = new ChatOpenAI({
  modelName: 'gpt-3.5-turbo',
  streaming: true,
  callbacks: [
    {
      handleLLMNewToken(token: string) {
        process.stdout.write(token)
      },
    },
  ],
})

;(async () => {
  await chat.call([
    new HumanChatMessage('用周杰伦歌曲的风格写一首关于秋天的歌曲.'),
  ])
})()

// (Verse 1)
// 寒风吹起了落叶飘
// 黄昏逐渐变得沉寂
// 城市里的秋天来了
// 让我感觉到了寂寞

// (Chorus)
// 秋天的色彩多绚烂
// 红黄绿的叶子想飞翔
// 那种感觉多悠扬
// 让我想将它永存

// (Verse 2)
// 夜晚的雨打在窗口
// 音乐在室内回荡
// 我的心情像这秋天
// 有些忧伤但又美好

// (Chorus)
// 秋天的色彩多绚烂
// 红黄绿的叶子想飞翔
// 那种感觉多悠扬
// 让我想将它永存

// (Bridge)
// 我知道秋天会过去
// 冬天也会来到这里
// 但我希望这音乐
// 能仿佛秋天一样留在这里

// (Chorus)
// 秋天的色彩多绚烂
// 红黄绿的叶子想飞翔
// 那种感觉多悠扬
// 让我想将它永存

// (Outro)
// 秋天的色彩多绚烂
// 让我想将它永存。
