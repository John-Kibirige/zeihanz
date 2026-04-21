const hskOneProperNouns = () => [
  {
    name: "北京",
    pinyin: "Běijīng",
    partOfSpeech: "Proper noun",
    meaning: "Beijing, capital of China",
    example: "北京有很多朋友。",
    examplePinyin: "Běijīng yǒu hěn duō péngyou.",
    translation: "There are many friends in Beijing.",
  },
  {
    name: "大卫",
    pinyin: "Dàwèi",
    partOfSpeech: "Proper noun",
    meaning: "David",
    example: "大卫是我的朋友。",
    examplePinyin: "Dàwèi shì wǒ de péngyou.",
    translation: "David is my friend.",
  },
  {
    name: "李月",
    pinyin: "Lǐ Yuè",
    partOfSpeech: "Proper noun",
    meaning: "Li Yue, name of a person",
    example: "李月在学校。",
    examplePinyin: "Lǐ Yuè zài xuéxiào.",
    translation: "Li Yue is at school.",
  },
  {
    name: "美国",
    pinyin: "Měiguó",
    partOfSpeech: "Proper noun",
    meaning: "United States of America",
    example: "美国很大。",
    examplePinyin: "Měiguó hěn dà.",
    translation: "The United States is very big.",
  },
  {
    name: "王方",
    pinyin: "Wáng Fāng",
    partOfSpeech: "Proper noun",
    meaning: "Wang Fang, name of a person",
    example: "王方是我的老师。",
    examplePinyin: "Wáng Fāng shì wǒ de lǎoshī.",
    translation: "Wang Fang is my teacher.",
  },
  {
    name: "谢朋",
    pinyin: "Xiè Péng",
    partOfSpeech: "Proper noun",
    meaning: "Xie Peng, name of a person",
    example: "谢朋喜欢喝茶。",
    examplePinyin: "Xiè Péng xǐhuan hē chá.",
    translation: "Xie Peng likes to drink tea.",
  },
  {
    name: "张",
    pinyin: "Zhāng",
    partOfSpeech: "Proper noun",
    meaning: "Zhang, a Chinese family name",
    example: "张先生在家吗？",
    examplePinyin: "Zhāng xiānsheng zài jiā ma?",
    translation: "Is Mr. Zhang at home?",
  },
  {
    name: "中国",
    pinyin: "Zhōngguó",
    partOfSpeech: "Proper noun",
    meaning: "China",
    example: "我在中国学习。",
    examplePinyin: "Wǒ zài Zhōngguó xuéxí.",
    translation: "I study in China.",
  },
];

