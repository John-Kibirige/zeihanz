const hskThreeGrammar = [
  {
    name: "The complement of result, 好",
    description:
      "The complement of a result follows a verb as in '吃好' and '准备好' indicate that the action is satisfactorily completed. Compare with '我吃完了'(I have finished eating) which only indicates the completion of the action, '我吃好了' means both 'I have finished eating and I have enjoyed the meal'",
    sentenceStructure: "Subject + Verb + 好 + (Object) + 了",
    exampleSentences: [
      {
        example: "今晚的电影小刚已经买好票了。",
        pinyin: "Jīnwǎn de diànyǐng Xiǎo Gāng yǐjīng mǎi hǎo piào le.",
        meaning:
          "Xiao Gang has already bought the tickets for tonight's movie (successfully and properly).",
      },
      {
        example: "饭还没做好，请你等一会儿。",
        pinyin: "Fàn hái méi zuò hǎo, qǐng nǐ děng yīhuìr.",
        meaning: "The meal is not ready yet, please wait a moment.",
      },
      {
        example: "去旅游的东西准备好了吗？",
        pinyin: "Qù lǚyóu de dōngxi zhǔnbèi hǎo le ma?",
        meaning: "Are the things for the trip properly prepared?",
      },
      {
        example: "我还没想好要不要跟你去呢。",
        pinyin: "Wǒ hái méi xiǎng hǎo yào bu yào gēn nǐ qù ne.",
        meaning:
          "I haven't yet decided (thought it through) whether to go with you or not.",
      },
    ],
  },
  {
    name: "The negative structure, 一 ......也/都 + 不/没 ......",
    description:
      "一 + measure word + noun + 也/都 + 不/没 + verb (not at all) indicates complete negation",
    sentenceStructure: "一 + Measure Word + Noun + 也/都 + 不/没 + Verb",
    exampleSentences: [
      {
        example: "我一个苹果也不想吃。",
        pinyin: "Wǒ yī ge píngguǒ yě bù xiǎng chī.",
        meaning: "I don't want to eat even one apple. (Not at all)",
      },
      {
        example: "昨天她一件衣服都没买。",
        pinyin: "Zuótiān tā yī jiàn yīfu dōu méi mǎi.",
        meaning: "She didn't buy even one piece of clothing yesterday.",
      },
      {
        example: "小丽一杯茶也没喝。",
        pinyin: "Xiǎo Lì yī bēi chá yě méi hē.",
        meaning: "Xiao Li didn't drink even one cup of tea.",
      },
      {
        example: "手机，电视，地图，一个也不能少带。",
        pinyin: "Shǒujī, diànshì, dìtú, yī ge yě bù néng shǎo dài.",
        meaning: "Cell phone, TV, map — not even one can be left behind.",
      },
    ],
  },
  {
    name: "The negative structure, 一 ......也/都 + 不/没 ......, measure word used is 一点儿",
    description:
      "Sometimes the '一 + Measure Word' used in the structure '一 + Measure Word + Noun + 也/都 + 不/没 + Verb' is '一点儿'",
    sentenceStructure: "Subject + 一点儿 + Noun + 也/都 + 不/没 + Verb",
    exampleSentences: [
      {
        example: "我一点儿东西也不想吃。",
        pinyin: "Wǒ yīdiǎnr dōngxi yě bù xiǎng chī.",
        meaning: "I don't want to eat anything at all. (not even a little bit)",
      },
      {
        example: "这个星期我很忙，一点儿时间也没有。",
        pinyin: "Zhège xīngqī wǒ hěn máng, yīdiǎnr shíjiān yě méiyǒu.",
        meaning: "I am very busy this week; I have no time at all.",
      },
      {
        example: "今天早上我一点儿咖啡都没喝。",
        pinyin: "Jīntiān zǎoshang wǒ yīdiǎnr kāfēi dōu méi hē.",
        meaning: "I didn't drink any coffee at all this morning.",
      },
      {
        example: "我一点儿钱都没带，所以不能买衣服。",
        pinyin: "Wǒ yīdiǎnr qián dōu méi dài, suǒyǐ bù néng mǎi yīfu.",
        meaning: "I didn't bring any money at all, so I can't buy clothes.",
      },
    ],
  },
  {
    name: "The negative structure, 一 ......也/都 + 不/没 ......, predicate is an adjective",
    description:
      "When the predicate is an adjective, the structure '一点儿也/都 + 不 + adjective' is used to indicate complete negation.",
    sentenceStructure: "Subject + 一点儿 + 也/都 + 不 + Adjective",
    exampleSentences: [
      {
        example: "他一点儿也不累。",
        pinyin: "Tā yīdiǎnr yě bù lèi.",
        meaning: "He is not tired at all.",
      },
      {
        example: "南方一点儿都不冷。",
        pinyin: "Nánfāng yīdiǎnr dōu bù lěng.",
        meaning: "The south is not cold at all.",
      },
      {
        example: "那个地方一点儿也不远。",
        pinyin: "Nàge dìfāng yīdiǎnr yě bù yuǎn.",
        meaning: "That place is not far at all.",
      },
      {
        example: "你怎么一点儿也不着急？",
        pinyin: "Nǐ zěnme yīdiǎnr yě bù zháojí?",
        meaning: "Why are you not worried/anxious at all?",
      },
    ],
  },
  {
    name: "The conjunction, 那",
    description:
      "It is used at the beginning of a sentence to indicate the result obtained or judgement made based on what has been said previously.",
    sentenceStructure: "那 + [Conclusion / Result / Judgement]",
    exampleSentences: [
      {
        example: "A: 我不想去看电影。 B: 那我也不去了。",
        pinyin: "A: Wǒ bù xiǎng qù kàn diànyǐng. B: Nà wǒ yě bù qù le.",
        meaning:
          "A: I don't want to go to the movies. B: Then I won't go either.",
      },
      {
        example: "A: 明天的考试我早就复习好了。 B: 那也不能一直玩儿啊。",
        pinyin:
          "A: Míngtiān de kǎoshì wǒ zǎo jiù fùxí hǎo le. B: Nà yě bù néng  yì zhí wánr a.",
        meaning:
          "A: I already reviewed for tomorrow's exam. B: Even so, you can't keep playing all the time.",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },

  {
    name: "",
    description: "",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "。",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
      {
        example: "",
        pinyin: "",
        meaning: "",
      },
    ],
  },
];

export default hskThreeGrammar;
