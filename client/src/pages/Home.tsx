import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, Building2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] md:h-[70vh] md:min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundImage: "url('https://images.unsplash.com/photo-1464316325666-63beaf639dbb')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Expert Legal Representation You Can Trust
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              With over 20 years of experience, we provide comprehensive legal
              services tailored to your needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-base md:text-lg w-full sm:w-auto">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Practice Areas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            We offer comprehensive legal services across multiple practice areas,
            ensuring expert representation for all your legal needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            {
              icon: <Scale className="h-8 w-8 md:h-10 md:w-10" />,
              title: "Civil Litigation",
              description:
                "Expert representation in civil disputes, contract matters, and commercial litigation.",
            },
            {
              icon: <Users className="h-8 w-8 md:h-10 md:w-10" />,
              title: "Family Law",
              description:
                "Compassionate guidance through divorce, custody, and family-related legal matters.",
            },
            {
              icon: <Building2 className="h-8 w-8 md:h-10 md:w-10" />,
              title: "Corporate Law",
              description:
                "Strategic legal counsel for businesses of all sizes, from startups to corporations.",
            },
          ].map((area, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="text-primary mb-4">{area.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base mb-4">{area.description}</p>
                <Link href="/practice-areas">
                  <Button variant="link" className="p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section darker>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              alt="Attorney James Wilson"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Meet Attorney James Wilson
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-6">
              With decades of experience and a track record of success, James
              Wilson has established himself as a trusted legal advisor in New
              York. His commitment to client success and deep understanding of
              the law makes him the go-to attorney for complex legal matters.
            </p>
            <Link href="/about">
              <Button className="w-full sm:w-auto">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}