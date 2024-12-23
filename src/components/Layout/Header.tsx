import { FiMenu } from 'react-icons/fi';
import logo from '../../images/logo.png';

interface HeaderProps {
  onMenuToggle: () => void;
  isMobile: boolean;
}

export function Header({ onMenuToggle, isMobile }: HeaderProps) {
  return (
    <header className="bg-white border-b lg:border-none">
      <div className="flex items-center justify-between px-4 py-2">
        {isMobile && (
          <div className="flex items-center">
            <img src={logo} alt="CodeAnt AI" className="h-8" />
            <span className="ml-2 font-semibold">CodeAnt AI</span>
          </div>
        )}
        {isMobile && (
          <button onClick={onMenuToggle} className="lg:hidden">
            <FiMenu size={24} />
          </button>
        )}
      </div>
    </header>
  );
}