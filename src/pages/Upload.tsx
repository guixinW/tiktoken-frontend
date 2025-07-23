import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoUpload from '../components/VideoUpload';
import type { Video } from '../types';
import { v4 as uuidv4 } from 'uuid';

const Upload: React.FC = () => {
  const navigate = useNavigate();

  const handleUpload = (file: File, title: string, description: string) => {
    const videoUrl = URL.createObjectURL(file);
    
    const newVideo: Video = {
      id: uuidv4(),
      url: videoUrl,
      title,
      description,
      author: {
        id: 'current-user',
        username: '当前用户',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
      },
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      createdAt: new Date().toISOString()
    };

    console.log('上传视频:', newVideo);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="upload-page">
      <VideoUpload onUpload={handleUpload} onCancel={handleCancel} />
    </div>
  );
};

export default Upload;