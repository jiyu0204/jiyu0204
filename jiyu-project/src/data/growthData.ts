// src/data/growthData.ts

export interface Show {
  id: string;
  name: string;
  color: string;
}

export interface GrowthRecord {
  id: string;
  date: string;
  title: string;
  content: string;
  showId: string;
  link?: string;
  images?: string[];
}

export const defaultShows: Show[] = [
  { id: "1", name: "舞台及筹备", color: "#d4a8a0" },
  { id: "2", name: "花果三魔法时间", color: "#a8c4b8" },
  { id: "3", name: "练习生日常不过的日常", color: "#c4b89a" },
  { id: "4", name: "一起开始的旅程", color: "#b8a8c8" },
  { id: "5", name: "三班，不一般！/宿舍，真不错！", color: "#d4a8b8" },
  { id: "6", name: "恭喜你发现了宝藏", color: "#a8b8c8" },
  { id: "7", name: "一起去做的N件事", color: "#c4a890" },
  { id: "8", name: "九九八十一（one last time）", color: "#90b8b0" },
  { id: "9", name: "流星花园之热血帝都", color: "#c4a8c8" },
  { id: "10", name: "家族运动会", color: "#c4b890" },
  { id: "11", name: "新年特辑", color: "#d4a8a8" },
  { id: "12", name: "登陆计划系列", color: "#90b8c4" },
  { id: "13", name: "登陆日", color: "#d4a8c0" },
  { id: "14", name: "非系列物料", color: "#d4b8a8" },
];

