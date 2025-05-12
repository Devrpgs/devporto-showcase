
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from './ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado por entrar em contato. Retornaremos em breve.",
      duration: 5000
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-devporto-navy mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tem alguma dúvida ou gostaria de colaborar conosco? Envie-nos uma mensagem e retornaremos em breve.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-start">
              <div className="bg-devporto-blue/10 p-3 rounded-lg mr-4">
                <Mail className="text-devporto-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-devporto-navy mb-1">Email</h3>
                <p className="text-gray-600">contato@devporto.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-devporto-blue/10 p-3 rounded-lg mr-4">
                <Phone className="text-devporto-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-devporto-navy mb-1">Telefone</h3>
                <p className="text-gray-600">+55 (11) 99999-9999</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-devporto-blue/10 p-3 rounded-lg mr-4">
                <MapPin className="text-devporto-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-devporto-navy mb-1">Endereço</h3>
                <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-devporto-navy font-medium mb-2">Nome</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 focus:border-devporto-blue focus:ring-devporto-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-devporto-navy font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 focus:border-devporto-blue focus:ring-devporto-blue"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-devporto-navy font-medium mb-2">Assunto</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Assunto da mensagem"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 focus:border-devporto-blue focus:ring-devporto-blue"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-devporto-navy font-medium mb-2">Mensagem</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 focus:border-devporto-blue focus:ring-devporto-blue"
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full">Enviar Mensagem</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
