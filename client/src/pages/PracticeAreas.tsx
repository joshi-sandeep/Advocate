import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scale,
  Users,
  Building2,
  Briefcase,
  Home,
  FileText,
} from "lucide-react";

const practiceAreas = [
  {
    icon: <Scale className="h-12 w-12" />,
    title: "Civil Litigation",
    description:
      "Comprehensive representation in civil disputes, including contract disputes, property matters, and commercial litigation. We handle cases from pre-litigation negotiation through trial and appeal.",
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Family Law",
    description:
      "Sensitive and effective representation in all family law matters, including divorce, child custody, support, and adoption. We prioritize your family's best interests while protecting your rights.",
  },
  {
    icon: <Building2 className="h-12 w-12" />,
    title: "Corporate Law",
    description:
      "Expert legal counsel for businesses of all sizes. Services include business formation, contracts, mergers and acquisitions, and corporate governance matters.",
  },
  {
    icon: <Briefcase className="h-12 w-12" />,
    title: "Employment Law",
    description:
      "Protection of both employer and employee rights. We handle discrimination cases, wrongful termination, employment contracts, and workplace safety issues.",
  },
  {
    icon: <Home className="h-12 w-12" />,
    title: "Real Estate Law",
    description:
      "Comprehensive real estate services including purchases, sales, leases, and property disputes. We represent both residential and commercial clients.",
  },
  {
    icon: <FileText className="h-12 w-12" />,
    title: "Estate Planning",
    description:
      "Thorough estate planning services including wills, trusts, and power of attorney. We help protect your assets and ensure your wishes are carried out.",
  },
];

export default function PracticeAreas() {
  return (
    <>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Practice Areas</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive legal services tailored to your specific needs
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {practiceAreas.map((area, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="text-primary mb-4">{area.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section darker>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <p className="text-muted-foreground">
            We understand that each case is unique and requires a tailored
            approach. Our team works closely with you to understand your specific
            situation and develop a strategic plan to achieve your goals. We
            combine our extensive legal knowledge with practical experience to
            provide you with the best possible representation.
          </p>
        </div>
      </Section>
    </>
  );
}
