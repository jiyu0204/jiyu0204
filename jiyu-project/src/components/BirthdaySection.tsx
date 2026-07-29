import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ImageIcon, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import type { BirthdayEvent } from '@/data/birthdayData';

interface BirthdaySectionProps {
  data: BirthdayEvent[];
}

const COLORS = {
  zhangji: {
    bg: '#fff5f0',
    border: '#ffb06b40',
    text: '#ffb06b',
    accent: '#ffb06b',
    bubbleBg: '#ffffff',
    bubbleBorder: '#ffb06b30',
    lightBg: '#ffb06b08',
    cardBg: '#ffffff',
    cardBorder: '#ffb06b',
  },
  zeyu: {
    bg: '#f0faf5',
    border: '#21a67540',
    text: '#21a675',
    accent: '#21a675',
    bubbleBg: '#ffffff',
    bubbleBorder: '#21a67530',
    lightBg: '#21a67508',
    cardBg: '#ffffff',
    cardBorder: '#21a675',
  },
};

// ==================== 图片灯箱组件 ====================
function ImageLightbox({
  images,
  initialIndex,
  onClose,
  artist,
}: {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  artist: 'zhangji' | 'zeyu';
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const color = COLORS[artist];
  const artistName = artist === 'zhangji' ? '张极' : '张泽禹';

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [images.length]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [images.length]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.min(Math.max(prev + delta, 0.5), 4));
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleDoubleClick = useCallback(() => {
    resetZoom();
  }, [resetZoom]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'r' || e.key === 'R') resetZoom();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goPrev, goNext, resetZoom]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    e.preventDefault();
  }, [scale, position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    e.preventDefault();
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => { setIsDragging(false); }, []);
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (scale <= 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  }, [scale, position]);
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setPosition({ x: touch.clientX - dragStart.x, y: touch.clientY - dragStart.y });
    e.preventDefault();
  }, [isDragging, dragStart]);
  const handleTouchEnd = useCallback(() => { setIsDragging(false); }, []);

  const containerWidth = containerRef.current?.clientWidth || 0;
  const containerHeight = containerRef.current?.clientHeight || 0;
  const maxX = (containerWidth * (scale - 1)) / 2;
  const maxY = (containerHeight * (scale - 1)) / 2;
  const clampedX = Math.min(Math.max(position.x, -maxX), maxX);
  const clampedY = Math.min(Math.max(position.y, -maxY), maxY);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center select-none"
      style={{ backgroundColor: color.lightBg }}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative z-10 w-[92vw] max-w-5xl max-h-[88vh] rounded-2xl shadow-2xl overflow-hidden"
        style={{
          backgroundColor: color.cardBg,
          border: `2px solid ${color.cardBorder}`,
        }}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: color.border }}>
          <div className="flex items-center gap-3">
            <span className="text-xl">🎂</span>
            <span className="text-sm font-medium" style={{ color: color.text }}>{artistName} · {images.length}张</span>
            <span className="text-xs text-gray-400">{currentIndex + 1} / {images.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700" onClick={resetZoom} title="重置缩放 (R)"><RotateCcw className="w-4 h-4" /></button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700" onClick={onClose}><X className="w-5 h-5" /></button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative w-full h-[70vh] overflow-hidden"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default', overscrollBehavior: 'none' }}
        >
          {scale !== 1 && <div className="absolute top-3 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-3 py-1 rounded-full z-10">{Math.round(scale * 100)}%</div>}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `translate(${clampedX}px, ${clampedY}px) scale(${scale})`,
              transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            }}
          >
            <img src={images[currentIndex]} alt="" className="max-w-[95%] max-h-[95%] object-contain rounded-lg shadow-sm" onDoubleClick={handleDoubleClick} />
          </div>
        </div>

        <div className="flex items-center justify-between px-5 py-2.5 border-t text-xs text-gray-400" style={{ borderColor: color.border }}>
          <div className="flex items-center gap-3"><span>滚轮缩放</span><span className="text-gray-300">|</span><span>拖拽移动</span><span className="text-gray-300">|</span><span>双击重置</span></div>
          <div className="flex items-center gap-3"><span>← → 切换</span><span className="text-gray-300">|</span><span>ESC 关闭</span></div>
        </div>

        {images.length > 1 && (
          <>
            <button className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors text-gray-700 hover:text-gray-900" onClick={(e) => { e.stopPropagation(); goPrev(); }}><ChevronLeft className="w-6 h-6" /></button>
            <button className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors text-gray-700 hover:text-gray-900" onClick={(e) => { e.stopPropagation(); goNext(); }}><ChevronRight className="w-6 h-6" /></button>
          </>
        )}
      </div>
    </div>
  );
}

