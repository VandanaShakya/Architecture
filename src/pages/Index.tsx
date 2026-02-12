import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { heroImg, services, projectCategories } from "@/data/siteData";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroBanner
        image={heroImg}
        title="Designing Spaces That Inspire"
        subtitle="Architecture & Design"
        showCta
        ctaText="Explore Our Work"
        ctaLink="/projects/residential"
        height="full"
      />

      {/* About Teaser */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">Who We Are</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Architecture Is the Art of How to Waste Space
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over two decades of experience, ArchStudio has been at the forefront of architectural innovation. We blend timeless design principles with cutting-edge technology to create spaces that transcend expectations.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-foreground hover:gap-4 transition-all duration-300"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary p-8 text-center">
                <p className="font-display text-4xl font-semibold text-foreground">250+</p>
                <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
              </div>
              <div className="bg-secondary p-8 text-center">
                <p className="font-display text-4xl font-semibold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div className="bg-secondary p-8 text-center">
                <p className="font-display text-4xl font-semibold text-foreground">15</p>
                <p className="text-sm text-muted-foreground mt-2">Design Awards</p>
              </div>
              <div className="bg-secondary p-8 text-center">
                <p className="font-display text-4xl font-semibold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground mt-2">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading title="Our Services" subtitle="What We Do" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group relative overflow-hidden bg-background"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                  <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-foreground group-hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading title="Featured Projects" subtitle="Our Portfolio" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectCategories.slice(0, 4).map((cat) => (
              <Link
                key={cat.slug}
                to={`/projects/${cat.slug}`}
                className="group relative aspect-[3/2] overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-primary-foreground/70 text-xs tracking-[0.2em] uppercase mb-2">{cat.subtitle}</p>
                  <h3 className="font-display text-2xl font-medium text-primary-foreground">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto mb-10">
            Ready to bring your architectural vision to life? Our team of experts is here to guide you through every step of the journey.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-primary-foreground text-foreground text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:opacity-90"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
