import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Users, Award, Globe, Truck } from "lucide-react";

const About = () => {
  const benefits = [
    "Comprehensive catalogue for specific industries",
    "Detailed catalogue for individual clients", 
    "Auto-quote generation system",
    "Automated purchase order processing",
    "Repeat order functionality",
    "Real-time delivery tracking",
    "Access to 400,000+ SKUs across 30+ categories",
    "Brand price lists and competitive pricing"
  ];

  const productRange = [
    "Hand Tools and Fasteners",
    "Bearings", 
    "Pipes and Flanges",
    "Gaskets and 'O' rings",
    "Industrial Automation and Switch gears",
    "Electrical Consumables",
    "Testing and Measuring Instruments",
    "Lubricants and Lubricating Oil",
    "Industrial Safety Equipments",
    "Valves and Fittings",
    "Welding Consumables & Welding Machinery",
    "Cutting tools, Abrasives & Power tools"
  ];

  const industries = [
    "Automobiles", "FMCG", "Chemical", "Solar", "Wind", 
    "Automation & Robotics", "Machine Manufacturers", 
    "Electrical and Electronics Industries"
  ];

  const clients = [
    "Oil and Marine industries (International)",
    "Addverb Technologies Ltd",
    "Avadda Solar Ltd", 
    "Sterling and Wilson Renewable Energy Limited",
    "Strabag Infrastructure Pvt Ltd (GMBH)",
    "Efkon India Pvt Ltd",
    "Endure Air India Pvt Ltd",
    "MCAM Surlon India Ltd (Mitsubishi company)",
    "Covestro India Ltd"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our Company
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for comprehensive industrial supply solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="h-6 w-6 text-primary mr-3" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We provide a single stop solution to all your O&M/Consumables & MRO requirements. 
                In addition we provide entire packages as Rate contracts to our customers which 
                will be completely Digitized.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We cater different industries such as Automobiles, FMCG, Chemical, Solar, Wind, 
                Automation & Robotics, Machine Manufacturers, Electrical and Electronics Industries.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Globe className="h-6 w-6 text-primary mr-3" />
                Industries We Serve
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">{industry}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Benefits */}
        <Card className="shadow-card mb-16">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Award className="h-6 w-6 text-primary mr-3" />
              Technology Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              We develop comprehensive catalogues and provide advanced digital solutions 
              for efficient procurement and supply chain management.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Product Range */}
        <Card className="shadow-card mb-16">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Truck className="h-6 w-6 text-primary mr-3" />
              Our Product Range
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {productRange.map((product, index) => (
                <div key={index} className="flex items-center p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-primary mr-3" />
                  <span className="text-sm font-medium text-foreground">{product}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Esteemed Clients */}
        <Card className="shadow-card mb-16">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Users className="h-6 w-6 text-primary mr-3" />
              Our Esteemed Clients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Some of our esteemed client list includes companies from various industries 
              and many more A+ companies added to our portfolio.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {clients.map((client, index) => (
                <div key={index} className="flex items-start p-4 bg-gradient-card rounded-lg">
                  <Award className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{client}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="shadow-card bg-gradient-primary text-white">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">
              Let's Build a Long-term Partnership
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              In this regard, we seek your valuable enquiries to enable us to showcase 
              our advantages for a long term business association.
            </p>
            <p className="text-lg">
              We look forward to your positive response.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;