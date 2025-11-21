import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { SparklesIcon, UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-nav">
          <div className="nav-left">
            <div className="logo">
              <SparklesIcon className="logo-icon" />
              <span className="logo-text">AutoCreative Studio</span>
            </div>
          </div>
          <div className="nav-right">
            <div className="user-menu">
              <UserIcon className="user-icon" />
              <span className="user-name">{user?.name}</span>
              <button onClick={handleLogout} className="logout-btn">
                <ArrowRightOnRectangleIcon className="logout-icon" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="welcome-section">
            <h1>Welcome back, {user?.name}!</h1>
            <p>Ready to create amazing product creatives?</p>
          </div>

          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h3>Create New Design</h3>
              <p>Start from scratch with AI-powered templates</p>
              <button className="card-btn primary">Get Started</button>
            </div>

            <div className="dashboard-card">
              <h3>My Projects</h3>
              <p>View and manage your existing designs</p>
              <button className="card-btn secondary">View Projects</button>
            </div>

            <div className="dashboard-card">
              <h3>Templates</h3>
              <p>Browse our collection of ready-to-use templates</p>
              <button className="card-btn secondary">Browse Templates</button>
            </div>
          </div>

          <div className="recent-section">
            <h2>Recent Activity</h2>
            <div className="recent-placeholder">
              <p>Your recent designs will appear here once you start creating.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;