// src/data/weiboData.ts

export interface WeiboPost {
  id: string;
  date: string;
  content: string;
  images: string[];
  artist: 'zhangji' | 'zeyu' | 'duo';
}

export const defaultPosts: WeiboPost[] = [
 ];
