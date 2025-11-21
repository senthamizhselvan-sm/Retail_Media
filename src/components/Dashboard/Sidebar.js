import React, { useState } from 'react';
import {
  HomeIcon,
  PlusCircleIcon,
  FolderIcon,
  RectangleStackIcon,
  PaintBrushIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ activeItem, onItemClick }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'create', label: 'Create New Creative', icon: PlusCircleIcon },
    { id: 'designs', label: 'My Designs', icon: FolderIcon },
    { id: 'templates', label: 'Templates Library', icon: RectangleStackIcon },
    { id: 'brand-assets', label: 'Brand Assets', icon: PaintBrushIcon },
    { id: 'analytics', label: 'Analytics', icon: ChartBarIcon },
    { id: 'help', label: 'Help & Support', icon: QuestionMarkCircleIcon },
  ];

  const handleItemClick = (itemId) => {
    onItemClick(itemId);
    setIsMobileOpen(false); // Close mobile menu on selection
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md border border-gray-200"
      >
        {isMobileOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-50 border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile header spacing */}
          <div className="lg:hidden h-16"></div>
          
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`
                    w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                    ${isActive 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              AutoCreative Studio v1.0
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;