import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, Plus, Heart, User } from 'lucide-react';

interface NavigationProps {
  isLoggedIn: boolean;
  onProfileClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isLoggedIn, onProfileClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      onProfileClick();
    }
  };

  const navItems = [
    { path: '/', icon: Home, label: '首页' },
    { path: '/search', icon: Search, label: '搜索' },
    { path: '/upload', icon: Plus, label: '发布' },
    { path: '/notifications', icon: Heart, label: '消息' },
    { path: '/profile', icon: User, label: '我', onClick: handleProfileClick }
  ];

  return (
    <nav className="side-navigation">
      {navItems.map(({ path, icon: Icon, label, onClick }) => {
        if (onClick) {
          return (
            <a
              key={path}
              href={path}
              onClick={onClick}
              className={`nav-item ${location.pathname === path ? 'active' : ''}`}
            >
              <Icon size={24} />
              <span>{label}</span>
            </a>
          );
        }
        return (
          <Link
            key={path}
            to={path}
            className={`nav-item ${location.pathname === path ? 'active' : ''}`}
          >
            <Icon size={24} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
