import type { Video, Comment } from '../types';

export const mockVideos: Video[] = [
  {
    id: '1',
    url: 'http://vjs.zencdn.net/v/oceans.mp4',
    title: '美食分享',
    description: '今天给大家分享一道超级好吃的家常菜！#美食 #家常菜',
    author: {
      id: 'user1',
      username: '美食达人',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
    },
    likes: 12800,
    comments: 256,
    shares: 89,
    isLiked: false,
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    title: '旅行vlog',
    description: '云南大理的美景真的太震撼了！#旅行 #vlog #大理',
    author: {
      id: 'user2',
      username: '旅行者小王',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b68781d3?w=150&h=150&fit=crop&crop=face'
    },
    likes: 8900,
    comments: 167,
    shares: 45,
    isLiked: true,
    createdAt: '2024-01-14T15:20:00Z'
  },
  {
    id: '3',
    url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4',
    title: '搞笑日常',
    description: '哈哈哈哈哈，今天又被我家猫咪整笑了！#搞笑 #宠物 #日常',
    author: {
      id: 'user3',
      username: '搞笑小能手',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    likes: 15600,
    comments: 342,
    shares: 128,
    isLiked: false,
    createdAt: '2024-01-13T20:45:00Z'
  }
];

export const mockComments: Comment[] = [
  {
    id: 'comment1',
    videoId: '1',
    author: {
      id: 'user4',
      username: '吃货小李',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    content: '看起来就很好吃！能分享一下详细做法吗？',
    likes: 23,
    isLiked: false,
    createdAt: '2024-01-15T11:00:00Z'
  },
  {
    id: 'comment2',
    videoId: '1',
    author: {
      id: 'user5',
      username: '厨房新手',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    content: '太棒了！学会了，今晚就试试',
    likes: 12,
    isLiked: true,
    createdAt: '2024-01-15T11:15:00Z'
  },
  {
    id: 'comment3',
    videoId: '1',
    author: {
      id: 'user6',
      username: '风景控',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    content: '大理真的太美了！我也想去',
    likes: 45,
    isLiked: false,
    createdAt: '2024-01-14T16:00:00Z'
  },
    {
    id: 'comment4',
    videoId: '1',
    author: {
      id: 'user6',
      username: '风景控',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    content: '大理真的太美了！我也想去',
    likes: 45,
    isLiked: false,
    createdAt: '2024-01-14T16:00:00Z'
  },
    {
    id: 'comment5',
    videoId: '1',
    author: {
      id: 'user6',
      username: '风景控',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    content: '大理真的太美了！我也想去',
    likes: 45,
    isLiked: false,
    createdAt: '2024-01-14T16:00:00Z'
  },
    {
    id: 'comment6',
    videoId: '1',
    author: {
      id: 'user6',
      username: '风景控',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    content: '大理真的太美了！我也想去',
    likes: 45,
    isLiked: false,
    createdAt: '2024-01-14T16:00:00Z'
  },
    {
    id: 'comment7',
    videoId: '1',
    author: {
      id: 'user6',
      username: '风景控',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    content: '大理真的太美了！我也想去',
    likes: 45,
    isLiked: false,
    createdAt: '2024-01-14T16:00:00Z'
  }
];