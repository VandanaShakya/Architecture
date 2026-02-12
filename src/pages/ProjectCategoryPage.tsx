import { useParams, Navigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { projectCategories } from "@/data/siteData";
import { ArrowRight } from "lucide-react";

const ProjectCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = projectCategories.find((c) => c.slug === slug);

  if (!category) return <Navigate to="/" replace />;

  return (
    <Layout>
      <HeroBanner image={category.image} title={category.title} subtitle={category.subtitle} height="medium" />

      {/* Projects Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading title={category.title} subtitle="Our Portfolio" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.projects.map((project) => (
              <div key={project.title} className="group relative overflow-hidden">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500 flex items-end">
                  <div className="p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-display text-2xl font-medium text-primary-foreground">{project.title}</h3>
                    <p className="text-primary-foreground/70 text-sm mt-1">
                      {project.location} · {project.year}
                    </p>
                  </div>
                </div>
                {/* Always visible info below */}
                <div className="p-4 bg-background">
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

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">
            Have a Project in Mind?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary-foreground text-foreground text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:opacity-90"
          >
            Let's Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectCategoryPage;
