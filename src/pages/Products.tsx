import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import coldRoomImg from "@/assets/cold-room.jpg";
import compressorImg from "@/assets/compressor.jpg";
import sparePartsImg from "@/assets/spare-parts.jpg";

const Products = () => {
  const categories = [
    {
      title: "Industrial Refrigeration",
      products: [
        {
          name: "Cold Storage Rooms",
          image: coldRoomImg,
          description:
            "Custom-built cold storage solutions with advanced insulation and temperature control systems. Available in various sizes from 10m³ to 1000m³.",
          features: [
            "Temperature range: -40°C to +15°C",
            "Modular design for easy expansion",
            "Energy-efficient cooling systems",
            "Advanced monitoring and control",
          ],
          specs: {
            "Insulation Material": "High-density polyurethane foam",
            "Panel Thickness": "80mm - 200mm",
            "Operating Temperature": "-40°C to +15°C",
            "Door Type": "Sliding / Hinged / Rapid",
          },
        },
        {
          name: "Compressor Units",
          image: compressorImg,
          description:
            "High-efficiency scroll and screw compressor units designed for industrial applications. Built for reliability and optimal performance.",
          features: [
            "Low noise operation",
            "High COP (Coefficient of Performance)",
            "Easy maintenance access",
            "Vibration dampening system",
          ],
          specs: {
            "Cooling Capacity": "5 kW - 500 kW",
            "Refrigerant Type": "R404A, R134a, R407C, R410A",
            "Power Supply": "380V / 50Hz (3-phase)",
            "Compressor Type": "Scroll / Screw",
          },
        },
      ],
    },
    {
      title: "Commercial Refrigeration",
      products: [
        {
          name: "Display Chillers",
          image: coldRoomImg,
          description:
            "Energy-efficient display chillers perfect for retail environments. Keep products fresh while attractively displaying them to customers.",
          features: [
            "LED lighting for better visibility",
            "Automatic defrost system",
            "Low-E glass doors",
            "Digital temperature control",
          ],
          specs: {
            "Temperature Range": "0°C to +8°C",
            "Capacity": "200L - 2000L",
            "Power Consumption": "Low energy rating",
            "Construction": "Stainless steel / powder coated",
          },
        },
      ],
    },
    {
      title: "Spare Parts & Components",
      products: [
        {
          name: "Genuine Spare Parts",
          image: sparePartsImg,
          description:
            "Comprehensive range of genuine spare parts and components for all major refrigeration brands. Quick delivery and competitive pricing.",
          features: [
            "Original equipment manufacturer (OEM) parts",
            "Wide inventory for immediate availability",
            "Technical support included",
            "Warranty on all parts",
          ],
          specs: {
            "Availability": "24/7 emergency stock",
            "Brands Supported": "All major brands",
            "Delivery": "Same day in metro cities",
            "Warranty": "6-12 months",
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Our Products
              </h1>
              <p className="text-xl text-white/90">
                Comprehensive refrigeration solutions for every industry and
                application
              </p>
            </div>
          </div>
        </section>

        {/* Products Sections */}
        {categories.map((category, catIndex) => (
          <section
            key={catIndex}
            className={`py-20 ${
              catIndex % 2 === 0 ? "bg-background" : "bg-secondary"
            }`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
                {category.title}
              </h2>

              <div className="space-y-16">
                {category.products.map((product, prodIndex) => (
                  <Card
                    key={prodIndex}
                    className="border-0 shadow-strong overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-80 lg:h-auto">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <CardContent className="p-8">
                        <h3 className="text-3xl font-bold mb-4 text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6">
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="font-bold text-foreground mb-3">
                            Key Features:
                          </h4>
                          <ul className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-muted-foreground"
                              >
                                <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Specifications */}
                        <div className="mb-6">
                          <h4 className="font-bold text-foreground mb-3">
                            Technical Specifications:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            {Object.entries(product.specs).map(
                              ([key, value]: [string, string], idx: number) => (
                                <div key={idx} className="flex flex-col">
                                  <span className="font-semibold text-foreground">
                                    {key}:
                                  </span>
                                  <span className="text-muted-foreground">
                                    {value}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            asChild
                            className="bg-primary hover:bg-primary-dark"
                          >
                            <Link to="/contact">Request Quote</Link>
                          </Button>
                          <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download Brochure
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We specialize in designing and building custom refrigeration systems
              tailored to your specific requirements.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white"
            >
              <Link to="/contact">
                Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
