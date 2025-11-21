import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  SparklesIcon, 
  UserCircleIcon, 
  ArrowRightOnRectangleIcon,
  PlusCircleIcon,
  PhotoIcon,
  RectangleStackIcon,
  FolderIcon,
  ChartBarIcon,
  EyeIcon,
  PencilIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout, loading } = useAuth();
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [recentDesigns] = useState([
    {
      id: 1,
      title: 'Summer Sale Banner',
      lastEdited: '2025-11-20',
      category: 'Social Media',
      dimensions: '1080x1080',
      status: 'published'
    },
    {
      id: 2,
      title: 'Product Showcase Ad',
      lastEdited: '2025-11-19',
      category: 'Advertisement', 
      dimensions: '1200x628',
      status: 'draft'
    },
    {
      id: 3,
      title: 'Black Friday Promo',
      lastEdited: '2025-11-18',
      category: 'Email',
      dimensions: '600x400',
      status: 'published'
    }
  ]);

  const [stats] = useState({
    totalCreatives: 24,
    templatesUsed: 12,
    storageUsed: 2.4
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
  };

  const handleViewDesign = (designId) => {
    console.log('View design:', designId);
  };

  const handleEditDesign = (designId) => {
    console.log('Edit design:', designId);
  };

  const handleQuickAction = (action) => {
    console.log('Quick action:', action);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-nav">
          <div className="logo">
            <SparklesIcon className="logo-icon" />
            <span className="logo-text">AutoCreative Studio</span>
          </div>
          <div className="user-menu">
            <UserCircleIcon className="user-icon" />
            <span className="user-name">{user?.name || 'User'}</span>
            <button onClick={handleLogout} className="logout-btn">
              <ArrowRightOnRectangleIcon className="logout-icon" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-layout">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <nav className="sidebar-nav">
            <button 
              className={`sidebar-item ${activeMenuItem === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveMenuItem('dashboard')}
            >
              <span className="sidebar-icon">🏠</span>
              Dashboard
            </button>
            <button 
              className={`sidebar-item ${activeMenuItem === 'create' ? 'active' : ''}`}
              onClick={() => setActiveMenuItem('create')}
            >
              <PlusCircleIcon className="sidebar-icon" />
              Create New Creative
            </button>
            <button 
              className={`sidebar-item ${activeMenuItem === 'designs' ? 'active' : ''}`}
              onClick={() => setActiveMenuItem('designs')}
            >
              <FolderIcon className="sidebar-icon" />
              My Designs
            </button>
            <button 
              className={`sidebar-item ${activeMenuItem === 'templates' ? 'active' : ''}`}
              onClick={() => setActiveMenuItem('templates')}
            >
              <RectangleStackIcon className="sidebar-icon" />
              Templates Library
            </button>
            <button 
              className={`sidebar-item ${activeMenuItem === 'brand' ? 'active' : ''}`}
              onClick={() => setActiveMenuItem('brand')}
            >
              <span className="sidebar-icon">🎨</span>
              Brand Assets
            </button>
            <button 
              className={`sidebar-item ${activeMenuItem === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveMenuItem('analytics')}
            >
              <ChartBarIcon className="sidebar-icon" />
              Analytics
            </button>
            <button 
              className={`sidebar-item ${activeMenuItem === 'help' ? 'active' : ''}`}
              onClick={() => setActiveMenuItem('help')}
            >
              <span className="sidebar-icon">❓</span>
              Help & Support
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {/* Welcome Banner */}
          <div className="welcome-banner">
            <h1>Welcome back, {user?.name || 'User'}! 👋</h1>
            <p>Ready to create amazing designs today?</p>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="action-grid">
              <div className="action-card" onClick={() => handleQuickAction('create')}>
                <div className="action-icon create">
                  <PlusCircleIcon />
                </div>
                <div className="action-content">
                  <h3>Create New Design</h3>
                  <p>Start from scratch</p>
                </div>
              </div>

              <div className="action-card" onClick={() => handleQuickAction('upload')}>
                <div className="action-icon upload">
                  <PhotoIcon />
                </div>
                <div className="action-content">
                  <h3>Upload Product Image</h3>
                  <p>Auto-generate designs</p>
                </div>
              </div>

              <div className="action-card" onClick={() => handleQuickAction('templates')}>
                <div className="action-icon templates">
                  <RectangleStackIcon />
                </div>
                <div className="action-content">
                  <h3>Explore Templates</h3>
                  <p>Browse library</p>
                </div>
              </div>

              <div className="action-card" onClick={() => handleQuickAction('saved')}>
                <div className="action-icon saved">
                  <FolderIcon />
                </div>
                <div className="action-content">
                  <h3>View Saved Designs</h3>
                  <p>Continue working</p>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-content">
            {/* Recent Designs */}
            <div className="recent-designs">
              <div className="section-header">
                <h2>Recent Designs</h2>
                <button className="view-all-btn">View All</button>
              </div>
              
              <div className="designs-grid">
                {recentDesigns.map((design) => (
                  <div key={design.id} className="design-card">
                    <div className="design-thumbnail">
                      <div className="thumbnail-placeholder">
                        <PencilIcon className="placeholder-icon" />
                      </div>
                      <div className="design-status">
                        <span className={`status-badge ${design.status}`}>
                          {design.status}
                        </span>
                      </div>
                      <div className="design-overlay">
                        <button onClick={() => handleViewDesign(design.id)} className="overlay-btn">
                          <EyeIcon />
                        </button>
                        <button onClick={() => handleEditDesign(design.id)} className="overlay-btn edit">
                          <PencilIcon />
                        </button>
                      </div>
                    </div>
                    
                    <div className="design-info">
                      <h3>{design.title}</h3>
                      <div className="design-meta">
                        <span>{design.category}</span>
                        <span>{design.dimensions}</span>
                      </div>
                      <div className="design-date">
                        <ClockIcon className="clock-icon" />
                        <span>Edited {formatDate(design.lastEdited)}</span>
                      </div>
                      <div className="design-actions">
                        <button onClick={() => handleViewDesign(design.id)} className="btn-secondary">
                          View
                        </button>
                        <button onClick={() => handleEditDesign(design.id)} className="btn-primary">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Widget */}
            <div className="stats-widget">
              <h2>Quick Stats</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-content">
                    <p className="stat-label">Total Creatives</p>
                    <p className="stat-value">{stats.totalCreatives}</p>
                  </div>
                  <div className="stat-icon">
                    <ChartBarIcon />
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-content">
                    <p className="stat-label">Templates Used</p>
                    <p className="stat-value">{stats.templatesUsed}</p>
                  </div>
                  <div className="stat-icon">
                    <span>📈</span>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-content">
                    <p className="stat-label">Storage Used</p>
                    <p className="stat-value">{stats.storageUsed}GB</p>
                    <p className="stat-sublabel">of 10GB</p>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${(stats.storageUsed / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="stat-icon">
                    <span>💾</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;