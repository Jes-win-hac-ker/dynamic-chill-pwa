import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    alert("Thank you for your message! We'll get back to you soon.");
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
                Get in Touch
              </h1>
              <p className="text-xl text-white/90">
                Have questions? We're here to help with all your refrigeration needs
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-6">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Phone</h3>
                  <a
                    href="tel:+911234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 123 456 7890
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-6">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Email</h3>
                  <a
                    href="mailto:info@dynamicrefrigeration.in"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    info@dynamicrefrigeration.in
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Industrial Area, Business District, City, India
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon-Fri: 9AM-6PM
                    <br />
                    24/7 Emergency
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <Card className="border-0 shadow-strong">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" required className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" required className="mt-2" />
                        </div>
                      </div>

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
                        <Input id="phone" type="tel" required className="mt-2" />
                      </div>

                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" className="mt-2" />
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <select
                          id="subject"
                          required
                          className="w-full mt-2 px-3 py-2 border rounded-lg bg-background"
                        >
                          <option value="">Select a subject</option>
                          <option value="quote">Request a Quote</option>
                          <option value="product">Product Inquiry</option>
                          <option value="service">Service Request</option>
                          <option value="support">Technical Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={6}
                          className="mt-2"
                          placeholder="Please tell us about your requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary-dark"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Additional Info */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Visit Our Office
                </h2>
                <Card className="border-0 shadow-strong mb-6">
                  <div className="h-80 bg-muted rounded-t-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
                    ></iframe>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Head Office</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 text-primary" />
                        Industrial Area, Business District, City, State, India -
                        400001
                      </p>
                      <p className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                        +91 123 456 7890
                      </p>
                      <p className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                        info@dynamicrefrigeration.in
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-medium bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4">
                      Need Immediate Assistance?
                    </h3>
                    <p className="mb-4 text-primary-foreground/90">
                      Our emergency support team is available 24/7 for urgent
                      refrigeration issues.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90"
                    >
                      <a href="tel:+911234567890">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Emergency Line
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
