import React from 'react';
import { 
  FiHome, 
  FiCode, 
  FiCloud, 
  FiBook, 
  FiSettings, 
  FiHeadphones, 
  FiLogOut,
  FiX,
  FiChevronDown 
} from 'react-icons/fi';
import { NavItem } from '../../types';
import logo from '../../images/logo.png';

interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  onClose: () => void;
}

const mainNavItems: NavItem[] = [
  { label: 'Repositories', icon: <FiHome />, href: '#' },
  { label: 'AI Code Review', icon: <FiCode />, href: '#' },
  { label: 'Cloud Security', icon: <FiCloud />, href: '#' },
  { label: 'How to Use', icon: <FiBook />, href: '#' },
  { label: 'Settings', icon: <FiSettings />, href: '#' }
];

const bottomNavItems: NavItem[] = [
  { label: 'Support', icon: <FiHeadphones />, href: '#' },
  { label: 'Logout', icon: <FiLogOut />, href: '#' }
];

const mobileNavItems = [...mainNavItems, ...bottomNavItems];

export function Sidebar({ isOpen, isMobile, onClose }: SidebarProps) {
  if (isMobile && !isOpen) return null;

  const renderNavItem = (item: NavItem, index: number) => {
    const isRepositories = item.label === 'Repositories';
    const baseClasses = "flex items-center gap-3 px-4 py-2 rounded-md transition-colors";
    const desktopClasses = !isMobile && isRepositories
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "text-gray-700 hover:bg-gray-100";
    const mobileClasses = "text-gray-700 hover:bg-gray-100";

    return (
      <a
        key={item.label}
        href={item.href}
        className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
      >
        {item.icon}
        {item.label}
      </a>
    );
  };

  return (
    <>
      <div 
        className={`
          fixed inset-0 bg-black transition-opacity duration-300 ease-in-out
          ${isOpen && isMobile ? 'opacity-50' : 'opacity-0 pointer-events-none'}
          ${isMobile ? 'z-40' : 'hidden'}
        `} 
        onClick={onClose}
      />
      <aside 
        className={`
          flex flex-col
          ${isMobile 
            ? 'fixed inset-x-0 top-0 z-50 bg-white transform transition-transform duration-300 ease-in-out h-max'
            : 'w-64 border-r h-screen sticky top-0'}
          ${isMobile && !isOpen ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="p-4 border-b bg-white">
          {!isMobile ? (
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="CodeAnt AI" className="h-8" />
              <span className="font-semibold">CodeAnt AI</span>
            </div>
          ) : (
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={logo} alt="CodeAnt AI" className="h-8" />
                <span className="ml-2 font-semibold">CodeAnt AI</span>
              </div>
              <button onClick={onClose} className="p-2">
                <FiX size={24} />
              </button>
            </div>
          )}
          <button className="w-full flex items-center justify-between px-3 py-2 border rounded-md">
            <span>UtkarshDhairyaPanwar</span>
            <FiChevronDown />
          </button>
        </div>

        <nav className="flex-1 p-4 bg-white">
          {(isMobile ? mobileNavItems : mainNavItems).map((item, index) => 
            renderNavItem(item, index)
          )}
        </nav>

        {!isMobile && (
          <nav className="p-4 border-t bg-white">
            {bottomNavItems.map((item, index) => 
              renderNavItem(item, index)
            )}
          </nav>
        )}
      </aside>
    </>
  );
}