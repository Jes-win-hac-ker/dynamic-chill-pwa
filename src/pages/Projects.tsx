import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import coldRoomImg from "@/assets/cold-room.jpg";
import installationImg from "@/assets/installation-service.jpg";
import maintenanceImg from "@/assets/maintenance-service.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Large-Scale Cold Storage Facility",
      client: "Fresh Foods Processing Ltd.",
      category: "Cold Storage",
      location: "Mumbai, Maharashtra",
      year: "2024",
      image: coldRoomImg,
      description:
        "Design, installation, and commissioning of a 5,000 sq.ft. cold storage facility with multi-temperature zones for storing various food products.",
      highlights: [
        "5,000 sq.ft. storage capacity",
        "Multi-zone temperature control (-25°C to +5°C)",
        "Automated monitoring system",
        "30% energy savings vs. conventional systems",
      ],
    },
    {
      title: "Marine Processing Plant Refrigeration",
      client: "Oceanic Exports Pvt. Ltd.",
      category: "Industrial Refrigeration",
      location: "Chennai, Tamil Nadu",
      year: "2023",
      image: installationImg,
      description:
        "Complete refrigeration solution for a seafood processing plant including blast freezers, cold storage rooms, and ice flake machines.",
      highlights: [
        "Blast freezer capacity: 10 tons/day",
        "3 cold storage rooms (2000 sq.ft. total)",
        "Ice flake machine: 5 tons/day",
        "HACCP compliant installation",
      ],
    },
    {
      title: "Pharmaceutical Cold Chain Setup",
      client: "MediCare Pharmaceuticals",
      category: "Temperature-Controlled Storage",
      location: "Bangalore, Karnataka",
      year: "2023",
      image: maintenanceImg,
      description:
        "Precision temperature-controlled storage facility for pharmaceutical products with redundant cooling systems and 24/7 monitoring.",
      highlights: [
        "Temperature range: +2°C to +8°C",
        "Redundant cooling systems",
        "24/7 monitoring and alerts",
        "FDA-compliant documentation",
      ],
    },
    {
      title: "Hotel Kitchen Refrigeration",
      client: "Grand Plaza Hotels",
      category: "Commercial Refrigeration",
      location: "Delhi NCR",
      year: "2024",
      image: coldRoomImg,
      description:
        "Comprehensive kitchen refrigeration solution including walk-in coolers, display chillers, and prep refrigeration units for a 5-star hotel.",
      highlights: [
        "Walk-in cooler: 500 sq.ft.",
        "Multiple display chillers",
        "Stainless steel construction",
        "Energy-efficient LED lighting",
      ],
    },
    {
      title: "Dairy Processing Facility",
      client: "Pure Milk Dairy Co.",
      category: "Dairy Refrigeration",
      location: "Pune, Maharashtra",
      year: "2022",
      image: installationImg,
      description:
        "Complete milk processing and storage refrigeration setup with bulk milk coolers and pasteurization equipment.",
      highlights: [
        "Bulk milk cooler: 10,000 liters",
        "Pasteurization equipment",
        "Chilled water system",
        "ISO 22000 certified installation",
      ],
    },
    {
      title: "Vegetable Distribution Center",
      client: "Green Harvest Traders",
      category: "Agricultural Cold Storage",
      location: "Nashik, Maharashtra",
      year: "2023",
      image: maintenanceImg,
      description:
        "Pre-cooling and cold storage facility for fresh vegetables with controlled atmosphere storage capabilities.",
      highlights: [
        "3,000 sq.ft. storage area",
        "Rapid pre-cooling chambers",
        "Controlled atmosphere storage",
        "Extended shelf life by 50%",
      ],
    },
  ];

  const categories = [
    "All Projects",
    "Cold Storage",
    "Industrial Refrigeration",
    "Commercial Refrigeration",
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
                Our Projects
              </h1>
              <p className="text-xl text-white/90">
                Explore our portfolio of successful refrigeration installations
                across various industries
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "300+", label: "Happy Clients" },
                { value: "15+", label: "Years Experience" },
                { value: "99%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-white">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white text-sm font-semibold">
                        {project.year}
                      </div>
                      <div className="text-white/80 text-sm">
                        {project.location}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold mb-3">
                      {project.client}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-foreground">
                        Key Highlights:
                      </h4>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 3).map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="text-primary mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Client Success Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear what our clients have to say about their projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote:
                    "Dynamic Refrigeration delivered a world-class cold storage facility that exceeded our expectations. Their attention to detail and professional approach made the entire process smooth.",
                  author: "Rajesh Kumar",
                  company: "Fresh Foods Processing Ltd.",
                },
                {
                  quote:
                    "The refrigeration system installed by Dynamic has been running flawlessly for over a year. Their maintenance service is exceptional and response time is impressive.",
                  author: "Priya Sharma",
                  company: "Oceanic Exports Pvt. Ltd.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-medium">
                  <CardContent className="p-6">
                    <p className="text-lg text-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-foreground">
                        {testimonial.author}
                      </p>
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
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
