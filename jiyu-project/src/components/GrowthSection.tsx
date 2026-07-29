import { useState, useMemo } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { defaultShows, defaultRecords, Show, GrowthRecord } from '@/data/growthData';

const COLORS = {
  bg: "#fff5f8",
  zhangJi: "#ffe5d9",
  zeyu: "#dae1dd",
  duo: "#ffdee5",
  zhangJiAccent: "#ff9a5c",
  zeyuAccent: "#7dd3c0",
  duoAccent: "#ff799c",
};
export function GrowthSection() {
  const [shows] = useLocalStorage<Show[]>("growth-shows", defaultShows);
  const [records] = useLocalStorage<GrowthRecord[]>("growth-records", defaultRecords);
  const [activeShow, setActiveShow] = useState<string | null>(null);
  const [expandedRecords, setExpandedRecords] = useState<Set<string>>(new Set());

  const groupedRecords = useMemo(() => {
    const groups = new Map<string, GrowthRecord[]>();
    shows.forEach((show) => {
      const showRecords = records.filter((r) => r.showId === show.id).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      groups.set(show.id, showRecords);
    });
    return groups;
  }, [records, shows]);

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedRecords);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRecords(newExpanded);
  };

  const getDisplayRecords = (showId: string) => {
    const showRecords = groupedRecords.get(showId) || [];
    if (activeShow === showId) return showRecords;
    return showRecords.slice(0, 4);
  };

  return (
    <div className="min-h-screen py-4 px-2" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-1 text-gray-800">物料档案馆</h2>
        </div>

        {shows.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <button
              onClick={() => setActiveShow(null)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium transition-all",
                activeShow === null ? "bg-gray-800 text-white shadow" : "bg-white/60 text-gray-700 hover:bg-white/80"
              )}
            >
              全部
            </button>
            {shows.map((show) => (
              <button
                key={show.id}
                onClick={() => setActiveShow(activeShow === show.id ? null : show.id)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1.5",
                  activeShow === show.id ? "shadow" : "bg-white/60 hover:bg-white/80"
                )}
                style={{
                  backgroundColor: activeShow === show.id ? "#ffdee5" : undefined,
                  color: activeShow === show.id ? "#ff799c" : undefined,
                }}
              >
                {show.name}
              </button>
            ))}
          </div>
        )}

        {shows.length === 0 && (
          <div className="text-center py-8 text-gray-500 text-sm">
            <p>暂无节目分类</p>
          </div>
        )}

        {shows.length > 0 && (
          <div className="relative">
            <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 transform sm:-translate-x-1/2" />

            <div className="space-y-1">
              {shows.map((show) => {
                const showRecords = getDisplayRecords(show.id);
                const allRecords = groupedRecords.get(show.id) || [];
                const hasMore = allRecords.length > 4 && activeShow !== show.id;
                if (activeShow && activeShow !== show.id) return null;
                if (showRecords.length === 0 && activeShow !== show.id) return null;

                return (
                  <div key={show.id}>
                    <div className="space-y-1">
                      {showRecords.map((record, index) => {
                        const isEven = index % 2 === 0; // true = 左侧卡片
                        return (
                          <div
                            key={record.id}
                            className="relative flex items-start gap-2 py-1"
                          >
                            {/* 时间线圆点 */}
                            <div
                              className="absolute left-3 sm:left-1/2 w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm transform -translate-x-1/2 z-10"
                              style={{ backgroundColor: show.color }}
                            />

                            {/* 卡片容器，flex-row 不反转，用 order 控制顺序 */}
                            <div
                              className={cn(
                                "ml-7 sm:ml-0 flex gap-2",
                                "sm:w-5/12",
                                isEven ? "sm:mr-auto" : "sm:ml-auto"
                              )}
                            >
                              {/* 图片 */}
                              <div
                                className={cn(
                                  "flex-shrink-0 w-28 h-20 sm:w-36 sm:h-24 rounded-lg overflow-hidden relative group cursor-pointer",
                                  // 横屏左侧：图片在右 → order-last；横屏右侧：图片在左 → order-first
                                  // 竖屏：图片在左 → order-first
                                  isEven ? "sm:order-last" : "sm:order-first",
                                  // 默认竖屏 order-first
                                  "order-first"
                                )}
                              >
                                {record.images && record.images.length > 0 && record.images[0] ? (
                                  <>
                                    <img
                                      src={record.images[0]}
                                      alt=""
                                      className="w-full h-full object-cover"
                                    />
                                    {record.link && (
                                      <a
                                        href={record.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30"
                                      >
                                        <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center">
                                          <ExternalLink className="w-3.5 h-3.5 text-gray-700" />
                                        </div>
                                      </a>
                                    )}
                                  </>
                                ) : (
                                  <div
                                    className="w-full h-full flex items-center justify-center text-gray-300 text-xs"
                                    style={{ backgroundColor: show.color + "30" }}
                                  >
                                    📷
                                  </div>
                                )}
                              </div>

                              {/* 文本内容 */}
                              <div
                                className={cn(
                                  "flex-1 min-w-0",
                                  // 横屏左侧：文本在左 → order-first；横屏右侧：文本在右 → order-last
                                  // 竖屏：文本在右 → order-last
                                  isEven ? "sm:order-first" : "sm:order-last",
                                  "order-last"
                                )}
                              >
                                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-2 shadow-sm border border-white/50">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-[10px] font-medium text-gray-400">{record.date}</span>
                                    {record.link && !record.images?.length && (
                                      <a
                                        href={record.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] text-gray-400 hover:text-gray-600"
                                      >
                                        查看视频 →
                                      </a>
                                    )}
                                  </div>
                                  <h3 className="text-xs font-semibold text-gray-800 truncate">{record.title}</h3>
                                  <p className={cn("text-[11px] text-gray-600 leading-relaxed mt-0.5", !expandedRecords.has(record.id) && "line-clamp-3")}>
                                    {record.content}
                                  </p>
                                  {record.content.length > 80 && (
                                    <button
                                      onClick={() => toggleExpand(record.id)}
                                      className="text-[10px] text-gray-400 hover:text-gray-600 mt-0.5 flex items-center gap-0.5"
                                    >
                                      {expandedRecords.has(record.id) ? <><ChevronUp className="w-3 h-3" />收起</> : <><ChevronDown className="w-3 h-3" />展开</>}
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {hasMore && (
                      <div className="flex justify-center mt-1">
                        <button
                          onClick={() => setActiveShow(show.id)}
                          className="text-[10px] text-gray-400 hover:text-gray-600 flex items-center gap-0.5"
                        >
                          还有 {allRecords.length - 4} 条记录，点击展开
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                    {showRecords.length === 0 && (
                      <div className="text-center py-2 text-gray-400 text-xs">该节目暂无记录</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}