const hskOneWordsNotIncluded = () => [
  {
    name: "啊",
    pinyin: "a",
    partOfSpeech: "Modal particle",
    meaning:
      "a modal particle used at the end of a sentence as a sign of confirmation or defense",
    example: "你身体好啊！",
    examplePinyin: "Nǐ shēntǐ hǎo a!",
    translation: "Your health is good!",
  },
  {
    name: "吧",
    pinyin: "ba",
    partOfSpeech: "Modal particle",
    meaning:
      "a modal particle used at the end of a sentence to indicate consultations, a suggestion, request or command",
    example: "我们一起吃饭吧！",
    examplePinyin: "Wǒmen yīqǐ chīfàn ba!",
    translation: "Let's eat together!",
  },
  {
    name: "给",
    pinyin: "gěi",
    partOfSpeech: "Preposition / Verb",
    meaning: "to; for; to give",
    example: "请把书给我。",
    examplePinyin: "Qǐng bǎ shū gěi wǒ.",
    translation: "Please give me the book.",
  },
  {
    name: "好吃",
    pinyin: "hǎochī",
    partOfSpeech: "Adjective",
    meaning: "delicious, tasty",
    example: "这家饭店的菜很好吃。",
    examplePinyin: "Zhè jiā fàndiàn de cài hěn hǎochī.",
    translation: "The food at this restaurant is very delicious.",
  },
  {
    name: "口",
    pinyin: "kǒu",
    partOfSpeech: "Measure word",
    meaning: "a measure word for members of families, etc",
    example: "我家有五口人。",
    examplePinyin: "Wǒ jiā yǒu wǔ kǒu rén.",
    translation: "There are five people in my family.",
  },
  {
    name: "您",
    pinyin: "nín",
    partOfSpeech: "Pronoun",
    meaning: "(polite) you",
    example: "您好，请问您需要什么帮助？",
    examplePinyin: "Nín hǎo, qǐngwèn nín xūyào shénme bāngzhù?",
    translation: "Hello, what help do you need?",
  },
  {
    name: "身体",
    pinyin: "shēntǐ",
    partOfSpeech: "Noun",
    meaning: "body",
    example: "虽然生病了，但是身体已经越来越好了。",
    examplePinyin:
      "Suīrán shēngbìng le, dànshì shēntǐ yǐjīng yuèláiyuè hǎo le.",
    translation: "Although I was sick, my body is getting better and better.",
  },
  {
    name: "问",
    pinyin: "wèn",
    partOfSpeech: "Verb",
    meaning: "to ask, to inquire",
    example: "我有问题想问你。",
    examplePinyin: "Wǒ yǒu wèntí xiǎng wèn nǐ.",
    translation: "I have a question I want to ask you.",
  },
  {
    name: "也",
    pinyin: "yě",
    partOfSpeech: "Adverb",
    meaning: "also, too",
    example: "我也喜欢游泳，但是不如他游得快。",
    examplePinyin: "Wǒ yě xǐhuan yóuyǒng, dànshì bùrú tā yóu de kuài.",
    translation: "I also like swimming, but I'm not as fast as him.",
  },
  {
    name: "一起",
    pinyin: "yīqǐ",
    partOfSpeech: "Adverb",
    meaning: "together",
    example: "昨天我和朋友一起去公园跑步了。",
    examplePinyin: "Zuótiān wǒ hé péngyou yīqǐ qù gōngyuán pǎobù le.",
    translation: "Yesterday I went jogging in the park with a friend.",
  },
];

