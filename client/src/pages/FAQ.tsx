import Section from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas of law do you practice?",
    answer:
      "We specialize in various areas including civil litigation, family law, corporate law, employment law, real estate law, and estate planning. Each practice area is handled by experienced attorneys who focus on providing comprehensive legal solutions.",
  },
  {
    question: "How much do your legal services cost?",
    answer:
      "Our fees vary depending on the type and complexity of your case. We offer an initial consultation where we can discuss your specific needs and provide a clear understanding of the potential costs involved. We strive to maintain transparent pricing and can discuss payment plans when necessary.",
  },
  {
    question: "How long will my case take?",
    answer:
      "The duration of a case varies significantly depending on its nature and complexity. Some matters can be resolved in a few weeks, while others might take several months or even years. During our initial consultation, we can provide a more accurate timeline based on your specific situation.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer a free initial consultation for most cases. This allows us to understand your legal needs and determine how we can best assist you. During this consultation, we'll discuss your case, potential strategies, and estimated costs.",
  },
  {
    question: "What should I bring to my first meeting?",
    answer:
      "For your first meeting, please bring any relevant documents related to your case, such as contracts, correspondence, court documents, or other pertinent paperwork. Also, prepare a brief timeline of events and list of questions you'd like to discuss.",
  },
  {
    question: "Can you represent me in court?",
    answer:
      "Yes, we provide full representation in all state and federal courts. Our attorneys have extensive litigation experience and will represent your interests throughout the entire legal process, from initial filing to trial and appeal if necessary.",
  },
  {
    question: "How do I know if I have a case?",
    answer:
      "The best way to determine if you have a viable case is to schedule a consultation with our office. We'll review the facts of your situation, applicable laws, and potential outcomes to help you make an informed decision about proceeding with legal action.",
  },
  {
    question: "What is your success rate?",
    answer:
      "While past success doesn't guarantee future results, we have a strong track record of favorable outcomes for our clients. We approach each case with dedication and attention to detail, utilizing our experience and resources to achieve the best possible results.",
  },
];

export default function FAQ() {
  return (
    <>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our legal services
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section darker>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8">
            If you couldn't find the answer you're looking for, please don't
            hesitate to reach out to us directly.
          </p>
          <div className="text-center">
            <p className="font-semibold">Contact us at:</p>
            <p className="text-muted-foreground">(555) 123-4567</p>
            <p className="text-muted-foreground">contact@jameswilson.law</p>
          </div>
        </div>
      </Section>
    </>
  );
}
