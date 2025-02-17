import Section from "@/components/Section";

export default function About() {
  return (
    <>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">About James Wilson</h1>
          <p className="text-xl text-muted-foreground">
            Dedicated to providing exceptional legal services with integrity and
            professionalism.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1485217988980-11786ced9454"
              alt="Attorney Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Professional Background</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                James Wilson brings over two decades of legal experience to his
                practice. After graduating from Harvard Law School with honors, he
                began his career at one of New York's premier law firms.
              </p>
              <p>
                Throughout his career, James has successfully handled numerous
                high-profile cases and has earned a reputation for his thorough
                preparation, strategic thinking, and unwavering dedication to his
                clients.
              </p>
              <p>
                His expertise spans multiple areas of law, including civil
                litigation, corporate law, and family law. James is admitted to
                practice in all New York State courts and the United States
                District Court for the Southern and Eastern Districts of New York.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section darker>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Education & Credentials
          </h2>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>J.D., Harvard Law School (Magna Cum Laude)</li>
                <li>B.A., Yale University (Political Science)</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Bar Admissions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>New York State Bar</li>
                <li>U.S. District Court, Southern District of New York</li>
                <li>U.S. District Court, Eastern District of New York</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Professional Memberships</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>New York State Bar Association</li>
                <li>American Bar Association</li>
                <li>New York City Bar Association</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