const hskOneCompoundWords = () => [
  {
    name: "不少",
    pinyin: "bù shǎo",
    partOfSpeech: "Adjective / Determiner",
    meaning: "quite a few, many",
    example: "图书馆里有不少学生正在看书。",
    examplePinyin: "Túshūguǎn lǐ yǒu bù shǎo xuésheng zhèngzài kàn shū.",
    translation: "There are quite a few students reading books in the library.",
  },
  {
    name: "车",
    pinyin: "chē",
    partOfSpeech: "Noun",
    meaning: "car, vehicle",
    example: "他把车停在饭店前面了。",
    examplePinyin: "Tā bǎ chē tíng zài fàndiàn qiánmiàn le.",
    translation: "He parked the car in front of the restaurant.",
  },
  {
    name: "吃饭",
    pinyin: "chī fàn",
    partOfSpeech: "Verb phrase",
    meaning: "to eat a meal",
    example: "虽然我很忙，但是还是要吃饭。",
    examplePinyin: "Suīrán wǒ hěn máng, dànshì háishi yào chī fàn.",
    translation: "Although I'm very busy, I still need to eat.",
  },
  {
    name: "大学",
    pinyin: "dàxué",
    partOfSpeech: "Noun",
    meaning: "college, university",
    example: "我去年才进了大学，现在已经认识不少朋友了。",
    examplePinyin:
      "Wǒ qùnián cái jìn le dàxué, xiànzài yǐjīng rènshi bù shǎo péngyou le.",
    translation:
      "I only entered university last year, and now I've already made quite a few friends.",
  },
  {
    name: "分",
    pinyin: "fēn",
    partOfSpeech: "Noun / Measure word",
    meaning: "minute",
    example: "请等我十分钟，我马上就到。",
    examplePinyin: "Qǐng děng wǒ shí fēnzhōng, wǒ mǎshàng jiù dào.",
    translation: "Please wait ten minutes for me, I'll arrive right away.",
  },
  {
    name: "国",
    pinyin: "guó",
    partOfSpeech: "Noun",
    meaning: "country, nation",
    example: "中国是一个很大的国家。",
    examplePinyin: "Zhōngguó shì yí gè hěn dà de guójiā.",
    translation: "China is a very big country.",
  },
  {
    name: "汉字",
    pinyin: "Hànzì",
    partOfSpeech: "Noun",
    meaning: "Chinese character",
    example: "我已经学了三百个汉字了，但是还有不少没学过。",
    examplePinyin:
      "Wǒ yǐjīng xué le sān bǎi gè Hànzì le, dànshì háishi yǒu bù shǎo méi xué guo.",
    translation:
      "I've already learned three hundred Chinese characters, but there are still quite a few I haven't learned.",
  },
  {
    name: "后",
    pinyin: "hòu",
    partOfSpeech: "Noun / Preposition",
    meaning: "after, afterwards, later",
    example: "我吃完饭后要去图书馆学习。",
    examplePinyin: "Wǒ chī wán fàn hòu yào qù túshūguǎn xuéxí.",
    translation: "After I finish eating, I need to go to the library to study.",
  },
  {
    name: "回来",
    pinyin: "huílai",
    partOfSpeech: "Verb",
    meaning: "to come back",
    example: "他从北京回来了，给我带了不少礼物。",
    examplePinyin: "Tā cóng Běijīng huílai le, gěi wǒ dài le bù shǎo lǐwù.",
    translation: "He came back from Beijing and brought me quite a few gifts.",
  },
  {
    name: "今年",
    pinyin: "jīnnián",
    partOfSpeech: "Noun",
    meaning: "this year",
    example: "今年我打算去中国旅游，因为中国的风景太美了。",
    examplePinyin:
      "Jīnnián wǒ dǎsuàn qù Zhōngguó lǚyóu, yīnwèi Zhōngguó de fēngjǐng tài měi le.",
    translation:
      "This year I plan to travel to China because China's scenery is too beautiful.",
  },
  {
    name: "没",
    pinyin: "méi",
    partOfSpeech: "Adverb",
    meaning: "there is not; (negative marker for past)",
    example: "我昨天没去学校，因为下雨了。",
    examplePinyin: "Wǒ zuótiān méi qù xuéxiào, yīnwèi xià yǔ le.",
    translation: "I didn't go to school yesterday because it rained.",
  },
  {
    name: "那儿",
    pinyin: "nàr",
    partOfSpeech: "Pronoun",
    meaning: "there",
    example: "那儿有不少饭馆，我们一起去吃饭吧。",
    examplePinyin: "Nàr yǒu bù shǎo fànguǎn, wǒmen yīqǐ qù chī fàn ba.",
    translation:
      "There are quite a few restaurants there, let's go eat together.",
  },
  {
    name: "你们",
    pinyin: "nǐmen",
    partOfSpeech: "Pronoun",
    meaning: "(plural) you",
    example: "你们什么时候回来？我们都在这儿等你们呢。",
    examplePinyin:
      "Nǐmen shénme shíhou huílai? Wǒmen dōu zài zhèr děng nǐmen ne.",
    translation:
      "When are you all coming back? We are all here waiting for you.",
  },
  {
    name: "前",
    pinyin: "qián",
    partOfSpeech: "Noun / Preposition",
    meaning: "before, earlier than",
    example: "上课前，我习惯在图书馆看一会儿书。",
    examplePinyin: "Shàngkè qián, wǒ xíguàn zài túshūguǎn kàn yíhuìr shū.",
    translation:
      "Before class, I'm used to reading for a while in the library.",
  },
  {
    name: "太.....了",
    pinyin: "tài...le",
    partOfSpeech: "Grammar pattern",
    meaning: "too, excessively",
    example: "今天的天气太热了，我不想出去。",
    examplePinyin: "Jīntiān de tiānqì tài rè le, wǒ bù xiǎng chūqu.",
    translation: "Today's weather is too hot, I don't want to go out.",
  },
  {
    name: "下",
    pinyin: "xià",
    partOfSpeech: "Verb",
    meaning: "(of rain, snow etc) to fall",
    example: "外面正在下雨，你把伞带上吧。",
    examplePinyin: "Wàimiàn zhèngzài xià yǔ, nǐ bǎ sǎn dài shang ba.",
    translation: "It's raining outside, take an umbrella with you.",
  },
  {
    name: "下面",
    pinyin: "xiàmiàn",
    partOfSpeech: "Noun / Preposition",
    meaning: "under, below",
    example: "桌子下面有不少书，请你把它们拿出来。",
    examplePinyin:
      "Zhuōzi xiàmiàn yǒu bù shǎo shū, qǐng nǐ bǎ tāmen ná chūlai.",
    translation:
      "There are quite a few books under the table, please take them out.",
  },
  {
    name: "学",
    pinyin: "xué",
    partOfSpeech: "Verb",
    meaning: "to study, to learn",
    example: "我学了三年汉语了，但是说得还不够好。",
    examplePinyin:
      "Wǒ xué le sān nián Hànyǔ le, dànshì shuō de hái bù gòu hǎo.",
    translation:
      "I've studied Chinese for three years already, but I still don't speak it well enough.",
  },
  {
    name: "雨",
    pinyin: "yǔ",
    partOfSpeech: "Noun",
    meaning: "rain",
    example: "雨下得越来越大了，我们别出去了。",
    examplePinyin: "Yǔ xià de yuèláiyuè dà le, wǒmen bié chūqu le.",
    translation: "The rain is getting heavier and heavier, let's not go out.",
  },
  {
    name: "这儿",
    pinyin: "zhèr",
    partOfSpeech: "Pronoun",
    meaning: "here",
    example: "这儿离学校不远，走路十分钟就到了。",
    examplePinyin: "Zhèr lí xuéxiào bù yuǎn, zǒulù shí fēnzhōng jiù dào le.",
    translation:
      "It's not far from school here, just ten minutes' walk and you'll arrive.",
  },
  {
    name: "这些",
    pinyin: "zhèxiē",
    partOfSpeech: "Pronoun / Determiner",
    meaning: "these",
    example: "这些汉字我都学过，但是还有不少没记住。",
    examplePinyin:
      "Zhèxiē Hànzì wǒ dōu xué guo, dànshì háishi yǒu bù shǎo méi jìzhu.",
    translation:
      "I've learned all these Chinese characters before, but there are still quite a few I haven't memorized.",
  },
];

