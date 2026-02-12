import heroImg from "@/assets/hero-architecture.jpg";
import residentialImg from "@/assets/residential.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import commercialImg from "@/assets/commercial.jpg";
import interiorsImg from "@/assets/interiors.jpg";
import mixedUseImg from "@/assets/mixed-use.jpg";
import institutionalImg from "@/assets/institutional.jpg";
import projectMgmtImg from "@/assets/project-management.jpg";
import civicImg from "@/assets/civic.jpg";
import businessOfficeImg from "@/assets/business-office.jpg";
import aboutTeamImg from "@/assets/about-team.jpg";

export { heroImg, aboutTeamImg };

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  process: string[];
  features: string[];
}

export interface ProjectCategoryData {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  projects: { title: string; location: string; year: string; image: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "residential",
    title: "Residential Architecture",
    subtitle: "Crafting Dream Homes",
    description: "We design bespoke residential spaces that reflect your lifestyle and aspirations. From luxury villas to contemporary apartments, every home we create is a masterpiece of thoughtful design, sustainable materials, and timeless elegance.",
    image: residentialImg,
    process: ["Client Consultation", "Site Analysis", "Concept Design", "Design Development", "Construction Documents", "Construction Administration"],
    features: ["Custom home design", "Luxury villas & estates", "Modern apartments", "Sustainable living spaces", "Interior-exterior harmony"],
  },
  {
    slug: "healthcare",
    title: "Healthcare Architecture",
    subtitle: "Designing Healing Environments",
    description: "Our healthcare designs prioritize patient well-being through evidence-based design principles. We create facilities that promote healing, efficiency, and comfort while meeting the most stringent regulatory requirements.",
    image: healthcareImg,
    process: ["Needs Assessment", "Regulatory Review", "Concept Planning", "Detailed Design", "MEP Coordination", "Project Delivery"],
    features: ["Hospital design", "Clinics & medical centers", "Wellness facilities", "Patient-centered design", "Infection control planning"],
  },
  {
    slug: "commercial",
    title: "Commercial Architecture",
    subtitle: "Spaces That Drive Business",
    description: "We create commercial spaces that enhance brand identity and drive productivity. Our designs balance aesthetics with functionality, creating environments that inspire employees and impress clients.",
    image: commercialImg,
    process: ["Market Analysis", "Space Programming", "Concept Design", "Stakeholder Review", "Technical Development", "Project Execution"],
    features: ["Office buildings", "Retail spaces", "Corporate headquarters", "Mixed-use commercial", "Sustainable design"],
  },
  {
    slug: "mixed-use",
    title: "Mixed-Use Developments",
    subtitle: "Integrated Urban Living",
    description: "Our mixed-use projects seamlessly blend residential, commercial, and recreational spaces to create vibrant urban communities. We design developments that foster community interaction and sustainable urban living.",
    image: mixedUseImg,
    process: ["Urban Analysis", "Master Planning", "Phasing Strategy", "Design Integration", "Infrastructure Planning", "Community Engagement"],
    features: ["Urban regeneration", "Transit-oriented design", "Community spaces", "Retail integration", "Green infrastructure"],
  },
  {
    slug: "institutional",
    title: "Institutional Projects",
    subtitle: "Architecture for Learning & Culture",
    description: "We design institutional buildings that inspire learning, foster creativity, and serve communities for generations. From universities to cultural centers, our designs embody the values of the institutions they house.",
    image: institutionalImg,
    process: ["Stakeholder Engagement", "Programmatic Analysis", "Vision Development", "Schematic Design", "Design Refinement", "Construction Oversight"],
    features: ["Educational facilities", "Cultural centers", "Libraries & museums", "Government buildings", "Religious architecture"],
  },
  {
    slug: "interiors",
    title: "High-End Interior Design",
    subtitle: "Luxury From Within",
    description: "Our interior design studio creates sophisticated spaces that reflect refined taste and modern luxury. We curate every element — from custom furniture to lighting — to create cohesive, breathtaking interiors.",
    image: interiorsImg,
    process: ["Style Consultation", "Mood & Material Boards", "Space Planning", "Custom Furniture Design", "Procurement", "Styling & Installation"],
    features: ["Luxury residential interiors", "Corporate office design", "Hospitality spaces", "Custom furniture", "Art curation"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    subtitle: "Delivering Excellence On Time",
    description: "Our project management services ensure that every project is delivered on time, within budget, and to the highest quality standards. We coordinate all stakeholders to bring architectural visions to life seamlessly.",
    image: projectMgmtImg,
    process: ["Project Planning", "Team Coordination", "Budget Management", "Quality Control", "Timeline Tracking", "Handover & Closeout"],
    features: ["End-to-end management", "Budget optimization", "Vendor coordination", "Quality assurance", "Risk mitigation"],
  },
];

export const projectCategories: ProjectCategoryData[] = [
  {
    slug: "residential",
    title: "Residential Projects",
    subtitle: "Homes That Inspire",
    image: residentialImg,
    projects: [
      { title: "Villa Serene", location: "Mumbai", year: "2024", image: residentialImg },
      { title: "The Meadows Residence", location: "Pune", year: "2023", image: interiorsImg },
      { title: "Skyline Apartments", location: "Bangalore", year: "2023", image: commercialImg },
      { title: "Riverside Estate", location: "Goa", year: "2022", image: residentialImg },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare Projects",
    subtitle: "Healing Spaces",
    image: healthcareImg,
    projects: [
      { title: "City Medical Center", location: "Delhi", year: "2024", image: healthcareImg },
      { title: "Wellness Hub", location: "Chennai", year: "2023", image: healthcareImg },
      { title: "Children's Hospital Wing", location: "Hyderabad", year: "2023", image: institutionalImg },
    ],
  },
  {
    slug: "business-office",
    title: "Business & Office Projects",
    subtitle: "Workspaces Reimagined",
    image: businessOfficeImg,
    projects: [
      { title: "Tech Park Headquarters", location: "Bangalore", year: "2024", image: businessOfficeImg },
      { title: "Creative Hub Office", location: "Mumbai", year: "2023", image: commercialImg },
      { title: "Finance Tower", location: "Delhi", year: "2022", image: commercialImg },
    ],
  },
  {
    slug: "civic-mixed",
    title: "Civic & Mixed-Use Projects",
    subtitle: "Community Spaces",
    image: civicImg,
    projects: [
      { title: "Central Community Center", location: "Pune", year: "2024", image: civicImg },
      { title: "Urban Mixed-Use Complex", location: "Mumbai", year: "2023", image: mixedUseImg },
      { title: "Heritage Civic Hall", location: "Jaipur", year: "2022", image: institutionalImg },
    ],
  },
  {
    slug: "commercial",
    title: "Commercial Projects",
    subtitle: "Retail & Beyond",
    image: commercialImg,
    projects: [
      { title: "Grand Retail Plaza", location: "Delhi", year: "2024", image: commercialImg },
      { title: "Luxury Boutique Hotel", location: "Goa", year: "2023", image: interiorsImg },
      { title: "Convention Center", location: "Hyderabad", year: "2022", image: institutionalImg },
    ],
  },
];

export const navServices = services.map(s => ({ title: s.title, path: `/services/${s.slug}` }));
export const navProjects = projectCategories.map(p => ({ title: p.title, path: `/projects/${p.slug}` }));
