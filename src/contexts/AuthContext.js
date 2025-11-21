import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Configure axios defaults
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  // Check if user is already logged in on app start
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setLoading(false);
          return;
        }

        const response = await axios.get(`${API_BASE_URL}/api/auth/verify`);
        if (response.data.success) {
          setUser(response.data.user);
        } else {
          localStorage.removeItem('authToken');
          delete axios.defaults.headers.common['Authorization'];
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('authToken');
        delete axios.defaults.headers.common['Authorization'];
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signup = async (name, email, password) => {
    try {
      setError(null);
      setLoading(true);

      const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, {
        name,
        email,
        password,
      });

      if (response.data.success) {
        const { token, user } = response.data;
        
        // Store token
        localStorage.setItem('authToken', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        // Set user
        setUser(user);
        
        return { success: true };
      } else {
        throw new Error(response.data.message || 'Signup failed');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Signup failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);
      setLoading(true);

      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      if (response.data.success) {
        const { token, user } = response.data;
        
        // Store token
        localStorage.setItem('authToken', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        // Set user
        setUser(user);
        
        return { success: true };
      } else {
        throw new Error(response.data.message || 'Login failed');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Login failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
    setError(null);
  };

  const value = {
    user,
    loading,
    error,
    signup,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};