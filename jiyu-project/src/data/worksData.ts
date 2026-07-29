// src/data/worksData.ts

export interface Work {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  cover?: string;
  link?: string;
  likes?: number;
  program?: string;
}

export const defaultWorks: Work[] = [
  // ====== 原创作品 ======
  {
    id: "1",
    title: "《Shield（留在我身边）》",
    category: "original",
    subCategory: "zhangji",
    cover: "https://i.ibb.co/XfpYTBnR/tupian-3.webp",
    link: "https://weibo.com/7026420593/4999506007163898"
  },
  {
    id: "2",
    title: "《壳》",
    category: "original",
    subCategory: "zhangji",
    cover: "https://i.ibb.co/pjpHgcW7/tupian-2.jpg",
    link: "https://weibo.com/7026420593/QB6UO8djv"
  },
  {
    id: "3",
    title: "《DTTM》",
    category: "original",
    subCategory: "zeyu",
    cover: "https://i.ibb.co/d0y0YGFS/tupian-4.jpg",
    link: "https://weibo.com/7626514031/4768754782963201"
  },
  {
    id: "4",
    title: "《毕业》",
    category: "original",
    subCategory: "zeyu",
    cover: "https://i.ibb.co/35sgQ7tp/tupian-5.webp",
    link: "https://weibo.com/7626514031/4800509016282499"
  },
  {
    id: "5",
    title: "《Talk to the star》",
    category: "original",
    subCategory: "zeyu",
    cover: "https://i.ibb.co/dwp1v43y/tupian-6.jpg",
    link: "https://weibo.com/7626514031/5059772850378606"
  },
  {
    id: "6",
    title: "编曲",
    category: "original",
    subCategory: "zhangji",
    cover: "https://i.ibb.co/ksrjj6PW/007-Fw8-Yply1ieedzf5cauj30u00u0jvk.jpg",
    link: "https://weibo.com/7026420593/R5kLXmxYN"
  },

  // ====== 舞台 ======
  {
    id: "7",
    title: "《温柔》",
    category: "stage",
    subCategory: "tuan",
    cover: "https://wx2.sinaimg.cn/orj360/008zTzfRly1iergizej81j30la0eon7o.jpg",
    link: "https://www.bilibili.com/video/BV1Es411c7bG?t=152.1",
    program: "暑期汇演"
  },
  {
    id: "8",
    title: "《如果有来生》暑期汇演",
    category: "stage",
    subCategory: "zeyu",
    cover: "https://wx3.sinaimg.cn/mw690/008hi2vuly1gs0sufzkl8j30li0u0wx8.jpg",
    link: "https://www.bilibili.com/video/BV1hs411c7KC?t=1.6"
  },
  {
    id: "9",
    title: "《仰望星空》暑期汇演",
    category: "stage",
    subCategory: "zhangji",
    cover: "https://wx3.sinaimg.cn/mw690/ebe86bb6gy1icsbz8fl1mj21uo0u0k5x.jpg",
    link: "https://www.bilibili.com/video/BV1cb411P7dN?t=0.7"
  },
  {
    id: "10",
    title: "《改变自己》暑期汇演",
    category: "stage",
    subCategory: "duo",
    cover: "https://wx2.sinaimg.cn/mw690/008hi2vuly1gs0suie3p6j312815s1kx.jpg",
    link: "https://www.bilibili.com/video/BV1Ys411c7J7?t=0.7"
  },
  {
    id: "11",
    title: "《Candy》",
    category: "stage",
    subCategory: "tuan",
    cover: "https://wx4.sinaimg.cn/mw690/008zTzfRly1ierglfglcrj30qc0m6tjm.jpg",
    link: "https://www.bilibili.com/video/BV13W411f7iC?t=1.4",
    program: "暑期汇演"
  },
  {
    id: "12",
    title: "《温柔》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1At411d7su?t=2.3",
    program: "10月路演"
  },
  {
    id: "13",
    title: "《你知道我的迷惘》(《真的爱你》国语版)",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1QW411275N?t=108.7",
    program: "10月路演"
  },
  {
    id: "14",
    title: "《Lydia》10月路演全纪录",
    category: "stage",
    subCategory: "zeyu",
    cover: "",
    link: "https://www.bilibili.com/video/BV1ji421i7UZ?t=1.5"
  },
  {
    id: "15",
    title: "《红旗飘飘》10月路演全纪录",
    category: "stage",
    subCategory: "zhangji",
    cover: "",
    link: "https://www.bilibili.com/video/BV1tt411R7ZQ?t=2.5"
  },
  // ====== 秋日幻想曲 ======
  {
    id: "16",
    title: "《3.6.5》",
    category: "stage",
    subCategory: "tuan",
    cover: "https://wx4.sinaimg.cn/mw690/e8715032ly1fxibhwh8e7j23vc2kw4qv.jpg",
    link: "https://www.bilibili.com/video/BV1WT411E7hP?t=2.0&p=4",
    program: "秋日幻想曲"
  },
  {
    id: "17",
    title: "《我管你》秋日幻想曲",
    category: "stage",
    subCategory: "zeyu",
    cover: "https://wx3.sinaimg.cn/mw690/008zTzfRly1iergtymd8hj30im0cetdk.jpg",
    link: "https://www.bilibili.com/video/BV1WT411E7hP?t=1.1&p=11"
  },
  {
    id: "18",
    title: "《新的心跳》秋日幻想曲",
    category: "stage",
    subCategory: "zhangji",
    cover: "https://wx2.sinaimg.cn/mw690/008zTzfRly1iergu8xyybj30ir0cnjvk.jpg",
    link: "https://www.bilibili.com/video/BV1WT411E7hP?t=1.0&p=12"
  },
  {
    id: "19",
    title: "《梦想启航》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1WT411E7hP?t=1.6&p=13",
    program: "秋日幻想曲"
  },
  {
    id: "20",
    title: "《小幸运》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1e3YPzTEqr?t=0.7",
    program: "秋日幻想曲"
  },
  {
    id: "21",
    title: "《年轻的战场》",
    category: "stage",
    subCategory: "tuan",
    cover: "https://wx3.sinaimg.cn/mw690/e8715032ly1fxhz6rpu0vj23uw2kl4qx.jpg",
    link: "https://www.bilibili.com/video/BV1RA411w794?t=1.2",
    program: "秋日幻想曲"
  },
  {
    id: "22",
    title: "《Lollipop》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1qt411y727?t=30.8",
    program: "秋日幻想曲"
  },
  {
    id: "23",
    title: "《情非得已》",
    category: "stage",
    subCategory: "tuan",
    cover: "https://wx3.sinaimg.cn/mw690/e8715032ly1fxsl1l7riyj22io1ezx6p.jpg",
    link: "https://www.bilibili.com/video/BV1et411D7KJ?t=2.0",
    program: "歌曲COVER"
  },
  // ====== 第一页 ======
  {
    id: "24",
    title: "《快乐崇拜》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1Pb411C79P?t=5.1",
    program: "第一页"
  },
  {
    id: "25",
    title: "《淋雨一直走&隐形的翅膀》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1Pb411C7DU?t=6.8",
    program: "第一页"
  },
  {
    id: "26",
    title: "《放学后》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1Pb411C7mN?t=3.2",
    program: "第一页"
  },
  {
    id: "27",
    title: "《青春修炼手册》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1Nb411C7As?t=1.1",
    program: "第一页"
  },
  {
    id: "28",
    title: "《街舞少年》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1Nb411C7Fb?t=5.1",
    program: "第一页"
  },
  // ====== 第25小时 ======
  {
    id: "29",
    title: "《少年说》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1P4411a7gv?t=1.7",
    program: "第25小时"
  },
  {
    id: "30",
    title: "《I.O.I.O》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1P4411a7gv?t=2.8&p=5",
    program: "第25小时"
  },
  {
    id: "31",
    title: "《快乐环岛》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1P4411a7gv?t=0.7&p=6",
    program: "第25小时"
  },
  {
    id: "32",
    title: "《去流浪》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1P4411a7gv?t=0.9&p=8",
    program: "第25小时"
  },
  {
    id: "33",
    title: "《骑士宣言》第25小时",
    category: "stage",
    subCategory: "zeyu",
    cover: "",
    link: "https://www.bilibili.com/video/BV1P4411a7gv?t=2.7&p=10"
  },
  {
    id: "34",
    title: "《飘向北方》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1P4411a7gv?t=1.1&p=11",
    program: "第25小时"
  },
  {
    id: "35",
    title: "《年轻的战场》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1P4411a7gv?t=0.9&p=13",
    program: "第25小时"
  },
  // ====== 单向放映厅 ======
  {
    id: "36",
    title: "《我的未来式》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1bE411h7km?t=3.3",
    program: "单向放映厅"
  },
  {
    id: "37",
    title: "《My little princess》",
    category: "stage",
    subCategory: "zeyu",
    cover: "",
    link: "https://www.bilibili.com/video/BV1bE411h7km?t=2.4&p=2"
  },
  {
    id: "38",
    title: "《凑热闹》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1bE411h7km?t=4.0&p=3",
    program: "单向放映厅"
  },
  {
    id: "39",
    title: "《杀破狼》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1bE411h7km?t=1.7&p=6",
    program: "单向放映厅"
  },
  {
    id: "40",
    title: "《跨时代》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1bE411h7km?t=4.3&p=7",
    program: "单向放映厅"
  },
  {
    id: "41",
    title: "《Capture》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1bE411h7km?t=0.8&p=8",
    program: "单向放映厅"
  },
  {
    id: "42",
    title: "《信仰》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1bE411h7km?t=1.2&p=9",
    program: "单向放映厅"
  },
  {
    id: "43",
    title: "《年轻的战场》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1bE411h7km?t=0.9&p=14",
    program: "单向放映厅"
  },
  // ====== 重逢 ======
  {
    id: "44",
    title: "《Journey/大圣》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1y7411v7gZ?t=7.8&p=7",
    program: "重逢"
  },
  {
    id: "45",
    title: "《十二月的奇迹》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1y7411v7gZ?t=15.5&p=16",
    program: "重逢"
  },
  {
    id: "46",
    title: "《屋顶》重逢",
    category: "stage",
    subCategory: "zhangji",
    cover: "https://wx1.sinaimg.cn/mw690/008zTzfRly1ierh6t7salj30iq0chdos.jpg",
    link: "https://www.bilibili.com/video/BV1y7411v7gZ?t=8.2&p=19"
  },
  {
    id: "47",
    title: "《一生所爱》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1y7411v7gZ?t=93.5&p=24",
    program: "重逢"
  },
  {
    id: "48",
    title: "《街舞少年》",
    category: "stage",
    subCategory: "tuan",
    cover: "",
    link: "https://www.bilibili.com/video/BV1y7411v7gZ?t=19.6&p=10",
    program: "重逢"
  },
  // ====== 想见你的倒计时 ======
  {
    id: "49",
    title: "《爱你》",
    category: "stage",
    subCategory: "tuan",
    cover: "https://wx2.sinaimg.cn/mw690/e8715032ly1geaslqkmhnj23401r0e82.jpg",
    link: "https://www.bilibili.com/video/BV1CK41157wz?t=6.6",
    program: "想见你的倒计时"
  },
  {
    id: "50",
    title: "《那个男人》",
    category: "stage",
    subCategory: "tuan",
    cover: "https://wx4.sinaimg.cn/mw690/e8715032ly1geasxicge8j21gi0tjb29.jpg",
    link: "https://www.bilibili.com/video/BV1NZ4y1s7Fd?t=2.9",
    program: "想见你的倒计时"
  },
  // ====== 歌曲COVER ======
  {
    id: "51",
    title: "《五月天》",
    category: "stage",
    subCategory: "tuan",
    cover: "https://i.ibb.co/t0B1bvm/80c5ff26d86925a9d95e4b559a8812be7ae2d6da.jpg",
    link: "https://www.bilibili.com/video/BV1Yf4y1m7JX?t=13.7",
    program: "歌曲COVER"
  },
  {
    id: "52",
    title: "《姐姐恋爱吧》",
    category: "stage",
    subCategory: "tuan",
    cover: "https://i.ibb.co/kgWtfSJx/bed4af532d5b7b889af50cf184568ab6dc7bfec0.jpg",
    link: "https://www.bilibili.com/video/BV1bg4y1B7eh?t=3.5",
    program: "歌曲COVER"
  },
  {
    id: "53",
    title: "《One Time》",
    category: "stage",
    subCategory: "zhangji",
    cover: "https://i.ibb.co/pBgTWLfq/f9af83e3df5a1a6a9fa3f2dfa84c7764c71d9d5e.jpg",
    link: "https://www.bilibili.com/video/BV1UA411q7Xp?t=4.2"
  },
  {
    id: "54",
    title: "《Because of you》",
    category: "stage",
    subCategory: "duo",
    cover: "https://i.ibb.co/dJ7PN3C1/229542b68171bab5c72d98185057d115c4993a2e.jpg",
    link: "https://www.bilibili.com/video/BV1zt4y197dv?t=1.2"
  },
  {
    id: "55",
    title: "《老教室》",
    category: "stage",
    subCategory: "tuan",
    cover: "https://i.ibb.co/jZ6qhMRR/c74e5b9526b2b090975e85eae50c5ff1ef6af008.jpg",
    link: "https://www.bilibili.com/video/BV12v411y7nX?t=4.1",
    program: "歌曲COVER"
  },
  {
    id: "59",
    title: "《那些你很冒险的梦》",
    category: "stage",
    subCategory: "zhangji",
    cover: "https://i.ibb.co/tMC5bzBq/1524fbf14e00e63644301e04fbef7c04c7ccd25b.jpg",
    link: "https://www.bilibili.com/video/BV1mt4y1i7qL?t=51.6"
  },
  // ====== 圈 ======
  {
    id: "60",
    title: "I Believe",
    category: "stage",
    subCategory: "tuan",
    program: "圈",
    cover: "https://i.ibb.co/C3z6FYJC/0088-J5-LFly1hmom4wsef0j356o3gg1kz.jpg",
    link: "https://www.bilibili.com/video/BV12WHXzAEE5?t=22.4&p=12"
  },
  {
    id: "61",
    title: "Funky show",
    category: "stage",
    subCategory: "zeyu",
    program: "圈",
    cover: "https://i.ibb.co/d4c4b76Z/6-7-2026-2447-www-doubao-com.jpg",
    link: "https://www.bilibili.com/video/BV12WHXzAEE5?t=97.4&p=13"
  },
  {
    id: "62",
    title: "温柔",
    category: "stage",
    subCategory: "tuan",
    program: "圈",
    cover: "https://i.ibb.co/YFsnTPrq/0088-Ml-JYly1gkqcrfseqwj30u00gwtq1.jpg",
    link: "https://www.bilibili.com/video/BV12WHXzAEE5?t=5.8&p=14"
  },
  {
    id: "63",
    title: "Maria + how you like that",
    category: "stage",
    subCategory: "tuan",
    program: "圈",
    cover: "https://i.ibb.co/Zz3K29Dr/cc6992b01b854eeba855c390f17db599-tplv-hyn85iju7u-ai-water-mark-web.jpg",
    link: "https://www.bilibili.com/video/BV12WHXzAEE5?t=77.0&p=15"
  },
  {
    id: "64",
    title: "庆功酒",
    category: "stage",
    subCategory: "zeyu",
    program: "圈",
    cover: "https://i.ibb.co/0R3rV3RF/61c47b22ly1gxmwtu8ko4j20vu0jx790.jpg",
    link: "https://www.bilibili.com/video/BV12WHXzAEE5?t=3.2&p=16"
  },
  {
    id: "65",
    title: "thanks",
    category: "stage",
    subCategory: "tuan",
    program: "圈",
    cover: "https://i.ibb.co/bMCBvQn8/0088-Ml-JYly1gkp9p9cdzhj30vk0l8kjl.jpg",
    link: "https://www.bilibili.com/video/BV12WHXzAEE5?t=0.9&p=19"
  },
  {
    id: "66",
    title: "R-eVolutiort",
    category: "stage",
    subCategory: "tuan",
    program: "圈",
    cover: "https://i.ibb.co/99BbnfRR/0088-Ml-JYly1gkow659hcdj31hd0u0k1v.jpg",
    link: "https://www.bilibili.com/video/BV12WHXzAEE5?t=157.8&p=20"
  },
  {
    id: "67",
    title: "年轻的战场",
    category: "stage",
    subCategory: "tuan",
    program: "圈",
    cover: "https://i.ibb.co/m5vRHfh5/0088-Ml-JYly1gkqa2zyso2j317y0u0qv7.jpg",
    link: "https://www.bilibili.com/video/BV12WHXzAEE5?t=3.1&p=21"
  },
  {
    id: "68",
    title: "想见你想见你想见你",
    category: "stage",
    subCategory: "tuan",
    program: "圈",
    cover: "https://i.ibb.co/HTFVDCWg/6ec56906-996a-42d7-9af2-fda83b13bb49.png",
    link: "https://www.bilibili.com/video/BV12WHXzAEE5?t=1.5&p=22"
  },
  {
    id: "69",
    title: "《夜话》",
    category: "stage",
    subCategory: "tuan",
    program: "歌曲COVER",
    cover: "https://i.ibb.co/GfS2XW8Q/c77d101414b2f43ad33d863d7f0eccb4a6a43ef7.jpg",
    link: "https://www.bilibili.com/video/BV12Z4y1P7rs?t=27.6"
  },
  // ====== 练习室 ======
  {
    id: "56",
    title: "《光年之外》",
    category: "practice",
    subCategory: "zeyu",
    cover: "https://i.ibb.co/zH6hq5Bq/d9902725c119285a61932a15c0e86614f379d9ed.jpg",
    link: "https://www.bilibili.com/video/BV1at4y1S7cj?t=1.5"
  },
  {
    id: "57",
    title: "《我好想你》",
    category: "practice",
    subCategory: "zeyu",
    cover: "https://i.ibb.co/Vpwrn3v2/5de412ccce7d0e18bfe72721c9cbb5932290cd14.jpg",
    link: "https://www.bilibili.com/video/BV1Pf4y1N7Zf?t=7.4"
  },
  {
    id: "58",
    title: "《慢慢喜欢你》",
    category: "practice",
    subCategory: "zeyu",
    cover: "https://i.ibb.co/ZRxySKZT/8e04c65d1e09cded07d5906ce3e12cc4e18b2014.jpg",
    link: "https://www.bilibili.com/video/BV1CR4y1A7fy?t=2.3"
  },
];