export const defaultRecords: GrowthRecord[] = [
  
 {
  id: "1",
  date: "2018-08-29",
  title: "暑期汇演《歌曲串烧》",
  content: "TF家族练习生暑期汇演《歌曲串烧》",
  showId: "1",
  link: "https://www.bilibili.com/video/BV1as411c7rj?t=29.2",
  images: ["https://i.ibb.co/vxgYBQy8/f4dd68034cddd1766d8397dc59e355c74a855592.jpg"] 
 },
 {
  id: "2",
  date: "2018-10-06",
  title: "10月路演全纪录",
  content: "10月路演全纪录上线啦~",
  showId: "1",
  link: "https://www.bilibili.com/video/BV1as411c7rj?t=29.2",
  images: ["https://i.ibb.co/mdzBTyj/e7edc39b9481177e9f1d136875a625fd7969ad06.jpg"] 
 },
 {
  id: "3",
  date: "2018-11-23",
  title: "TF少年进化论-秋日幻想曲",
  content: "深秋寄送给你的是什么色彩，是思念的黄还是热烈的红，是久违再见的熟悉还是初次见面的惊喜……《TF少年进化论之秋日幻想曲》如约而至，让落叶交织奏响的旋律，为今秋烙上独一无二的音符记号。",
  showId: "1",
  link: "https://www.bilibili.com/video/BV1Lt411y78K?t=5.5",
  images: ["https://i.ibb.co/DD7ySgFC/eda9745dbfc65ef2525918993cf876ddc16c13fe.jpg"] 
 },
  {
    id: "4",
    date: "2018-11-30",
    title: "TF少年进化实录 - 初见",
    content: `我们有最简单的追梦之心，我们有最纯粹的喜怒哀乐，我们是平凡的小孩，我们也是普通的练习生，我们在TF家族，我们与你初见那一刻，便挥帆起航。`,
    showId: "1",
    link: "https://www.bilibili.com/video/BV15t411X7S4?t=8.9",
    images: ["https://i.ibb.co/jvRvCJ9B/8e9db127aea3b699a0e277b0a08b3f3d5ea1095b.jpg"]
  },
  {
    id: "5",
    date: "2018-12-28",
    title: "2018冬季运动会",
    content: `寒冷冬日，一次运动场上角逐比拼，一场家族成员的欢乐聚会，2018TF家族冬季运动会，收获快乐，收获成长～`,
    showId: "10",
    link: "https://www.bilibili.com/video/BV12t411r7EG?t=2.3&p=2",
    images: ["https://i.ibb.co/gqF0Spw/251121420a4534ad0cbf4cfda778f05d376ec2cd.jpg"]
  },
  {
    id: "6",
    date: "2019-01-11",
    title: "新年音乐会·第一页",
    content: `寒风涌动云海，夜色肆意闪耀，集结讯号舞蹈，热血即刻燃烧，属于少年们的年末狂欢篇章，来到。`,
    showId: "1",
    link: "https://www.bilibili.com/video/BV1yt411p7RS?t=1.9",
    images: ["https://i.ibb.co/kVnFpQmx/95fcc373b16246fd4b2912e95330f1efa3d6e8ec.jpg"]
  },
  {
    id: "7",
    date: "2019-01-25",
    title: "《第一页》全纪录",
    content: `我们向前奔跑，每一天都刻下存在的记号；我们因为同样的心所以相聚，因为相聚而成为家。这是TF家族第一页的故事，而故事还在继续......`,
    showId: "1",
    link: "https://www.bilibili.com/video/BV1ft411b7G2?t=801.3",
    images: ["https://i.ibb.co/1tFnth5p/b46c181952ee807216fb3ca38ce8c922b404e383.jpg"]
  },
  {
    id: "8",
    date: "2019-02-22",
    title: "东九区时间",
    content: `东九区时间，正式开启~`,
    showId: "14",
    link: "https://www.bilibili.com/video/BV1vb411h7j5?t=0.3",
    images: ["https://i.ibb.co/9HptXQBH/cd6be4077f1c1e46d0bc70de35b3d14fe5d5476d.jpg"]
  },
  {
    id: "9",
    date: "2019-03-15",
    title: "冬游记",
    content: `抓住冬日的尾巴，尽情沉醉冰雪世界。短暂冬日游记上线～`,
    showId: "14",
    link: "https://www.bilibili.com/video/BV1fb411H7bH?t=0.6",
    images: ["https://i.ibb.co/MkZFzYsx/14e7addecd4d98fa5d88c0f301e59774331fc5b3.jpg"]
  },
  {
    id: "10",
    date: "2019-05-11",
    title: "TF少年进化论-第25小时（舞台篇）",
    content: `对练习生来说，第25小时是一个新的印记。不管是台下的汗水，还是台上的定格，好的坏的都是属于"此刻"的，不完美却绝对深刻。你们都要好好进步，好好长大。对观众们来说，第25小时是一个选择，选择进入感受，也可以选择立刻拒绝，选择人，也在选择作品，皆是承载期盼，温柔以待。希望它能成为一天中辛苦或幸福的24小时之外的别样时间，《TF少年进化论-第25小时》开启！`,
    showId: "1",
    link: "https://www.bilibili.com/video/BV1M4411e7ma?t=4.4",
    images: ["https://i.ibb.co/qFLFF6X5/99be9b81966a56da872f7e08fec7e24a5411cd92.jpg"]
  },
  {
    id: "11",
    date: "2019-05-17",
    title: "TF少年进化论-第25小时（制作篇）",
    content: `台上，台下，镜头前，镜头后，看得见的，看不见的，堆积的每一个瞬间，带着独属于这份时间留下的烙印，才成为最后真正属于他们的"第二十五小时"。汗水也好，泪水也罢，都已成为成长的基石，少年进化之路漫漫，仍可期。`,
    showId: "1",
    link: "https://www.bilibili.com/video/BV1C441177bF?t=18.1",
    images: ["https://i.ibb.co/20C0CCDf/8a5ac93a1f835c4c8b6c65f487d82588e923a742.jpg"]
  },
  {
    id: "12",
    date: "2019-07-18",
    title: "我们的暑期日常",
    content: `吃饭训练做游戏，属于小朋友们的暑假又来啦`,
    showId: "14",
    link: "https://www.bilibili.com/video/BV1ht41137nm?t=29.0",
    images: ["https://i.ibb.co/bj4zS2JY/736dcad5e7edfb39a6333c1d1660f78a322ea16d.jpg"]
  },
  {
    id: "13",
    date: "2019-07-21",
    title: "我们的夏日游",
    content: `窗外的麻雀 在电线杆上多嘴 / 你说这一句 很有夏天的感觉 / 小朋友们的夏日阳光正好 / 于是把七月写在了诗的最后一面`,
    showId: "14",
    link: "https://www.bilibili.com/video/BV1Rt411E7VH?t=0.3",
    images: ["https://i.ibb.co/VYG3fdLT/b991f600351cde0197c5a834ea9bc1a655bbb1fc.jpg"]
  },
  {
    id: "14",
    date: "2019-09-14",
    title: "夏日回忆合集",
    content: `转眼秋意渐染，夏天的淋漓仿佛还在昨日，余温未褪，记忆鲜活，所有的结束都意味着开始，最后的二零一九《夏日回忆合集》上线～`,
    showId: "14",
    link: "https://www.bilibili.com/video/BV15J411A71N?t=123.4",
    images: ["https://i.ibb.co/CpVdCJ3Y/dbb5cf53df20c69398c110d563748daf9465dd5d.jpg"]
  },
  {
    id: "15",
    date: "2019-10-26",
    title: "TF少年进化论-单向放映厅（舞台篇）",
    content: `"我又长高啦！" 在一个个平凡前行的日子里，你可以无数次见证年轻的生命成长，他们施以最天真的见解，隔着光的距离，学着成长这苦涩的魔法。再圆满的童话，也无法阻止时间这个单向行驶程序；孩子们甜蜜的梦，也总有被雷鸣电闪惊醒的瞬间。既然无力更改法则，便要学会珍惜此刻，你我都只活一次，即使是分别望向这片天空，目光也能在某一颗星星处相遇。这一次，穷尽所有力气，让我们在这里相遇。2019年10月特别放送：TF少年进化论 第三期-单向放映厅 特别放映影片《一次》完整篇章——STORY BEGIN。`,
    showId: "1",
    link: "https://www.bilibili.com/video/BV1mE411a7Bo?t=0.7",
    images: ["https://i.ibb.co/r27z2jwJ/f43f93ff4ace5550a4e29675b5ef4c75d19d4a5d.jpg"]
 },
  {
    id: "16",
    date: "2019-11-02",
    title: "TF少年进化论-单向放映厅（制作篇）",
    content: `记住日出，也要记住日落。记住植物、树木还有动物的生命，记住大地。记住风，记住它的声音。记住你看到的一切，记住你自己，你是所有人，所有人都是你。我们都要记住，记住一次，一次记住。TF少年进化论-单向放映厅制作篇上线，时光倒退，请查看"被记住"的少年故事。`,
    showId: "1",
    link: "https://www.bilibili.com/video/BV15E411t72K?t=20.7",
    images: ["https://i.ibb.co/C38dBrtv/5669cf710fbfc9d7967a3b6cfcf9ffae811129ff.jpg"]
  },
{
  id: "17",
  date: "2019-12-25",
  title: "圣诞节特辑-孩子们的圣诞",
  content: `一年要过完了，所有人又陷入了无限的感慨中。有的人会喜欢压力，有的人会恐惧压力，还有的人会选择逃避，但是没有人可以没有压力，回头望着经过的这一年，哪一次不是"斩断"难关，艰难度过呢？快乐的舞蹈，虽然还是有点乱糟糟；充满甜蜜回忆的歌曲，不完美的歌唱技巧（又有小朋友要加入变声期队伍了）；全部达成一致的"狼人杀"游戏，结果依然没有玩出技巧。可是，开心最重要！无论现在你面对什么样的压力、难题、烦心事，请不要抛弃"开心"，在都会流逝的岁月里，开心千金难买。祝愿所有的朋友们，开开心心！`,
  showId: "14",
  link: "https://www.bilibili.com/video/BV1eJ411W7Cf?t=12.6",
  images: ["https://i.ibb.co/JwCKR80H/f3aa160534521cd309e65021190926667be730af.jpg"]
},
{
  id: "18",
  date: "2020-02-10",
  title: "《光环下的少年——重逢》",
  content: `少年们相聚在山城，再次重逢。回到故事发生的地方，书写新的篇章。你好，好久不见。`,
  showId: "1",
  link: "https://www.bilibili.com/video/BV1j741147kF?t=20.1",
  images: [""]
},
{
  id: "19",
  date: "2020-03-03",
  title: "（1）：Vlog难题",
  content: `因为疫情，延迟了我们的再见面，但是时间的魔法总是能超乎我们的想象，它定可以治愈一切，带来成长，发掘惊喜，创造改变。许久没有见到练习生们，小葵甚是思念，于是通知大家每人发回一则Vlog，分享一下宅家趣事，在学业忙碌之余，他们的"花果三"又开始热闹了起来。下面就请大家查收练习生们的"freestyle"的Vlog吧，全员拍摄手法稚嫩，请大家多多谅解啦！`,
  showId: "2",
  link: "https://www.bilibili.com/video/BV1ZE411j7RN?t=8.6",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "20",
  date: "2020-03-08",
  title: "（2）：命题Vlog",
  content: `练习生们的"命题Vlog"回信来了，每位朋友在家发挥自己的创作能力努力完成了这次命题，在拍摄期间也依旧遇到了很多小问题（依旧包括不正确的滤镜使用出现的尖下巴特效以及自主研发升级版发型），但是练习生们也都在闲暇之余收获了开心，也希望这份开心可以传递给大家～（PS：所有内容纯属脑洞和娱乐，切勿当真哦！）在收到回信的同时也接收到了一些附加信息，和大家分享：床被跳塌了！衣服被撑破了！口红怎么被啃掉了这么多？……`,
  showId: "2",
  link: "https://www.bilibili.com/video/BV1YE411M7DG?t=0.4",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "21",
  date: "2020-03-16",
  title: "（3）：互相命题Vlog",
  content: `第三期"练习生互相命题"Vlog回信请接收！这一次，命题的决定权交到了练习生手里，看看他们相互出了哪些"难题"吧～（P一下S：经过这段时间的自主拍摄，练习生们的拍摄也有了很大的进步，不过还是有小缺陷，大家多多包涵～另外，在"有求必应屋"里已经装满小伙伴们的留言，那就请大家期待下一次练习生们的回信吧！）`,
  showId: "2",
  link: "https://www.bilibili.com/video/BV1uE411G7xt?t=0.3",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "22",
  date: "2020-03-23",
  title: "（4）：留言命题Vlog",
  content: `第四期"粉丝留言命题"Vlog回信到了～这一次我们收集了部分留言命题，看看练习生们是如何给这些命题们一份答案的吧！（PS一下：写信与指定题为上一次交Vlog前五名练习生主动选择相关写信对象及题目，后续练习生则为顺位指定）`,
  showId: "2",
  link: "https://www.bilibili.com/video/BV1xE411c7sf?t=0.6",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "23",
  date: "2020-03-29",
  title: "（5）：好久不见，我的朋友～",
  content: `好久不见，超级想念～漫漫寒冬之后，朋友们终于有一个机会拥抱彼此，一起来收获久违之后的熟悉吧！`,
  showId: "2",
  link: "https://www.bilibili.com/video/BV1N5411r7zD?t=7.0",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "24",
  date: "2020-03-30",
  title: "（6）：画出朋友们",
  content: `#钻进25小时 这是练习生的个人分享笔记，今日的分享，是他们眼中的伙伴们，不同的笔触，表达出的是不同人心中的世界。在你们的心中，他们是什么样的呢？`,
  showId: "2",
  link: "https://www.bilibili.com/video/BV1mA411876Z?t=0.7",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "25",
  date: "2020-04-01",
  title: "（7）：愚人节特辑",
  content: `Everybody！愚人节快乐！转眼2020已经过了四分之一，四月的第一天是个特别的日子，部分被选中的练习生（NPC）接到了一份特别的"整蛊mission"，进来康康他是否整蛊成功！（适当整蛊，切勿当真哦！）`,
  showId: "2",
  link: "https://www.bilibili.com/video/BV1hK4y1C7Lq?t=7.1",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "26",
  date: "2020-04-06",
  title: "（8）：糟糕的默契度",
  content: `OMG！这次突然才发现，大家之间这"糟糕"的默契值～本次是非常不负责任的默契度考验，如果有被忽略的生活细节，需要更加仔细的去记住哦！`,
  showId: "2",
  link: "https://www.bilibili.com/video/BV1oK411L7vp?t=0.3",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "27",
  date: "2020-04-13",
  title: "(9）：演技派的修炼",
  content: `随机课堂小测又来了～❗️观看前请谨慎考虑，如有雷同，巧合巧合巧合......`,
  showId: "2",
  link: "https://www.bilibili.com/video/BV1Sc411h7fR?t=0.7",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "28",
  date: "2020-04-19",
  title: "《想见你的倒计时》（上）——第一个倒计时 BEGIN",
  content: `"当无数的突发事件涌来时，我们向来选择勇敢接受，面对它，思考它，努力攻克它。"来自练习生们的第一个倒计时记录——惊慌的节目筹备。TF家族特别舞台企划《想见你的倒计时》（上）——第一个倒计时，BEGIN。`,
  showId: "1",
  link: "https://www.bilibili.com/video/BV1bA411b7Rq?t=44.8",
  images: ["https://i.ibb.co/3mC81vVc/b9c5d0b5ffa6767d6c3f0539b5c0179fd1d11baf.jpg"]
},
{
  id: "29",
  date: "2020-05-01",
  title: "《想见你的倒计时》（下）——第二个倒计时 BEGIN",
  content: `"你会发现，只要你下定了一个决心，就会增添无穷的力量，未来还有千千万万个倒计时，但我们，无所畏惧。"来自练习生们的第二个倒计时记录——击碎阻碍与阔步向前。TF家族特别舞台企划《想见你的倒计时》（下）——第二个倒计时，BEGIN。`,
  showId: "1",
  link: "https://www.bilibili.com/video/BV1jQ4y1N7dx?t=12.4",
  images: ["https://i.ibb.co/3mC81vVc/b9c5d0b5ffa6767d6c3f0539b5c0179fd1d11baf.jpg"]
},
{
  id: "30",
  date: "2020-05-03",
  title: "歌曲COVER《五月天》S.H.E",
  content: `丢掉烦恼，迎接初夏的味道，快乐永远是最最重要，你要明白，只有爱才能带你游历乐园。🎠练习生的声乐记录《Sound of soul》（2）——《五月天》S.H.E 歌曲COVER "五月的天/刚诞生的夏天/梦也开始要鲜艳"`,
  showId: "14",
  link: "https://www.bilibili.com/video/BV1Yf4y1m7JX?t=13.7",
  images: ["https://i.ibb.co/t0B1bvm/80c5ff26d86925a9d95e4b559a8812be7ae2d6da.jpg"]
},
{
  id: "31",
  date: "2020-05-10",
  title: "（10）：哈哈哈，请控寄你寄几！",
  content: `游戏时间又来到～本次录制在不断的"哈哈哈哈哈哈哈哈哈"中完成，大家收获了快乐，但是也要好好控寄你们寄几啊！《"花果三"魔法时间》（10）"哈哈哈，请控寄你寄几！"上线！`,
  showId: "2",
  link: "https://www.bilibili.com/video/BV1oe411p7SJ?t=9.2",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "32",
  date: "2020-05-24",
  title: "（11）：意料之外的快问快答（上）",
  content: `同样的问题遇上不同的朋友们，他们给出了一个比一个"意外"的答案～（剩下的朋友们，请期待后续～）《"花果三"魔法时间》（11）意料之外的快问快答（上）`,
  showId: "2",
  link: "https://www.bilibili.com/video/BV1Uk4y167HM?t=4.0",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "33",
  date: "2020-05-20",
  title: "舞蹈&歌曲COVER《姐姐恋爱吧》",
  content: `这个特别的日子，是给大家勇敢说出"爱"的一个机会，无论何种爱，无论是被爱着还是想要去爱，都可以用自己的方式去表达出来。当你呼唤爱，就会被爱包围；勇敢去爱，爱也会让我们变得勇敢！练习生的舞蹈记录《My Red Face》（3）——《姐姐恋爱吧》声乐&舞蹈COVER～`,
  showId: "2",
  link: "https://www.bilibili.com/video/BV1bg4y1B7eh?t=3.5",
  images: ["https://i.ibb.co/kgWtfSJx/bed4af532d5b7b889af50cf184568ab6dc7bfec0.jpg"]
},
// ====== 2020年 花果三魔法时间 ======
{
  id: "34",
  date: "2020-05-31",
  title: "(12)六一儿童节特辑之孤独的灵魂(上)",
  content: "告别繁忙又欢乐的五月，就要迎来最期待的六一儿童节啦！回想起去年的儿童节好像还历历在目，那么今年的六一，练习生们又会是怎样度过的呢？",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1NZ4y1W7Rc?t=1.6",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "35",
  date: "2020-06-01",
  title: "(13)六一儿童节特辑之孤独的灵魂(下)",
  content: "练习生们的首次挑战终于完结，本次”大胆“挑战，收获的是不一样的经历和感受，在面对未知的时候，我们需要去战胜恐惧，需要互相鼓励，需要握紧双手，一起走向“下一次”！",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1Ez4y197Fd?t=7.8",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "36",
  date: "2020-06-07",
  title: "(14)意料之外的快问快答(下)",
  content: "令人哭笑不得的快问快答后续来啦～小伙伴们请查收！",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1nz411i74p?t=2272.1",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "37",
  date: "2020-06-10",
  title: "(15)演技派的修炼 2.0",
  content: "本次是来自练习生们努力的演技挑战！努力尝试突破自我，虽然还是不能很好的去演绎，但是仍旧收获max～期待下一次的精彩演出吧！⚡️",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1BK4y1x7QL?t=1.4",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
// ====== 家族运动会 ======
{
  id: "38",
  date: "2020-06-21",
  title: "2020 TF家族夏季运动会",
  content: "夏天，绿茵，操场，少年；雨后，微风，欢呼，大笑；阳光，奔跑，我们，和你们。2020 TF家族夏季运动会（全集）上线，点击即可充满限定份的2020夏日活力值",
  showId: "10",
  link: "https://www.bilibili.com/video/BV1NK4y147rm?t=0.7",
  images: ["https://i.ibb.co/F4PL3Px1/d54b71e5fc4667bc10b2449d6ba50fcd4de9cb85.jpg"]
},
// ====== 花果三魔法时间（续） ======
{
  id: "39",
  date: "2020-07-06",
  title: "(16)朋友们的第一次合宿",
  content: "马上就要放暑假啦，夏天就是要和小伙伴一起度过！这一次，练习生们迎来了第一次合宿，虽然第二天还是要去上学，但是仍旧是度过了一个难以忘怀的合宿day！",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1Ei4y1V7tp?t=3869.4",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "40",
  date: "2020-07-18",
  title: "01.快乐儿童们的暑假来了！",
  content: "转眼2020过半，夏天让我们又相聚了?《练习生日常不过的日常》01.快乐儿童们的暑假来了！Ps：练习生的日常系列，每周六见！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1c54y1B75v?t=195.8",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "41",
  date: "2020-07-25",
  title: "02.是重新调整自我的一周",
  content: "暑假伊始，就会遇到烦恼，我们要做的就是努力甩掉！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1Ca4y1a7vk?t=4.8",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 三班，不一般！ ======
{
  id: "42",
  date: "2020-08-01",
  title: "01“想哭时候只要倒立，眼泪就不会流出来。”——《流星花园》",
  content: "TF家族初中生们的快乐日常来了！“想哭的时候只要倒立，眼泪就不会流出来。”——《流星花园》《三班，不一般！》第一集上线。后附精彩花絮～",
  showId: "5",
  link: "https://www.bilibili.com/video/BV1F54y1D7fs?t=1.1",
  images: ["https://i.ibb.co/N2sxk7WL/fb235050b02b85d69e20e3bba89e268eaec0ec46.jpg"]
},
{
  id: "43",
  date: "2020-08-01",
  title: "02“你长得帅，我对你有信心。”——《无间道》",
  content: "现在，比拼升级！“你长得帅，我对你有信心。”——《无间道》《三班，不一般！》第二集is coming！",
  showId: "5",
  link: "https://www.bilibili.com/video/BV1jK411n7Bv?t=17.8",
  images: ["https://i.ibb.co/N2sxk7WL/fb235050b02b85d69e20e3bba89e268eaec0ec46.jpg"]
},
// ====== 练习生日常不过的日常（续） ======
{
  id: "44",
  date: "2020-08-01",
  title: "03.快乐自由的公休日",
  content: "山城七月，练习生们享受了一次难得的惬意时光～ 没有任务，没有烦恼。 让这个夏天，只留下快乐吧！ 八月，我们来了！！《练习生日常不过的日常》03.自由快乐的公休",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1fK411J73g?t=25.7",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 三班，不一般！（续） ======
{
  id: "45",
  date: "2020-08-07",
  title: "03“迪迦，永远的神！”——奥特之王",
  content: "TF家族初中生们的快乐日常keep going on！“迪迦，永远的神！”——奥特之王《三班，不一般！》第三集来了！本集要素过多，建议缓慢观看～PS：感谢“女子学校”的朋友们倾情客串！",
  showId: "5",
  link: "https://www.bilibili.com/video/BV1qK4y1v73S?t=2.2",
  images: ["https://i.ibb.co/N2sxk7WL/fb235050b02b85d69e20e3bba89e268eaec0ec46.jpg"]
},
// ====== 练习生日常不过的日常（续） ======
{
  id: "46",
  date: "2020-08-08",
  title: "04.Reverse voice",
  content: "繁忙的训练日中，总有朋友在“夹缝”中寻找快乐！《练习生日常不过的日常》04.Reverse voice",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1bk4y117YP?t=0.6",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 花果三魔法时间（续） ======
{
  id: "47",
  date: "2020-08-09",
  title: "(17)演技派的修炼3.0",
  content: "久违的小剧场又来了～本次，挑战升级！两组盆友们进行了同片段PK演绎，来康康哪一组更胜一筹呢？",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1VV411U7mJ?t=1.2",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "48",
  date: "2020-08-13",
  title: "《演技派的修炼》3.0 《解救吾先生》片段演绎-A组",
  content: "A组：朱志鑫 饰 张华/张极 饰 小窦/张泽禹 饰 吾先生",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1Fp4y1v71Z?t=4.0",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
// ====== 三班，不一般！（续） ======
{
  id: "49",
  date: "2020-08-14",
  title: "04“仪式感是疲惫生活里的英雄梦想。”——马克肯米尔《仪式感》",
  content: "烈日炎炎，躲进空调房里，冰西瓜配泡面番，十分满足！“仪式感是疲惫生活里的英雄梦想。”——马克肯米尔《仪式感》《三班，不一般！》第四集点击开始！",
  showId: "5",
  link: "https://www.bilibili.com/video/BV1rK4y1v7SF?t=6.6",
  images: ["https://i.ibb.co/N2sxk7WL/fb235050b02b85d69e20e3bba89e268eaec0ec46.jpg"]
},
// ====== 练习生日常不过的日常（续） ======
{
  id: "50",
  date: "2020-08-15",
  title: "05.normal week! but really free.",
  content: "本周的目标是：因为要蓄力，所以也要学会放松和调节。来看看本周孩子们“normal life”?",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1uf4y197Zk?t=57.4",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 三班，不一般！（续） ======
{
  id: "51",
  date: "2020-08-21",
  title: "05“我有一言，请诸位静听。”——诸葛孔明",
  content: "校园小组活动来临，看三班的小组成员们如何使出浑身解数，招徕各方“贤士”！“我有一言，请诸位静听。”——诸葛孔明《三班，不一般！》第五集COMING",
  showId: "5",
  link: "https://www.bilibili.com/video/BV1jK411M7yU?t=1.1",
  images: ["https://i.ibb.co/N2sxk7WL/fb235050b02b85d69e20e3bba89e268eaec0ec46.jpg"]
},
{
  id: "52",
  date: "2020-08-21",
  title: "06季终集",
  content: "最爱的运动会终于来了！入场式、演讲稿、项目比拼，快乐挥（bú）洒（shàng）汗（kè）水的机会终于来了！“更高、更快、更强”《三班，不一般！》季终集，那我们下学期见！",
  showId: "5",
  link: "https://www.bilibili.com/video/BV1a54y1e7Eh?t=0.6",
  images: ["https://i.ibb.co/N2sxk7WL/fb235050b02b85d69e20e3bba89e268eaec0ec46.jpg"]
},
// ====== 练习生日常不过的日常（续） ======
{
  id: "53",
  date: "2020-08-23",
  title: "06.吵闹的课桌游戏",
  content: "本周是在紧张中度过的，于是，练习生们商量决定！来一场比拼反应力的课桌小游戏～《练习生日常不过的日常》06.吵闹的课桌游戏",
  showId: "3",
  link: "https://www.bilibili.com/video/BV19K411T71K?t=0.7",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 三班，不一般！ ======
{
  id: "54",
  date: "2020-08-23",
  title: "心愿便利贴",
  content: "“约好了不见不散，下个夏天来的时候，请大家还在我们身边！”练习生的声乐记录《Sound of soul》（7）——《老教室》-八三夭乐团 歌曲COVER",
  showId: "5",
  link: "https://www.bilibili.com/video/BV12v411y7nX?t=0.7",
  images: ["https://i.ibb.co/jZ6qhMRR/c74e5b9526b2b090975e85eae50c5ff1ef6af008.jpg"]
},
{
  id: "55",
  date: "2020-08-29",
  title: "07.the end of summer training",
  content: "转眼暑假已经接近尾声，本期是记录的练习生们部分课程小测，在这个假期，看看大家的收获与成长吧！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1ut4y1S7Af?t=11.9",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 花果三魔法时间 ======
{
  id: "56",
  date: "2020-08-30",
  title: "(18) Pink memories",
  content: "一到夏天，我们就会想起第一次见面的那个时候；我们之间已经创造了这么多回忆，今天来一番考验吧！",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1La4y1E7GX?t=1.2",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
// ====== 非系列物料 ======
{
  id: "57",
  date: "2020-08-30",
  title: "《火柴》三代练习生七周年不完全记录",
  content: "一根小小的火柴，也一直在等待自己发光的那一刻。即使现在的我们，光芒微小。时间对于我们来说，就是去积攒发光发热的能量。练习生们，请勇敢的去获取能量，发出更大的光芒吧！三代练习生七周年不完全记录-火柴-",
  showId: "14",
  link: "https://www.bilibili.com/video/BV1gh411R7Qv?t=0.9",
  images: ["https://i.ibb.co/6knRCvn/e0685a24d642f5cb9a22c747ef66740c520b2f89.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "58",
  date: "2020-09-05",
  title: "08.Fragments store.",
  content: "练习生们对于课间小游戏逐渐“上瘾”，来看看新的一周他们的游戏碎片收集吧！《练习生日常不过的日常》08.Fragments store.",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1H54y127uX?t=33.6",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "59",
  date: "2020-09-12",
  title: "09.Table game2.0",
  content: "游戏收集keep going on，本周收到的是来自热心练习生们的高人气投票桌面游戏。大家一起来看看吧～",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1eZ4y1N7CV?t=18.0",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "60",
  date: "2020-09-20",
  title: "10.Table game,plz be the last time",
  content: "挤出时间进行的课间游戏——“卧底”是who？Ps：本次游戏由热心练习生xxx“墙裂”建议，但由于各位玩家还没有玩出精髓，大家在几轮游戏后，决心内部升级一下。《练习生日常不过的日常》10.Table game，plz be the last time！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1zv411C7oS?t=27.4",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "61",
  date: "2020-09-26",
  title: "11.那些绝对不敢在学校里面做的事",
  content: "平平凡凡的上学日，很多朋友也因为学校增加的课程而同时也增加了烦恼。但是，智慧改变人生，练习生们靠自己的努力，在公司里“释放”了自己的“学业压力”。《练习生日常不过的日常》11.那些绝对不敢在学校里面做的事",
  showId: "3",
  link: "https://www.bilibili.com/video/BV19D4y1o7iM?t=37.4",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "62",
  date: "2020-10-04",
  title: "12.Dance! Then, waiting for our stage",
  content: "本周日常概括：以舞蹈为主题。Then，waiting for our stage！《练习生日常不过的日常》12.Dance！Then，waiting for our stage！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1Uf4y1q7Uo?t=193.1",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 非系列物料 ======
{
  id: "63",
  date: "2020-10-06",
  title: "《诗的诞生》拍摄花絮",
  content: "诗 诞生于 自由 漫天的思绪 和我们的存在 TF家族三代练习生《诗的诞生》拍摄花絮",
  showId: "14",
  link: "https://www.bilibili.com/video/BV1NT4y1w7CH?t=0.9&p=5",
  images: ["https://i.ibb.co/TBDxm5hz/a90183d6349987c9bc1be7742f8adda7a50cbb52.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "64",
  date: "2020-10-10",
  title: "13.诗的诞生拍摄日",
  content: "点击收看拍摄日的闲暇三小时。",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1t54y1R7iP?t=27.7",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "65",
  date: "2020-10-17",
  title: "14.在《雨季来临》之前",
  content: "本周是路演之前的筹备记录，继续收集课间“迷惑行为”。",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1Q54y1k7nN?t=650.4",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 花果三魔法时间 ======
{
  id: "66",
  date: "2020-10-11",
  title: "(19)18楼Hide and seek大作战",
  content: "在一个决定放松一下的夜晚，练习生又将“十八楼”掀了个“底朝天”，一场特别的hide and seek大作战",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1q54y1R7LA?t=0.8",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
{
  id: "67",
  date: "2020-10-19",
  title: "(20) Mission and speed(上)",
  content: "一次特别的任务+一场速度的比拼，来看看在这次的困难面前，练习生们如何“击碎”阻碍“苦中作乐”的吧！《“花果三”魔法时间》（20）Mission and speed（上）",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1ei4y177Mn?t=2.1",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "68",
  date: "2020-10-25",
  title: "15.我们，加油 Go!",
  content: "生活需要调剂品，需要新鲜感，随着舞台的来临，练习生们也进入了“紧张”状态。",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1Vy4y187iM?t=19.1",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 花果三魔法时间 ======
{
  id: "69",
  date: "2020-10-25",
  title: "(21)Mission and speed(下)",
  content: "“家务”整理，合作下厨，与“新生物”们的相识，用智慧去见招拆招吧！",
  showId: "2",
  link: "https://www.bilibili.com/video/BV12a411A7xq?t=10.2",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "70",
  date: "2020-10-30",
  title: "16.倒计时第八天!",
  content: "本周我们迎来的是——TF家族第三代练习生第四次公演舞台节目不负责任猜测。",
  showId: "3",
  link: "https://www.bilibili.com/video/BV15i4y177wP?t=38.8",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "71",
  date: "2020-11-08",
  title: "17.舞台冲刺的碎片时间",
  content: "舞台紧张筹备中的碎片日常，练习生们都辛苦啦，请期待下周舞台的上线吧！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1oi4y157Ce?t=3.1",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 舞台及筹备 ======
{
  id: "72",
  date: "2020-11-14",
  title: "TF少年进化论-圈（舞台篇）",
  content: "你的每一面，构成了自我的圈；我们的生活轨迹，划成了我们的圈。TF少年进化论（第四期）“圈” ，舞台篇章，开启。",
  showId: "1",
  link: "https://www.bilibili.com/video/BV1yK4y1j7EV?t=1.0",
  images: ["https://i.ibb.co/pvgW5H3z/a609e85ba747676078836f7c589a682d12496a2d.jpg"]
},
{
  id: "73",
  date: "2020-11-21",
  title: "TF少年进化论-圈（制作篇）",
  content: "人的每一面构成了自我的圈，有的人生在圈中，一生都在渴望更大的世界。TF少年进化论 第四期“圈” 制作篇——《“圈”的起点与终点》第一集-新的选择 第二集-Battle时刻 第三集-“采访之夜” 主题拍摄花絮 第四集-关于伤痛和疲惫 第五集-“搬砖日”与“给你们的真心话” 第六集-Reaction与本次的终点，今日画上句点《“圈”的起点与终点》第六集-Reaction与本次的终点，周天见！",
  showId: "1",
  link: "https://www.bilibili.com/video/BV13K4y1j7SJ?t=3.7",
  images: ["https://i.ibb.co/pvgW5H3z/a609e85ba747676078836f7c589a682d12496a2d.jpg"]
},
{
  id: "74",
  date: "2020-12-05",
  title: "18.平静调整ing",
  content: "恢复日常训练的第一周，十二月就这样来临了，年末的狂欢庆祝正在准备开启中。",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1RK41137Wx?t=0.6",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 花果三魔法时间 ======
{
  id: "75",
  date: "2020-12-06",
  title: "(22)终极狼人对决2.0",
  content: "我们的狼人之夜又来了！这是时隔这么久（查看并熟读攻略）之后我们聚集在一起的对决，虽然还没有玩得很6，但是3.0我们已经在“预谋”中了！",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1k54y167wV?t=2.1",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "76",
  date: "2020-12-12",
  title: "19.剪那瑞行 showcase",
  content: "训练开启，惊喜也在筹备中！ps：不负责任的“剪那瑞行”又要来了！注意：内容全是胡说八道！！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV155411G7VF?t=10.1",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "77",
  date: "2020-12-19",
  title: "20.冬日特辑 明天见!",
  content: "每学会一首新歌就有不一样的含义，新的旅程就要开启了！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1tX4y1u7WH?t=0.7",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 非系列物料 ======
{
  id: "78",
  date: "2020-12-20",
  title: "冬日特辑-《水晶球与下雪夜》",
  content: "TO：如果知道生活的魔法就会变成小精灵。大雪前的夜晚，古旧的木桌上摆放着新鲜的苹果与热腾腾的蘑菇汤；大雪要来临了，要在下雪前赶回家中，囤积好的粮食，足够我们拥挤着度过一段冬日时光；大雪正在窗外呼啸，门会因为积雪而不能再推开，我们只能在家中点燃赤色的温暖源，伴着快乐的歌声，我们手牵手开始舞蹈，打闹是我们，欢笑也是我们。这是在这个大世界中，独属于我们的小世界。如果一切可以封存，就让童话不被擦除，就让纯粹可以保留，就让这段旅程开始就永远不结束。",
  showId: "14",
  link: "https://www.bilibili.com/video/BV12V411h7VT?t=19.6",
  images: ["https://i.ibb.co/pvnsSHJN/d47dfbf033cc90517d82c848195c8d80963982b3.jpg"]
},
// ====== 花果三魔法时间 ======
{
  id: "79",
  date: "2020-12-20",
  title: "(23)包饺子，不在话下!",
  content: "俗话说，吃饺子容易，包饺子难！但是我们人多力量大，啥事儿都不怕！点击收看练习生们包饺子大比拼，也提前祝福大家，冬至快乐！",
  showId: "2",
  link: "https://www.bilibili.com/video/BV15f4y1e7Av?t=0.8",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "80",
  date: "2020-12-26",
  title: "21.练就肺活量!",
  content: "年末最痛苦的就是期末的紧迫，那就找个时间来释放自己的压力吧～",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1Dv41147Lx?t=71.4",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 一起开始的旅程 ======
{
  id: "81",
  date: "2020-12-31",
  title: "第一站抵达-军训中的跨年",
  content: "To 2020：亲爱的2020年，我们是TF家族第三代练习生，今年是我们和大家见面的第二年了，今年每个人都发生了巨大变化，也经历了很多新的变化，好的和不好的像一团毛线一样，互相交织在了一起。如果我们的成长是个罐子，那就要什么味道都要收藏进去，哪有人的这个过程是完美的呢。2021，要见面了，先说好哦，我们是“不乖”的小孩，总是不按常理出牌，但是因为有一个想要做的梦，所以会充满期待的向着那个方向奔跑下去，不管你是什么样子，我们来了！",
  showId: "4",
  link: "https://www.bilibili.com/video/BV1ry4y1e7Gj?t=1.0",
  images: ["https://i.ibb.co/YS47gc0/4ba8199b05b8bf9806fa7d503f893df33e5a1d03.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "82",
  date: "2021-01-02",
  title: "22.创作、表演和声乐(部分)月度考核coming",
  content: "本周经历了三次考核，来查收一下练习生们的月度丰收吧？",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1ei4y1w7U4?t=0.7",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "83",
  date: "2021-01-09",
  title: "23.剪那瑞行 早期海选珍贵影视资料曝光",
  content: "一月里，练习生们不仅要面对学校的考试，还要迎来各项月底考核，所有人都绷紧了“神经”于是，大家又翻箱倒柜，试图在枯燥的生活中寻找一丝快乐，终于！找出了TF集团下“男子天团”——TF Generation早期海选珍贵影视资料......",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1Bh411271r?t=13.4",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 一起开始的旅程 ======
{
  id: "84",
  date: "2021-01-15",
  title: "第二站抵达-“放松”是正骨的开始!",
  content: "不知道在新年的第一下钟声敲响的时候，你有没有许下新年愿望？关于自我，关于朋友，关于旅程，练习生们把心愿都装进了口袋！那么新年的第一次“旅程”就以“放松”为主题开始奔跑吧！",
  showId: "4",
  link: "https://www.bilibili.com/video/BV1W54y1s7tr?t=0.7",
  images: ["https://i.ibb.co/YS47gc0/4ba8199b05b8bf9806fa7d503f893df33e5a1d03.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "85",
  date: "2021-01-16",
  title: "24.夹缝中的练习 time",
  content: "随着期末的“逼近”，练习生们也投入到紧张的课业之中，提前预祝成员们都能取得好成绩！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1JA411H7tC?t=14.5",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 花果三魔法时间 ======
{
  id: "86",
  date: "2021-01-13",
  title: "演技派的修炼4.0《滚蛋吧!肿瘤君》双组PK",
  content: "“在生命尽头，与情割舍，与爱别离。”练习生们的小剧场迎来了第四期挑战，本次他们面临的挑战非比寻常，在看似大段无起伏的台词与单一的场景中，找寻的是一份常人难体会的“共情”与“表达”，倒计时一周的演技考核与实景拍摄，action！“我们喜欢挑战！”这是这一代人，不惧的特别模样！也希望大家多多留言指正不足，一起见证练习生们的修炼吧！",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1kN411d7tG?t=2.2",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "87",
  date: "2021-01-24",
  title: "25.失误不可怕，请继续努力!",
  content: "本期部分练习生们遭遇“时间”大堵车，繁忙的学业正好碰上考核日，一个不小心就会遇上失误！来看看练习生们如何解决困难吧！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV17r4y1M7uK?t=10.1",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 一起开始的旅程 ======
{
  id: "88",
  date: "2021-01-29",
  title: "第三站抵达-鬼屋+恐怖箱=哇哇啊!",
  content: "练习生们对于什么最期待？那就是未知！未知是没有任何准备的“突袭”，是“豪华”汽车驶向“远方”，是在黑暗的工厂中“mission clear！”，是饱餐后的“惊悚”，一波未平一波又起！",
  showId: "4",
  link: "https://www.bilibili.com/video/BV1Vv411e7sn?t=0.6",
  images: ["https://i.ibb.co/YS47gc0/4ba8199b05b8bf9806fa7d503f893df33e5a1d03.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "89",
  date: "2021-01-30",
  title: "26.紧张的乐理课考试",
  content: "本周，最令练习生们印象深刻的就是乐理课考试，来看看练习生们的基础是否牢固吧！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1wz4y1D7oX?t=1.3",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "90",
  date: "2021-02-06",
  title: "27.2021的寒假开始的集训日常",
  content: "寒假集训开始，练习生们也紧张开始筹备一些新的内容，在气氛紧张的时间中，来查收一下二月初的日常吧～",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1tf4y1r7cT?t=17.7",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 一起开始的旅程 ======
{
  id: "91",
  date: "2021-02-12",
  title: "新年特别篇-《SDFJ集团年终聚会》开始啦!",
  content: "亲爱的朋友们！牛年快乐！全新的一天，开启全新的一年。在这个普天同庆的日子里，我们欢聚一堂，歌声嘹亮，喜气洋洋，共同把美好的未来展望！✨大年初一，“闹腾”过年",
  showId: "4",
  link: "https://www.bilibili.com/video/BV1Ny4y1H7mB?t=1.5",
  images: ["https://i.ibb.co/YS47gc0/4ba8199b05b8bf9806fa7d503f893df33e5a1d03.jpg"]
},
{
  id: "92",
  date: "2021-02-19",
  title: "新年特别篇(2)“匿名”礼物大揭晓",
  content: "欢乐的过年时光已经完结，年后再见面，朋友们好像又长高了哦！在见面之前，朋友们为彼此准备了一份特别的“匿名”礼物，来接收这一份份“独特”的心意吧！",
  showId: "4",
  link: "https://www.bilibili.com/video/BV17V411q7JJ?t=0.8",
  images: ["https://i.ibb.co/YS47gc0/4ba8199b05b8bf9806fa7d503f893df33e5a1d03.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "93",
  date: "2021-02-21",
  title: "28.开工是从课间小游戏开始热身!",
  content: "春天来了！来和练习生们一起热身开工吧！?",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1Gf4y167Dy?t=4.7",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "94",
  date: "2021-02-27",
  title: "29.练习生们再次申请的二选一游戏!",
  content: "努力完善自己的训练内容，请期待练习生们的成果吧！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1cr4y1P7qk?t=30.5",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 一起开始的旅程 ======
{
  id: "95",
  date: "2021-03-05",
  title: "第四站“沸”起来火锅店 开业前的筹备工作",
  content: "“围炉聚炊欢呼处，百味消融小釜中。”美味的火锅总是不少人心中的美食TOP！练习生们也不例外，可是一家将一家火锅店交付于他们手中时，他们又将如何“化解”本站“旅程”的难题呢？",
  showId: "4",
  link: "https://www.bilibili.com/video/BV1j5411K716?t=2.4",
  images: ["https://i.ibb.co/YS47gc0/4ba8199b05b8bf9806fa7d503f893df33e5a1d03.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "96",
  date: "2021-03-06",
  title: "30.惊喜加载中...",
  content: "本周的主题是繁忙的开学准备，和一个心愿的“重启”。",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1Up4y1H75K?t=0.9",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 一起开始的旅程 ======
{
  id: "97",
  date: "2021-03-12",
  title: "第五站“沸”起来火锅店 飞哥火锅营业中!",
  content: "气味浓郁的制作与备菜，沉重又欢声笑语的采购。一声“飞哥火锅！”，沸沸扬扬，一看“真是了不得！”。完美地又完成一次小挑战，练习生们也将迎来自己“理想”的一站！",
  showId: "4",
  link: "https://www.bilibili.com/video/BV1ev411h7LL?t=1.5",
  images: ["https://i.ibb.co/YS47gc0/4ba8199b05b8bf9806fa7d503f893df33e5a1d03.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "98",
  date: "2021-03-13",
  title: "31.最难的时候有坚持努力与陪伴",
  content: "在大家慢慢都进入变声期的“季节”，在慌乱的过程中，依旧选择勇敢面对变化的自己吧！别害怕，变化只是成长必经的路，我们只管用力向前冲！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1ky4y177qU?t=21.1",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "99",
  date: "2021-03-21",
  title: "32.成长必须要快乐灌注",
  content: "本周练习生的主题是忙中作乐，来收看日常训练与挑战准备期间的碎片时间吧！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV18V411Y78z?t=14.3",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "100",
  date: "2021-03-28",
  title: "33.心情自由自在",
  content: "恢复训练的并且轻松的一周。但是！不要放松警惕，朋友们要准备好！又要开始考核啦～",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1CU4y1a7mS?t=14.1",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 一起开始的旅程 ======
{
  id: "101",
  date: "2021-04-03",
  title: "第六站 季终站“去春游吧!”",
  content: "一起开始的旅程，从冬天开始，在春天迎来了季终。这一路，练习生们在不同的体验中，经历欢笑、积累生活经验，甚至也在不断练习着自己的表达与勇敢面对镜头。春天花会开，第一站中练习生们的“过去的遗憾”，也在最后一站这明媚的春光中被洗净，成长也就是这番意义，向着光的方向，一起走吧！",
  showId: "4",
  link: "https://www.bilibili.com/video/BV1ob4y1S7Hc?t=0.8",
  images: ["https://i.ibb.co/YS47gc0/4ba8199b05b8bf9806fa7d503f893df33e5a1d03.jpg"]
},
// ====== 练习生日常不过的日常 ======
{
  id: "102",
  date: "2021-04-03",
  title: "34.快乐跳舞的一群人",
  content: "精彩舞台后，也别忘了收看练习生们上周闹腾的日常！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1Nv411h7H7?t=11.3",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "103",
  date: "2021-04-10",
  title: "35.真心话与大冒险",
  content: "课件小游戏的“龙卷风”再次袭来，让我们看看勤奋训练的练习生们如何将快乐充斥闲暇时光吧！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1Fy4y147KZ?t=14.4",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
{
  id: "104",
  date: "2021-04-18",
  title: "36.噗哈哈哈",
  content: "课间小游戏继续！本周的主题是为了大笑，练习生们竟如此“豁出去”了！",
  showId: "3",
  link: "https://www.bilibili.com/video/BV1i64y1y7Mp?t=5.7",
  images: ["https://i.ibb.co/pVmBF3w/f6e395f22bd437f9f029829634a36dfb769645db.jpg"]
},
// ====== 花果三魔法时间 ======
{
  id: "105",
  date: "2021-04-18",
  title: "演技派的修炼5.0《少年的你》片段演绎",
  content: "本周练习生们迎来了一次小剧场小考，这次选择的是经典影片《少年的你》中的审讯室片段，点击观看练习生们如何消化角色故事，展现不一样的“你”。",
  showId: "2",
  link: "https://www.bilibili.com/video/BV1b64y1m7Vd?t=1.2",
  images: ["https://i.ibb.co/23Q5XgxH/fd9e16c1edfb49c03781ea0305ba0596c365f915.jpg"]
},
];