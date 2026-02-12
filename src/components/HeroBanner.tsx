import { Link } from "react-router-dom";

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  overlay?: "dark" | "light";
  height?: "full" | "large" | "medium";
}

const HeroBanner = ({
  image,
  title,
  subtitle,
  showCta = false,
  ctaText = "Get In Touch",
  ctaLink = "/contact",
  overlay = "dark",
  height = "large",
}: HeroBannerProps) => {
  const heightClasses = {
    full: "h-screen",
    large: "h-[85vh]",
    medium: "h-[60vh]",
  };

  return (
    <section className={`relative ${heightClasses[height]} w-full overflow-hidden`}>
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div
        className={`absolute inset-0 ${
          overlay === "dark" ? "bg-foreground/50" : "bg-background/30"
        }`}
      />
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            {subtitle && (
              <p className="text-primary-foreground/80 text-sm font-medium tracking-[0.3em] uppercase mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold text-primary-foreground leading-tight mb-6">
              {title}
            </h1>
            {showCta && (
              <Link
                to={ctaLink!}
                className="inline-block mt-4 px-8 py-3.5 bg-primary-foreground text-foreground text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:opacity-90"
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
