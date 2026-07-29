export interface ArtistInfo {
  id: string;
  name: string;
  englishName: string;
  birthday: string;
  constellation: string;
  birthplace: string;
  mbti: string;
  pet: string;
  favoriteColor: string;
  hobby?: string;
  avatar: string;
  photos: string[];
  works: Work[];
  growthRecords: GrowthRecord[];
}

export interface Work {
  id: string;
  title: string;
  type: 'music' | 'video' | 'show' | 'other';
  link: string;
  cover?: string;
  releaseDate: string;
  description?: string;
}

export interface GrowthRecord {
  id: string;
  date: string;
  title: string;
  content: string;
  images?: string[];
  category: 'milestone' | 'performance' | 'daily' | 'award';
}

export interface WeiboPost {
  id: string;
  date: string;
  content: string;
  images: string[];
  month: string;
  year: string;
  artistId: string;
}

export interface EditModeState {
  isActive: boolean;
  currentSection: string | null;
}

export interface NavItem {
  id: string;
  label: string;
  icon?: string;
}

export interface MonthGroup {
  year: string;
  month: string;
  label: string;
  posts: WeiboPost[];
}