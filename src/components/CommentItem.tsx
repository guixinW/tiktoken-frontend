import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import type { Comment } from '../types';

interface CommentItemProps {
  comment: Comment;
  onLike: (commentId: string) => void;
  onReply: (commentId: string) => void;
  style?: React.CSSProperties;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, onLike, onReply, style }) => {
  const formatCount = (count: number): string => {
    if (count >= 10000) {
      return (count / 10000).toFixed(1) + '万';
    }
    return count.toString();
  };

  const formatTime = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (minutes < 60) {
      return `${minutes}分钟前`;
    } else if (hours < 24) {
      return `${hours}小时前`;
    } else {
      return `${days}天前`;
    }
  };

  return (
    <div className="comment-item" style={style}>
      <img src={comment.author.avatar} alt={comment.author.username} className="comment-avatar" />
      <div className="comment-content">
        <div className="comment-header">
          <span className="comment-username">{comment.author.username}</span>
          <span className="comment-time">{formatTime(comment.createdAt)}</span>
        </div>
        <p className="comment-text">{comment.content}</p>
        <div className="comment-actions">
          <button 
            className={`comment-action ${comment.isLiked ? 'liked' : ''}`}
            onClick={() => onLike(comment.id)}
          >
            <Heart size={14} fill={comment.isLiked ? '#ff4757' : 'none'} />
            <span>{formatCount(comment.likes)}</span>
          </button>
          <button 
            className="comment-action"
            onClick={() => onReply(comment.id)}
          >
            <MessageCircle size={14} />
            <span>回复</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;