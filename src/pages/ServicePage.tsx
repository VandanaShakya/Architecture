import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { services, projectCategories } from "@/data/siteData";
import { ArrowRight, CheckCircle2, MoveRight } from "lucide-react";
 

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  // Find related projects
  const relatedCategory = projectCategories.find((c) => c.slug === slug);

  return (
    <Layout>
      <HeroBanner image={service.image} title={service.title} subtitle={service.subtitle} height="full" />
      {/* Description */}
      <section className="py-10 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading title="Overview" subtitle="About This Service" align="left" />
              <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
              <div className="mt-8 space-y-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-foreground shrink-0" />
                    <span className="text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={service.overviewImage ?? service.image} alt={service.title} className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section - Matches your "Our Design Process" title */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="bg-pink-50 text-pink-500 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest">
              <span className="w-1 h-1 bg-pink-500 rounded-full" /> Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Design Process
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            Every {service.title.toLowerCase()} engagement follows a clear, architect-led workflow 
            to ensure design intent and timelines stay aligned.
          </p>
        </div>

        {/* Horizontal Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {service.process.map((step, index) => (
            <div key={step.title + index} className="group flex flex-col items-center text-center relative">
              
              {/* Image Circle Container */}
              <div className="relative mb-10">
                {/* Dotted Outer Decorative Ring */}
                <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-slate-200 group-hover:border-pink-300 transition-colors duration-500" />
                
                {/* Main Circle for Image - one image per step */}
                <div className="w-44 h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Decorative Connector Arrow (Hidden on mobile, visible on desktop) */}
                {index !== service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-12 lg:-right-20 transform -translate-y-1/2 z-0 opacity-20">
                    <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                      <path d="M2 30C20 30 40 10 78 10" stroke="#334155" strokeWidth="1.5" strokeDasharray="6 6" />
                      <path d="M72 16L78 10L72 4" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Text Content from siteData */}
              <div className="space-y-3 px-4">
                <span className="text-[11px] font-bold text-slate-400 tracking-[0.25em] uppercase">
                  Step—{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-pink-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
                
                <button className="inline-flex items-center gap-2 text-pink-500 text-xs font-bold uppercase tracking-wider pt-4 hover:gap-4 transition-all group/btn">
                  Learn More <MoveRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Deep dive section */}
      <section className="py-10 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: heading + copy */}
            <div>
              <SectionHeading
                title={`Architecture With Inner Value`}
                subtitle="Beyond Blueprints"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Great {service.title.toLowerCase()} is about more than elevations and floor plans. We study how light
                moves through your spaces, how people arrive, gather and pause, and how materials will age over time.
                Our studio combines rigorous technical detailing with a calm, timeless aesthetic so every line drawn on
                paper becomes a built space that feels intuitive, generous and enduring.
              </p>
            </div>

            {/* Right: image block */}
            <div className="w-full">
              <img
                src={service.deepDiveImage}
                alt={service.title}
                className="w-full h-full max-h-[480px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedCategory && (
        <section className="py-14 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading title="Related Projects" subtitle="Our Work" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCategory.projects.slice(0, 3).map((project) => (
                <div key={project.title} className="group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display text-lg font-medium text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.location} · {project.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {/* <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">
            Interested in {service.title}?
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto mb-10">
            Let's discuss how we can bring your vision to life with our expertise in {service.title.toLowerCase()}.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary-foreground text-foreground text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:opacity-90"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section> */}
    </Layout>
  );
};

export default ServicePage;
