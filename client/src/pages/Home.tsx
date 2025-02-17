import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, Building2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundImage: "url('https://images.unsplash.com/photo-1464316325666-63beaf639dbb')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlend: "overlay",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Expert Legal Representation You Can Trust
            </h1>
            <p className="text-xl mb-8">
              With over 20 years of experience, we provide comprehensive legal
              services tailored to your needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Practice Areas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive legal services across multiple practice areas,
            ensuring expert representation for all your legal needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Scale className="h-10 w-10" />,
              title: "Civil Litigation",
              description:
                "Expert representation in civil disputes, contract matters, and commercial litigation.",
            },
            {
              icon: <Users className="h-10 w-10" />,
              title: "Family Law",
              description:
                "Compassionate guidance through divorce, custody, and family-related legal matters.",
            },
            {
              icon: <Building2 className="h-10 w-10" />,
              title: "Corporate Law",
              description:
                "Strategic legal counsel for businesses of all sizes, from startups to corporations.",
            },
          ].map((area, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="text-primary mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-muted-foreground mb-4">{area.description}</p>
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://scontent.fblr20-3.fna.fbcdn.net/v/t1.6435-9/57127020_512415419288287_5640583126817177600_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1xEY76e6D84Q7kNvgHUw9i3&_nc_oc=AdjuQCCm--SAYa-CN1EkKlq88gMJ_0nFSfAMdcoy7p4EWQDkzlDIKXoc4j0ICkoM1D4OItz3nbSyxHaBxtD_OqeE&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=A6WPvkMux_EsCg86wzvdP6P&oh=00_AYDLxMfEQD3jXBUPdYLqtEQ2VpQ7huirmUdvnKw9pc3otw&oe=67DAC073"
              alt="Jai Kulkarni"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Meet Jai Kulkarni
            </h2>
            <p className="text-muted-foreground mb-6">
              With decades of experience and a track record of success, James
              Wilson has established himself as a trusted legal advisor in New
              York. His commitment to client success and deep understanding of
              the law makes him the go-to attorney for complex legal matters.
            </p>
            <Link href="/about">
              <Button>
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
