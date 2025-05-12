
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-devporto-light">
      <div className="text-center p-6">
        <img 
          src="/lovable-uploads/f7107379-3fe5-497f-9ed2-82041172f981.png" 
          alt="DevPorto Logo" 
          className="mx-auto h-16 w-16 mb-6"
        />
        <h1 className="text-6xl font-bold text-devporto-navy mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Página não encontrada</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
        </p>
        <Button asChild className="btn-primary">
          <Link to="/">Voltar para a página inicial</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
