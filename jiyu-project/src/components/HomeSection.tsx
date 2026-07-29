import type { ArtistInfo } from "@/types";

interface HomeSectionProps {
  zhangJi: ArtistInfo;
  zhangZeYu: ArtistInfo;
}

const COLORS = {
  bg: "#fff5f8",
  zhangJi: "#ffb06b",
  zhangJiLight: "#ffe5d9",
  zeyu: "#21a675",
  zeyuLight: "#dae1dd",
  text: "#4a4a4a",
  textLight: "#7a7a7a",
};

export function HomeSection({ zhangJi, zhangZeYu }: HomeSectionProps) {
  const ArtistCard = ({ artist, isZhangJi }: { artist: ArtistInfo; isZhangJi: boolean }) => {
    const mainColor = isZhangJi ? COLORS.zhangJi : COLORS.zeyu;
    const lightColor = isZhangJi ? COLORS.zhangJiLight : COLORS.zeyuLight;
    const mainPhoto = artist.photos[0] || artist.avatar;
    const gridPhotos = artist.photos.slice(1, 7); // 第2张到第7张

    return (
      <div
        className="rounded-[2rem] p-6 md:p-8 relative group shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
        style={{ backgroundColor: lightColor }}
      >
        {/* 顶部区域：竖排名字 + 信息表格 + 大照片 */}
        <div className="flex gap-4 mb-6">
          {/* 竖排中文名 */}
          <div className="flex flex-col items-center">
            {artist.name.split("").map((char, i) => (
              <span
                key={i}
                className="text-5xl md:text-6xl font-bold leading-tight"
                style={{ color: mainColor }}
              >
                {char}
              </span>
            ))}
            <span
              className="text-base md:text-lg font-medium tracking-wider mt-3 writing-mode-vertical opacity-80"
              style={{ writingMode: "vertical-rl", color: COLORS.text }}
            >
              {artist.englishName}
            </span>
          </div>

          {/* 信息表格 */}
          <div className="flex-1 bg-white/60 rounded-2xl p-4 backdrop-blur-sm">
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200/50">
                <span style={{ color: COLORS.textLight }} className="text-[10px]">生日</span>
                <span style={{ color: COLORS.text }} className="font-semibold">{artist.birthday}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200/50">
                <span style={{ color: COLORS.textLight }} className="text-[10px]">星座</span>
                <span style={{ color: COLORS.text }} className="font-semibold">{artist.constellation}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200/50">
                <span style={{ color: COLORS.textLight }} className="text-[10px]">MBTI</span>
                <span style={{ color: COLORS.text }} className="font-semibold">{artist.mbti}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200/50">
                <span style={{ color: COLORS.textLight }} className="text-[10px]">出生地</span>
                <span style={{ color: COLORS.text }} className="font-semibold">{artist.birthplace}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200/50">
                <span style={{ color: COLORS.textLight }} className="text-[10px]">宠物</span>
                <span style={{ color: COLORS.text }} className="font-semibold">{artist.pet || "-"}</span>
              </div>
              <div className="flex justify-between items-center pt-4 pb-4">
                <span style={{ color: COLORS.textLight }} className="text-[10px]">爱好</span>
                <span style={{ color: COLORS.text }} className="font-semibold">{artist.hobby || "-"}</span>
              </div>
            </div>
          </div>

          {/* 右侧大照片 */}
          <div className="w-32 md:w-44 flex-shrink-0">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-[3px] border-white/50">
              <img
                src={isZhangJi ? "https://conversation.cdn.meoo.host/conversations/330982644215132160/image/2026-07-03/1783056617953-微信图片_20260702115523_11_2.jpg?auth_key=ad44fafa30d13d2aa444b8d1549187f0fb6bd48e5672e3db343c326ef36a1fba" : mainPhoto}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ====== 底部照片网格（已缩短：只保留一排，去掉多余空白） ====== */}
        <div className="bg-white/30 rounded-2xl p-4 backdrop-blur-sm">
          <div className="grid grid-cols-4 gap-3">
            {/* 第一张图（大图效果） */}
            <div className="aspect-square rounded-xl overflow-hidden border-[3px] border-white/50">
              <img src={gridPhotos[0] || artist.avatar} alt="" className="w-full h-full object-cover" />
            </div>
            {/* 只取接下来的 3 张图，凑成一行 4 个 */}
            {gridPhotos.slice(1, 4).map((photo, idx) => (
              <div key={idx} className="aspect-square rounded-xl overflow-hidden border-[3px] border-white/50">
                <img src={photo} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
            {/* 不再补空白格，多余的图片不显示 */}
          </div>
        </div>
        {/* ====== 网格结束 ====== */}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="animate-fade-in flex"><ArtistCard artist={zhangJi} isZhangJi={true} /></div>
        <div className="animate-fade-in stagger-1 flex"><ArtistCard artist={zhangZeYu} isZhangJi={false} /></div>
      </div>
    </div>
  );
}