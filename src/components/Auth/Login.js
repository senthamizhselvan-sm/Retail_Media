import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { SparklesIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import './Auth.css';

const Login = ({ onSwitchToSignup, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Client-side validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      // Redirect to dashboard/editor
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        window.location.href = '/dashboard';
      }
    } else {
      setError(result.error);
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-layout">
        {/* Left Side - Brand Info */}
        <div className="auth-brand-side">
          <div className="brand-content">
            <div className="brand-logo">
              <SparklesIcon className="brand-logo-icon" />
              <span className="brand-logo-text">AutoCreative Studio</span>
            </div>
            <h1 className="brand-title">Welcome to AutoCreative Studio</h1>
            <p className="brand-subtitle">
              Create product creatives instantly with AI-powered design automation. 
              Transform your marketing with smart layouts, background removal, and 
              multi-platform exports.
            </p>
            <div className="brand-features">
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>AI Background Removal</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Smart Layout Suggestions</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Multi-Platform Export</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="auth-form-side">
          <div className="auth-form-container">
            <div className="auth-form-header">
              <h2>Welcome back</h2>
              <p>Sign in to your AutoCreative Studio account</p>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    disabled={isSubmitting}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex="-1"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="auth-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="auth-switch">
              <p>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={onSwitchToSignup}
                  className="auth-switch-link"
                  disabled={isSubmitting}
                >
                  Create account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;