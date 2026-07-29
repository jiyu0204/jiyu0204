import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/HomeSection";
import { WorksSection } from "@/components/WorksSection";
import { GrowthSection } from "@/components/GrowthSection";
import { WeiboSection } from "@/components/WeiboSection";
import { BirthdaySection } from "@/components/BirthdaySection";
import { birthdayData } from "@/data/birthdayData";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { ArtistInfo } from "@/types";

export const Route = createFileRoute("/")({
  component: Index,
});

// 默认艺人数据
const defaultZhangJi: ArtistInfo = {
  id: "zhangji",
  name: "张极",
  englishName: "Jeremy",
  birthday: "2007.2.3",
  constellation: "水瓶座",
  birthplace: "金坛",
  mbti: "INFP",
  pet: "啵啵",
  hobby: "自行车 滑板 露营 攀冰 编曲 乐高",  
  avatar: "https://i.ibb.co/S42DQsbr/006lp-DQkgy1iemaltyw2lj36jv86unpw.jpg",
  photos: [
    "https://i.ibb.co/S42DQsbr/006lp-DQkgy1iemaltyw2lj36jv86unpw.jpg",
    "  https://i.ibb.co/zWvfc8ts/007-Fw8-Yply1ibdqlixfb3j30vf15wwre.jpg",
    " https://i.ibb.co/Hmh9PNN/007-Fw8-Ypgy1iabj24v2q9j32dc35s7wi.jpg",
    " https://i.ibb.co/5hsp79ZZ/007-Fw8-Yply1i9xivkfnroj347s6bkkjp.jpg",
    " https://i.ibb.co/1tvSwhsW/007-Fw8-Yply1i4g0kj74xoj318x0xpkjl.jpg",
  
  ],
  works: [],
  growthRecords: [],
};

const defaultZhangZeYu: ArtistInfo = {
  id: "zeyu",
  name: "张泽禹",
  englishName: "Zack",
  birthday: "2007.4.30",
  constellation: "金牛座",
  birthplace: "哈尔滨",
  mbti: "ESTJ",
  pet: "老蔫儿 妙妙 复制 粘贴",
  hobby: "吉他 足球 拍月亮 攀岩 ",  
  avatar: "https://i.ibb.co/RGjpmbx8/006lp-DQkgy1iemalmm5sbj36jw86vkk5.jpg",
  photos: [
    "https://i.ibb.co/RGjpmbx8/006lp-DQkgy1iemalmm5sbj36jw86vkk5.jpg",
    "https://i.ibb.co/PvTnwxKW/008k84-GPly1gwbhawnqclj32c0340x6q.jpg",
    "https://i.ibb.co/Y7rDVGPJ/008k84-GPly1icp6ksj4doj33co5yonps.jpg",
    "https://i.ibb.co/cKjZqQcY/008k84-GPly1i62u1ddvevj32dc35sth4.jpg",
    "https://i.ibb.co/rf6X7WtD/008k84-GPly1hgbqip96vvj323u35s1kz.jpg",

  ],
  works: [],
  growthRecords: [],
};

function Index() {
  const [activeSection, setActiveSection] = useState("home");
  
  const [zhangJi] = useLocalStorage<ArtistInfo>("zhangji-data", defaultZhangJi);
  const [zhangZeYu] = useLocalStorage<ArtistInfo>("zeyu-data", defaultZhangZeYu);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "works", "growth", "weibo", "birthday"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main className="pt-16">
        <section id="home" className="min-h-screen">
          <HomeSection zhangJi={zhangJi} zhangZeYu={zhangZeYu} />
        </section>
        <section id="works" className="min-h-screen">
          <WorksSection />
        </section>
        <section id="growth" className="min-h-screen">
          <GrowthSection />
        </section>
        <section id="weibo" className="min-h-screen">
          <WeiboSection />
        </section>
        <section id="birthday" className="min-h-screen">
          <BirthdaySection data={birthdayData} />
        </section>
      </main>
    </div>
  );
}