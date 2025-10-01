import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Refrigeration Solutions You Can Trust
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Innovative, reliable, and efficient industrial refrigeration for
            your business needs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 h-auto"
            >
              <Link to="/contact">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 h-auto"
            >
              <Link to="/products">
                Explore Solutions
              </Link>
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-white/80 mb-3">Need immediate assistance?</p>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center text-white text-lg font-semibold hover:text-accent transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              +91 123 456 7890
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