const hskOneAdditionalVocabulary = () => [
  {
    name: "茶杯",
    pinyin: "chábēi",
    partOfSpeech: "Noun",
    meaning: "teacup",
    example: "请把茶杯放在桌子上面，别放在下面。",
    examplePinyin:
      "Qǐng bǎ chábēi fàng zài zhuōzi shàngmiàn, bié fàng zài xiàmiàn.",
    translation: "Please put the teacup on the table, don't put it underneath.",
  },
  {
    name: "打车",
    pinyin: "dǎ chē",
    partOfSpeech: "Verb phrase",
    meaning: "to take a taxi",
    example: "昨天雨下得很大，所以我们只好打车去电影院。",
    examplePinyin:
      "Zuótiān yǔ xià de hěn dà, suǒyǐ wǒmen zhǐhǎo dǎ chē qù diànyǐngyuàn.",
    translation:
      "Yesterday it was raining heavily, so we had no choice but to take a taxi to the cinema.",
  },
  {
    name: "电影院",
    pinyin: "diànyǐngyuàn",
    partOfSpeech: "Noun",
    meaning: "cinema, movie theater",
    example: "虽然这家电影院不大，但是里面的座位很舒服。",
    examplePinyin:
      "Suīrán zhè jiā diànyǐngyuàn bù dà, dànshì lǐmiàn de zuòwèi hěn shūfu.",
    translation:
      "Although this cinema isn't big, the seats inside are very comfortable.",
  },
  {
    name: "开车",
    pinyin: "kāi chē",
    partOfSpeech: "Verb phrase",
    meaning: "to drive a car",
    example: "他才学了两个月就敢开车上路了，真是厉害。",
    examplePinyin:
      "Tā cái xué le liǎng gè yuè jiù gǎn kāi chē shàng lù le, zhēnshi lìhai.",
    translation:
      "He's only studied for two months and already dares to drive on the road, really impressive.",
  },
  {
    name: "里面",
    pinyin: "lǐmiàn",
    partOfSpeech: "Noun / Preposition",
    meaning: "inside, within",
    example: "书店里面有不少学生在看书，你别在里面大声说话。",
    examplePinyin:
      "Shūdiàn lǐmiàn yǒu bù shǎo xuésheng zài kàn shū, nǐ bié zài lǐmiàn dàshēng shuōhuà.",
    translation:
      "There are quite a few students reading inside the bookstore, don't speak loudly in there.",
  },
  {
    name: "明年",
    pinyin: "míngnián",
    partOfSpeech: "Noun",
    meaning: "next year",
    example: "明年我打算去学车，因为我想开车带朋友们去旅游。",
    examplePinyin:
      "Míngnián wǒ dǎsuàn qù xué chē, yīnwèi wǒ xiǎng kāi chē dài péngyoumen qù lǚyóu.",
    translation:
      "Next year I plan to learn to drive, because I want to drive my friends to travel.",
  },
  {
    name: "朋友们",
    pinyin: "péngyoumen",
    partOfSpeech: "Noun",
    meaning: "friends (plural)",
    example: "前天朋友们来我家吃饭，我给他们做了不少好吃的菜。",
    examplePinyin:
      "Qiántiān péngyoumen lái wǒ jiā chī fàn, wǒ gěi tāmen zuò le bù shǎo hǎochī de cài.",
    translation:
      "The day before yesterday friends came to my home for a meal, I made quite a few delicious dishes for them.",
  },
  {
    name: "前天",
    pinyin: "qiántiān",
    partOfSpeech: "Noun",
    meaning: "the day before yesterday",
    example: "前天我去书店买书，看见了你的同学们，他们也在里面看书。",
    examplePinyin:
      "Qiántiān wǒ qù shūdiàn mǎi shū, kànjiàn le nǐ de tóngxuémen, tāmen yě zài lǐmiàn kàn shū.",
    translation:
      "The day before yesterday I went to the bookstore to buy books, I saw your classmates, they were also reading inside.",
  },
  {
    name: "上面",
    pinyin: "shàngmiàn",
    partOfSpeech: "Noun / Preposition",
    meaning: "on top of, above",
    example: "桌子上面放着不少茶杯，下面还有不少书，请你把它们整理一下。",
    examplePinyin:
      "Zhuōzi shàngmiàn fàng zhe bù shǎo chábēi, xiàmiàn hái yǒu bù shǎo shū, qǐng nǐ bǎ tāmen zhěnglǐ yíxià.",
    translation:
      "There are quite a few teacups placed on the table, and quite a few books underneath too, please tidy them up a bit.",
  },
  {
    name: "书店",
    pinyin: "shūdiàn",
    partOfSpeech: "Noun",
    meaning: "bookstore",
    example: "这家书店虽然不大，但是里面的书种类不少，学生们都很喜欢来这儿。",
    examplePinyin:
      "Zhè jiā shūdiàn suīrán bù dà, dànshì lǐmiàn de shū zhǒnglèi bù shǎo, xuéshengmen dōu hěn xǐhuan lái zhèr.",
    translation:
      "Although this bookstore isn't big, there are quite a few types of books inside, the students all really like coming here.",
  },
  {
    name: "说话",
    pinyin: "shuōhuà",
    partOfSpeech: "Verb",
    meaning: "to speak, to talk",
    example: "在电影院里请别大声说话，不然别人会听不见电影的声音。",
    examplePinyin:
      "Zài diànyǐngyuàn lǐ qǐng bié dàshēng shuōhuà, bùrán biérén huì tīngbujiàn diànyǐng de shēngyīn.",
    translation:
      "Please don't speak loudly in the cinema, otherwise others won't be able to hear the movie's sound.",
  },
  {
    name: "他们",
    pinyin: "tāmen",
    partOfSpeech: "Pronoun",
    meaning: "they, them (male or mixed gender)",
    example: "他们昨天打车去车站，但是车来得太晚了，所以没赶上火车。",
    examplePinyin:
      "Tāmen zuótiān dǎ chē qù chēzhàn, dànshì chē lái de tài wǎn le, suǒyǐ méi gǎnshàng huǒchē.",
    translation:
      "They took a taxi to the station yesterday, but the car came too late, so they didn't catch the train.",
  },
  {
    name: "她们",
    pinyin: "tāmen",
    partOfSpeech: "Pronoun",
    meaning: "they, them (female)",
    example: "她们正在厨房做饭，你听见她们说话了吗？",
    examplePinyin:
      "Tāmen zhèngzài chúfáng zuò fàn, nǐ tīngjiàn tāmen shuōhuà le ma?",
    translation: "They are cooking in the kitchen, did you hear them talking?",
  },
  {
    name: "听见",
    pinyin: "tīngjiàn",
    partOfSpeech: "Verb",
    meaning: "to hear",
    example: "我听见外面有人在说话，但是看不见是谁。",
    examplePinyin:
      "Wǒ tīngjiàn wàimiàn yǒu rén zài shuōhuà, dànshì kàn bu jiàn shì shéi.",
    translation: "I heard someone talking outside, but I can't see who it is.",
  },
  {
    name: "学车",
    pinyin: "xué chē",
    partOfSpeech: "Verb phrase",
    meaning: "to learn to drive",
    example: "我去年就开始学车了，但是到现在还没学会开车，真是有点儿难。",
    examplePinyin:
      "Wǒ qùnián jiù kāishǐ xué chē le, dànshì dào xiànzài hái méi xué huì kāi chē, zhēnshi yǒudiǎnr nán.",
    translation:
      "I started learning to drive last year, but up to now I still haven't learned how to drive, it's really a bit difficult.",
  },
  {
    name: "学生们",
    pinyin: "xuéshengmen",
    partOfSpeech: "Noun",
    meaning: "students (plural)",
    example: "学生们前天去电影院看电影了，他们都说那部电影太有意思了。",
    examplePinyin:
      "Xuéshengmen qiántiān qù diànyǐngyuàn kàn diànyǐng le, tāmen dōu shuō nà bù diànyǐng tài yǒu yìsi le.",
    translation:
      "The students went to the cinema to watch a movie the day before yesterday, they all said that film was too interesting.",
  },
  {
    name: "有点儿",
    pinyin: "yǒudiǎnr",
    partOfSpeech: "Adverb",
    meaning: "a little bit, somewhat",
    example: "今天的天气有点儿冷，你最好多穿一点儿衣服。",
    examplePinyin:
      "Jīntiān de tiānqì yǒudiǎnr lěng, nǐ zuìhǎo duō chuān yìdiǎnr yīfu.",
    translation:
      "Today's weather is a bit cold, you'd better wear a bit more clothing.",
  },
  {
    name: "这么",
    pinyin: "zhème",
    partOfSpeech: "Pronoun / Adverb",
    meaning: "so, this (degree)",
    example: "你怎么这么晚才回来？我们都在这儿等你半天了。",
    examplePinyin:
      "Nǐ zěnme zhème wǎn cái huílai? Wǒmen dōu zài zhèr děng nǐ bàntiān le.",
    translation:
      "How come you came back so late? We've all been waiting for you here for ages.",
  },
  {
    name: "这样",
    pinyin: "zhèyàng",
    partOfSpeech: "Pronoun / Adverb",
    meaning: "like this, this way",
    example: "你别这样说话，别人会不高兴的。我们应该好好说话。",
    examplePinyin:
      "Nǐ bié zhèyàng shuōhuà, biérén huì bù gāoxìng de. Wǒmen yīnggāi hǎohao shuōhuà.",
    translation:
      "Don't talk like this, others will be unhappy. We should speak nicely.",
  },
  {
    name: "做饭",
    pinyin: "zuò fàn",
    partOfSpeech: "Verb phrase",
    meaning: "to cook, to prepare a meal",
    example:
      "她每天六点起床给学生们做饭，虽然很累，但是她说看见大家吃得高兴，她就很开心。",
    examplePinyin:
      "Tā měitiān liù diǎn qǐchuáng gěi xuéshengmen zuò fàn, suīrán hěn lèi, dànshì tā shuō kànjiàn dàjiā chī de gāoxìng, tā jiù hěn kāixīn.",
    translation:
      "She gets up at six every day to cook for the students, although it's very tiring, she says seeing everyone eat happily makes her very happy.",
  },
];
export {
  hskOneProperNouns,
  hskOneWordsNotIncluded,
  hskOneCompoundWords,
  hskOneAdditionalVocabulary,
};
