
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/f7107379-3fe5-497f-9ed2-82041172f981.png" 
            alt="DevPorto" 
            className="h-10 w-10" 
          />
          <span className="ml-2 text-xl font-bold text-devporto-navy">DevPorto</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-devporto-navy hover:text-devporto-blue transition-colors">Home</a>
          <a href="#projetos" className="text-devporto-navy hover:text-devporto-blue transition-colors">Projetos</a>
          <a href="#sobre" className="text-devporto-navy hover:text-devporto-blue transition-colors">Sobre</a>
          <a href="#contato" className="text-devporto-navy hover:text-devporto-blue transition-colors">Contato</a>
          <Button asChild className="bg-devporto-blue hover:bg-devporto-blue/90 text-white">
            <Link to="/login">Login</Link>
          </Button>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu} aria-label="Menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-slide-up">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#home" className="text-devporto-navy py-2 hover:text-devporto-blue" onClick={toggleMenu}>Home</a>
            <a href="#projetos" className="text-devporto-navy py-2 hover:text-devporto-blue" onClick={toggleMenu}>Projetos</a>
            <a href="#sobre" className="text-devporto-navy py-2 hover:text-devporto-blue" onClick={toggleMenu}>Sobre</a>
            <a href="#contato" className="text-devporto-navy py-2 hover:text-devporto-blue" onClick={toggleMenu}>Contato</a>
            <Button asChild className="bg-devporto-blue hover:bg-devporto-blue/90 text-white w-full">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
