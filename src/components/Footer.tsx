import React from 'react';
import { Heart,  Mail } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

let companySocials = {
  youtube: "https://www.youtube.com/@bdeshiinteractive4293"
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface text-white py-12 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="./logo.svg" alt="B-Deshi Interactive" className="w-10 h-10" />
              </div>
              <span className="text-xl font-bold font-title">B-Deshi Interactive</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Crafting immersive gaming experiences that push the boundaries of interactive entertainment.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-title">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#studio" className="hover:text-primary transition-colors">About Studio</a></li>
              <li><a href="#games" className="hover:text-primary transition-colors">Our Games</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-title">Follow Us</h4>
            <div className="flex space-x-4">
              <a href={companySocials.youtube} className="text-gray-300 hover:text-primary transition-colors">
                <FaYoutube size={20} />
              </a>
              <a href="mailto:bdeshiinteractive@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="text-secondary" size={16} /> by B-Deshi Interactive
          </p>
          <p className="mt-2 text-sm">
            © 2025 B-Deshi Interactive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;