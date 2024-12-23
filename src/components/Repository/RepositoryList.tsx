import React from 'react';
import { RepositoryCard } from './RepositoryCard';
import { Repository } from '../../types';

interface RepositoryListProps {
  repositories: Repository[];
}

export function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <div className="space-y-4">
      {repositories.map((repo) => (
        <RepositoryCard key={repo.name} repository={repo} />
      ))}
    </div>
  );
}