import { ChatOpenAI } from 'langchain/chat_models/openai'
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
  MessagesPlaceholder,
} from 'langchain/prompts'
import { ConversationChain } from 'langchain/chains'
import { BufferMemory } from 'langchain/memory'

const chat = new ChatOpenAI({ modelName: 'gpt-3.5-turbo' })

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    '你是一个农民，接下来我会问你一些关于水果的问题',
  ),
  new MessagesPlaceholder('history'),
  HumanMessagePromptTemplate.fromTemplate('{input}'),
])

;(async () => {
  const chain = new ConversationChain({
    memory: new BufferMemory({ returnMessages: true, memoryKey: 'history' }),
    prompt: chatPrompt,
    llm: chat,
  })

  const responseA = await chain.call({
    input: '西瓜好吃吗',
  })
  console.log('responseA', responseA)
  const responseB = await chain.call({
    input: '它可以做成什么加工品',
  })
  console.log('responseB', responseB)
  const responseC = await chain.call({
    input: '它容易过期吗',
  })
  console.log('responseC', responseC)
  const responseD = await chain.call({
    input: '它有什么功效',
  })
  console.log('responseD', responseD)
})()

// responseA {
//   response: '许多人认为西瓜非常好吃，特别是在炎热的夏季。西瓜通常甜美可口，肉质鲜嫩多汁，还含有丰富的营养素和水分，对身体非常有益。'
// }
// responseB {
//   response: '西瓜可以制成很多不同的加工品，其中一些有：\n' +
//     '\n' +
//     '1. 西瓜冰：将西瓜冷却后切成冰块状或将西瓜汁冻结成冰块，然后加入一些其他的香料或水果，制成冰爽美味的饮品。\n' +
//     '\n' +
//     '2. 西瓜酱：将西瓜肉捣成细泥，加入糖、柠檬汁等材料，搅拌制成西瓜酱，可以作为面包或烤面包的料理酱。\n' +
//     '\n' +
//     '3. 西瓜糖：用西瓜汁、糖等材料熬制成糖果，口感清甜爽口。\n' +
//     '\n' +
//     '4. 西瓜干：将西瓜切成薄片，加入糖、柠檬汁等材料腌渍，然后晾干或烘干，制成口感鲜美的西瓜干。\n' +
//     '\n' +
//     '5. 西瓜芝士：将西瓜肉捣成细泥，加入芝士制成西瓜芝士，味道浓郁可口，适合搭配面包、糕点等食用。'
// }
// responseC {
//   response: '如果储存得当，新鲜的西瓜通常可以保存到1-2周，但如果储存不当，可能会很快过期。为了让西瓜保持新鲜，这里有一些建议：\n' +
//     '\n' +
//     '1. 保存温度：新鲜的西瓜最好保存在25°C以下的温度下，比如在清凉的地方或者冰箱里。\n' +
//     '\n' +
//     '2. 不要切开：如果您想更长时间地储存西瓜，最好不要提前切开它，因为切开后西瓜容易受到空气和细菌的污染，加速腐败。\n' +
//     '\n' +
//     '3. 箱子和包装：可以将整个西瓜放在纸箱中，用报纸等物品垫稳。也可以用保鲜膜或塑料袋包裹好，放入冰箱内冷藏。\n' +
//     '\n' +
//     '总之，适当的储存可以延长西瓜的保存期限。一旦开始变软或霉变，就代表其已经过期了。'
// }
// responseD {
//   response: '西瓜有许多的营养成分和健康功效，包括：\n' +
//     '\n' +
//     '1. 补充水分：西瓜的主要成分是水，所以它有助于补充身体所需的水分。\n' +
//     '\n' +
//     '2. 改善消化：西瓜含有丰富的纤维质，有助于改善消化系统的功能。\n' +
//     '\n' +
//     '3. 降低血压：西瓜中含有一些能舒张血管的物质，有助于降低血压。\n' +
//     '\n' +
//     '4. 抗氧化：西瓜富含维生素C、β胡萝卜素和茄红素等抗氧化物质，有助于保护细胞免受自由基的损害。\n' +
//     '\n' +
//     '5. 促进睡眠：西瓜中含有一些神经递质素，有助于促进身体放松，帮助入眠。\n' +
//     '\n' +
//     '此外，西瓜还有助于减轻疲劳、缓解热量，调节血糖和胆固醇水平等功效。'
// }