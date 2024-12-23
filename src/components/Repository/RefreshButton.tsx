import React from 'react';
import { FiRefreshCw } from 'react-icons/fi';

interface RefreshButtonProps {
  onClick?: () => void;
}

export function RefreshButton({ onClick }: RefreshButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-gray-50"
    >
      <FiRefreshCw size={16} />
      <span>Refresh All</span>
    </button>
  );
}