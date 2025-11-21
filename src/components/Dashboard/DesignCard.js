import React from 'react';
import { EyeIcon, PencilIcon, ClockIcon } from '@heroicons/react/24/outline';

const DesignCard = ({ design, onView, onEdit }) => {
  const {
    id,
    title,
    thumbnail,
    lastEdited,
    category,
    dimensions,
    status
  } = design;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 relative group">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <PencilIcon className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        )}
        
        {/* Overlay buttons on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => onView(id)}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            title="View Design"
          >
            <EyeIcon className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => onEdit(id)}
            className="p-2 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            title="Edit Design"
          >
            <PencilIcon className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Status badge */}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 truncate mb-2">{title}</h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Category:</span>
            <span className="font-medium">{category}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Size:</span>
            <span className="font-medium">{dimensions}</span>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-500">
            <ClockIcon className="w-4 h-4" />
            <span>Edited {formatDate(lastEdited)}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-2 mt-4">
          <button
            onClick={() => onView(id)}
            className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            View
          </button>
          <button
            onClick={() => onEdit(id)}
            className="flex-1 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;