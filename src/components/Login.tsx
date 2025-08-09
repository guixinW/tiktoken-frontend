import React, { useState } from "react";

interface LoginProps {
  onLogin: () => void;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    // 在实际应用中，这里会进行真正的认证
    if (username && password) {
      onLogin();
    } else {
      alert("请输入用户名和密码");
    }
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal-content">
        <h2>登录</h2>
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
        <button onClick={handleLoginClick}>登录</button>
        <button onClick={onClose}>关闭</button>
      </div>
    </div>
  );
};

export default Login;