// ==================== 对话气泡组件 ====================
function ChatBubble({
  content,
  images,
  artist,
  isLeft,
  senderName,
  onImageClick,
}: {
  content: string;
  images?: string[];
  artist: 'zhangji' | 'zeyu';
  isLeft: boolean;
  senderName: string;
  onImageClick: (images: string[], index: number, artist: 'zhangji' | 'zeyu') => void;
}) {
  const color = COLORS[artist];

  return (
    <div className={`flex flex-col ${isLeft ? 'items-start' : 'items-end'} mb-2`}>
      <div
        className={cn(
          "rounded-2xl px-4 py-2.5 shadow-sm border",
          isLeft ? "mr-auto ml-2" : "ml-auto mr-2",
          "w-[88%]"
        )}
        style={{
          backgroundColor: '#ffffff',
          borderColor: color.bubbleBorder,
          borderWidth: '1px',
        }}
      >
        <div className="text-xs font-medium mb-1" style={{ color: color.text }}>
          {senderName}
        </div>
        <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
          {content}
        </p>
        {images && images.length > 0 && (
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {images.map((img, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity bg-gray-100"
                onClick={() => onImageClick(images, i, artist)}
              >
                <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ==================== 物料条目组件（视频封面放大并按原始比例） ====================
function MaterialItem({
  post,
  onImageClick,
  artist,
}: {
  post: {
    content: string;
    images?: string[];
    video?: {
      link: string;
      cover?: string;
      title?: string;
    };
  };
  onImageClick: (images: string[], index: number, artist: 'zhangji' | 'zeyu') => void;
  artist: 'zhangji' | 'zeyu';
}) {
  return (
    <div className="bg-white/50 rounded-lg p-3 mb-2">
      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{post.content}</p>
      {post.images && post.images.length > 0 && (
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {post.images.map((img, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity bg-gray-100"
              onClick={() => onImageClick(post.images!, i, artist)}
            >
              <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      )}
      {post.video && (
        <a
          href={post.video.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block"
        >
          {post.video.cover ? (
            <img
              src={post.video.cover}
              alt=""
              className="w-64 sm:w-72 h-auto rounded-lg"
            />
          ) : (
            <div className="w-64 sm:w-72 h-36 bg-gray-200 flex items-center justify-center rounded-lg">
              <ImageIcon className="w-10 h-10 text-gray-400" />
            </div>
          )}
        </a>
      )}
    </div>
  );
}

// ==================== 主组件 ====================
export function BirthdaySection({ data }: BirthdaySectionProps) {
  const [selectedYear, setSelectedYear] = useState<number | null>(() => {
    const years = [...new Set(data.map((d) => d.year))].sort((a, b) => b - a);
    return years.length > 0 ? years[0] : null;
  });

  const [expandedMaterials, setExpandedMaterials] = useState<Set<string>>(new Set());
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxArtist, setLightboxArtist] = useState<'zhangji' | 'zeyu'>('zhangji');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const toggleMaterials = (key: string) => {
    const newSet = new Set(expandedMaterials);
    if (newSet.has(key)) newSet.delete(key);
    else newSet.add(key);
    setExpandedMaterials(newSet);
  };

  const openLightbox = (images: string[], index: number, artist: 'zhangji' | 'zeyu') => {
    if (!images.length) return;
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxArtist(artist);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  const years = useMemo(() => [...new Set(data.map((d) => d.year))].sort((a, b) => b - a), [data]);
  const filteredData = useMemo(() => {
    if (selectedYear === null) return [];
    return data.filter((d) => d.year === selectedYear);
  }, [data, selectedYear]);

  const sortedData = [...filteredData].sort((a, b) => {
    if (a.artist === 'zhangji' && b.artist === 'zeyu') return -1;
    if (a.artist === 'zeyu' && b.artist === 'zhangji') return 1;
    return 0;
  });

  if (years.length === 0) {
    return <div className="text-center py-12 text-gray-500">暂无生日记录</div>;
  }

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: '#fff5f8' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">岁岁同欢日</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all',
                selectedYear === year
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-white/60 text-gray-700 hover:bg-white/80'
              )}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {sortedData.map((event) => {
            const color = COLORS[event.artist];
            const artistName = event.artist === 'zhangji' ? '张极' : '张泽禹';
            const age = event.year - (event.artist === 'zhangji' ? 2007 : 2007);
            const birthdayDate = event.artist === 'zhangji' ? '2月3日' : '4月30日';
            const otherName = event.artist === 'zhangji' ? '张泽禹' : '张极';
            const materialKey = `${event.year}-${event.artist}`;
            const isExpanded = expandedMaterials.has(materialKey);
            const hasMaterials = event.materials && (
              (event.materials.teaserPosts && event.materials.teaserPosts.length > 0) ||
              (event.materials.otherPosts && event.materials.otherPosts.length > 0) ||
              (event.materials.videos && event.materials.videos.length > 0)
            );

            return (
              <div
                key={`${event.year}-${event.artist}`}
                className="rounded-2xl p-6 shadow-sm border"
                style={{
                  backgroundColor: color.bg,
                  borderColor: color.border,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🎂</span>
                  <span className="text-xl font-bold" style={{ color: color.text }}>{artistName} · {age}岁生日</span>
                  <span className="text-sm text-gray-400 ml-auto">{birthdayDate}</span>
                </div>

                <div className="mb-4">
                  {event.birthdayPost && (
                    <ChatBubble
                      content={event.birthdayPost.content}
                      images={event.birthdayPost.images}
                      artist={event.artist}
                      isLeft={true}
                      senderName={artistName}
                      onImageClick={openLightbox}
                    />
                  )}
                  {event.blessing && (
                    <ChatBubble
                      content={event.blessing.content}
                      images={event.blessing.images}
                      artist={event.artist}
                      isLeft={false}
                      senderName={otherName}
                      onImageClick={openLightbox}
                    />
                  )}
                  {event.reply && (
                    <ChatBubble
                      content={event.reply.content}
                      images={event.reply.images}
                      artist={event.artist}
                      isLeft={true}
                      senderName={artistName}
                      onImageClick={openLightbox}
                    />
                  )}
                </div>

                {hasMaterials && (
                  <div className="mt-4 pt-4 border-t border-gray-200/50">
                    <button
                      onClick={() => toggleMaterials(materialKey)}
                      className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors w-full"
                    >
                      <span>📦</span> 物料合集
                      {isExpanded ? <ChevronUp className="w-4 h-4 ml-auto" /> : <ChevronDown className="w-4 h-4 ml-auto" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-3">
                        {/* 预热博 */}
                        {event.materials?.teaserPosts && event.materials.teaserPosts.length > 0 && (
                          <div>
                            <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">🔥</div>
                            {event.materials.teaserPosts.map((post, idx) => (
                              <MaterialItem key={idx} post={post} onImageClick={openLightbox} artist={event.artist} />
                            ))}
                          </div>
                        )}

                        {/* 生日当天其他微博 */}
                        {event.materials?.otherPosts && event.materials.otherPosts.length > 0 && (
                          <div>
                            <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">📝</div>
                            {event.materials.otherPosts.map((post, idx) => (
                              <MaterialItem key={idx} post={post} onImageClick={openLightbox} artist={event.artist} />
                            ))}
                          </div>
                        )}

                        {/* 物料视频 */}
                        {event.materials?.videos && event.materials.videos.length > 0 && (
                          <div>
                            <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">🎬</div>
                            <div className="space-y-2">
                              {event.materials.videos.map((video, idx) => (
                                <a
                                  key={idx}
                                  href={video.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block bg-white/50 rounded-lg p-3 hover:bg-white/70 transition-colors group"
                                >
                                  <div className="flex items-center gap-3">
                                    {video.cover ? (
                                      <img
                                        src={video.cover}
                                        alt=""
                                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                      />
                                    ) : (
                                      <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0">
                                        <ImageIcon className="w-6 h-6 text-gray-400" />
                                      </div>
                                    )}
                                    <div>
                                      <p className="text-sm font-medium text-gray-800 group-hover:underline">▶ {video.title}</p>
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {sortedData.length === 0 && <div className="text-center py-12 text-gray-500">该年份暂无记录</div>}
      </div>

      {isLightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
          artist={lightboxArtist}
        />
      )}
    </div>
  );
}