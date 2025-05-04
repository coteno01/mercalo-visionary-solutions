
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-mercalo-light">
      <div className="container-custom max-w-4xl bg-white p-12 rounded-lg shadow-lg">
        <h1 className="heading-xl mb-6 text-center">Page not found</h1>
        
        <div className="border-t border-gray-200 my-6"></div>
        
        <p className="text-xl text-gray-700 mb-8 text-center">
          Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-12">
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
  );
};

export default NotFound;
