
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login enviado",
      description: "Esta é apenas uma demonstração. A autenticação não está implementada nesta versão.",
      duration: 5000
    });
    console.log("Login submitted:", formData);
  };

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-80 h-80 rounded-full bg-devporto-blue/20 -top-20 -left-20 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute w-96 h-96 rounded-full bg-devporto-blue/10 bottom-20 -right-20 animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute w-64 h-64 rounded-full bg-devporto-navy/20 bottom-10 left-20 animate-pulse" style={{ animationDuration: '10s' }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-devporto-light/90 backdrop-blur-sm"></div>
      </div>
      
      <div className="w-full max-w-md p-8 animate-fade-in">
        <div className="glass-card rounded-2xl p-8 shadow-xl border border-white/40 backdrop-blur-sm">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <Link to="/" className="relative group">
                <img 
                  src="/lovable-uploads/f7107379-3fe5-497f-9ed2-82041172f981.png" 
                  alt="DevPorto" 
                  className="h-20 w-20 transition-all duration-300 group-hover:scale-105" 
                />
                <div className="absolute -inset-2 rounded-full bg-devporto-blue/10 scale-0 group-hover:scale-100 transition-all duration-300"></div>
              </Link>
            </div>
            <h2 className="text-center text-3xl font-bold text-devporto-navy animate-slide-up">
              Acesse sua conta
            </h2>
            <p className="mt-3 text-center text-gray-600">
              Ou{' '}
              <Link to="/register" className="font-medium text-devporto-blue hover:text-devporto-blue/80 transition-colors duration-300">
                registre-se para uma conta gratuita
              </Link>
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-3 transition-all duration-300 focus:ring-devporto-blue focus:border-devporto-blue animate-slide-up"
                    style={{ animationDelay: '100ms' }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Senha
                  </label>
                  <Link to="/forgot-password" className="text-xs text-devporto-blue hover:text-devporto-blue/80 transition-colors duration-300">
                    Esqueceu sua senha?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full py-3 pr-10 transition-all duration-300 focus:ring-devporto-blue focus:border-devporto-blue animate-slide-up"
                    style={{ animationDelay: '200ms' }}
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={togglePasswordVisibility}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-6 bg-devporto-blue hover:bg-devporto-blue/90 text-white font-medium rounded-lg text-base transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] animate-slide-up"
              style={{ animationDelay: '300ms' }}
            >
              Entrar
            </Button>
          </form>
          
          <div className="mt-6 text-center animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Link to="/" className="text-gray-600 hover:text-devporto-blue transition-colors duration-300 inline-flex items-center gap-1">
              <span>Voltar para a página inicial</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
