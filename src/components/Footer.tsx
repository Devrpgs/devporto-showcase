
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-devporto-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/f7107379-3fe5-497f-9ed2-82041172f981.png" 
                alt="DevPorto" 
                className="h-10 w-10 mr-2" 
              />
              <span className="text-xl font-bold">DevPorto</span>
            </div>
            <p className="text-gray-300 mb-4">
              Sua plataforma para criação de portfólios digitais profissionais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-devporto-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-devporto-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-devporto-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-devporto-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-devporto-blue transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-devporto-blue transition-colors">Home</a></li>
              <li><a href="#projetos" className="text-gray-300 hover:text-devporto-blue transition-colors">Projetos</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-devporto-blue transition-colors">Sobre</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-devporto-blue transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-300 hover:text-devporto-blue transition-colors">FAQ</Link></li>
              <li><Link to="/termos" className="text-gray-300 hover:text-devporto-blue transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-gray-300 hover:text-devporto-blue transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/ajuda" className="text-gray-300 hover:text-devporto-blue transition-colors">Central de Ajuda</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">contato@devporto.dev</li>
              <li className="text-gray-300">+55 (11) 99736-0812</li>
               </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400">© 2025 DevPorto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
