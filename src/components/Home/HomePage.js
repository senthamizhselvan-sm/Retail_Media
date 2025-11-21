import React from 'react';
import { 
  SparklesIcon, 
  PhotoIcon, 
  CogIcon, 
  CloudArrowDownIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  TagIcon,
  PaintBrushIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <SparklesIcon className="logo-icon" />
              <span className="logo-text">AutoCreative Studio</span>
            </div>
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#pricing">Pricing</a>
              <button className="btn-login">Login</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
                Create stunning product creatives in seconds — no design skills needed.
              </h1>
              <p className="hero-subtitle">
                AutoCreative Studio helps businesses auto-generate product ads with background removal, 
                smart layout suggestions, branding compliance checks, and multi-format export for social 
                media and retail platforms.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">
                  Get Started
                  <ArrowRightIcon className="btn-icon" />
                </button>
                <button className="btn-secondary">
                  <PlayIcon className="btn-icon" />
                  Try Demo
                </button>
              </div>
            </div>
            <div className="hero-right">
              <div className="mockup">
                <div className="mockup-screen">
                  <div className="mockup-content">
                    <div className="mockup-toolbar">
                      <div className="mockup-dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                      </div>
                    </div>
                    <div className="mockup-canvas">
                      <div className="product-showcase">
                        <div className="product-image"></div>
                        <div className="design-elements">
                          <div className="element element-1"></div>
                          <div className="element element-2"></div>
                          <div className="element element-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">The Problem</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <ClockIcon className="problem-icon" />
              <h3>Time-Consuming</h3>
              <p>Creating product ads manually takes hours or days, slowing down marketing campaigns.</p>
            </div>
            <div className="problem-card">
              <UserGroupIcon className="problem-icon" />
              <h3>Requires Designers</h3>
              <p>Need skilled designers for every creative, making it expensive and limiting scalability.</p>
            </div>
            <div className="problem-card">
              <TagIcon className="problem-icon" />
              <h3>Inconsistent Branding</h3>
              <p>Manual processes lead to brand inconsistencies across different platforms and campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <h2 className="section-title">Our Solution</h2>
          <div className="solution-grid">
            <div className="solution-card">
              <div className="solution-icon-wrapper">
                <PhotoIcon className="solution-icon" />
              </div>
              <h3>AI Background Removal</h3>
              <p>Automatically remove backgrounds from product images with precision AI technology.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon-wrapper">
                <PaintBrushIcon className="solution-icon" />
              </div>
              <h3>Smart Layout AI Suggestions</h3>
              <p>Get intelligent layout recommendations that optimize visual appeal and conversion rates.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon-wrapper">
                <CloudArrowDownIcon className="solution-icon" />
              </div>
              <h3>Auto Multi-Format Export</h3>
              <p>Export designs in multiple sizes and formats for all social media and retail platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <PhotoIcon className="step-icon" />
                <h3>Upload product image</h3>
                <p>Simply drag and drop your product photo or browse to select from your device.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <SparklesIcon className="step-icon" />
                <h3>Remove background automatically</h3>
                <p>Our AI instantly removes the background with pixel-perfect precision.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <CogIcon className="step-icon" />
                <h3>Apply template & brand elements</h3>
                <p>Choose from smart templates and apply your brand colors, fonts, and elements.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <CloudArrowDownIcon className="step-icon" />
                <h3>Export for social platforms</h3>
                <p>Download in all required sizes for Facebook, Instagram, Google Ads, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight Section */}
      <section className="features-highlight">
        <div className="container">
          <h2 className="section-title">Everything You Need</h2>
          <div className="features-grid">
            <div className="feature-item">
              <SparklesIcon className="feature-icon" />
              <span>AI-Powered Design</span>
            </div>
            <div className="feature-item">
              <DevicePhoneMobileIcon className="feature-icon" />
              <span>Mobile Optimized</span>
            </div>
            <div className="feature-item">
              <ComputerDesktopIcon className="feature-icon" />
              <span>Desktop Ready</span>
            </div>
            <div className="feature-item">
              <CheckCircleIcon className="feature-icon" />
              <span>Brand Compliance</span>
            </div>
            <div className="feature-item">
              <CloudArrowDownIcon className="feature-icon" />
              <span>Instant Export</span>
            </div>
            <div className="feature-item">
              <TagIcon className="feature-icon" />
              <span>Multi-Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <SparklesIcon className="logo-icon" />
                <span className="logo-text">AutoCreative Studio</span>
              </div>
              <p className="footer-description">
                Smart design automation platform for businesses and online sellers.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#templates">Templates</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#privacy">Privacy</a>
              </div>
              <div className="footer-column">
                <h4>Account</h4>
                <a href="#login">Login</a>
                <a href="#signup">Sign Up</a>
                <a href="#support">Support</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 AutoCreative Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;