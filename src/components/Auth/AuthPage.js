import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Login from './Login';
import Signup from './Signup';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { isAuthenticated, loading } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !loading) {
      window.location.href = '/dashboard';
    }
  }, [isAuthenticated, loading]);

  const handleAuthSuccess = () => {
    // Redirect to dashboard after successful authentication
    window.location.href = '/dashboard';
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="loading-container">
        <p>Redirecting to dashboard...</p>
      </div>
    );
  }

  return (
    <>
      {isLogin ? (
        <Login
          onSwitchToSignup={() => setIsLogin(false)}
          onLoginSuccess={handleAuthSuccess}
        />
      ) : (
        <Signup
          onSwitchToLogin={() => setIsLogin(true)}
          onSignupSuccess={handleAuthSuccess}
        />
      )}
    </>
  );
};

export default AuthPage;