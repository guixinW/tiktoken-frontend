import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Plus, Heart, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: '首页' },
    { path: '/search', icon: Search, label: '搜索' },
    { path: '/upload', icon: Plus, label: '发布' },
    { path: '/notifications', icon: Heart, label: '消息' },
    { path: '/profile', icon: User, label: '我' }
  ];

  return (
    <nav className="bottom-navigation">
      {navItems.map(({ path, icon: Icon, label }) => (
        <Link
          key={path}
          to={path}
          className={`nav-item ${location.pathname === path ? 'active' : ''}`}
        >
          <Icon size={24} />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;