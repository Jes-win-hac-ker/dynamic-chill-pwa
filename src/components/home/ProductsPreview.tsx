import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import coldRoomImg from "@/assets/cold-room.jpg";
import compressorImg from "@/assets/compressor.jpg";
import sparePartsImg from "@/assets/spare-parts.jpg";

const products = [
  {
    title: "Cold Rooms",
    description: "Custom-built cold storage solutions for various industries",
    image: coldRoomImg,
    link: "/products",
  },
  {
    title: "Compressor Units",
    description: "High-efficiency compressor systems for optimal cooling",
    image: compressorImg,
    link: "/products",
  },
  {
    title: "Spare Parts",
    description: "Genuine spare parts and components for all refrigeration systems",
    image: sparePartsImg,
    link: "/products",
  },
];

const ProductsPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive refrigeration solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <Button
                  asChild
                  variant="link"
                  className="text-primary p-0 h-auto font-semibold group/btn"
                >
                  <Link to={product.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
            <Link to="/products">
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
