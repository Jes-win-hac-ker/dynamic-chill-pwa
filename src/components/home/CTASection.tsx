import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Contact us today for a free consultation and quote. Our experts are ready to help you find the perfect refrigeration solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto border-0"
            >
              <a href="tel:+911234567890">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:+911234567890" className="hover:text-white transition-colors">
                +91 123 456 7890
              </a>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <a
                href="mailto:info@dynamicrefrigeration.in"
                className="hover:text-white transition-colors"
              >
                info@dynamicrefrigeration.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
