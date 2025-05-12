
import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const projects = [
  {
    id: 1,
    title: "Redesign de Marca",
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
    description: "Renovação completa da identidade visual para empresa de tecnologia."
  },
  {
    id: 2,
    title: "App de Finanças",
    category: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
    description: "Interface de usuário intuitiva para aplicativo de gestão financeira."
  },
  {
    id: 3,
    title: "Campanha Social",
    category: "Marketing",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    description: "Estratégia de mídia social para campanha de conscientização."
  },
  {
    id: 4,
    title: "Site E-commerce",
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
    description: "Plataforma de vendas online moderna e responsiva para loja de roupas."
  }
];

const categories = ['Todos', 'Branding', 'UI/UX Design', 'Marketing', 'Web Design'];

const FeaturedProjects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-devporto-navy mb-4">Projetos em Destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos trabalhos mais recentes que foram criados com dedicação e expertise.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 py-2 ${
                activeCategory === category 
                  ? 'bg-devporto-blue text-white' 
                  : 'text-gray-600 hover:text-devporto-blue'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-devporto-navy">{project.title}</h3>
                  <span className="text-sm bg-devporto-blue/10 text-devporto-blue px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button variant="link" className="text-devporto-blue p-0 hover:underline">
                  Ver detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">Ver todos os projetos</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
