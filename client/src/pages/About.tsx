import Section from "@/components/Section";

export default function About() {
  return (
    <>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">About Jai Kulkarni</h1>
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
              src="https://scontent.fblr20-3.fna.fbcdn.net/v/t1.6435-9/57127020_512415419288287_5640583126817177600_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1xEY76e6D84Q7kNvgHUw9i3&_nc_oc=AdjuQCCm--SAYa-CN1EkKlq88gMJ_0nFSfAMdcoy7p4EWQDkzlDIKXoc4j0ICkoM1D4OItz3nbSyxHaBxtD_OqeE&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=A6WPvkMux_EsCg86wzvdP6P&oh=00_AYDLxMfEQD3jXBUPdYLqtEQ2VpQ7huirmUdvnKw9pc3otw&oe=67DAC073"
              alt="Attorney Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Professional Background</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
              Jai Kulkarni brings over two decades of legal experience to his
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
                <li>Studied at Karnatak University</li>
                <li>B.A., University (Political Science)</li>
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
