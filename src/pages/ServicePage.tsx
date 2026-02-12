import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { services, projectCategories } from "@/data/siteData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  // Find related projects
  const relatedCategory = projectCategories.find((c) => c.slug === slug);

  return (
    <Layout>
      <HeroBanner image={service.image} title={service.title} subtitle={service.subtitle} height="medium" />

      {/* Description */}
      <section className="py-24 lg:py-32">
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
              <img src={service.image} alt={service.title} className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading title="Our Process" subtitle="How We Work" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, i) => (
              <div key={step} className="bg-background p-8">
                <span className="font-display text-4xl font-semibold text-muted-foreground/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-medium text-foreground mt-4">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedCategory && (
        <section className="py-24 lg:py-32">
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
      <section className="py-24 lg:py-32 bg-primary">
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
      </section>
    </Layout>
  );
};

export default ServicePage;
