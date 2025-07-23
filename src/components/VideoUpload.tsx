import React, { useState, useRef } from 'react';
import { Upload, X, Play } from 'lucide-react';

interface VideoUploadProps {
  onUpload: (file: File, title: string, description: string) => void;
  onCancel: () => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onUpload, onCancel }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !title.trim()) return;
    
    setIsUploading(true);
    
    setTimeout(() => {
      onUpload(selectedFile, title, description);
      setIsUploading(false);
      resetForm();
    }, 2000);
  };

  const resetForm = () => {
    setSelectedFile(null);
    setPreviewUrl('');
    setTitle('');
    setDescription('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCancel = () => {
    resetForm();
    onCancel();
  };

  return (
    <div className="upload-container">
      <div className="upload-header">
        <h2>发布视频</h2>
        <button className="close-btn" onClick={handleCancel}>
          <X size={24} />
        </button>
      </div>

      <div className="upload-content">
        {!selectedFile ? (
          <div className="file-select-area" onClick={() => fileInputRef.current?.click()}>
            <Upload size={48} />
            <p>点击选择视频文件</p>
            <span>支持 MP4, MOV, AVI 格式</span>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
          </div>
        ) : (
          <div className="preview-section">
            <div className="video-preview">
              <video
                src={previewUrl}
                controls
                className="preview-video"
              />
            </div>
            
            <div className="upload-form">
              <div className="form-group">
                <label>视频标题 *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="输入视频标题"
                  maxLength={50}
                />
                <span className="char-count">{title.length}/50</span>
              </div>
              
              <div className="form-group">
                <label>视频描述</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="添加视频描述，让更多人发现你的作品"
                  maxLength={200}
                  rows={4}
                />
                <span className="char-count">{description.length}/200</span>
              </div>
              
              <div className="upload-actions">
                <button 
                  className="btn-secondary" 
                  onClick={() => setSelectedFile(null)}
                  disabled={isUploading}
                >
                  重新选择
                </button>
                <button 
                  className="btn-primary" 
                  onClick={handleUpload}
                  disabled={!title.trim() || isUploading}
                >
                  {isUploading ? '发布中...' : '发布'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoUpload;