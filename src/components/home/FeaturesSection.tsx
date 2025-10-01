import { Snowflake, Wrench, Shield, Clock, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Snowflake,
    title: "Advanced Technology",
    description: "State-of-the-art refrigeration systems with energy-efficient solutions",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Professional installation by certified technicians with years of experience",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Premium products with comprehensive warranties and quality guarantees",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock emergency support and maintenance services",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "Certified and compliant with international standards and regulations",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Dedicated to providing exceptional service and customer satisfaction",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Dynamic Refrigeration?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver excellence in every aspect of refrigeration solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
