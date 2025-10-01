import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Food Processing Ltd.",
    content:
      "Dynamic Refrigeration transformed our cold storage facility. Their expertise and prompt service have been invaluable to our operations.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Fresh Produce Co.",
    content:
      "Outstanding service and quality products. The team is professional, knowledgeable, and always ready to help. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Marine Exports Inc.",
    content:
      "We've been working with Dynamic Refrigeration for years. Their reliability and technical expertise keep our business running smoothly.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
