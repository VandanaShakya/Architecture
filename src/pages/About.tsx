import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { aboutTeamImg } from "@/data/siteData";
import { Link } from "react-router-dom";

const values = [
  { title: "Innovation", description: "Pushing boundaries with cutting-edge design and technology." },
  { title: "Sustainability", description: "Creating environmentally responsible architecture for future generations." },
  { title: "Craftsmanship", description: "Attention to every detail, from concept to final construction." },
  { title: "Collaboration", description: "Working closely with clients to realize their unique vision." },
];

const About = () => {
  return (
    <Layout>
      <HeroBanner image={aboutTeamImg} title="About ArchStudio" subtitle="Our Story" height="medium" />

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading title="A Legacy of Design Excellence" subtitle="Since 2002" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Founded with a passion for transformative architecture, ArchStudio has grown from a small design practice into one of the region's most respected architectural firms. Our portfolio spans residential, commercial, healthcare, and institutional projects across India and beyond. We believe that great architecture has the power to elevate everyday life, foster community, and leave a lasting legacy for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading title="Our Values" subtitle="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8">
                <h3 className="font-display text-xl font-medium text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Work Together?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
