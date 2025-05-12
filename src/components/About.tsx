
import { Button } from './ui/button';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600" 
                alt="Designer no trabalho" 
                className="rounded-lg shadow-xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 bg-devporto-blue w-64 h-64 rounded-full opacity-20 z-0"></div>
              <div className="absolute -top-6 -left-6 border-4 border-devporto-blue w-full h-full rounded-lg z-0"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-devporto-navy mb-6">Sobre o DevPorto</h2>
            <p className="text-gray-600 mb-6">
              O DevPorto é uma plataforma dedicada a designers e criativos que desejam exibir seus trabalhos de forma profissional e atrativa. Nosso objetivo é conectar talentos a oportunidades, proporcionando uma vitrine digital para destacar habilidades e conquistas.
            </p>
            <p className="text-gray-600 mb-6">
              Criada por uma equipe apaixonada por design e tecnologia, a plataforma oferece ferramentas intuitivas para que você construa um portfólio online que reflita sua identidade e expertise.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-devporto-navy mb-2">Missão</h3>
                <p className="text-gray-600">Impulsionar carreiras criativas através de portfólios digitais impactantes.</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-devporto-navy mb-2">Visão</h3>
                <p className="text-gray-600">Ser a principal plataforma de conexão entre talentos criativos e oportunidades.</p>
              </div>
            </div>
            
            <Button className="btn-primary">Saiba mais sobre nós</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
