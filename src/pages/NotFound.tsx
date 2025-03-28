
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-mercalo-light pt-20">
      <div className="container-custom text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-9xl font-bold text-mercalo-purple mb-6">404</h1>
          <h2 className="heading-lg mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-700 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/">
              <Button className="btn-primary flex items-center">
                <Home size={18} className="mr-2" /> Return to Home
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="flex items-center"
            >
              <ArrowLeft size={18} className="mr-2" /> Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
