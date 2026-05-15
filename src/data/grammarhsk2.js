const hskTwoGrammar = [
  {
    name: "Auxiliary verb, 要",
    description:
      "When used before a verb, it indicates the desire to do something",
    sentenceStructure: "Subject + 要 (Aux) + Predicate",
    exampleSentences: [
      {
        example: "王方要学习汉语",
        pinyin: "Wáng Fāng yào xuéxí Hànyǔ",
        meaning: "Wang Fang wants to study Chinese.",
      },
      {
        example: "我要吃米饭",
        pinyin: "Wǒ yào chī mǐfàn",
        meaning: "I want to eat steamed rice.",
      },
      {
        example: "我们要不要买几个新的椅子",
        pinyin: "Wǒmen yào bú yào mǎi jǐ gè xīn de yǐzi",
        meaning: "Do we want to buy a few new chairs?",
      },
    ],
  },
  {
    name: "Auxiliary verb, 不想",
    description:
      "This is a negative form of 要. It is used before a verb, it indicates the desire not to do something",
    sentenceStructure: "Subject + 不想 (Aux) + Predicate",
    exampleSentences: [
      {
        example: "A:你要吃米饭吗? B:我不想吃米饭",
        pinyin: "A: Nǐ yào chī mǐfàn ma? B: Wǒ bùxiǎng chī mǐfàn",
        meaning: "A: Do you want to eat rice? B: I don't want to eat rice.",
      },
      {
        example: "A: 我要去商店买椅子，你去吗? B: 我不去，我不想买椅子。",
        pinyin:
          "A: Wǒ yào qù shāngdiàn mǎi yǐzi, nǐ qù ma? B: Wǒ bù qù, wǒ bùxiǎng mǎi yǐzi.",
        meaning:
          "A: I'm going to the store to buy a chair, are you coming? B: I'm not going, I don't want to buy a chair.",
      },
    ],
  },
  {
    name: "The Adverb of degree, 最",
    description:
      "It means being the first among things of the same kind or in a certain aspect.",
    sentenceStructure:
      "[最 + Adjective (--est)] or 最 + Verb (do something the most)",
    exampleSentences: [
      {
        example: "大卫的汉语最好",
        pinyin: "Dàwèi de Hànyǔ zuì hǎo",
        meaning: "David's Chinese is the best.",
      },
      {
        example: "我最喜欢的人是我爸爸妈妈",
        pinyin: "Wǒ zuì xǐhuān de rén shì wǒ bàba māma",
        meaning: "The people I like the most are my father and mother.",
      },
      {
        example: "离我家最远的商店要走一小时",
        pinyin: "Lí wǒ jiā zuì yuǎn de shāngdiàn yào zǒu yì xiǎoshí",
        meaning: "The shop furthest from my house takes an hour to walk to.",
      },
      {
        example: "她的眼睛最漂亮",
        pinyin: "Tā de yǎnjing zuì piàoliang",
        meaning: "Her eyes are the most beautiful.",
      },
    ],
  },
  {
    name: "Expression of approximate numbers, 几",
    description:
      "It indicates an indefinite number less than 10, followed by a measure word.",
    sentenceStructure: "几 + measure word + noun",
    exampleSentences: [
      {
        example: "我想买几本书",
        pinyin: "Wǒ xiǎng mǎi jǐ běn shū",
        meaning: "I want to buy a few books.",
      },
      {
        example: "公共汽车上有几个人",
        pinyin: "Gōnggòng qìchē shàng yǒu jǐ gè rén",
        meaning: "There are a few people on the bus.",
      },
      {
        example: "我们要不要几个新的椅子?",
        pinyin: "Wǒmen yào bú yào jǐ gè xīn de yǐzi?",
        meaning: "Do we want a few new chairs?",
      },
    ],
  },
  {
    name: "Expression of approximate numbers (with 十 ), 几",
    description:
      "when used after 十， it indicates a number greater than 10 but less than 20, but when used before 十 it indicates a number greater than 20 but less than 100",
    sentenceStructure:
      "几十 + measure word + noun | 十几 + measure word + noun",
    exampleSentences: [
      {
        example: "我买了十几个苹果。",
        pinyin: "Wǒ mǎile shí jǐ gè píngguǒ.",
        meaning: "I bought a dozen or so apples.",
      },
      {
        example: "教室里有十几本书",
        pinyin: "Jiàoshì lǐ yǒu shí jǐ běn shū",
        meaning: "There are a dozen or so books in the classroom.",
      },
      {
        example: "他家里有几十个学生。",
        pinyin: "Tā jiā lǐ yǒu jǐ shí gè xuésheng.",
        meaning: "There are dozens of students in his home.",
      },
      {
        example: "我爸爸有几十岁？",
        pinyin: "Wǒ bàba yǒu jǐ shí suì?",
        meaning:
          "How many tens of years old is my father? (Asking for approximate age in the decades).",
      },
    ],
  },
  {
    name: "Expression of approximate numbers (below 10), 多",
    description:
      "When the numeral is below 10, '多' (meaning 'more than') is placed after the measure word.",
    sentenceStructure: "Numeral (< 10) + Measure Word + 多 + Noun",
    exampleSentences: [
      {
        example: "三个多星期",
        pinyin: "sān gè duō xīngqī",
        meaning: "More than three weeks.",
      },
      {
        example: "六个多月",
        pinyin: "liù gè duō yuè",
        meaning: "More than six months.",
      },
    ],
  },
  {
    name: "Expression of approximate numbers (above 10), 多",
    description:
      "When the numeral is more than 10, '多' (meaning 'more than') is placed before the measure word.",
    sentenceStructure: "Numeral (> 10) + 多 + Measure Word + Noun",
    exampleSentences: [
      {
        example: "十多个月",
        pinyin: "shí duō gè yuè",
        meaning: "More than ten months.",
      },
      {
        example: "二十多块钱",
        pinyin: "èrshí duō kuài qián",
        meaning: "More than twenty yuan.",
      },
      {
        example: "八十多个人",
        pinyin: "bāshí duō gè rén",
        meaning: "More than eighty people.",
      },
    ],
  },
  {
    name: "Questions using, 是不是",
    description:
      "If one raises a question and is somehow certain about a fact or situation, they can use this kind of question to confirm their guess. '是不是'(literally 'yes or no').",
    sentenceStructure:
      "subject + 是不是 + Predicate + (Object)? | 是是不是 + Subject + Predicate + (Object)? | Subject + Predicate + Object + 是不是？",
    exampleSentences: [
      {
        example: "你很少生病，是不是喜欢运动？",
        pinyin: "Nǐ hěn shǎo shēngbìng, shì bú shì xǐhuān yùndòng?",
        meaning: "You rarely get sick; is it because you like sports?",
      },
      {
        example: "是不是明天爸爸休息？",
        pinyin: "Shì bú shì míngtiān bàba xiūxi?",
        meaning: "Is it true that dad is off work tomorrow?",
      },
      {
        example: "我们星期一去北京，是不是",
        pinyin: "Wǒmen xīngqī yī qù Běijīng, shì bú shì?",
        meaning: "We are going to Beijing on Monday, right?",
      },
    ],
  },
  {
    name: "The pronoun, 每",
    description:
      "It is used before a measure word, indicating each or every individual or group in the whole.",
    sentenceStructure: "每 + Measure Word + Noun",
    exampleSentences: [
      {
        example: "山姆每年都去中国旅游。",
        pinyin: "Shānmǔ měi nián dōu qù Zhōngguó lǚyóu.",
        meaning: "Sam goes to China to travel every year.",
      },
      {
        example: "你每个星期六都工作吗?",
        pinyin: "Nǐ měi gè xīngqīliù dōu gōngzuò ma?",
        meaning: "Do you work every Saturday?",
      },
      {
        example: "我每天六点起床。",
        pinyin: "Wǒ měitiān liù diǎn qǐchuáng.",
        meaning: "I get up at six o'clock every day.",
      },
    ],
  },
  {
    name: "The interrogative pronoun, 多",
    description:
      "It is used before an adjective, asking about the degree of something. A specific quantity should be given to answer the question.",
    sentenceStructure: "Subject + 多 + Adjective",
    exampleSentences: [
      {
        example: "A: 你多大？ B: 我 16 岁.",
        pinyin: "A: Nǐ duō dà? B: Wǒ shíliù suì.",
        meaning: "A: How old are you? B: I am 16 years old.",
      },
      {
        example: "A: 你多高?, B: 一米八几.",
        pinyin: "A: Nǐ duō gāo? B: Yī mǐ bā jǐ.",
        meaning: "A: How tall are you? B: One meter eighty-something.",
      },
    ],
  },
  {
    name: "The Phrase, 的",
    description:
      "'的' can be used after a pronoun, an adjective or a verb to form a phrase which is equivalent to a nominal phrase with its headword omitted",
    sentenceStructure: "Pronoun/Adj/Verb + 的",
    exampleSentences: [
      {
        example: "这本书不是我的",
        pinyin: "Zhè běn shū bú shì wǒ de",
        meaning: "This book is not mine.",
      },
      {
        example: "这个杯子是昨天买的",
        pinyin: "Zhè gè bēizi shì zuótiān mǎi de",
        meaning: "This cup was bought yesterday.",
      },
      {
        example: "这块手表是你的吗？",
        pinyin: "Zhè kuài shǒubiǎo shì nǐ de ma?",
        meaning: "Is this watch yours?",
      },
    ],
  },
  {
    name: "The numerical classifier, 一下",
    description:
      "It is used after a verb to indicate a short action, similar to the reduplicative form (AA) of a verb. The object of the verb can be omitted",
    sentenceStructure: "Subject + V + 一下 + Object",
    exampleSentences: [
      {
        example: "我看一下。",
        pinyin: "Wǒ kàn yíxià.",
        meaning: "Let me have a look.",
      },
      {
        example: "你休息一下吧",
        pinyin: "Nǐ xiūxi yíxià ba",
        meaning: "You should take a short rest.",
      },
      {
        example: "我问一下老师",
        pinyin: "Wǒ wèn yíxià lǎoshī",
        meaning: "I'll ask the teacher real quick.",
      },
    ],
  },
  {
    name: "The model adverb, 真",
    description: "It expresses an exclamatory mood, meaning 'really, indeed'",
    sentenceStructure: "真 + adjective",
    exampleSentences: [
      {
        example: "你真好！",
        pinyin: "Nǐ zhēn hǎo!",
        meaning: "You are really nice!",
      },
      {
        example: "今天天气真好",
        pinyin: "Jīntiān tiānqì zhēn hǎo",
        meaning: "The weather is really good today.",
      },
      {
        example: "你女儿的房间真漂亮",
        pinyin: "Nǐ nǚ'ér de fángjiān zhēn piàoliang",
        meaning: "Your daughter's room is really beautiful.",
      },
    ],
  },
  {
    name: "The structure emphasizing the agent of an action, 是......的",
    description:
      "When the occurrence of an action is known, '是......的' can be used to emphasize the agent of the action",
    sentenceStructure: "Object + 是 + subject(who) + Verb + 的",
    exampleSentences: [
      {
        example: "这本书是我买的",
        pinyin: "Zhè běn shū shì wǒ mǎi de",
        meaning: "It was I who bought this book.",
      },
      {
        example: "晚饭是妈妈做的",
        pinyin: "Wǎnfàn shì māma zuò de",
        meaning: "Dinner was made by mom.",
      },
      {
        example: "电话是谁打的？",
        pinyin: "Diànhuà shì shuí dǎ de?",
        meaning: "Who was the one who made the phone call?",
      },
    ],
  },
  {
    name: "The negative structure emphasizing what did NOT happen, 不是......的",
    description:
      "When the occurrence of an action is known, '不是......的' is used to deny or negate the agent, time, place, or manner of the action. It emphasizes what is NOT true about the known event.",
    sentenceStructure: "Object + 不 + 是 + subject(who) + Verb + 的",
    exampleSentences: [
      {
        example: "这个汉字不是大卫写的",
        pinyin: "Zhè gè Hànzì bú shì Dàwèi xiě de",
        meaning: "This Chinese character was not written by David.",
      },
      {
        example: "苹果不是王方买的",
        pinyin: "Píngguǒ bú shì Wáng Fāng mǎi de",
        meaning: "The apples were not bought by Wang Fang.",
      },
      {
        example: "电话不是我接的",
        pinyin: "Diànhuà bú shì wǒ jiē de",
        meaning: "I wasn't the one who answered the phone.",
      },
    ],
  },
  {
    name: "Indicating time, .....的时候",
    description:
      "Used to specify a precise point in time (such as a clock time, age, or date) when an action occurs or a state exists. The number + classifier phrase defines the exact time reference.",
    sentenceStructure: "number + classifier + 的时候",
    exampleSentences: [
      {
        example: "今天早上八点的时候我没在家。",
        pinyin: "Jīntiān zǎoshang bā diǎn de shíhou wǒ méi zài jiā.",
        meaning: "I wasn't at home at eight o'clock this morning.",
      },
      {
        example: "我十八岁的时候一个人来到北京。",
        pinyin: "Wǒ shíbā suì de shíhou yī gè rén lái dào Běijīng.",
        meaning: "I came to Beijing alone when I was eighteen years old.",
      },
      {
        example: "我十一岁的时候开始踢足球。",
        pinyin: "Wǒ shíyī suì de shíhou kāishǐ tī zúqiú.",
        meaning: "I started playing football when I was eleven years old.",
      },
    ],
  },
  {
    name: "Indicating time (after a verb), .....的时候 ",
    description:
      "Used to link two actions that happen at the same time or sequentially. 'V + 的时候' sets the time background (when the first action occurs), followed by the main action or situation.",
    sentenceStructure: "V + 的时候",
    exampleSentences: [
      {
        example: "我睡觉的时候，我妈妈在做饭。",
        pinyin: "Wǒ shuìjiào de shíhou, wǒ māma zài zuòfàn.",
        meaning: "While I was sleeping, my mom was cooking.",
      },
      {
        example: "麦克到学校的时候下雨了。",
        pinyin: "Màikè dào xuéxiào de shíhou xiàyǔ le.",
        meaning: "When Mike arrived at school, it started raining.",
      },
      {
        example: "王老师工作的时候，她丈夫开车去医院了。",
        pinyin:
          "Wáng lǎoshī gōngzuò de shíhou, tā zhàngfu kāichē qù yīyuàn le.",
        meaning:
          "While Teacher Wang was working, her husband drove to the hospital.",
      },
    ],
  },
  {
    name: "The adverb of time, 已经",
    description:
      "It indicates that an action has been completed or having reached a certain degree.",
    sentenceStructure: "Subject + 已经 + Verb/Adjective + (了)",
    exampleSentences: [
      {
        example: "王老师已经回家了。",
        pinyin: "Wáng lǎoshī yǐjīng huí jiā le.",
        meaning: "Teacher Wang has already gone home.",
      },
      {
        example: "我的身体已经好了。",
        pinyin: "Wǒ de shēntǐ yǐjīng hǎo le.",
        meaning: "My health has already recovered / I am already better.",
      },
      {
        example: "足球我已经踢了十年了。",
        pinyin: "Zúqiú wǒ yǐjīng tīle shí nián le.",
        meaning: "I have already been playing football for ten years.",
      },
    ],
  },
  {
    name: "The adverb, 就",
    description:
      "The structure '就 + verb' indicates a conclusion or a resolution made on the basis of what's been mentioned previously",
    sentenceStructure: "(Condition), 就 + Verb + (Suggestions/Result)",
    exampleSentences: [
      {
        example: "你不想去, 就在家休息吧。",
        pinyin: "Nǐ bùxiǎng qù, jiù zài jiā xiūxi ba.",
        meaning: "If you don't want to go, then just rest at home.",
      },
      {
        example: "这儿的咖啡不错, 就喝咖啡吧。",
        pinyin: "Zhèr de kāfēi búcuò, jiù hē kāfēi ba.",
        meaning: "The coffee here is not bad, let's just drink coffee then.",
      },
      {
        example: "就做你爱吃的鱼吧。",
        pinyin: "Jiù zuò nǐ ài chī de yú ba.",
        meaning: "Let's just make the fish that you love to eat (then).",
      },
    ],
  },
  {
    name: "The modal adverb, 还",
    description:
      "The structure '还 + Adj' means that something is passable or acceptable.",
    sentenceStructure: "还 + Adjective",
    exampleSentences: [
      {
        example: "A: 你身体怎么样? B: 还好。",
        pinyin: "A: Nǐ shēntǐ zěnmeyàng? B: Hái hǎo.",
        meaning: "A: How is your health? B: It's okay / Pretty good.",
      },
      {
        example: "A: 这件衣服大吗? B: 还行, 不太大。",
        pinyin: "A: Zhè jiàn yīfu dà ma? B: Hái xíng, bú tài dà.",
        meaning:
          "A: Is this piece of clothing big? B: It's alright, not too big.",
      },
      {
        example: "A: 昨天的考试怎么样？ B: 我觉得听和说还可以，读和写不好。",
        pinyin:
          "A: Zuótiān de kǎoshì zěnmeyàng? B: Wǒ juéde tīng hé shuō hái kěyǐ, dú hé xiě bù hǎo.",
        meaning:
          "A: How was yesterday's exam? B: I think my listening and speaking were okay, but my reading and writing were not good.",
      },
    ],
  },
  {
    name: "The adverbial modifier, 有点儿",
    description:
      "The structure '有点儿 + Adjective / Verb' indicates the speaker's negative mood or complaint",
    sentenceStructure: "Subject + 有点儿 + Adjective / Verb",
    exampleSentences: [
      {
        example: "今天天气有点儿冷。",
        pinyin: "Jīntiān tiānqì yǒudiǎnr lěng.",
        meaning: "Today's weather is a little too cold.",
      },
      {
        example: "我昨天有点儿累。",
        pinyin: "Wǒ zuótiān yǒudiǎnr lèi.",
        meaning: "I was a bit tired yesterday.",
      },
      {
        example: "这件衣服有点儿大。",
        pinyin: "Zhè jiàn yīfu yǒudiǎnr dà.",
        meaning: "This piece of clothing is a little too big.",
      },
    ],
  },
  {
    name: "The interrogative pronoun, 怎么",
    description:
      "The structure '怎么 + verb/adjective' is used to ask about the reason for something, indicating surprise or astonishment",
    sentenceStructure: "Subject + Predicate (怎么 + verb/adjective)",
    exampleSentences: [
      {
        example: "你怎么不高兴？",
        pinyin: "Nǐ zěnme bù gāoxìng?",
        meaning: "Why are you unhappy? (expressing surprise or concern)",
      },
      {
        example: "今天怎么这么热？",
        pinyin: "Jīntiān zěnme zhème rè?",
        meaning: "Why is it so hot today? (expressing unexpectedness)",
      },
      {
        example: "昨天你们怎么都没去打篮球？",
        pinyin: "Zuótiān nǐmen zěnme dōu méi qù dǎ lánqiú?",
        meaning:
          "Why didn't you all go play basketball yesterday? (expressing surprise at the absence)",
      },
    ],
  },
  {
    name: "Reduplication of measure words",
    description:
      "When a measure word is reduplicated, it means 'every/each', emphasizing that a specific feature is shared by every member in a certain group usually followed by '都'.",
    sentenceStructure: "Subject + AA + 都 .....",
    exampleSentences: [
      {
        example: "同学们个个都很高兴。",
        pinyin: "Tóngxuémen gè gè dōu hěn gāoxìng.",
        meaning: "Every single student is very happy.",
      },
      {
        example: "这个商店的衣服件件都很漂亮。",
        pinyin: "Zhège shāngdiàn de yīfu jiàn jiàn dōu hěn piàoliang.",
        meaning: "Every piece of clothing in this store is beautiful.",
      },
      {
        example: "这个星期我天天都吃羊肉。",
        pinyin: "Zhège xīngqī wǒ tiān tiān dōu chī yángròu.",
        meaning: "I ate mutton every single day this week.",
      },
    ],
  },
  {
    name: "The pair of conjunctions, 因为.....所以.....",
    description:
      "The two conjunctions are used to connect two clauses in a causative relation, the first clause being the cause and the second being the effect. One can use both or one of them in a sentence.",
    sentenceStructure: "因为....., 所以.....",
    exampleSentences: [
      {
        example: "因为她生病了，所以没去学校。",
        pinyin: "Yīnwèi tā shēngbìng le, suǒyǐ méi qù xuéxiào.",
        meaning: "She didn't go to school because she was sick.",
      },
      {
        example: "因为她每天跑步，所以身体很好。",
        pinyin: "Yīnwèi tā měitiān pǎobù, suǒyǐ shēntǐ hěn hǎo.",
        meaning: "Because she runs every day, her health is very good.",
      },
      {
        example: "因为昨天下雨，所以我们都没去打篮球。",
        pinyin: "Yīnwèi zuótiān xiàyǔ, suǒyǐ wǒmen dōu méi qù dǎ lánqiú.",
        meaning:
          "Because it rained yesterday, none of us went to play basketball.",
      },
    ],
  },
  {
    name: "The modal adverb, 还 (2)",
    description:
      "It indicates the continuation of an action or a state. Its negative form is '还没' (not '没还').",
    sentenceStructure: "Subject + 还 + Verb + (Object)",
    exampleSentences: [
      {
        example: "八点了，他还在睡觉。",
        pinyin: "Bā diǎn le, tā hái zài shuìjiào.",
        meaning: "It's eight o'clock and he is still sleeping.",
      },
      {
        example: "你怎么还没吃饭？",
        pinyin: "Nǐ zěnme hái méi chīfàn?",
        meaning: "Why haven't you eaten yet?",
      },
      {
        example: "他还在教室学习呢。",
        pinyin: "Tā hái zài jiàoshì xuéxí ne.",
        meaning: "He is still studying in the classroom.",
      },
    ],
  },
  {
    name: "The adverb of time, 就",
    description:
      "It is used for emphasis, indicating that the speaker thinks something happened early or went fast and well.",
    sentenceStructure: "Subject + 就 .... 了",
    exampleSentences: [
      {
        example: "同学们七点半就来教室了。",
        pinyin: "Tóngxuémen qī diǎn bàn jiù lái jiàoshì le.",
        meaning: "The classmates came to the classroom as early as 7:30.",
      },
      {
        example: "我坐飞机一个半小时就到北京了。",
        pinyin: "Wǒ zuò fēijī yī ge bàn xiǎoshí jiù dào Běijīng le.",
        meaning:
          "It took me only one and a half hours by plane to arrive in Beijing.",
      },
      {
        example: "我二十分钟就到。",
        pinyin: "Wǒ èr shí fēnzhōng jiù dào.",
        meaning: "I will arrive in just twenty minutes.",
      },
    ],
  },
  {
    name: "The verb, 离",
    description: "It indicates the distance from a place, moment or purpose.",
    sentenceStructure: "A 离 B .......",
    exampleSentences: [
      {
        example: "我家离学校很远。",
        pinyin: "Wǒ jiā lí xuéxiào hěn yuǎn.",
        meaning: "My home is far from the school.",
      },
      {
        example: "学校离机场有20多公里。",
        pinyin: "Xuéxiào lí jīchǎng yǒu èr shí duō gōnglǐ.",
        meaning: "The school is over 20 kilometers away from the airport.",
      },
      {
        example: "离我的生日还有一个多星期呢！",
        pinyin: "Lí wǒ de shēngrì hái yǒu yī ge duō xīngqī ne!",
        meaning: "There is still more than a week until my birthday!",
      },
    ],
  },
  {
    name: "The modal particle, 呢",
    description:
      "It is used at the end of a declarative sentence or after a sentence with an adjectival or verbal phrase to confirm a fact or convince someone in an exaggerative mood.",
    sentenceStructure: "Statement + 呢",
    exampleSentences: [
      {
        example: "八点上课，时间还早呢。",
        pinyin: "Bā diǎn shàngkè, shíjiān hái zǎo ne.",
        meaning: "Class starts at eight, it's still early (so don't worry).",
      },
      {
        example: "医院离我们这儿还远呢。",
        pinyin: "Yīyuàn lí wǒmen zhèr hái yuǎn ne.",
        meaning:
          "The hospital is still far from here (so we can't get there quickly).",
      },
      {
        example: "坐公共汽车要一个多小时呢！",
        pinyin: "Zuò gōnggòng qìchē yào yī ge duō xiǎoshí ne!",
        meaning: "Taking the bus takes over an hour! (Isn't that long?)",
      },
    ],
  },
  {
    name: "The interrogative sentence, ......好吗",
    description: "It is used to ask about another person's idea or opinion.",
    sentenceStructure: "[Suggestion / Request], 好吗？",
    exampleSentences: [
      {
        example: "我们一起去吃饭，好吗？",
        pinyin: "Wǒmen yīqǐ qù chīfàn, hǎo ma?",
        meaning: "Let's go eat together, okay?",
      },
      {
        example: "你明天下午给我打电话，好吗？",
        pinyin: "Nǐ míngtiān xiàwǔ gěi wǒ dǎ diànhuà, hǎo ma?",
        meaning: "You call me tomorrow afternoon, alright?",
      },
      {
        example: "我们下午去看电影，好吗？",
        pinyin: "Wǒmen xiàwǔ qù kàn diànyǐng, hǎo ma?",
        meaning: "Let's go watch a movie in the afternoon, okay?",
      },
    ],
  },
  {
    name: "The adverb, 再",
    description:
      "It indicates the repetition or continuation of an action or a state. It can also indicate that an action will happen under certain circumstance.",
    sentenceStructure: "Subject + predicate [再 + V ( + O)]",
    exampleSentences: [
      {
        example: "你再看看这本书吧。",
        pinyin: "Nǐ zài kàn kàn zhè běn shū ba.",
        meaning: "Take another look at this book.",
      },
      {
        example: "你明天再给我打电话吧。",
        pinyin: "Nǐ míngtiān zài gěi wǒ dǎ diànhuà ba.",
        meaning: "Call me again tomorrow.",
      },
      {
        example: "你让我想想再告诉你。",
        pinyin: "Nǐ ràng wǒ xiǎng xiǎng zài gàosu nǐ.",
        meaning: "Let me think about it first, then I'll tell you.",
      },
    ],
  },
  {
    name: "Pivotal sentences",
    description:
      "The predicate of a pivotal sentence is made up of two verbal phrases, the object of the first verb being the subject of the second. The first verb is often a causative verb, such as 请(to invite), 让 (to let),  叫(to ask)",
    sentenceStructure: "subject + V + O/S + predicate",
    exampleSentences: [
      {
        example: "我请你吃饭。",
        pinyin: "Wǒ qǐng nǐ chīfàn.",
        meaning: "I invite you to eat a meal. | my treat",
      },
      {
        example: "你让我再想想。",
        pinyin: "Nǐ ràng wǒ zài xiǎng xiǎng.",
        meaning: "You let me think about it some more.",
      },
      {
        example: "我叫人去看看。",
        pinyin: "Wǒ jiào rén qù kàn kàn.",
        meaning: "I'll ask someone to go take a look.",
      },
    ],
  },
  {
    name: "Complement of result",
    description:
      "Some verbs or adjectives can be used after a verb to add remarks about the result of an action. They are called complements of result.",
    sentenceStructure: "subject + predicate [verb + complement + object]",
    exampleSentences: [
      {
        example: "我看见你的女朋友了。",
        pinyin: "Wǒ kànjiàn nǐ de nǚpéngyou le.",
        meaning: "I saw your girlfriend. (look + see = successfully saw)",
      },
      {
        example: "我听懂今天的汉语课了。",
        pinyin: "Wǒ tīng dǒng jīntiān de Hànyǔ kè le.",
        meaning:
          "I understood today's Chinese lesson. (listen + understand = comprehended)",
      },
      {
        example: "我做好吃了。",
        pinyin: "Wǒ zuò hǎo chī le.",
        meaning:
          "I finished cooking and am ready to eat. (make + good/completed = finished making)",
      },
      {
        example: "大卫找到工作了。",
        pinyin: "Dàwèi zhǎo dào gōngzuò le.",
        meaning: "David found a job. (search + arrive = successfully found)",
      },
    ],
  },
  {
    name: "Negative form of complement of result",
    description:
      "'没(有)' is added before the verb to form the negative of a complement of result, in which case '了' cannot appear at the end of the sentence.",
    sentenceStructure:
      "subject + predicate [没(有) + verb + complement + object]",
    exampleSentences: [
      {
        example: "我没有看见你的女朋友。",
        pinyin: "Wǒ méiyǒu kànjiàn nǐ de nǚpéngyou.",
        meaning: "I did not see your girlfriend.",
      },
      {
        example: "我没听懂他说的话。",
        pinyin: "Wǒ méi tīng dǒng tā shuō de huà.",
        meaning: "I did not understand what he said.",
      },
      {
        example: "我没做完考试题。",
        pinyin: "Wǒ méi zuò wán kǎoshì tí.",
        meaning: "I did not finish the exam questions.",
      },
    ],
  },
  {
    name: "Forming a question with complement of result.",
    description:
      "To form a question, '(了) 没有' is often added at the end of the sentence.",
    sentenceStructure:
      "subject + predicate [verb + complement of result + object + (了) 没有？]",
    exampleSentences: [
      {
        example: "你看见我的女朋友了没有？",
        pinyin: "Nǐ kànjiàn wǒ de nǚpéngyou le méiyǒu?",
        meaning: "Have you seen my girlfriend?",
      },
      {
        example: "你听懂他说的话没有？",
        pinyin: "Nǐ tīng dǒng tā shuō de huà méiyǒu?",
        meaning: "Did you understand what he said?",
      },
      {
        example: "你都做完考试题了没有？",
        pinyin: "Nǐ dōu zuò wán kǎoshì tí le méiyǒu?",
        meaning: "Have you finished all the exam questions?",
      },
    ],
  },
  {
    name: "The preposition, 从",
    description:
      "The preposition '从' introduces the starting point of a period of time, a distance, a process or a sequence, often used together with '到'.",
    sentenceStructure: "从 + A + 到 + B ........",
    exampleSentences: [
      {
        example: "从北京到上海要坐几个小时的飞机？",
        pinyin: "Cóng Běijīng dào Shànghǎi yào zuò jǐ ge xiǎoshí de fēijī?",
        meaning:
          "How many hours by plane does it take from Beijing to Shanghai?",
      },
      {
        example: "从老人到孩子都喜欢吃苹果。",
        pinyin: "Cóng lǎorén dào háizi dōu xǐhuan chī píngguǒ.",
        meaning:
          "From the elderly to the children, everyone likes to eat apples.",
      },
      {
        example: "从下个星期开始上班。",
        pinyin: "Cóng xià ge xīngqī kāishǐ shàngbān.",
        meaning: "Starting from next week, (I/we) begin work.",
      },
    ],
  },
  {
    name: "Indicating order, 第~",
    description:
      "It is often used before a numeral-measure-word phrase to introduce order.",
    sentenceStructure: "第 + number + classifier + noun",
    exampleSentences: [
      {
        example: "第一本书",
        pinyin: "dì yī běn shū",
        meaning: "the first book",
      },
      {
        example: "第二个工作",
        pinyin: "dì èr ge gōngzuò",
        meaning: "the second job",
      },
      {
        example: "第一次跳舞",
        pinyin: "dì yī cì tiàowǔ",
        meaning: "the first time dancing",
      },
    ],
  },
  {
    name: "The imperative sentence, 不要.....了/别.....了",
    description:
      "The sentence structure is used to dissuade or forbid somebody from doing something",
    sentenceStructure:
      "不要 + verb (+ object) + 了 | 别 + verb (+ object) + 了",
    exampleSentences: [
      {
        example: "不要玩手机了。",
        pinyin: "Bùyào wán shǒujī le.",
        meaning: "Stop playing with your phone.",
      },
      {
        example: "不要做饭了。",
        pinyin: "Bùyào zuòfàn le.",
        meaning: "Stop cooking.",
      },
      {
        example: "不要看电视了。",
        pinyin: "Bùyào kàn diànshì le.",
        meaning: "Stop watching TV.",
      },
      {
        example: "别睡觉了。",
        pinyin: "Bié shuìjiào le.",
        meaning: "Stop sleeping. / Don't sleep anymore.",
      },
      {
        example: "别看书了。",
        pinyin: "Bié kàn shū le.",
        meaning: "Stop reading.",
      },
      {
        example: "别看报纸了。",
        pinyin: "Bié kàn bàozhǐ le.",
        meaning: "Stop reading the newspaper.",
      },
    ],
  },
  {
    name: "The preposition, 对",
    description:
      "It can indicate a subject-target relation between people or things.",
    sentenceStructure: "Subject + 对 + Target + Verb / Adjective",
    exampleSentences: [
      {
        example: "跑步对身体很好。",
        pinyin: "Pǎobù duì shēntǐ hěn hǎo.",
        meaning: "Running is very good for the body.",
      },
      {
        example: "老师对学生非常好。",
        pinyin: "Lǎoshī duì xuésheng fēicháng hǎo.",
        meaning: "The teacher is very good to the students.",
      },
      {
        example: "看电视对学汉语有帮助。",
        pinyin: "Kàn diànshì duì xué Hànyǔ yǒu bāngzhù.",
        meaning: "Watching TV is helpful for learning Chinese.",
      },
    ],
  },
  {
    name: "A verb (phrase) used as an attribute modifier",
    description:
      "When a verb or verb phrase is used as an attribute modifier, '的' should be put between the modifier and the word modified.",
    sentenceStructure: "attribute modifier + 的 + word modified",
    exampleSentences: [
      {
        example: "新买的自行车",
        pinyin: "xīn mǎi de zìxíngchē",
        meaning: "the newly bought bicycle",
      },
      {
        example: "我妈妈做的饭",
        pinyin: "wǒ māma zuò de fàn",
        meaning: "the meal that my mom cooked",
      },
      {
        example: "和你一起唱歌的人",
        pinyin: "hé nǐ yīqǐ chànggē de rén",
        meaning: "the person who sings together with you",
      },
    ],
  },
  {
    name: "The '比' sentence (1)",
    description:
      "It is a sentence using '比' to make a comparison. The predicate of the sentence can be an adjective. 'A 没有 B' is the negative form of '比' sentence.",
    sentenceStructure: "A + 比 + B + adjective | A + 没有 + B + adjective",
    exampleSentences: [
      {
        example: "哥哥比姐姐高",
        pinyin: "Gēge bǐ jiějie gāo",
        meaning: "Older brother is taller than older sister.",
      },
      {
        example: "今天比昨天热",
        pinyin: "Jīntiān bǐ zuótiān rè",
        meaning: "Today is hotter than yesterday.",
      },
      {
        example: "今天的西瓜比昨天便宜。",
        pinyin: "Jīntiān de xīguā bǐ zuótiān piányi.",
        meaning: "Today's watermelon is cheaper than yesterday's.",
      },
      {
        example: "哥哥没有弟弟高",
        pinyin: "Gēge méiyǒu dìdi gāo",
        meaning: "Older brother is not as tall as younger brother.",
      },
      {
        example: "今天没有昨天热",
        pinyin: "Jīntiān méiyǒu zuótiān rè",
        meaning: "Today is not as hot as yesterday.",
      },
      {
        example: "西瓜没有苹果便宜",
        pinyin: "Xīguā méiyǒu píngguǒ piányi",
        meaning: "Watermelon is not as cheap as apples.",
      },
    ],
  },
  {
    name: "The '比' sentence (1) with number modifier",
    description:
      "When describing the difference between things, a specific number is used to specify the difference, '一点儿' or '一些' indicates the difference is slight, and '多' or '得多' indicates the difference is significant.",
    sentenceStructure: "A + 比 + B + Adjective + Number Modifier",
    exampleSentences: [
      {
        example: "西瓜比苹果贵两块钱",
        pinyin: "Xīguā bǐ píngguǒ guì liǎng kuài qián",
        meaning: "Watermelon is two yuan more expensive than apples.",
      },
      {
        example: "我的学习比她好一点儿",
        pinyin: "Wǒ de xuéxí bǐ tā hǎo yīdiǎnr",
        meaning: "My studies are a little bit better than hers.",
      },
      {
        example: "今天比昨天热得多",
        pinyin: "Jīntiān bǐ zuótiān rè de duō",
        meaning: "Today is much hotter than yesterday.",
      },
      {
        example: "他比我们老师小两岁",
        pinyin: "Tā bǐ wǒmen lǎoshī xiǎo liǎng suì",
        meaning: "He is two years younger than our teacher.",
      },
    ],
  },
  {
    name: "The auxiliary verb, 可能",
    description:
      "It means maybe indicating an estimation. It can be used before a verb or subject of a sentence.",
    sentenceStructure: "Subject + 可能 + Verb / 可能 + Subject + Verb",
    exampleSentences: [
      {
        example: "他可能早就知道这件事情了。",
        pinyin: "Tā kěnéng zǎo jiù zhīdào zhè jiàn shìqing le.",
        meaning: "He might have known about this matter long ago.",
      },
      {
        example: "可能我明天不来上课了。",
        pinyin: "Kěnéng wǒ míngtiān bù lái shàngkè le.",
        meaning: "Probably I won't come to class tomorrow.",
      },
      {
        example: "你可能不认识她。",
        pinyin: "Nǐ kěnéng bù rènshi tā.",
        meaning: "You probably don't know her.",
      },
    ],
  },
  {
    name: "Complement of state",
    description:
      "A complement of state describes or evaluates the result, degree or state of an action. The structural particle '得' is often used to introduce the state after a verb.",
    sentenceStructure: "Subject + predicate (verb + 得 + adjective)",
    exampleSentences: [
      {
        example: "他说得很好。",
        pinyin: "Tā shuō de hěn hǎo.",
        meaning: "He speaks very well.",
      },
      {
        example: "我起得很早。",
        pinyin: "Wǒ qǐ de hěn zǎo.",
        meaning: "I get up very early.",
      },
      {
        example: "我睡得也早。",
        pinyin: "Wǒ shuì de yě zǎo.",
        meaning: "I also go to sleep early.",
      },
    ],
  },
  {
    name: "Complement of state: verb takes an object",
    description:
      "If the verb takes an object, the object should be put before the verb, or the verb be reduplicated.",
    sentenceStructure:
      "Subject + predicate [(verb +) O + verb + 得 + adjective]",
    exampleSentences: [
      {
        example: "他说汉语说得很好。",
        pinyin: "Tā shuō Hànyǔ shuō de hěn hǎo.",
        meaning: "He speaks Chinese very well.",
      },
      {
        example: "我写汉字写得很好。",
        pinyin: "Wǒ xiě Hànzì xiě de hěn hǎo.",
        meaning: "I write Chinese characters very well.",
      },
      {
        example: "姐姐唱歌唱得不错。",
        pinyin: "Jiějie chànggē chàng de bú cuò.",
        meaning: "Older sister sings pretty well.",
      },
    ],
  },
  {
    name: "Complement of state: negative form",
    description:
      "In the negative form, the negative word should be put after the structural particle '得'.",
    sentenceStructure:
      "Subject + predicate (verb + 得 + 不 + adjective) | Subject + predicate [(verb +) O + verb + 得 + 不 + adjective]",
    exampleSentences: [
      {
        example: "他说得不好。",
        pinyin: "Tā shuō de bù hǎo.",
        meaning: "He doesn't speak well.",
      },
      {
        example: "我起得不早。",
        pinyin: "Wǒ qǐ de bù zǎo.",
        meaning: "I don't get up early.",
      },
      {
        example: "我住得不远。",
        pinyin: "Wǒ zhù de bù yuǎn.",
        meaning: "I don't live far.",
      },
      {
        example: "他说汉语说得不好。",
        pinyin: "Tā shuō Hànyǔ shuō de bù hǎo.",
        meaning: "He doesn't speak Chinese well.",
      },
      {
        example: "他写汉字写得不好。",
        pinyin: "Tā xiě Hànzì xiě de bù hǎo.",
        meaning: "He doesn't write Chinese characters well.",
      },
      {
        example: "姐姐唱歌唱得不太好。",
        pinyin: "Jiějie chànggē chàng de bù tài hǎo.",
        meaning: "Older sister doesn't sing very well.",
      },
    ],
  },
  {
    name: "Complement of state: interrogative form",
    description:
      "In the interrogative form, '得' is followed by the structure 'adjective + 不 + adjective', forming an affirmative-negative sentence.",
    sentenceStructure:
      "Subject + predicate (verb + 得 + adjective + 不 + adjective)",
    exampleSentences: [
      {
        example: "你说得好不好？",
        pinyin: "Nǐ shuō de hǎo bù hǎo?",
        meaning: "Do you speak well or not?",
      },
      {
        example: "姐姐起得早不早？",
        pinyin: "Jiějie qǐ de zǎo bù zǎo?",
        meaning: "Does older sister get up early or not?",
      },
      {
        example: "你住得远不远？",
        pinyin: "Nǐ zhù de yuǎn bù yuǎn?",
        meaning: "Do you live far or not?",
      },
    ],
  },
  {
    name: "The '比' sentence (2)",
    description:
      "If a verb takes a complement of state, '比' can be put before the verb or the complement.",
    sentenceStructure:
      "A + 比 + B + (verb + 得 + adjective) | A + (verb + 得) + 比 + B + adjective",
    exampleSentences: [
      {
        example: "他比我学得好。",
        pinyin: "Tā bǐ wǒ xué de hǎo.",
        meaning: "He studies better than me.",
      },
      {
        example: "姐姐比我跑得快。",
        pinyin: "Jiějie bǐ wǒ pǎo de kuài.",
        meaning: "Older sister runs faster than me.",
      },
      {
        example: "我妻子比我做得好。",
        pinyin: "Wǒ qīzi bǐ wǒ zuò de hǎo.",
        meaning: "My wife does it better than me.",
      },
      {
        example: "她学得比我好。",
        pinyin: "Tā xué de bǐ wǒ hǎo.",
        meaning: "She studies better than me.",
      },
      {
        example: "姐姐跑得比我快。",
        pinyin: "Jiějie pǎo de bǐ wǒ kuài.",
        meaning: "Older sister runs faster than me.",
      },
      {
        example: "我妻子做得比我好。",
        pinyin: "Wǒ qīzi zuò de bǐ wǒ hǎo.",
        meaning: "My wife does it better than me.",
      },
    ],
  },
  {
    name: "The aspect particle, 着",
    description:
      "A verb followed by the aspect particle '着' can indicate the continuation of a certain state. In the negative form, '没' is added before the verb.",
    sentenceStructure:
      "Subject + predicate [verb + 着 + object] | Subject + predicate [没 + verb + 着 + object]",
    exampleSentences: [
      {
        example: "门开着。",
        pinyin: "Mén kāi zhe.",
        meaning: "The door is open. (state of being open)",
      },
      {
        example: "他们穿着红色的衣服。",
        pinyin: "Tāmen chuān zhe hóngsè de yīfu.",
        meaning: "They are wearing red clothes.",
      },
      {
        example: "他拿着铅笔。",
        pinyin: "Tā ná zhe qiānbǐ.",
        meaning: "He is holding a pencil.",
      },
      {
        example: "门没开着。",
        pinyin: "Mén méi kāi zhe.",
        meaning: "The door is not open.",
      },
      {
        example: "他们没穿着红色的衣服。",
        pinyin: "Tāmen méi chuān zhe hóngsè de yīfu.",
        meaning: "They are not wearing red clothes.",
      },
      {
        example: "他没拿着铅笔。",
        pinyin: "Tā méi ná zhe qiānbǐ.",
        meaning: "He is not holding a pencil.",
      },
    ],
  },
  {
    name: "The aspect particle, 着: interrogative form",
    description:
      "In the interrogative form, '没有' is added at the end of the sentence.",
    sentenceStructure: "Subject + Verb + 着 + Object + 没有？",
    exampleSentences: [
      {
        example: "门开着没有？",
        pinyin: "Mén kāi zhe méiyǒu?",
        meaning: "Is the door open or not?",
      },
      {
        example: "他们穿着红色的衣服没有？",
        pinyin: "Tāmen chuān zhe hóngsè de yīfu méiyǒu?",
        meaning: "Are they wearing red clothes or not?",
      },
      {
        example: "他手里拿着铅笔没有？",
        pinyin: "Tā shǒu lǐ ná zhe qiānbǐ méiyǒu?",
        meaning: "Is he holding a pencil in his hand or not?",
      },
    ],
  },
  {
    name: "The rhetorical question, 不是.....吗",
    description:
      "It is often used to remind someone of something or to show confusion or dissatisfaction",
    sentenceStructure: "不是 + Statement + 吗？",
    exampleSentences: [
      {
        example: "不是说今天有雨吗？怎么没下？",
        pinyin: "Bù shì shuō jīntiān yǒu yǔ ma? Zěnme méi xià?",
        meaning:
          "Wasn't it said that there would be rain today? Why hasn't it rained?",
      },
      {
        example: "你不是北京人吗？怎么不会说北京话？",
        pinyin: "Nǐ bù shì Běijīng rén ma? Zěnme bù huì shuō Běijīng huà?",
        meaning:
          "Aren't you from Beijing? How come you can't speak the Beijing dialect?",
      },
      {
        example: "她是你的女朋友？她不是有男朋友了吗？",
        pinyin: "Tā shì nǐ de nǚpéngyou? Tā bù shì yǒu nánpéngyou le ma?",
        meaning:
          "She is your girlfriend? Doesn't she already have a boyfriend?",
      },
    ],
  },
  {
    name: "The preposition, 往",
    description: "It is often used to indicate direction.",
    sentenceStructure: "往 + Direction + Verb",
    exampleSentences: [
      {
        example: "从这儿往前走，就是我们学校。",
        pinyin: "Cóng zhèr wǎng qián zǒu, jiù shì wǒmen xuéxiào.",
        meaning: "Just walk straight from here, and you'll reach our school.",
      },
      {
        example: "你看，往左走是医院，往右走是银行。",
        pinyin: "Nǐ kàn, wǎng zuǒ zǒu shì yīyuàn, wǎng yòu zǒu shì yínháng.",
        meaning:
          "Look, walking to the left is the hospital, walking to the right is the bank.",
      },
      {
        example: "从这儿一直往前走，到了前面的路口再往右走。",
        pinyin:
          "Cóng zhèr yīzhí wǎng qián zǒu, dào le qiánmian de lùkǒu zài wǎng yòu zǒu.",
        meaning:
          "Keep walking straight from here. When you reach the intersection ahead, turn right.",
      },
    ],
  },
  {
    name: "The aspect particle, 过",
    description:
      "A verb followed by the aspect particle '过' usually indicates a past experience action which hasn't lasted to the present. The negative form '没（有）' is added before the verb.",
    sentenceStructure:
      "subject + predicate (verb + 过 + object) | subject + predicate [ 没(有) + verb + 过 + object]",
    exampleSentences: [
      {
        example: "他们来过我家。",
        pinyin: "Tāmen lái guo wǒ jiā.",
        meaning: "They have come to my house (before).",
      },
      {
        example: "我看过那个电影。",
        pinyin: "Wǒ kàn guo nàge diànyǐng.",
        meaning: "I have seen that movie (before).",
      },
      {
        example: "我去过中国。",
        pinyin: "Wǒ qù guo Zhōngguó.",
        meaning: "I have been to China (before).",
      },
      {
        example: "他们没有来过我家。",
        pinyin: "Tāmen méiyǒu lái guo wǒ jiā.",
        meaning: "They have not come to my house (before).",
      },
      {
        example: "我没有看过那个电影。",
        pinyin: "Wǒ méiyǒu kàn guo nàge diànyǐng.",
        meaning: "I have not seen that movie (before).",
      },
      {
        example: "我没有去过中国。",
        pinyin: "Wǒ méiyǒu qù guo Zhōngguó.",
        meaning: "I have not been to China (before).",
      },
    ],
  },
  {
    name: "The aspect particle, 过： interrogative form",
    description:
      "In the interrogative form, '没有' is added at the end of the sentence.",
    sentenceStructure: "subject + predicate (verb + 过 + object + 没有)",
    exampleSentences: [
      {
        example: "他们来过你家没有？",
        pinyin: "Tāmen lái guo nǐ jiā méiyǒu?",
        meaning: "Have they ever come to your house or not?",
      },
      {
        example: "你看过那个电影没有？",
        pinyin: "Nǐ kàn guo nàge diànyǐng méiyǒu?",
        meaning: "Have you ever seen that movie or not?",
      },
      {
        example: "你去过中国没有？",
        pinyin: "Nǐ qù guo Zhōngguó méiyǒu?",
        meaning: "Have you ever been to China or not?",
      },
    ],
  },
  {
    name: "The pair of conjunctions, '虽然....，但是....'",
    description:
      "The conjunctions '虽然....,但是....' connect two clauses, forming a complex sentence indicating an adversative relation.",
    sentenceStructure: "虽然 + Clause 1, 但是 + Clause 2",
    exampleSentences: [
      {
        example: "虽然外面很冷,但是房间里很热。",
        pinyin: "Suīrán wàimian hěn lěng, dànshì fángjiān lǐ hěn rè.",
        meaning: "Although it's very cold outside, the room is very hot.",
      },
      {
        example: "虽然汉字很难，但是我很喜欢写汉字。",
        pinyin: "Suīrán Hànzì hěn nán, dànshì wǒ hěn xǐhuan xiě Hànzì.",
        meaning:
          "Although Chinese characters are very difficult, I really like writing them.",
      },
      {
        example: "虽然是晴天，但是很冷。",
        pinyin: "Suīrán shì qíngtiān, dànshì hěn lěng.",
        meaning: "Although it's a sunny day, (it's) very cold.",
      },
    ],
  },
  {
    name: "The complement of frequency, 次",
    description:
      "The complement of frequency '次' is usually used after the predicate verb, indicating the number of times that an action has taken place.",
    sentenceStructure: "subject + predicate (verb + 过 + num + 次 + object)",
    exampleSentences: [
      {
        example: "我们看过三次电影。",
        pinyin: "Wǒmen kàn guo sān cì diànyǐng.",
        meaning: "We have watched movies three times.",
      },
      {
        example: "他们坐过一次飞机。",
        pinyin: "Tāmen zuò guo yī cì fēijī.",
        meaning: "They have taken a plane once.",
      },
      {
        example: "我在这个商店买过一次东西。",
        pinyin: "Wǒ zài zhège shāngdiàn mǎi guo yī cì dōngxi.",
        meaning: "I have bought things at this store once.",
      },
    ],
  },
  {
    name: "The complement of frequency, 次： object of a verb is a place.",
    description:
      "When the object of a verb is a place, the complement of frequency can be put either before or after the object. ",
    sentenceStructure:
      "subject + predicate (verb + 过 + num + 次 + object) | subject + predicate (verb + 过 + object + num + 次)",
    exampleSentences: [
      {
        example: "我们去过三次北京。",
        pinyin: "Wǒmen qù guo sān cì Běijīng.",
        meaning: "We have been to Beijing three times.",
      },
      {
        example: "他们来过一次中国。",
        pinyin: "Tāmen lái guo yī cì Zhōngguó.",
        meaning: "They have come to China once.",
      },
      {
        example: "我上星期去过一次医院。",
        pinyin: "Wǒ shàng xīngqī qù guo yī cì yīyuàn.",
        meaning: "I went to the hospital once last week.",
      },
      {
        example: "我们去过北京三次。",
        pinyin: "Wǒmen qù guo Běijīng sān cì.",
        meaning: "We have been to Beijing three times.",
      },
      {
        example: "他们来过中国一次。",
        pinyin: "Tāmen lái guo Zhōngguó yī cì.",
        meaning: "They have come to China once.",
      },
      {
        example: "我上星期去过医院一次。",
        pinyin: "Wǒ shàng xīngqī qù guo yīyuàn yī cì.",
        meaning: "I went to the hospital once last week.",
      },
    ],
  },
  {
    name: "The complement of frequency, 次: object is a personal pronoun.",
    description:
      "When the object is a personal pronoun, the complement of frequency should be put after the object.",
    sentenceStructure: "subject + predicate (verb + 过 + object + num + 次)",
    exampleSentences: [
      {
        example: "我们找过他三次。",
        pinyin: "Wǒmen zhǎo guo tā sān cì.",
        meaning: "We have looked for him three times.",
      },
      {
        example: "他们看过我一次。",
        pinyin: "Tāmen kàn guo wǒ yī cì.",
        meaning: "They have seen me once.",
      },
      {
        example: "老师叫过我两次。",
        pinyin: "Lǎoshī jiào guo wǒ liǎng cì.",
        meaning: "The teacher has called me twice.",
      },
    ],
  },
  {
    name: "Indicating the state of an action, 要......了",
    description:
      "The structure '快要/快/就要/要.....了' indicates that something is going to happen.",
    sentenceStructure:
      "subject + predicate [快要/快/就要/要 + verb (+ object) + 了]",
    exampleSentences: [
      {
        example: "火车快要来了。",
        pinyin: "Huǒchē kuàiyào lái le.",
        meaning: "The train is about to arrive.",
      },
      {
        example: "要下雨了。",
        pinyin: "Yào xiàyǔ le.",
        meaning: "It's going to rain.",
      },
      {
        example: "新的一年快要到了。",
        pinyin: "Xīn de yī nián kuàiyào dào le.",
        meaning: "The new year is about to arrive.",
      },
    ],
  },
  {
    name: "Indicating the state of an action, 就要......了",
    description:
      "If there is an adverbial of time in the sentence, then only '就要......了' can be used.",
    sentenceStructure:
      "Adverbial of time + subject + predicate [就要 + verb (+ object) + 了]",
    exampleSentences: [
      {
        example: "下个月我们就要回国了。",
        pinyin: "Xià ge yuè wǒmen jiù yào huíguó le.",
        meaning: "We will return to our country next month.",
      },
      {
        example: "明天姐姐就要走了。",
        pinyin: "Míngtiān jiějie jiù yào zǒu le.",
        meaning: "Older sister is leaving tomorrow.",
      },
      {
        example: "下个星期我们就要考试了。",
        pinyin: "Xià ge xīngqī wǒmen jiù yào kǎoshì le.",
        meaning: "We will have the exam next week.",
      },
    ],
  },
  {
    name: "The structure, 都.....了",
    description:
      "The structure means 'already', usually conveying an emphatic or a complaining tone.",
    sentenceStructure: "都 + Time/Age/Extent + 了 + (Statement)",
    exampleSentences: [
      {
        example: "都八点了，快点儿起床吧。",
        pinyin: "Dōu bā diǎn le, kuài diǎn er qǐchuáng ba.",
        meaning: "It's already eight o'clock, hurry up and get out of bed.",
      },
      {
        example: "都十岁了，可以自己洗衣服了。",
        pinyin: "Dōu shí suì le, kěyǐ zìjǐ xǐ yīfu le.",
        meaning:
          "(You're) already ten years old, (you) can wash clothes by yourself now.",
      },
      {
        example: "都等她半个小时了。",
        pinyin: "Dōu děng tā bàn ge xiǎoshí le.",
        meaning: "(I've) already waited for her for half an hour.",
      },
    ],
  },
];

export { hskTwoGrammar };
