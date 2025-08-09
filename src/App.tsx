import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Feed from './pages/Feed';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';
import Login from './components/Login';
import CommentPanel from './components/CommentPanel';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [commentPanel, setCommentPanel] = useState<{ isOpen: boolean; videoId: string | null }>({
    isOpen: false,
    videoId: null,
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleOpenCommentPanel = (videoId: string) => {
    setCommentPanel({ isOpen: true, videoId });
  };

  const handleCloseCommentPanel = () => {
    setCommentPanel({ isOpen: false, videoId: null });
  };

  return (
    <Router>
      <div className="app-container">
        <Navigation isLoggedIn={isLoggedIn} onProfileClick={() => !isLoggedIn && handleShowLogin()} />
        <div className={`main-content-wrapper ${commentPanel.isOpen ? 'comment-panel-open' : ''}`}>
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Feed showLogin={showLogin} onCommentOpen={handleOpenCommentPanel} onShowLogin={handleShowLogin} isLoggedIn={isLoggedIn} />} />
              <Route path="/upload" element={<Upload />} />
              <Route 
                path="/profile" 
                element={isLoggedIn ? <Profile /> : <Navigate to="/" />} 
              />
            </Routes>
          </div>
          <CommentPanel
            isOpen={commentPanel.isOpen}
            videoId={commentPanel.videoId}
            onClose={handleCloseCommentPanel}
          />
        </div>
      </div>
      {showLogin && <Login onLogin={handleLogin} onClose={handleCloseLogin} />}
    </Router>
  );
}

export default App;
