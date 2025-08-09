import React, { useState } from "react";
import { X } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    // In a real app, authentication would happen here
    if (username && password) {
      onLogin();
    } else {
      alert("请输入用户名和密码");
    }
  };

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={24} />
        </button>
        <h2>登录</h2>
        <p>登录后即可发布评论、点赞视频</p>
        <div className="login-form">
          <input
            type="text"
            placeholder="用户名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-primary login-btn" onClick={handleLoginClick}>
          登录
        </button>
      </div>
    </div>
  );
};

export default Login;
