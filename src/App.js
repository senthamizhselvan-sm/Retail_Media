import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import HomePage from './components/Home/HomePage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function AppContent() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Navigate to dashboard if user is logged in
    if (user && currentPage !== 'dashboard') {
      setCurrentPage('dashboard');
    } else if (!user && currentPage === 'dashboard') {
      setCurrentPage('home');
    }
  }, [user, currentPage]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // Handle navigation
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  // Render current page based on authentication status and current page
  const renderCurrentPage = () => {
    // If user is authenticated, show dashboard
    if (user) {
      return <Dashboard />;
    }

    // If user is not authenticated, show appropriate page
    switch (currentPage) {
      case 'login':
        return <Login onNavigate={handleNavigation} />;
      case 'signup':
        return <Signup onNavigate={handleNavigation} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Provider>
  );
}

export default App;
