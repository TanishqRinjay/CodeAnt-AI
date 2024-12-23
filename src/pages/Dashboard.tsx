import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Header } from '../components/Layout/Header';
import { Sidebar } from '../components/Layout/Sidebar';
import { SearchBar } from '../components/Repository/SearchBar';
import { RepositoryList } from '../components/Repository/RepositoryList';
import { RefreshButton } from '../components/Repository/RefreshButton';
import { mockRepositories } from '../data/mockRepositories';

function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:flex">
        <Sidebar 
          isOpen={isMobileMenuOpen} 
          isMobile={isMobile}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        
        <div className="flex-1">
          <Header 
            onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            isMobile={isMobile}
          />
          
          <main className="p-4 lg:p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Repositories</h1>
                <div className="flex items-center gap-2">
                  <RefreshButton />
                  <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    <FiPlus size={20} />
                    Add Repository
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                <span className="text-sm text-gray-500">33 total repositories</span>
              </div>
            </div>
            <RepositoryList repositories={mockRepositories} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;