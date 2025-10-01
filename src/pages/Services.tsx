import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Wrench, Settings, Shield, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import installationImg from "@/assets/installation-service.jpg";
import maintenanceImg from "@/assets/maintenance-service.jpg";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Installation Services",
      image: installationImg,
      description:
        "Professional installation of all types of refrigeration systems by our certified technicians. We ensure proper setup, testing, and commissioning.",
      features: [
        "Site survey and assessment",
        "Custom design and planning",
        "Professional installation by certified team",
        "System testing and commissioning",
        "Training for your staff",
        "Documentation and compliance certificates",
      ],
    },
    {
      icon: Settings,
      title: "Maintenance & Repair",
      image: maintenanceImg,
      description:
        "Comprehensive maintenance programs to keep your refrigeration systems running at peak efficiency. Quick response for emergency repairs.",
      features: [
        "Preventive maintenance schedules",
        "24/7 emergency repair service",
        "Genuine spare parts replacement",
        "Performance optimization",
        "Regular system health reports",
        "Remote monitoring capabilities",
      ],
    },
    {
      icon: Shield,
      title: "Annual Maintenance Contracts",
      image: installationImg,
      description:
        "Comprehensive AMC packages designed to provide complete peace of mind. Regular maintenance, priority support, and cost savings.",
      features: [
        "Scheduled preventive maintenance",
        "Priority emergency response",
        "Discounted spare parts",
        "Free system inspections",
        "Performance reports and analytics",
        "Extended equipment life",
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    alert("Service request submitted! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-white/90">
                Expert installation, maintenance, and support for all your
                refrigeration needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail Sections */}
        {services.map((service, index) => (
          <section
            key={index}
            className={`py-20 ${
              index % 2 === 0 ? "bg-background" : "bg-secondary"
            }`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-strong h-96">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary-dark"
                  >
                    <a href="#service-request">Request This Service</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-light/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Unmatched expertise and commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Round-the-clock emergency support and quick response times
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Certified Experts</h3>
                  <p className="text-muted-foreground">
                    Highly trained and certified technicians with years of
                    experience
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Guaranteed Quality</h3>
                  <p className="text-muted-foreground">
                    Quality workmanship backed by comprehensive warranties
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Request Form */}
        <section id="service-request" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Request a Service
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and our team will get back to you within
                  24 hours
                </p>
              </div>

              <Card className="border-0 shadow-strong">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" className="mt-2" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service Type *</Label>
                      <select
                        id="service"
                        required
                        className="w-full mt-2 px-3 py-2 border rounded-lg bg-background"
                      >
                        <option value="">Select a service</option>
                        <option value="installation">Installation</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="repair">Repair</option>
                        <option value="amc">AMC Contract</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        className="mt-2"
                        placeholder="Please describe your requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary-dark"
                    >
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
