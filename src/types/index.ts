export interface Video {
  id: string;
  url: string;
  title: string;
  description: string;
  author: {
    id: string;
    username: string;
    avatar: string;
  };
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  createdAt: string;
}

export interface Comment {
  id: string;
  videoId: string;
  author: {
    id: string;
    username: string;
    avatar: string;
  };
  content: string;
  likes: number;
  isLiked: boolean;
  createdAt: string;
  replies?: Comment[];
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  followers: number;
  following: number;
  videos: number;
}