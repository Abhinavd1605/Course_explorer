
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  image: string;
}

export interface UserData {
  favorites: string[];
  lastLogin: string | null;
  streakCount: number;
  streakLastUpdated: string | null;
}
