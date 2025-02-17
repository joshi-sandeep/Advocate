import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with us for expert legal assistance
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Office Location</h3>
                      <p className="text-muted-foreground">
                        123 Legal Street<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">contact@jameswilson.law</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Office Hours</h3>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: By Appointment</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section darker>
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            title="Office Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1656805997615!5m2!1sen!2s"
          />
        </div>
      </Section>
    </>
  );
}
