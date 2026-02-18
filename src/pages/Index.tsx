import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { heroImg, services, projectCategories } from "@/data/siteData";
import { ArrowRight } from "lucide-react";
import heroLastImage from "@/assets/home-last.jpg";

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
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroLastImage}
          alt="Architectural Interior"
          className="h-full w-full object-cover"
        />
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight mb-6">
          Discover a World of Architectural Excellence <br className="hidden md:block" />
          With Inner Value
        </h1>
        
        <p className="text-sm md:text-lg lg:text-xl font-light text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Step into a world where imagination takes shape and dreams turn into 
          breathtaking realities. Join us on a journey where creativity meets precision.
        </p>

        <button 
          className="bg-[#A67157] hover:bg-[#8e5e48] transition-colors duration-300 text-white px-8 py-3 md:px-10 md:py-4 rounded-md text-lg font-medium shadow-lg"
          onClick={() => console.log('Booking meeting...')}
        >
          Book a meeting
        </button>
      </div>
    </section>
     
    </Layout>
  );
};

export default Index;
