import React from 'react';
import { Repository } from '../../types';
import { FiCircle, FiFolder } from 'react-icons/fi';

interface RepositoryCardProps {
  repository: Repository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-medium text-gray-900">{repository.name}</h3>
        <span
          className={`px-2 py-0.5 text-xs rounded-full ${
            repository.visibility === 'Public'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {repository.visibility}
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          {repository.language}
          <FiCircle className="text-blue-500" size={8} />
        </span>
        <span className="flex items-center gap-1">
          <FiFolder size={14} className="text-gray-400" />
          {repository.size}
        </span>
        <span>Updated {repository.updatedAt}</span>
      </div>
    </div>
  );
}