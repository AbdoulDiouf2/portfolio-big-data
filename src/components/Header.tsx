import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AMD
          </a>
          
          {/* Navigation Bureau */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>

          {/* Bouton Menu Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Mobile */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex justify-center space-x-4 pt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const NavLinks = () => (
  <>
    {[
      ['Accueil', 'home'],
      ['À Propos', 'about'],
      ['Expérience', 'experience'],
      ['Projets', 'projects'],
      ['Compétences', 'skills'],
      ['Contact', 'contact']
    ].map(([label, id]) => (
      <a
        key={id}
        href={`#${id}`}
        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
      >
        {label}
      </a>
    ))}
  </>
);

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
      <Github size={20} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
      <Linkedin size={20} />
    </a>
    <a href="mailto:aad.mbacke691@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
      <Mail size={20} />
    </a>
    <a href="tel:+33749051879" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
      <Phone size={20} />
    </a>
  </div>
);