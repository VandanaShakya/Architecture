interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ title, subtitle, align = "center" }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {subtitle && (
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
