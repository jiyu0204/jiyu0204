import { useState } from "react";
import { Play, Heart, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { defaultWorks } from '@/data/worksData';

const COLORS = {
  bg: "#fff5f8",
  zhangJi: "#ffe5d9",
  zhangJiAccent: "#ff9a5c",
  zeyu: "#dae1dd",
  zeyuAccent: "#7dd3c0",
  duo: "#ffdee5",
  duoAccent: "#ff799c",
  tuan: "#fef3c7",
};

const CATEGORIES = [
  { id: "original", name: "原创作品" },
  { id: "stage", name: "舞台" },
  { id: "concert", name: "音乐会" },
  { id: "douyin", name: "抖音" },
  { id: "practice", name: "练习室" },
];

const SUB_CATEGORIES = [
  { id: "zhangji", name: "张极", color: "#ff799c", bgColor: COLORS.zhangJi },
  { id: "zeyu", name: "张泽禹", color: "#ff799c", bgColor: COLORS.zeyu },
];

const SUB_CATEGORIES_WITH_DUO = [
  { id: "zhangji", name: "张极", color: "#ff799c", bgColor: COLORS.zhangJi },
  { id: "zeyu", name: "张泽禹", color: "#ff799c", bgColor: COLORS.zeyu },
  { id: "duo", name: "双人", color: "#ff799c", bgColor: COLORS.duo },
  { id: "tuan", name: "多人", color: "#ff799c", bgColor: COLORS.tuan },
];

// 自定义节目顺序
const programOrder = [
  "歌曲COVER",
  "暑期汇演",
  "10月路演",
  "秋日幻想曲",
  "第一页",
  "第25小时",
  "单向放映厅",
  "重逢",
  "想见你的倒计时",
  "圈"
];

export function WorksSection() {
  const [works, setWorks] = useLocalStorage<Work[]>("works-data", defaultWorks);
  const [activeCategory, setActiveCategory] = useState("original");
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [activeProgram, setActiveProgram] = useState<string | null>(null);

  // 当前筛选的作品
  const filteredWorks = works.filter((w) => {
    if (w.category !== activeCategory) return false;
    if (activeSubCategory && w.subCategory !== activeSubCategory) return false;
    if (activeProgram && w.program !== activeProgram) return false;
    return true;
  });

  // 提取所有可用的节目（仅当 activeSubCategory === "tuan" 时）
  const availablePrograms = Array.from(
    new Set(
      works
        .filter(w => w.category === activeCategory && w.subCategory === "tuan" && w.program)
        .map(w => w.program!)
    )
  ).sort((a, b) => {
    const indexA = programOrder.indexOf(a);
    const indexB = programOrder.indexOf(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  const handleLike = (id: string) => {
    setWorks(works.map((w) => (w.id === id ? { ...w, likes: (w.likes || 0) + 1 } : w)));
  };

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">星途偕章</h2>

        {/* 一级分类 */}
        <div className="flex justify-center gap-3 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setActiveSubCategory(null); setActiveProgram(null); }}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === cat.id ? "shadow-lg" : "bg-white/60 text-gray-700 hover:bg-white/80"
              )}
              style={{
                backgroundColor: activeCategory === cat.id ? "#ffdee5" : undefined,
                color: activeCategory === cat.id ? "#ff799c" : undefined,
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 二级分类（艺人） */}
        <div className="flex justify-center gap-3 mb-4">
          {(activeCategory === "original" ? SUB_CATEGORIES : SUB_CATEGORIES_WITH_DUO).map((sub) => (
            <button
              key={sub.id}
              onClick={() => {
                setActiveSubCategory(activeSubCategory === sub.id ? null : sub.id);
                setActiveProgram(null);
              }}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                activeSubCategory === sub.id ? "shadow-md" : "bg-white/50 text-gray-600 hover:bg-white/70"
              )}
              style={{
                backgroundColor: activeSubCategory === sub.id ? sub.bgColor : undefined,
                color: activeSubCategory === sub.id ? sub.color : undefined,
              }}
            >
              {sub.name}
            </button>
          ))}
        </div>

        {/* 三级分类（节目）—— 仅在“多人”时显示 */}
        {activeSubCategory === "tuan" && availablePrograms.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveProgram(null)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium transition-all",
                !activeProgram ? "bg-gray-700 text-white shadow" : "bg-white/60 text-gray-600 hover:bg-white/80"
              )}
            >
              全部
            </button>
            {availablePrograms.map((program) => (
              <button
                key={program}
                onClick={() => setActiveProgram(activeProgram === program ? null : program)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium transition-all",
                  activeProgram === program ? "bg-primary text-white shadow" : "bg-white/60 text-gray-600 hover:bg-white/80"
                )}
              >
                {program}
              </button>
            ))}
          </div>
        )}

        {/* 作品网格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredWorks.map((work) => {
            const workBgColor = work.subCategory === "zhangji" ? COLORS.zhangJi : work.subCategory === "zeyu" ? COLORS.zeyu : work.subCategory === "duo" ? COLORS.duo : work.subCategory === "tuan" ? COLORS.tuan : COLORS.duo;
            const workAccentColor = work.subCategory === "zhangji" ? COLORS.zhangJiAccent : work.subCategory === "zeyu" ? COLORS.zeyuAccent : work.subCategory === "duo" ? COLORS.duoAccent : work.subCategory === "tuan" ? "#f59e0b" : COLORS.duoAccent;
            return (
              <div key={work.id} className="bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <div className="aspect-[16/9] relative overflow-hidden" style={{ backgroundColor: workBgColor + "40" }}>
                  {work.cover ? (
                    <img src={work.cover} alt={work.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white/60" />
                    </div>
                  )}
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs text-white" style={{ backgroundColor: workAccentColor }}>
                    {SUB_CATEGORIES.find((s) => s.id === work.subCategory)?.name || SUB_CATEGORIES_WITH_DUO.find((s) => s.id === work.subCategory)?.name}
                  </span>
                  {work.link && (
                    <a href={work.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-gray-700" />
                      </div>
                    </a>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">{work.title}</h3>
                  <div className="flex items-center justify-between">
                    <button onClick={() => handleLike(work.id)} className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="w-3.5 h-3.5" />
                      <span>{work.likes || 0}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredWorks.length === 0 && (
          <div className="text-center py-12 text-gray-500"><p>暂无作品</p></div>
        )}
      </div>
    </div>
  );
}