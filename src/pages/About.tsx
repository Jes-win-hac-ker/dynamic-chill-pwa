import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "15+", icon: Award },
    { label: "Projects Completed", value: "500+", icon: CheckCircle },
    { label: "Happy Clients", value: "300+", icon: Users },
    { label: "Success Rate", value: "99%", icon: TrendingUp },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "We never compromise on quality. Every product and service meets the highest industry standards.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Your success is our success. We go above and beyond to ensure complete customer satisfaction.",
    },
    {
      title: "Innovation",
      description:
        "We stay ahead of industry trends, constantly innovating to provide cutting-edge solutions.",
    },
    {
      title: "Integrity",
      description:
        "Honesty and transparency in all our dealings. We build lasting relationships based on trust.",
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
                About Dynamic Refrigeration
              </h1>
              <p className="text-xl text-white/90">
                Leading the industry with innovative refrigeration solutions and
                unmatched expertise
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-medium text-center"
                >
                  <CardContent className="p-6">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Dynamic Refrigeration was founded with a vision to transform
                  the industrial refrigeration landscape in India. Starting as a
                  small operation, we've grown into one of the most trusted names
                  in the industry, serving diverse sectors including food
                  processing, marine exports, pharmaceuticals, and more.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, unwavering
                  commitment to quality, and a deep understanding of our clients'
                  needs. We combine cutting-edge technology with decades of
                  expertise to deliver refrigeration solutions that are not just
                  effective, but also energy-efficient and sustainable.
                </p>
                <p>
                  Today, we pride ourselves on being more than just a service
                  provider. We're partners in our clients' success, offering
                  comprehensive solutions from initial consultation and
                  installation to ongoing maintenance and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-medium bg-primary text-primary-foreground">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg text-primary-foreground/90">
                    To provide innovative, reliable, and efficient refrigeration
                    solutions that help our clients succeed in their businesses
                    while contributing to a sustainable future. We strive to
                    exceed expectations through exceptional service, quality
                    products, and technical expertise.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    Our Vision
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    To be the most trusted and innovative refrigeration solutions
                    provider in India, recognized for our commitment to
                    excellence, customer satisfaction, and environmental
                    responsibility. We aim to set new industry standards and lead
                    the way in sustainable cooling technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-medium">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              We maintain the highest standards of quality and safety, certified
              by leading national and international organizations. Our commitment
              to excellence is validated by ISO certifications, industry-specific
              compliance standards, and regular audits.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {["ISO 9001:2015", "ISO 14001:2015", "OHSAS 18001", "CE Certified"].map(
                (cert, index) => (
                  <div
                    key={index}
                    className="px-8 py-4 bg-primary/10 rounded-lg text-primary font-semibold text-lg"
                  >
                    {cert}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
