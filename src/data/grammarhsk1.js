const hskOneGrammar = [
  {
    name: "The '是' sentence",
    description:
      "The 是 sentence is a determinative sentence with '是', indicating what somebody or something equals or belongs to. The negative sentence is formed by adding the negative adverb '不' before '是'.",
    sentenceStructure: "subject + predicate [(不) 是 + noun/noun phrase]",
    exampleSentences: [
      {
        example: "李月是老师。",
        pinyin: "Lǐ Yuè shì lǎoshī.",
        meaning: "Li Yue is a teacher.",
      },
      {
        example: "我是美国人。",
        pinyin: "Wǒ shì Měiguó rén.",
        meaning: "I am American.",
      },
      {
        example: "我不是老师。",
        pinyin: "Wǒ bù shì lǎoshī.",
        meaning: "I am not a teacher.",
      },
    ],
  },
  {
    name: "Interrogative sentence with, 吗",
    description:
      "The particle '吗' indicates an interrogative mood. When 吗 is added at the end of a declarative sentence, the declarative sentence turns into a question.",
    sentenceStructure: "subject + predicate [verb + noun/noun phrase + 吗？]",
    exampleSentences: [
      {
        example: "你是美国人吗？",
        pinyin: "Nǐ shì Měiguó rén ma?",
        meaning: "Are you American?",
      },
      {
        example: "你是中国人吗？",
        pinyin: "Nǐ shì Zhōngguó rén ma?",
        meaning: "Are you Chinese?",
      },
      {
        example: "你是老师吗？",
        pinyin: "Nǐ shì lǎoshī ma?",
        meaning: "Are you a teacher?",
      },
    ],
  },
  {
    name: "The interrogative pronoun ，谁",
    description:
      "The interrogative pronoun '谁' is used to ask about the name or identity of a person.",
    sentenceStructure:
      "谁 + Verb + Object? | Subject + 谁? | Subject + Verb + 谁?",
    exampleSentences: [
      {
        example: "谁是李月？",
        pinyin: "Shéi shì Lǐ Yuè?",
        meaning: "Who is Li Yue?",
      },
      {
        example: "他是谁？",
        pinyin: "Tā shì shéi?",
        meaning: "Who is he?",
      },
    ],
  },
  {
    name: "The interrogative pronoun, 哪",
    description:
      "The interrogative pronoun '哪' is used to ask 'which' when choosing from a known set of people, objects, or categories. It must be followed by a measure word or a noun.",
    sentenceStructure: "哪 + measure word / noun",
    exampleSentences: [
      {
        example: "哪本书？",
        pinyin: "Nǎ běn shū?",
        meaning: "Which book?",
      },
      {
        example: "哪个人？",
        pinyin: "Nǎ ge rén?",
        meaning: "Which person?",
      },
      {
        example: "你是哪国人？",
        pinyin: "Nǐ shì nǎ guó rén?",
        meaning: "What nationality are you?",
      },
    ],
  },
  {
    name: "The structural particle, 的",
    description:
      "The structure 'noun/pronoun + 的 + noun' indicates possession. When the noun following '的' is a term of kinship or indicates a person, '的' can be omitted.",
    sentenceStructure: "noun/pronoun + 的 + noun",
    exampleSentences: [
      {
        example: "李月是我的老师。",
        pinyin: "Lǐ Yuè shì wǒ de lǎoshī.",
        meaning: "Li Yue is my teacher.",
      },
      {
        example: "这是我的书。",
        pinyin: "Zhè shì wǒ de shū.",
        meaning: "This is my book.",
      },
      {
        example: "他不是我同学，他是我朋友。",
        pinyin: "Tā bù shì wǒ tóngxué, tā shì wǒ péngyou.",
        meaning: "He is not my classmate; he is my friend.",
      },
    ],
  },
  {
    name: "The interrogative particle, 呢 (1)",
    description:
      "It is used after a noun or pronoun, forming a question about the situation mentioned previously. The commonly used sentence pattern is 'A....。B呢? (A ... what about B?).'",
    sentenceStructure: "Statement about A. B + 呢？",
    exampleSentences: [
      {
        example: "我不是老师，我是学生。你呢？",
        pinyin: "Wǒ bù shì lǎoshī, wǒ shì xuésheng. Nǐ ne?",
        meaning: "I am not a teacher, I am a student. What about you?",
      },
      {
        example: "她叫李月。他呢？",
        pinyin: "Tā jiào Lǐ Yuè. Tā ne?",
        meaning: "Her name is Li Yue. What about him?",
      },
      {
        example: "我是美国人。你呢？",
        pinyin: "Wǒ shì Měiguó rén. Nǐ ne?",
        meaning: "I am American. What about you?",
      },
    ],
  },
  {
    name: "The interrogative pronoun, 几",
    description: "It is used to ask about a number, usually less than 10.",
    sentenceStructure: "Subject + Verb + 几 + Measure Word + (Noun)?",
    exampleSentences: [
      {
        example: "你有几个汉语老师？",
        pinyin: "Nǐ yǒu jǐ ge Hànyǔ lǎoshī?",
        meaning: "How many Chinese teachers do you have?",
      },
      {
        example: "李老师家有几口人？",
        pinyin: "Lǐ lǎoshī jiā yǒu jǐ kǒu rén?",
        meaning: "How many people are there in Teacher Li's family?",
      },
      {
        example: "你女儿几岁了？",
        pinyin: "Nǐ nǚ'ér jǐ suì le?",
        meaning: "How old is your daughter?",
      },
    ],
  },
  {
    name: "Indicating a change with, 了",
    description:
      "了 is used at the end of a sentence to indicate a change or the occurrence of a new situation.",
    sentenceStructure: "Subject + Predicate + 了",
    exampleSentences: [
      {
        example: "李老师今年五十岁了。",
        pinyin: "Lǐ lǎoshī jīnnián wǔ shí suì le.",
        meaning:
          "Teacher Li is fifty years old this year. (implying a change — he wasn't fifty before)",
      },
      {
        example: "我朋友的女儿今年四岁了。",
        pinyin: "Wǒ péngyou de nǚ'ér jīnnián sì suì le.",
        meaning:
          "My friend's daughter is four years old this year. (she has turned four)",
      },
      {
        example: "你女儿几岁了？",
        pinyin: "Nǐ nǚ'ér jǐ suì le?",
        meaning:
          "How old is your daughter now? (asking about her current age, implying a change over time)",
      },
    ],
  },
  {
    name: "The interrogative phrase, '多 + 大'",
    description: "It is used to ask about one's age.",
    sentenceStructure: "",
    exampleSentences: [
      {
        example: "你多大？",
        pinyin: "",
        meaning: "",
      },
      {
        example: "你女儿今年多大了？",
        pinyin: "",
        meaning: "",
      },
      {
        example: "李老师多大了？",
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
    ],
  },
];

export default hskOneGrammar;
