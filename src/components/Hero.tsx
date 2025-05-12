
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-devporto-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-devporto-navy mb-6">
              Seu <span className="text-devporto-blue">Portfólio Digital</span> para destacar seus melhores projetos
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Apresente seu trabalho de forma profissional e atraia mais clientes para seus serviços de design e criação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2">
                Comece Agora <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="btn-outline">
                Ver Projetos
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-devporto-navy rounded-lg p-4 shadow-2xl transform rotate-3 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000" 
                  alt="Portfolio Example" 
                  className="rounded-lg shadow-inner w-full"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-devporto-blue p-6 rounded-lg shadow-xl transform -rotate-6 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500" 
                  alt="Designer Working" 
                  className="rounded w-64 h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
