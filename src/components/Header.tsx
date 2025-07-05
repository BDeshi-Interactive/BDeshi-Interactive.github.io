import React from 'react';
import { Menu, X } from 'lucide-react';


interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}


const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-surface z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="./logo.svg" alt="B-Deshi Interactive" className="w-10 h-10" />
            </div>
            <span className="text-xl font-bold text-white font-title">B-Deshi Interactive</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Studio
            </button>
            <button 
              onClick={() => scrollToSection('games')}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Games
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-surface">
            <div className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('studio')}
                className="text-gray-300 hover:text-primary transition-colors text-left"
              >
                Studio
              </button>
              <button 
                onClick={() => scrollToSection('games')}
                className="text-gray-300 hover:text-primary transition-colors text-left"
              >
                Games
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-gray-300 hover:text-primary transition-colors text-left"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;