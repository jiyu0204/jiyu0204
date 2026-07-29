export interface BirthdayEvent {
  year: number;
  artist: 'zhangji' | 'zeyu';
  birthdayPost?: {
    content: string;
    images?: string[];
  };
  blessing?: {
    from: 'zhangji' | 'zeyu';
    content: string;
    images?: string[];
  };
  reply?: {
    content: string;
    images?: string[];
  };
  materials?: {
    teaserPosts?: {
      content: string;
      images?: string[];
      video?: {
        link: string;
        cover?: string;
        title?: string;
      };
    }[];
    otherPosts?: {
      content: string;
      images?: string[];
      video?: {
        link: string;
        cover?: string;
        title?: string;
      };
    }[];
    videos?: {
      title: string;
      link: string;
      cover?: string;
    }[];
  };
}

export const birthdayData: BirthdayEvent[] = [
  // ====== 2020年 ======
  {
    year: 2020,
    artist: 'zeyu',
    birthdayPost: {
      content: '今天是我们有着超强方言感染力的"快乐喷泉"——小宝张泽禹的生日！（撒花🎉）在来到家族的这段时间里，你总是给大家带来很多欢乐，新的一岁，要赶紧长牙，快快长高，更要一直开开心心，用你的强大能量，让所有人感受到你的"小禹宙"吧～🎂 ​​​',
      images: ['https://i.ibb.co/k2CyqN5h/e8715032ly1gec6fj1eklj222o340npe.jpg']
    }
  },
  // ====== 2021年 ======
  {
    year: 2021,
    artist: 'zhangji',
    birthdayPost: {
      content: '今天过生日了，我也14了。✌🏻我现在最大的心愿就是更渴望长大。越长大我会觉得自己每天都在变得不一样，也因为慢慢长大就会经历很多，然后就不会总是觉得大脑空白，处理事情的能力和对事物的判断力也不会那么混沌了，所以我就再快快快快快快一点长大吧！最后，今天的快乐也多多分给大家！🥳',
      images: ['https://i.ibb.co/0prpXYTF/007-Fw8-Yply1gnammrkyl7j334025g4qt.jpg']
    }
  },
  {
    year: 2021,
    artist: 'zeyu',
    birthdayPost: {
      content: '记录当下的快乐翻倍时刻，祝小宝在小禹宙的世界发光的同时也要永远做那个追求快乐的小男孩。不负心中的热爱，14岁生日快乐。愿少年在奔赴梦想的旅程中，勇往直前，给予满满的能量！🎂 ​​​',
      images: ['https://i.ibb.co/gZBVbksw/e8715032gy1gq20rlivuwj222q340hdu.jpg']
    }
  },
  // ====== 2022年 ======
  {
    year: 2022,
    artist: 'zhangji',
    birthdayPost: {
      content: '在音乐会录制的中途，我才换好衣服，所有人就都消失了……然后，然后就是谢谢兄弟们的惊喜，当时因为录制蛋糕没有吃太多，等着回来我们再一起去吃好吃的！谢谢大家🎂[嘻嘻][虎爪比心]',
      images: ['https://i.ibb.co/xKcGNZkz/007-Fw8-Ypgy1gz0h7yjin7j31zk1bpb29.jpg'   
    ]
    },
    blessing: {
      from: 'zeyu',
      content: '极兄：说来话长👀就先从新年祝福开始！㊗虎年好运🐯大吉大利！今天是个好日子的开始！祝生日快乐🎂要一直快乐下去，其他回头再说，就这样吧！',
      images: []
    },
    reply: {
      content: 'OK[嘻嘻]谢谢宝兄，有空来找我玩',
      images: []
    },
    materials: {
      otherPosts: [
        {
          content: '不知不觉我又长大了一岁。感觉时间过得好快，从2018年的那个夏天到现在2022年，已经过了差不多快要四年，生命里多了一群可以说我认为是这辈子最好的兄弟们！在这里和他们一起工作一起玩耍一起学习。在去年这一年，我真的收到了很多大家对我的关注和照顾，无论是在工作上、学习上还是生活上。自从开始在这边生活，我也在各方面也都有了明显的进步！我感觉我的生活不再那么单调，感觉更富有挑战性，感觉自己人生变得更刺激精彩，就像我和兄弟们这一群人一起手握手去闯关一样，所闯的每一关都会被记录下来，所闯的每一关都是为了我们自己，为了家人，为了所有一直在指引我们的人而战斗！不让他们失望！这次选择了唱一首歌，就想表达一种作为朋友的陪伴感，这种"朋友"感是有家人、有我的兄弟们，还有陪伴我支持我的朋友们，还有我的家乡，也有重庆这座城市。想谢谢这一切，其实我也很想努力和所有的这一切做朋友，我也很想成为"你们"很好的朋友，一位值得依靠的朋友！谢谢！！！14岁的我也常因为不懂事和冲动犯过一些错误，也常会遇到很多迷茫的时候，对很多事情充满了不自信，常常也不知道该怎么去处理好生活中的很多事，就是一个很小孩气的人。新的一岁，我最大的愿望，就是可以能够好好去思考，能独立解决很多问题，能够变成一个有担当的人，能够长得更高，学习和工作都能有进步！最后希望15岁的我，是更好的我！！\n\n「《爱（I Love You 3000 Chinese Version）》 COVER 原唱：王嘉尔 翻唱：张极」',
          video: {
            link: 'https://weibo.com/7026420593/LdKYJCjA7',
            cover: 'https://i.ibb.co/Q34yjVp6/007-Fw8-Yply1gyztn3qa4qj31hc0u041u.jpg'
          }
        },
        {
          content: '再分享一个！这个猫是我拍视频的时候，突然跑过来的！',
          images: [
            'https://i.ibb.co/ym60vT2k/007-Fw8-Ypgy1gz0haymdr7j31610u0zqh.jpg',
            'https://i.ibb.co/BHXyHnFS/007-Fw8-Ypgy1gz0hbhd0e2j30u0190aha.jpg'
          ]
        }
      ]
    }
  },
  {
    year: 2022,
    artist: 'zeyu',
    birthdayPost: {
      content: '很谢谢兄弟们准备的惊喜🤣最后把我黑了一跳哈！非常O！K！你们都等着！！谢谢大家的祝福 我们一起天天快乐✌️',
      images: [
        'https://i.ibb.co/RGkLNt8d/008k84-GPgy1h1rwdtuqqxj334022ou0z.jpg',
        'https://i.ibb.co/YBCYv0Tw/008k84-GPgy1h1rwio2xf7j30ow340nj3.jpg'
      ]
    },
    blessing: {
      from: 'zhangji',
      content: '张泽禹。15岁生日快乐🎂🎂🎊🎊 我本以为我来不及给你过生日了，但是没想到最后还是和大家一起给你过了15岁的生日😂，愿望都实现！最后祝我们中考加油！',
      images: ['https://i.ibb.co/S4K4sbcY/007-Fw8-Ypgy1h1ry9047zgj30u02kiqk4.jpg']
    },
    reply: {
      content: '可不呗，刚过完生日你就回去了，我们中考都要加油，然后暑假回来和兄弟们汇合哈哈哈哈',
      images: []
    },
    materials: {
      otherPosts: [
        {
          content: '哈喽又是我，我又出现在你的手机里。但这次不一样的是，十五岁的我出现在你的手机里👀berberber\n\n一眨眼，再眨眨眼，就告别了十四岁的自己，距离上一次已经很遥远，过去了又一个365天。我觉得以前每个阶段的自己，完成的事儿都是独属于那个时期的特别回忆，我很庆幸也很幸运，能做着自己喜欢的事儿✌️\n\n这一次《龙拳》对于我来说也是一个全新的尝试，一直很想要去尝试的国风歌曲加上我的电吉他，我自己还是挺满意的，希望你们也能够喜欢这个礼物🎁\n\n「《龙拳》COVER 原唱：周杰伦 /《虎山行》词曲来源：GAI周延/翻唱：TF家族-张泽禹」\n\n从小到大，自己觉得最珍贵的是：一个没有烦恼的人可以每天都很开心。我的愿望也很简单，继续没有烦恼，继续很开心。其实也没有什么烦恼可以烦恼哈哈哈哈哈哈哈哈😌\n\nHappy birthday to 十五岁的张泽禹\n你可以做得更好更棒✌️',
          video: {
            link: 'http://t.cn/A6XwAOtL',
            cover: 'https://i.ibb.co/G4FxP0tP/008k84-GPly1h1rufrjifzj33401r0e87.jpg'
          }
        },
        {
          content: '当了一回——宝大侠！',
          images: [
            'https://i.ibb.co/21V1m05b/008k84-GPgy1h1rv92y0epj334022onpf.jpg',
            'https://i.ibb.co/RpL7JkZk/008k84-GPgy1h1rv94w9kyj322o3404qr.jpg',
            'https://i.ibb.co/8LpfpQj8/008k84-GPgy1h1rv91aua1j322o340kjn.jpg',
            'https://i.ibb.co/cKDjGvPT/008k84-GPgy1h1rv972un7j322o340b2a-1.jpg',
            'https://i.ibb.co/3yKhJbk3/008k84-GPgy1h1rv9cwjb0j322o340qv6-1.jpg',
            'https://i.ibb.co/pvv3Zxt6/008k84-GPgy1h1rv9dul50j320v340hdt.jpg',
            'https://i.ibb.co/BKySstnG/008k84-GPgy1h1rv95zmn1j334022oe81.jpg',
            'https://i.ibb.co/d0vTRbLJ/008k84-GPgy1h1rv98d3q5j322o3404qr.jpg',
            'https://i.ibb.co/V5jFJP8/008k84-GPgy1h1rv9b1atqj322o340x6r.jpg'
          ]
        },
        {
          content: '小狗——偶遇的小狗，它的主人告诉我们它就叫小狗🐶小狗特别活泼，一来就窜湖里游了个自由泳哈哈哈哈哈哈哈🤣',
          images: ['https://i.ibb.co/WpGBhV1q/008k84-GPgy1h1rvj26f4sj30u0190agm.jpg']
        },
        {
          content: '蛋糕——是可以吃的🎸很ok！',
          images: ['https://i.ibb.co/1JBMmqZ2/008k84-GPgy1h1rvjv42dpj30u0280tq0.jpg']
        },
        {
          content: 'OK口头禅——整天都在OK OK了"一万遍"👀',
          images: ['https://i.ibb.co/39PNjB27/008k84-GPgy1h1rvkt0nzvj30u02807ih.jpg']
        },
        {
          content: '兄弟们——给了我一个难忘的生日party谢谢bro们！',
          images: ['https://i.ibb.co/PJTzGWv/008k84-GPgy1h1rvkcpkxbj31400u0n2v.jpg']
        },
        {
          content: '竹林间——蚊子为何就咬我？！一号二号三号四号无数个蚊子包…[苦涩]',
          images: ['https://i.ibb.co/fYgz1dw8/008k84-GPgy1h1rvim04v6j30s0340au8.jpg']
        },
        {
          content: '分享一些有趣的事情：泛舟——从一开始有些害怕的感觉，直到划到湖中间的位置，就无所畏惧了！特别好玩！',
          images: ['https://i.ibb.co/C3HQ1LW9/008k84-GPgy1h1rvgzjzmmj30u01907h2.jpg']
        }
      ]
    }
  },
  // ====== 2023年 ======
  {
    year: 2023,
    artist: 'zhangji',
    birthdayPost: {
      content: '难忘的生日！！！大家之后就知道发生了什么了哈哈哈哈哈哈哈哈哈太搞笑了[允悲]谢谢我的兄弟们，真的很开心🥳多分点开心给大家😁 ​​​',
      images: [
        'https://i.ibb.co/5hpmv05Q/007-Fw8-Ypgy1haqg9w9qv3j325037jnpf.jpg',
        'https://i.ibb.co/wZkXBHjG/007-Fw8-Ypgy1haqga4al3lj337k2514qs.jpg',
        'https://i.ibb.co/NnrhsbKG/007-Fw8-Ypgy1haqga8ludej325137k4qq.jpg'
      ]
    },
    blessing: {
      from: 'zeyu',
      content: '张极！杰瑞米！生日快乐哈，十六岁了[嘻嘻]希望你新年所有愿望都能实现的这个愿望新的一年可以实现哈（还有点绕嘴）然后也可以有机会参加一场自行车比赛，完成你的梦想😎',
      images: ['https://i.ibb.co/pjkZy887/008k84-GPgy1haqjw2aj4aj30u0140qbb.jpg']
    },
    reply: {
      content: '希望你也可以实现自己的愿望[嘻嘻]自行车比赛如果今年我有时间我一定去的！到时候你来当我的后勤部队',
      images: []
    },
    materials: {
      otherPosts: [
        {
          content: '今天我16岁了。[锦鲤附体]不敢相信！在离开家的时候，家人和啵啵一起给我庆祝了生日，虽然看着很平静，但是我真的很喜欢家里这种感觉，就是很安心。有的时候就是会很想家，想待在家里。但是我长大了，也需要自己出去冒险。去年这个时候的我，大家是知道的，相对来说还是很懵懂的，不能理解很多东西。但是现在的我感觉不一样了，知道了如何去处事待人，明白了什么是真正喜欢热爱的东西，也懂了如何去控制自己（思考啊情绪啊还有很多！）在唱歌这件事上，我觉得我现在很喜欢它，同时也知道有很多需要进步的地方，现在就是想把它弄得更好。我想来想去，我觉得我自己成长的路上缺少不了很多人的指引，更缺少不了"领悟"。"领悟"这个词贯穿了我整个15岁，虽然这个词我一直觉得好抽象，但是你领悟到了就体会到了。现在我喜欢做的事情就在我面前，所以我要努力拥抱它！并去完成自己心中想象自己会成为的样子！坚定自己的意志不被任何事影响！最后，希望16岁的我能继续坚持做我自己！\n\n（最后就是准备了一首歌，这段时间就分享给大家）',
          video: {
            link: 'http://t.cn/A693ncL9',
            cover: 'https://i.ibb.co/358Cv2ms/007-Fw8-Yply1haq955gkw9j327b18mb2c.jpg'
          }
        },
        {
          content: '[嘻嘻]蛋糕是我"精心挑选"的 上面的字给我妈了哈哈哈',
          images: ['https://i.ibb.co/5XybMg2M/007-Fw8-Ypgy1haq9lno4fqj31400u0qbu.jpg']
        },
        {
          content: '每次打包我都准备记录一下，但是你太肥了，行李箱肯定装不下',
          video: {
            link: 'http://t.cn/A693rZYX',
            cover: 'https://i.ibb.co/S71TGYXm/007-Fw8-Yply1haq98tgqgnj30u0140afc.jpg'
          }
        }
      ]
    }
  },
  {
    year: 2023,
    artist: 'zeyu',
    birthdayPost: {
      content: '和兄弟们也一起过了开心的生日，感谢兄弟们准备的礼物，因不可抗力因素来迟了很不好意思😞张中宝请客吃顿好的👌大家的祝福也收到了，谢谢谢谢！ ​​​',
      images: ['https://i.ibb.co/nqcGstfx/008k84-GPly1hdhu6v0f68j345k2rpqva.jpg']
    },
    blessing: {
      from: 'zhangji',
      content: '小宝B.A.Ozzy张泽禹！生日快乐🎂！现在和我一样大了[嘻嘻]祝你在新的一岁继续天天开心快乐！做自己喜欢做的事情！[嘻嘻]（还有！祝你能够抽到自己想要的卡和想踢就能随时踢上足球！！）',
      images: ['https://i.ibb.co/VWwjHwrZ/007-Fw8-Ypgy1hdi1iwkivgj30u0140wk5.jpg']
    },
    reply: {
      content: '谢谢你啊Justin 极ber✌️ 这下没有自行车也能陪你一起了[嘻嘻] 需要陪骑啥的找我啊[doge]那一下子 租个车就一起走了哈哈哈哈哈',
      images: []
    },
    materials: {
      otherPosts: [
        {
          content: '是！🧽！宝！',
          images: ['https://i.ibb.co/Q3nf4hPx/008k84-GPgy1hdhvtbomjvj31910u07bz.jpg']
        },
        {
          content: '哈喽又是我，十六岁的张小宝、张中宝、大禹又出现在你的手机里✌️跟十五岁的自己say bye-bye开心告别嘿嘿。本来呢，准备了一个有意思的小惊喜，但是想准备充分一点，只能等等了，和大家晚点再分享这份惊喜。（👀）\n\n再唠嗑唠嗑去成都一日游的故事吧。这是一次说走就走的旅行，一大早带好身份证就出发去高铁站了很O！K！ 感觉应该是旅行前的兴奋感来了，一点儿都不犯困，老师们说我在车上唠嗑了一路🤣一天之间在两个城市之间蹦哒的奇妙感觉！\n\n前方张中宝抵达目的地——大熊猫基地🐼\n前方张小宝抵达目的地——美食街🍨🍡\n\n👀\n\n总体来说这次去旅行的时间还是过得很充实，路过不同风景也感悟了不同的意义。那么，十六岁的我要许下愿望了，当然还是开心最重要最重要最重要！祝我生日快乐，生日快乐，生日快乐（生日快乐歌声调）🎶\n\n电动车🛵我来了啊啊啊！',
          images: [
            'https://i.ibb.co/Q7YBX9nF/008k84-GPly1hdhoue1xfrj325137khdv.jpg',
            'https://i.ibb.co/Dfs454Hz/008k84-GPly1hdhovl42dtj337k251u10.jpg',
            'https://i.ibb.co/TxdnqStS/008k84-GPly1hdhou687arj324e37kb2b.jpg',
            'https://i.ibb.co/C3Szc2ZY/008k84-GPly1hdhovccljcj325137k1kz.jpg',
            'https://i.ibb.co/s9kw47hM/008k84-GPly1hdhouuejnwj325137ke83.jpg',
            'https://i.ibb.co/6RLF1h7h/008k84-GPly1hdhovtknuvj325137k7wk.jpg',
            'https://i.ibb.co/d45wwrCS/008k84-GPly1hdhotzflrej32tc4807wm.jpg',
            'https://i.ibb.co/8ng3rCqd/008k84-GPly1hdhov2xctbj325137kx6r.jpg',
            'https://i.ibb.co/6JNdw1dL/008k84-GPly1hdhoulop07j337k251npf.jpg'
          ]
        },
        {
          content: '苕皮——太好吃辣！我吃过最好吃的之一',
          images: ['https://i.ibb.co/5xw33jM1/008k84-GPgy1hdhtbwn0xtj30sg11x0zi.jpg']
        },
        {
          content: '分享在成都的街头蹦哒[嘻嘻]',
          images: ['https://i.ibb.co/SD5033rK/008k84-GPgy1hdhta36ka0j30sg2dpdw4.jpg']
        },
        {
          content: '可爱的🐼——我还买了一个熊猫背包纪念品',
          images: ['https://i.ibb.co/nqVsv7Bj/008k84-GPgy1hdhtfsqg7pj30u02cyk8g.jpg']
        },
        {
          content: '好吃😋',
          images: ['https://i.ibb.co/7d97gFg6/008k84-GPgy1hdhtds062ij30u0191n31.jpg']
        },
        {
          content: '给兄弟们带了点特产尝尝',
          images: ['https://i.ibb.co/WNBcS029/008k84-GPgy1hdhti9aat9j30u0191tgb.jpg']
        },
        {
          content: '上班之前和妈妈一起过了生日👀还有准备的有意思的歌要晚点和大家见面了！',
          video: {
            link: 'http://t.cn/A6NpqIIc',
            cover: 'https://i.ibb.co/Mk1McYHz/008k84-GPgy1hdhs6741ljj30u01413zh.jpg'
          }
        },
        {
          content: '✌️👀',
          images: ['https://i.ibb.co/zHVFyMwf/008k84-GPgy1hdhscjuyrfj30u01nzql7.jpg']
        }
      ]
    }
  },
  // ====== 2024年 ======
  {
    year: 2024,
    artist: 'zhangji',
    birthdayPost: {
      content: '17岁了，想说的第一句话是感谢所有人，我的家人和我的粉丝朋友们，没有你们，我可能会有一个难熬的16岁！过去的这一岁，我在意过很多东西，对很多言论感到困扰 ，时常因为这些不知道该继续，时常让我感到不可理喻，但是安静下里回想以前的我，好像并不这个样子的 。以前的我，感觉每天什么都不用想，天天傻笑，天天和兄弟们一起玩，天天都很快乐，真的没有一点烦恼，无忧无虑的。可能当时我才16岁，是不是也还没有长大，一时半会还不能适应很多东西，导致我比较迷茫吧😶‍🌫️哈哈哈哈但是，17岁的我感觉真正的长大了。我也会告诉自己，很多事并非只有一种感受，有好也有坏，当你只看见其中一面的时候，然后陷入其中一个情绪，是不值得的，也有很多事情是没有必要去焦虑的！因为我发现，其实有很多人都在陪着我，可能只是距离太远了，可能只是因为我没有看见。我也知道什么事情都可以被解决，我也会告诉自己要自信要勇敢，要做自己，要做独一无二的张极，要去闯！\n\n感谢，感谢，感谢你们！\n\n\'Ur the fire that keeps burnin\' thru the night\'（这个礼物找了个更加欢乐的时间送给你们）\n最后！分一点快乐给大家！\n今天，准备和大家见面[打工人]',
      images: [
        'https://i.ibb.co/gZXxKMrH/007-Fw8-Ypgy1hmgdqk2s7aj33ls5eo1l5.jpg',
        'https://i.ibb.co/ZR1sBCFf/007-Fw8-Ypgy1hmgdqwz4jdj3334223qve.jpg',
        'https://i.ibb.co/pvHBr2nM/007-Fw8-Ypgy1hmgdq8wcqpj33ls5eokjt.jpg',
        'https://i.ibb.co/gL7Kv2sz/007-Fw8-Ypgy1hmgdriuiz0j32ce3ikx6r.jpg',
        'https://i.ibb.co/m5ghPNR6/007-Fw8-Ypgy1hmgdrcyiohj33ls5eo1l5.jpg',
        'https://i.ibb.co/nN60jKt3/007-Fw8-Ypgy1hmgdrlqopkj31oy299u0x.jpg'
      ]
    },
    blessing: {
      from: 'zeyu',
      content: '极remy生日快乐啊[doge]我还记得去年给你的祝福就是希望你可以完成一场自行车比赛呢哈哈哈哈哈哈 但是据我所知你连时间都没有 估计骑车的机会都不超过二十次吧😂😂那新的一年也希望你可以继续争取完成这个愿望吧加油嘿嘿嘿[doge]也希望我们最后都能取得最初想要的结果！',
      images: []
    },
    reply: {
      content: '谢谢bao！一定会取得想要的结果的！哈哈哈哈希望17岁还能圆这个去年的剩下的新年愿望！',
      images: []
    },
    materials: {
      otherPosts: [
        {
          content: '开心又有一点点遗憾的一天\n谢谢大家的祝福\n谢谢你们来\n我们都很开心[嘻嘻]\n明天见[浮云] ​​​',
          images: [
            'https://i.ibb.co/3mJFJbWt/007-Fw8-Ypgy1hmgpxu7er3j323u35snpg.jpg',
            'https://i.ibb.co/d0df5v8W/007-Fw8-Ypgy1hmgpxw0u5qj31o01o0npd.jpg',
            'https://i.ibb.co/B5ZRWHjp/007-Fw8-Ypgy1hmgpy195bwj323u35s1l0.jpg'
          ]
        }
      ]
    }
  },
  {
    year: 2024,
    artist: 'zeyu',
    birthdayPost: {
      content: '今天开始正式步入17岁啦～哈哈哈\n过得好快啊，怎么就17岁了嘞，还记得你是什么时候关注我的嘛？\n是刚来公司首次露面瘦瘦小小的我，还是从开始掉牙到最终换完全口牙齿？（这项大工程可是慢慢悠悠历经了将近三年左右啊[awsl]）还是从我身高不到一米六，到现在的一米八呢？还是从初舞台开始，到现在这其中几年当中参与的哪一个舞台？唱的哪一首歌？还是之前童声的大嗓门儿，到之后成熟稳重的声音[偷笑]  \n\n不管能说出来哪一个时期，都要谢谢你在这个阶段关注着我，陪伴着我，支持着我。\n\n来北京也有一年的时间了，和在重庆的感觉确实不一样，到这边来说压力和挑战还是蛮大的，每一次舞台或者表演的背后是需要付出不少精力来准备的，过完这个生日也要步入我们下一个，也是练习生涯最后的阶段了！总感觉我这两年生日都是在这种关键节点上，过完就要到一个新的旅程中[doge] 但我相信，还是说过的那句话，只要努力了，不后悔就行，爱笑的小孩运气总不会太差吧👀\n\n又长大了一岁，今年的生日愿望，还是希望能把快乐传递给每一个人，也希望自己可以成熟一点。接下来即将进入下一个重要阶段，再努把力，不要被其他不好的声音所困扰，要选择性屏蔽ber~~~,保持情绪稳定，因为在我这，开心最重要[ok]\n在完成这几年的学习之路以后，会给大家一个满意的答案。\n\n最后，禹我的好朋友一起，加油！',
      images: [
        'https://i.ibb.co/W41d9gkq/008k84-GPly1hp8tfuh45sj32zi4h6npi.jpg',
        'https://i.ibb.co/hxbnRsXr/008k84-GPly1hp8terbwz5j326x3ae1l0.jpg',
        'https://i.ibb.co/BV3TG2KJ/008k84-GPly1hp8xuvh6w7j32tc4804qu.jpg',
        'https://i.ibb.co/8nYh0J7V/008k84-GPly1hp8tfnwkn4j33mb5fdhe1.jpg',
        'https://i.ibb.co/QvKHgCLt/008k84-GPly1hp8tfqj52hj33h02bdkjp.jpg',
        'https://i.ibb.co/4wL1VQ9j/008k84-GPly1hp8tf8awgej366w44ob2i.jpg',
        'https://i.ibb.co/3548BTwv/008k84-GPly1hp8teu4mcaj31kw2dcu0x.jpg',
        'https://i.ibb.co/sJq8Pxx1/008k84-GPly1hp8tesvrbmj32dc1kwu0x.jpg',
        'https://i.ibb.co/Mk6Lng2P/008k84-GPly1hp8xuqhlsfj31r03404qs.jpg',
        'https://i.ibb.co/xKj9G75V/008k84-GPly1hp8tf2w2icj335w4qrnpj.jpg',
        'https://i.ibb.co/ymkFPbrc/008k84-GPly1hp8tfazpa9j36bk47s4qx.jpg',
        'https://i.ibb.co/qK3fZSL/008k84-GPly1hp8tfh5w2cj33k75c71l5.jpg',
        'https://i.ibb.co/whNz1vqK/008k84-GPly1hp8tg1eeqtj347s6bkkju.jpg',
        'https://i.ibb.co/bRFHZtYX/008k84-GPly1hp8xv0vmjyj347s6bkqvf.jpg',
        'https://i.ibb.co/tMnwwSJ4/008k84-GPly1hp8tg5z230j33hy4ep4qv.jpg',
        'https://i.ibb.co/TB9VkkzG/008k84-GPly1hp8teyj6sej33k45c4u15.jpg'
      ]
    },
    blessing: {
      from: 'zhangji',
      content: 'B.A.O！17岁生日快乐！！！🎂🎂现在才发现好像大家都快要成年了！！！时间过的好快哇！祝你新的一岁事事顺心快乐健康每一天！继续一起向前冲！',
      images: ['https://i.ibb.co/GffFL9GM/007-Fw8-Yply1hp94cf39rvj31900u0wk4.jpg']
    },
    reply: {
      content: '必须的极极～哈哈哈哈哈哈确实啊马上我结束之后都十七岁了 过的快嘞 成年的话反正我也是跟你后边哈哈哈哈 也祝你新的一年完成新的梦想噢 继续一起向前冲[doge]',
      images: ['https://i.ibb.co/wxyJj9c/008k84-GPly1hp95f5e4hyj30u00w37bm.jpg']
    },
    materials: {
      otherPosts: [
        {
          content: '意外的惊喜哈哈哈哈哈哈哈哈哈很开心[嘻嘻]\n石榴宝和家人 ​​​',
          images: [
            'https://i.ibb.co/v6kzjWZZ/008k84-GPly1hp8469c0m8j32tc480hdw.jpg',
            'https://i.ibb.co/fzqTFxTy/008k84-GPly1hp848igy1rj32tc480e85.jpg',
            'https://i.ibb.co/jZGQBcv8/008k84-GPly1hp846n3w0rj32tc4807wl.jpg',
            'https://i.ibb.co/FLtqPP80/008k84-GPly1hp846vvn64j31o42pg4qq.jpg',
            'https://i.ibb.co/fd5FBTBJ/008k84-GPly1hp846zl4nrj31r02he7wi.jpg',
            'https://i.ibb.co/8LC4n5J6/008k84-GPly1hp846om7k5j315o1u27wh.jpg'
          ]
        },
        {
          content: '16岁的小宝 石榴宝',
          images: []
        },
        {
          content: '带着8个整整齐齐的手办，来派送一下我的生日小惊喜🎁\n「4」「3」「0」来嘞[耶]（内含三份祝福和一个隐藏小愿望🤫）\n欢迎大家查看视频了解参与方式👀',
          video: {
            link: 'http://t.cn/A6TDCMcy',
            cover: 'https://i.ibb.co/HpLSNg68/008k84-GPly1hp8ofqna0mj30u0140ams.jpg'
          }
        },
        {
          content: '「4」',
          images: ['https://i.ibb.co/DD39Qx3Q/008k84-GPly1hp8td66cnej31hc0u0gul.jpg']
        },
        {
          content: '「0」',
          images: ['https://i.ibb.co/sJbbhg88/008k84-GPly1hp8te22wesj30u01hc12s.jpg']
        }
      ]
    }
  },
  // ====== 2025年 ======
  {
    year: 2025,
    artist: 'zhangji',
    birthdayPost: {
      content: `18岁了！🎂\n\n我希望未来的我能化解所有不好的情绪，无论有再多流言蜚语和困难我都能战胜！我希望我的18岁是一个新的开始、新的起点！我要完成我的目标，我要做好我该做的一切事情。\n\n未来的路还很长，我也想邀请大家跟我一起走下去，我为大家斩尽前方所有的荆棘😎 带大家看最美的风景。可能这条路会很长很长，但是我会一直都在哦！\n\n谢谢你们和我一起！祝我生日快乐！祝你们每天都快乐！😆`,
      images: [
        'https://i.ibb.co/zTWzGZm1/007-Fw8-Yply1hy7f3993uhj34802tc1l4.jpg',
        'https://i.ibb.co/sd7t5M27/007-Fw8-Yply1hy7f2yhlxvj32cu3j8u12.jpg',
        'https://i.ibb.co/bg78ZrxN/007-Fw8-Ypgy1hy7f5ji2wzj32c23i41l0.jpg',
        'https://i.ibb.co/dwbQB0x9/007-Fw8-Yply1hy7f34ffnmj34802tcqvc.jpg',
        'https://i.ibb.co/9Hvm2WkX/007-Fw8-Yply1hy7f3b33tjj32hg3q7b2c.jpg',
        'https://i.ibb.co/0psLvrZk/007-Fw8-Yply1hy7f30ywncj33yj2n1u15.jpg',
        'https://i.ibb.co/gFDVrh4J/007-Fw8-Yply1hy7f28pogdj33402c0npg.jpg'
      ]
    },
    blessing: {
      from: 'zeyu',
      content: '首先当然是祝十八岁的杰里米（国王）生日快乐！然后上次说的影视资料记录翻了翻也是翻到些小时候的库存奥 那么就托这个福气签的福！新年大家都福来运转[666] ​​​',
      images: [
        'https://i.ibb.co/DfmvzCCT/008k84-GPly1hy7owpn0bhj30lx0pe0xn.jpg',
        'https://i.ibb.co/5hmzRT28/008k84-GPly1hy7oozqdj7j31hc0u0qf8.jpg',
        'https://i.ibb.co/DfhFfdFh/008k84-GPly1hy7op4qa1bj30u0140wod.jpg'
      ]
    },
    reply: {
      content: '谢谢宝的生日祝福哈哈哈，时间过得真的很快！转眼间大家都长大了！各种阶段都一起过来了！未来还要一起过很久很久！以后我们TOP还会有新的故事！加油！我记得点赞！卡皮巴拉我在寻找了！',
      images: []
    },
    materials: {
      teaserPosts: [
        {
          content: '𝗖𝗟𝗨𝗘 𝗡𝗼.𝟭\n\n编号：0113LSWL\n天气：雪和各种风向的风\n出镜：散步的牛群\n摄影：𝗝𝗲𝗿𝗲𝗺𝘆',
          images: ['https://i.ibb.co/nNTPT29y/007-Fw8-Yply1hxya65yc83j34eo4eoe86.jpg']
        },
        {
          content: '𝗖𝗟𝗨𝗘 𝗡𝗼.𝟮\n\n编号：0113ZNR\n天气：雪+风 \n出镜：𝗝𝗲𝗿𝗲𝗺𝘆',
          video: {
            link: 'http://t.cn/A63CGbNb',
            cover: 'https://i.ibb.co/s9p2jhVz/007-Fw8-Yply1hxz8ct6vntj30u01hcdvw.jpg'
          }
        },
        {
          content: '𝗖𝗟𝗨𝗘 𝗡𝗼.𝟯\n\n编号：0113MMKJ\n出镜：❓',
          video: {
            link: 'http://t.cn/A63Oh4Z9',
            cover: 'https://i.ibb.co/tpdRhLyP/3.jpg'
          }
        },
        {
          content: '𝗖𝗟𝗨𝗘 𝗡𝗼.𝟰\n\n编号：0113SJZYSM\n出镜：镜',
          video: {
            link: 'http://t.cn/A63jwlx0',
            cover: 'https://i.ibb.co/yBQfQM5p/4.jpg'
          }
        },
        {
          content: '𝗖𝗟𝗨𝗘 𝗡𝗼.𝟱\n\n编号：0113YS\n出镜：&$%*^^',
          images: ['https://i.ibb.co/WWbgYb4n/5.jpg']
        },
        {
          content: '𝗖𝗟𝗨𝗘 𝗡𝗼.𝟲\n\n编号：0113MA\n出镜：🐎',
          images: ['https://i.ibb.co/NdkRj2jq/6.jpg']
        },
        {
          content: '𝗖𝗟𝗨𝗘 𝗡𝗼.𝟳\n\n编号：NXWRADS\n出镜：伙伴',
          images: [
            'https://i.ibb.co/3Y953jvy/7.jpg',
            'https://i.ibb.co/F4mQTH41/7.png'
          ]
        },
        {
          content: '𝗖𝗟𝗨𝗘 𝗡𝗼.𝟬\n\n编号：𝟬𝟳𝟬𝟮𝟬𝟯\n出镜：𝗝𝗲𝗿𝗲𝗺𝘆',
          video: {
            link: 'http://t.cn/A63E4hSp',
            cover: 'https://i.ibb.co/HL4sjXJh/image.jpg'
          }
        }
      ],
      otherPosts: [
        {
          content: 'Knock Knock Knock\n\n门  Under My Skin\n\n张极十八岁成人礼特别企划',
          video: {
            link: 'http://t.cn/A63niRbo',
            cover: 'https://i.ibb.co/LXvCQ1FZ/1.jpg'
          }
        },
        {
          content: `-我脚下的影子从来不肯像谁\n\n2020年才公开微博的时候，我在微博背景上更新了几张图，一张是帆船在无尽的大海里漂到了尽头，一张是楚门的手第一次摸到了这个"假世界"尽头的蓝色墙壁。\n其实那个时候我还很小，我也不太会表达，只是感觉自己好像也摸到了那个墙壁，一直觉得当时看见的世界，一定不是全部。\n\n我一直觉得每个人都是一间屋子，屋子的形状不一样，屋子里摆放着各式各样的门，有的门很矮很矮，可能暂时还进不去;有的门关得很死，怎么都拧不开;还有的门好像有点生锈，在等待修缮……\n\n这次，在我的十八岁生日这天，我想邀请大家来到我的小屋，同时送给大家三把钥匙，它们可以打开三扇门。\n\n在门后的世界里，我随时等着和你相遇。`,
          images: [
            'https://i.ibb.co/dwS4zBKj/2.jpg',
            'https://i.ibb.co/zhBfFL5b/21.jpg',
            'https://i.ibb.co/B2jZCBZC/22.jpg',
            'https://i.ibb.co/MxFZ8pmY/23.jpg',
            'https://i.ibb.co/ymVzLjM1/24.jpg',
            'https://i.ibb.co/TxTMpfjN/25.jpg',
            'https://i.ibb.co/QjQW03s0/26.jpg',
            'https://i.ibb.co/7NpVSbJ5/27.jpg',
            'https://i.ibb.co/1tncPLCj/28.jpg'
          ]
        },
        {
          content: '我来送礼物了🎁\n话不多说看视频😎\n请在评论区说出你的新年愿望！我回头会来看一看！\n因为还没有回公司！等我回去了再给大家抽！高会也会抽！我等下就会去发一条动态！\n谢谢你们陪我成年！',
          video: {
            link: 'http://t.cn/A63mh1yE',
            cover: 'https://i.ibb.co/60X25WZC/3.jpg'
          }
        },
        {
          content: '我回来了！最近两天我会去看看这条微博和高会动态下面大家的新年愿望！拍视频记录给大家抽礼物的过程🎁😬到时候发给你们看'
        },
        {
          content: 'Cloud \nMan \nHeart\n\n那天虽然有点冷，但是我会一直记得[嘻嘻][嘻嘻][嘻嘻]',
          images: [
            'https://i.ibb.co/k6Mw8Jtb/4.jpg',
            'https://i.ibb.co/B2YpVV4g/41.jpg',
            'https://i.ibb.co/Hp2k13mF/42.jpg',
            'https://i.ibb.co/7xrqtJPY/43.jpg',
            'https://i.ibb.co/d4L5RyBv/44.jpg',
            'https://i.ibb.co/LhDNMhMJ/45.jpg',
            'https://i.ibb.co/7td15VSQ/46.jpg',
            'https://i.ibb.co/6cK8ZbbV/47.jpg',
            'https://i.ibb.co/35hKV7K6/48.jpg',
            'https://i.ibb.co/wrsf7FrG/49.jpg',
            'https://i.ibb.co/FqqwYJLM/410.jpg',
            'https://i.ibb.co/G3f0PmpK/411.jpg',
            'https://i.ibb.co/FkWCydsj/412.jpg',
            'https://i.ibb.co/rKM3ZpCz/413.jpg',
            'https://i.ibb.co/FF0s0Rt/414.jpg',
            'https://i.ibb.co/ksPC96Bd/415.jpg',
            'https://i.ibb.co/CsWybbk5/416.jpg',
            'https://i.ibb.co/GQQzKWwV/417.jpg'
          ]
        },
        {
          content: '18 \nIt\'s a party！',
          video: {
            link: 'http://t.cn/A63mTqYL',
            cover: 'https://i.ibb.co/vCw7DR2S/5.jpg'
          }
        },
        {
          content: `小时候因为身上带了一个口香糖盒子到学校做积木道具用，被同学污蔑是我给同学们发口香糖，因为当时我们学校不允许这样。后来还被老师当着全班同学的面用戒尺打了手心，现在回忆起来还觉得当时哭的好惨哈哈哈哈。我理解他们为什么撒谎，但不理解为什么我说的真话没有人信。\n\n这件很小的事情，我用它来指代很多拥有同样逻辑的其他事情。它们违背了我心里的"道理"，可能有很多人会觉得我有点幼稚：这样的事情很多啊，为什么要放在心上？就像我当初借给求助我的陌生人钱，也有人会说：张极，你是不是太笨了。我不知道要怎么解释。\n\n尽管我现在成年了，也一直在被期许长成一个成熟或者在这个世界里老练的、游刃有余的大人，在面对这些可能无人在意的小事的时候，能够不再去抱有很多理想化的想法。因为就连我自己都知道，我还是会经历很多同样逻辑的事情，去获得一些教训。但我想我最后应该还是会坚持我现在的信念，就是真诚永远不是错误的。不管是10岁、15岁、还是现在的18岁，或者以后的不管多少岁，我心里的道理都不会改变。\n\n有句话我之前说过，在这里还想再说一次：关于我的一切，请大家放心。\n\n从小被你们看着长大，其实只要我看到你们的存在，听到你们的声音，我就有了可以化解所有的困难的能力。然后我可能说了很多很多次，也不擅长用多华丽的语言去形容，我想说：谢谢你们，就是因为有了你们，所有一切我都可以克服，所有的烦恼全都可以抛在脑后，谢谢你们一直陪伴着我跟我过我的每一个生日🎂！\n\n我真的很开心！我知道未来还很长，我希望自己可以成为一个更优秀的大人，不管外界怎么变化都保持我最初的模样，一步一个脚印👣踏踏实实的走下去。我也相信总有一天大家一定能够成功！我们一定会成功！\n\n最后我想说，世界是你们和我的自由旷野，未来我们一起慢慢看！`,
          images: [
            'https://i.ibb.co/rfKbs3MD/6.jpg',
            'https://i.ibb.co/nqBRQyD8/61.jpg',
            'https://i.ibb.co/PzFZ1QWX/62.jpg',
            'https://i.ibb.co/8H4DqpF/63.jpg',
            'https://i.ibb.co/r2j9pDKb/64.jpg',
            'https://i.ibb.co/8Lf34ZGq/65.jpg',
            'https://i.ibb.co/Ld7PG9T3/66.jpg',
            'https://i.ibb.co/vxwkDp4t/67.jpg',
            'https://i.ibb.co/B5d4BtXk/68.jpg'
          ]
        },
        {
          content: '关于18岁的\n关于17岁最后几天的\n关于旅行的\n关于刚才大家说想看的\n\n晚安[嘻嘻] ​​​',
          images: [
            'https://i.ibb.co/RkY4fZb2/7.jpg',
            'https://i.ibb.co/0Vy6ZvV6/71.jpg',
            'https://i.ibb.co/G4FSBHwC/72.jpg',
            'https://i.ibb.co/N6kC5nd3/73.jpg',
            'https://i.ibb.co/cKCW8mZm/74.jpg',
            'https://i.ibb.co/2YkBzkgb/75.jpg',
            'https://i.ibb.co/zVPDrrXh/76.jpg',
            'https://i.ibb.co/mrfTQky5/77.jpg',
            'https://i.ibb.co/ymrfFfcZ/78.jpg',
            'https://i.ibb.co/zhDkrZ8M/79.jpg'
          ]
        }
      ]
    }
  },
{
  year: 2025,
  artist: 'zeyu',
  birthdayPost: {
    content: `我的天呀 今天也是成年咯 也意味着有更多的责任需要去肩负 对于兄弟们 要团结一心不离不弃 对家人和身边的人 要学会如何更好地照顾他们 要学习的东西还有很多 我也会继续努力 提高自己的各项技能 这次成年的生日过得很开心哈哈哈哈 唱了好多好多想唱的歌 还吃到了一直想吃的冰淇淋蛋糕 大家吃的都很高兴！感觉自己特别幸福 有身边的兄弟们 有家人和一直支持我的好朋友们为我准备的各种祝福 给我过了一个超级超级盛大的18岁生日 在这里想说 谢谢你们 谢谢所有人！`,
    images: [
      'https://i.ibb.co/zhDb6VjQ/008k84-GPgy1i0yubixh54j32nl3zex6r.jpg',
      'https://i.ibb.co/xSLPsLJJ/008k84-GPgy1i0yubqo01gj34802tc7wm.jpg',
      'https://i.ibb.co/pTL8FZY/008k84-GPgy1i0yubyb8p2j33su2j84qv.jpg',
      'https://i.ibb.co/60zj5SW2/008k84-GPgy1i0yubbdzlpj32tc480x6t.jpg',
      'https://i.ibb.co/4wMvcLBM/008k84-GPgy1i0yuc70nugj32q843dx6u.jpg',
      'https://i.ibb.co/0jDkrT32/008k84-GPgy1i0yuce4w6mj32nu3zqkjo.jpg',
      'https://i.ibb.co/21Skbjbx/008k84-GPgy1i0yucl921tj33y82mthdx.jpg'
    ]
  },
  blessing: {
    from: 'zhangji',
    content: '小宝生日快乐！你说我们出差都八年了 ！其他兄弟出差都2年了！所以时间就这么快的像你说的那样"嗖嗖"走，我还是很怀念那时候上学的日子哈哈哈，有了很多的熟悉和默契之后我们现在也在越来越好！好啦！其他要说的话在信里和你讲了，新的一岁天天开心！能有空去看足球比赛！梦想一定会成真！',
    images: ['https://i.ibb.co/V0NvSNFs/007-Fw8-Ypgy1i0yzlodrn6j328018zgu6.jpg']
  },
  reply: {
    content: '对啊 我们那天聊到出差这两个字 我一想 我们都出差八年了哈哈哈哈哈哈哈哈哈 说到上学 真的是 那个时候 已经到了用眼神就能理解对方意思的时候了 说话都算无用功哈哈哈 没错 剩下的下来聊 球赛的话 嗯？你怎么知道利物浦拿了冠军哈哈哈哈哈哈 有机会肯定会去看的！',
    images: ['https://i.ibb.co/r268NMJH/008k84-GPgy1i0z792hilqj315g0v476x.jpg']
  },
  materials: {
    teaserPosts: [
      {
        content: '《救命！这是我？》',
        images: ['https://i.ibb.co/rGCpStPz/008k84-GPly1i0e4nhs6qjj32pf1wwnpe.jpg']
      },
      {
        content: '《妈妈，看！》',
        images: ['https://i.ibb.co/Ng4yRM58/2.jpg']
      },
      {
        content: '《哼！我也有！》',
        images: ['https://i.ibb.co/4kWkyMc/3.jpg']
      },
      {
        content: '《大禹，到此一游！》',
        images: ['https://i.ibb.co/bM0JKb4d/4.jpg']
      },
      {
        content: '《好吃，你吃不到！》',
        images: ['https://i.ibb.co/s9fWkx3g/5.jpg']
      },
      {
        content: '《我头上？有东西？》',
        images: ['https://i.ibb.co/Mkct6qgS/6.jpg']
      },
      {
        content: '《耶！一起吗？》',
        images: ['https://i.ibb.co/bgF9TJ8J/7.jpg']
      },
      {
        content: '《来和我一起，加油！》',
        images: ['https://i.ibb.co/1tZNHWZR/8.jpg']
      },
      {
        content: '《Shanghai，respect！》',
        images: ['https://i.ibb.co/xqbZxchV/9.jpg']
      },
      {
        content: '《攥起拳头，向前冲！》',
        images: ['https://i.ibb.co/vxxtJ71D/10.jpg']
      },
      {
        content: '《葫芦葫芦，芦芦芦[666]》',
        images: ['https://i.ibb.co/zT66WBvh/11.jpg']
      },
      {
        content: '《嘿嘿！就不给你玩》',
        images: ['https://i.ibb.co/bj47t3m3/12.jpg']
      },
      {
        content: '《哈喽，来一杯嘛！》',
        images: ['https://i.ibb.co/Jjs15jKp/13.jpg']
      },
      {
        content: '《嘿嘿嘿，好吃！》',
        images: ['https://i.ibb.co/kgvy3nvP/14.jpg']
      },
      {
        content: '《321，茄子！》',
        images: ['https://i.ibb.co/Cs0CKPJX/15.jpg']
      },
      {
        content: '《平衡车，OK！》',
        images: ['https://i.ibb.co/TxKXjgrD/16.jpg']
      },
      {
        content: '《迈向，18岁！[坏笑]》',
        images: ['https://i.ibb.co/d47qm8hg/17.jpg']
      },
      {
        content: '《OK 最后倒计时啦！》',
        video: {
          link: 'http://t.cn/A6d94zEn',
          cover: 'https://i.ibb.co/9k9fNtds/18.jpg'
        }
      }
    ],
    otherPosts: [
      {
        content: 'COINCIDENCE\nGIFT\nUNIVERSE\n人类研究发现\n张泽禹十八岁成人礼特别企划',
        video: {
          link: 'http://t.cn/A6dN8t81',
          cover: 'https://i.ibb.co/KpG5Y5Mv/008k84-GPgy1i0yqwxhgr5j31hc0u0tl3.jpg'
        }
      },
      {
        content: `2019年，才12岁的张泽禹给那时候的自己设定过一个"角色"，就是建筑师。当时他给自己留下的美好期愿是用理性构建的方式和感性认知的能力，创造一个自己心中最美好的世界。

在迎来人生18岁的时候，再次回头看这位脑性男孩，他的世界还是那样，理性和感性均分，现实和理想平摊，在以他为主理人的"世界工厂"里，被他吸收的是这个世界（宇宙）给他的印象和影响，由他输出的是多样的创造和灵感。

在他这个工厂里，堆积着他的人类研究发现，也堆积着他自己的人生研究发现，在十八岁这天，邀请大家来看他的"小小研究说明"……`,
        images: [
          'https://i.ibb.co/XkLTfV2v/1.jpg',
          'https://i.ibb.co/bMKFTXKJ/11.jpg',
          'https://i.ibb.co/Mx96j8xd/12.jpg',
          'https://i.ibb.co/N6rfXHJg/13.jpg',
          'https://i.ibb.co/Jw1mHnVG/14.jpg',
          'https://i.ibb.co/HD2tpCcd/15.jpg',
          'https://i.ibb.co/cSx2ht0F/16.jpg',
          'https://i.ibb.co/Z6q48C0y/17.jpg',
          'https://i.ibb.co/9HjD7C8X/18.jpg'
        ]
      },
      {
        content: '好朋友们 我来给大家送礼物啦！\n是不是好奇我到底会送什么礼物给大家呢🤔\n我准备了五个盲盒 咱就是说一整个期待住吧！\n话不多说请看视频\n分享你所遇到的有趣经历或故事 \n我会在微博和高会的评论区抽取幸运儿 \n感谢大家一路的支持和陪伴',
        video: {
          link: 'http://t.cn/A6dpuiRh',
          cover: 'https://i.ibb.co/4RSCMqpj/2.jpg'
        }
      },
      {
        content: '《从现在开始加载十八岁的小宝》\n\n一次很难忘的生日 谢谢大家',
        images: [
          'https://i.ibb.co/qLFYqsHk/3.jpg',
          'https://i.ibb.co/6SHL8v8/31.jpg',
          'https://i.ibb.co/XftKYH38/32.jpg',
          'https://i.ibb.co/2Hgz1K8/33.jpg',
          'https://i.ibb.co/1J9dYkwV/34.jpg',
          'https://i.ibb.co/DHK8ZyVW/35.jpg',
          'https://i.ibb.co/kgDMCyPT/36.jpg',
          'https://i.ibb.co/NwvMXw1/37.jpg',
          'https://i.ibb.co/t11JJC0/38.jpg',
          'https://i.ibb.co/5hz72p2y/39.jpg',
          'https://i.ibb.co/15QXLTS/310.jpg',
          'https://i.ibb.co/cKyw3m9t/311.jpg',
          'https://i.ibb.co/qYBc4pDH/312.jpg',
          'https://i.ibb.co/nqmhFrp8/313.jpg',
          'https://i.ibb.co/DJcBJ6Y/314.jpg',
          'https://i.ibb.co/HTDz3MY7/315.jpg',
          'https://i.ibb.co/fYKkVRCz/316.jpg',
          'https://i.ibb.co/0yf4m1hy/317.jpg'
        ]
      },
      {
        content: '《人类研究发现（Coincidence，Gift，Universe）》张泽禹十八岁生日音乐分享小会\n\n他的一生还很长，他的硬币还在旋转和翻动，那些未知的和未来的，都会是收入在行囊中的宝藏。\n\n人类研究发现\n张泽禹十八岁成人礼特别企划',
        video: {
          link: 'http://t.cn/A6d0IDdp',
          cover: 'https://i.ibb.co/KpG5Y5Mv/008k84-GPgy1i0yqwxhgr5j31hc0u0tl3.jpg'
        }
      },
      {
        content: '嗨皮啵斯dei 🎂 解锁十八岁',
        images: [
          'https://i.ibb.co/CKfvDP5h/4.jpg',
          'https://i.ibb.co/YBzYGK81/41.jpg',
          'https://i.ibb.co/RGhbLyvz/42.jpg',
          'https://i.ibb.co/GvkQt5PT/43.jpg',
          'https://i.ibb.co/jPLgPdrq/44.jpg',
          'https://i.ibb.co/ch5J81z1/45.jpg',
          'https://i.ibb.co/6Jc7v0tq/46.jpg',
          'https://i.ibb.co/DHQFdRqH/47.jpg',
          'https://i.ibb.co/DPhwK9gR/48.jpg'
        ]
      },
      {
        content: `哈喽哈喽哈喽 看过来看过来看过来👀今天18岁啦 现在正式介绍一下噢 我是18岁的小宝张泽禹 你们好呀 老话儿怎么说来着 这一晃儿就18岁了 多快呀 是啊 我也觉得很快 这就18岁了
小时候觉得18岁还有很远很早 很想快点长大 因为小时候有很想吃的小零食 妈妈爸爸会和我说 你现在还小 大禹 等你长大就能吃了 然后看着他们吃 我每次都想 我要快点长大以后都全部吃回来 
小时候想多玩一会晚点睡觉 妈妈爸爸会和我说 你现在还小 还要长高 比爸爸长得高之后就可以啦 然后我就进房间睡觉了 虽然也在床上偷偷听他们看电视的声音 这也让我每次和我爸爸站在同一面镜子前面的时候 都挺直了腰板和他比身高 
小时候想加快一点速度骑自行车 爸爸会嘱咐 不行 你太小了 要慢慢骑 注意安全 然后我骑的速度就是太爷爷在我身边散步 他老人家慢慢走路都能超过我哈哈哈哈哈哈 
还有小时候刚学吉他的时候 当时和吉他差不多高 还是被老师抱着坐在沙发上上课 下课也要老师把吉他从我的身上拿下来
我在哈尔滨上小学的时候 我每次看着其他同学自己放学回家 手里拿着零花钱去小卖部买零食吃 就很羡慕他们 还会问妈妈爸爸 为什么我们家离学校这么近 我不能自己回家（如果可以的话我就偷偷带点零花钱了哈哈哈哈） 这个时候他们会说 大禹 你还小 妈妈爸爸担心你自己回家不安全 万一玩着玩着就走丢了怎么办呀 等你上初中高中了就好啦
现在想想 是啊 初中高中之后就好了 不用妈妈爸爸接我了 这下想让他们接 也接不到啦 也是到了重庆之后才知道大禹居然这么幸福哈哈哈哈哈（有点泪目 怎么个事儿）没事没事 不难受噢 虽然这段话写出来也是自己在看哈哈哈哈
okok不说这么多煽情的话了 咱都东北老爷们 现在18岁了 多么美好的18岁 新的开始 我肯定是想有时间的时候先去考驾照 再一个愿望就是大家都知道的 我最想看的球赛 虽然暂时无法实现 但是尽量不错过每一场比赛也是最大的支持了吧 就像大家每次都无一例外来支持我们一样 可能确实想得但不可得 也无可奈何 大概这种遗憾和缺失就是成年的一门必修课吧 最近大家可能也知道 我一直在思考买一把木吉他来弹 毕竟会有有需要的时候 所以说 这个也在愿望名单里面吧！最后 愿世界上所有在我身边的人 所有爱我的人 身体健康 万事顺遂 永远不会不开心 我们都做最好的自己！也想说成年人张泽禹加油哈哈哈哈`,
        images: [
          'https://i.ibb.co/mCS8973p/5.jpg',
          'https://i.ibb.co/hR18ZXL3/51.jpg',
          'https://i.ibb.co/gFVHXGbG/52.jpg',
          'https://i.ibb.co/LzxqVNzJ/53.jpg',
          'https://i.ibb.co/JwPXx4Br/54.jpg',
          'https://i.ibb.co/bRRLmzSF/55.jpg',
          'https://i.ibb.co/hRwtfrHy/56.jpg',
          'https://i.ibb.co/XZTjR3xP/57.jpg',
          'https://i.ibb.co/3mWkms9B/58.jpg'
        ]
      }
    ]
  }
}
];