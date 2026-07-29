// src/components/WeiboSection.tsx

import { useState, useMemo, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
// 重点：我把 @ 改成了相对路径 ../ 
import { useLocalStorage } from "../hooks/useLocalStorage";
import { defaultPosts, WeiboPost } from "../data/weiboData";

const COLORS = {
  bg: "#fff5f8",
  zhangJi: "#ffe5d9",
  zhangJiAccent: "#ffb06b",
  zeyu: "#dae1dd",
  zeyuAccent: "#21a675",
  duo: "#ffdee5",
  duoAccent: "#ff799c",
  modalBorder: "#ffdee5",
  modalBg: "#ffffff",
};

type ArtistType = "zhangji" | "zeyu" | "duo";


// ============ 图片灯箱组件（只用于微博图集） ============
function ImageLightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goPrev, goNext]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!images.length) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* 关闭按钮 */}
      <button
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>

      {/* 左右切换按钮 */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="absolute right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          {/* 图片计数 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}

      {/* 图片 */}
      <img
        src={images[currentIndex]}
        alt=""
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

// ============ 月份详情模态框 ============
function MonthModal({
  monthKey,
  posts,
  onClose,
}: {
  monthKey: string;
  posts: WeiboPost[];
  onClose: () => void;
}) {
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (images: string[], index: number) => {
    if (!images.length) return;
    setLightboxImages(images);
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  // 按日期分组
  const groupedByDate = useMemo(() => {
    const groups: Record<string, WeiboPost[]> = {};
    posts.forEach((post) => {
      const date = post.date;
      if (!groups[date]) groups[date] = [];
      groups[date].push(post);
    });
    const sortedDates = Object.keys(groups).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
    return sortedDates.map((date) => ({ date, posts: groups[date] }));
  }, [posts]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{
          backgroundColor: COLORS.modalBg,
          border: `2px solid ${COLORS.modalBorder}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: COLORS.modalBorder }}>
          <span className="text-xl font-bold text-gray-800">
            {monthKey.replace("-", "年")}月
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {groupedByDate.length === 0 ? (
            <div className="text-center py-8 text-gray-500">该月暂无记录</div>
          ) : (
            <div className="space-y-6">
              {groupedByDate.map((group) => {
                const day = group.date.split("-")[2];
                return (
                  <div key={group.date}>
                    <div className="text-sm font-medium text-gray-400 mb-2">{day}日</div>
                    <div className="space-y-4">
                      {group.posts.map((post) => {
                        // 根据 artist 取颜色
                        const artistColor = (() => {
                          switch (post.artist) {
                            case "zhangji": return COLORS.zhangJiAccent;
                            case "zeyu": return COLORS.zeyuAccent;
                            default: return COLORS.duoAccent;
                          }
                        })();

                        return (
                          <div
                            key={post.id}
                            className="relative pl-6 pb-4 border-l-2"
                            style={{ borderColor: artistColor }}
                          >
                            {/* 时间线圆点 */}
                            <div
                              className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm"
                              style={{ backgroundColor: artistColor }}
                            />
                            {/* 内容卡片 */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100/50">
                              {/* 不再显示人名 */}
                              <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
                                {post.content}
                              </p>
                              {post.images.length > 0 && (
                                <div className="mt-3 grid grid-cols-3 gap-2">
                                  {post.images.map((img, i) => (
                                    <div
                                      key={i}
                                      className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity"
                                      onClick={() => openLightbox(post.images, i)}
                                    >
                                      <img
                                        src={img}
                                        alt=""
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* 图片灯箱 */}
      {isLightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

// ============ 主组件 ============
export function WeiboSection() {
  const [posts] = useLocalStorage<WeiboPost[]>("weibo-posts", defaultPosts);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 按年月分组
  const monthGroups = useMemo(() => {
    const groups = new Map<string, { year: string; month: string; posts: WeiboPost[] }>();
    posts.forEach((post) => {
      const [year, month] = post.date.split("-");
      const key = `${year}-${month}`;
      if (!groups.has(key)) {
        groups.set(key, { year, month, posts: [] });
      }
      groups.get(key)!.posts.push(post);
    });
    return Array.from(groups.entries())
      .sort((a, b) => b[0].localeCompare(a[0]))
      .map(([key, value]) => ({ key, ...value }));
  }, [posts]);

  const selectedMonthPosts = useMemo(() => {
    if (!selectedMonth) return [];
    return posts.filter((p) => p.date.startsWith(selectedMonth));
  }, [selectedMonth, posts]);

  const openMonth = (key: string) => {
    setSelectedMonth(key);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMonth(null);
  };

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">朝夕碎片</h2>

        {monthGroups.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {monthGroups.map(({ key, year, month, posts: monthPosts }) => {
              const coverImage = monthPosts[0]?.images[0] || "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop";
              return (
                <button
                  key={key}
                  onClick={() => openMonth(key)}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <img
                    src={coverImage}
                    alt={`${year}-${month}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <div className="text-lg font-bold">{year}-{month}</div>
                    <div className="text-sm opacity-80">{monthPosts.length} 张</div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>暂无微博记录</p>
          </div>
        )}
      </div>

      {/* 月份详情模态框 */}
      {isModalOpen && selectedMonth && (
        <MonthModal
          monthKey={selectedMonth}
          posts={selectedMonthPosts}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
