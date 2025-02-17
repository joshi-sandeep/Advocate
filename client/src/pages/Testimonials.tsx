import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Business Owner",
    content:
      "Attorney Wilson provided exceptional guidance during our company's merger. His expertise in corporate law was invaluable, and his attention to detail ensured a smooth transaction.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Real Estate Developer",
    content:
      "I've worked with many lawyers over the years, but James stands out for his professionalism and deep knowledge of real estate law. He's my go-to counsel for all legal matters.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    title: "Family Law Client",
    content:
      "During a difficult divorce, James provided not just legal expertise but also compassionate support. He helped me navigate the process with confidence and achieved the best possible outcome.",
    rating: 5,
  },
  {
    name: "David Thompson",
    title: "Corporate Executive",
    content:
      "James's strategic approach to litigation saved our company both time and money. His ability to anticipate and address potential issues before they arise is remarkable.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground">
            What our clients say about our legal services
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section darker>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Experience</h3>
              <p className="text-muted-foreground">
                Over 20 years of successful legal practice
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Dedication</h3>
              <p className="text-muted-foreground">
                Committed to achieving the best outcomes for our clients
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Recognized for outstanding legal service
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
