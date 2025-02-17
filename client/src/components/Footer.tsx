import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <address className="not-italic">
              <p>123 Legal Street</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: contact@jameswilson.law</p>
            </address>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about"><a className="hover:underline">About</a></Link></li>
              <li><Link href="/practice-areas"><a className="hover:underline">Practice Areas</a></Link></li>
              <li><Link href="/contact"><a className="hover:underline">Contact</a></Link></li>
              <li><Link href="/faq"><a className="hover:underline">FAQ</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Office Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: By Appointment</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} James Wilson Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
