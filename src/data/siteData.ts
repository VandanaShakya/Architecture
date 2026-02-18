import heroImg from "@/assets/hero-architecture.jpg";
import residentialImg from "@/assets/about-team.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import commercialImg from "@/assets/commercial.jpg";
import interiorsImg from "@/assets/interiors.jpg";
import mixedUseImg from "@/assets/mixed-use.jpg";
import institutionalImg from "@/assets/institutional.jpg";
import projectMgmtImg from "@/assets/project-management.jpg";
import civicImg from "@/assets/civic.jpg";
import businessOfficeImg from "@/assets/business-office.jpg";
import aboutTeamImg from "@/assets/about-team.jpg";



// residential services images //
import residentialStep1 from "@/assets/residentialService/residentialstep1.jpg";
import residentialStep2 from "@/assets/residentialService/residentialstep2.jpg";
import residentialStep3 from "@/assets/residentialService/residentialstep3.jpg";
import residentialStep4 from "@/assets/residentialService/residentialstep4.jpg";
import residentialStep5 from "@/assets/residentialService/residentialstep5.jpg";
import residentialStep6 from "@/assets/residentialService/residentialstep6.jpg";
import residentialSecondImage from "@/assets/residentialService/residential-second.jpg";
import residentialHome from "@/assets/residentialService/residential-home.jpg";
import residentialFourthImage from "@/assets/residentialService/residential-fourth-image.jpg";



// healthcare services images //
import health1 from "@/assets/healthServices/health1.jpg";
import health2 from "@/assets/healthServices/health2.jpg";
import health3 from "@/assets/healthServices/health3.jpg";
import health4 from "@/assets/healthServices/health4.jpg";
import health5 from "@/assets/healthServices/health5.jpg";
import health6 from "@/assets/healthServices/health1.jpg";
import healthSecondImage from "@/assets/healthServices/health-second.jpg";
import healthHome from "@/assets/healthServices/health-bg.jpg";
import healthFourthImage from "@/assets/healthServices/health-fourth-image.jpg";




// commercial services images //
import commercial1 from "@/assets/commercialServices/commercial1.jpg";
import commercial2 from "@/assets/commercialServices/commercial2.webp";
import commercial3 from "@/assets/commercialServices/commercial3.jpg";
import commercial4 from "@/assets/commercialServices/commercial4.jpg";
import commercial5 from "@/assets/commercialServices/commercial5.jpg";
import commercial6 from "@/assets/commercialServices/commercial6.jpg";
import commercialSecondImage from "@/assets/commercialServices/commercial-second-image.webp";
import commercialHome from "@/assets/commercialServices/commercial-bg.jpg";
import commercialFourthImage from "@/assets/commercialServices/commercial-fourth-image.jpg";





// institute services images //
import institute1 from "@/assets/instituteServices/institute1.jpeg";
import institute2 from "@/assets/instituteServices/institute2.webp";
import institute3 from "@/assets/instituteServices/institute3.webp";
import institute4 from "@/assets/instituteServices/institute4.jpg";
import institute5 from "@/assets/instituteServices/institute5.jpg";
import institute6 from "@/assets/instituteServices/institute6.webp";
import instituteSecondImage from "@/assets/instituteServices/institute-second.jpg";
import instituteHome from "@/assets/instituteServices/institute-bg.jpg";
import instituteFourthImage from "@/assets/instituteServices/institute-fourth-image.jpg";







export { heroImg, aboutTeamImg };

/** One process step with its own image and description for the Process section */
export interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  /** Optional: different image for Overview section (defaults to image) */
  overviewImage?: string;
  /** Optional: different image for "Architecture With Inner Value" section (defaults to image) */
  deepDiveImage?: string;
  process: ProcessStep[];
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
    image: residentialHome,
    overviewImage: residentialSecondImage,
    deepDiveImage: residentialFourthImage,
    process: [
      { title: "Client Consultation", description: "We listen to your vision, lifestyle needs, and budget to align expectations and define the scope of your dream home.", image: residentialStep1 },
      { title: "Site Analysis", description: "Our team studies sun path, topography, and context so the design responds to the land and regulations.", image: residentialStep2 },
      { title: "Concept Design", description: "Initial sketches and massing explore layout and character so you can react before we refine.", image: residentialStep3 },
      { title: "Design Development", description: "We develop the chosen concept with materials, structure, and details that are buildable and on brief.", image: residentialStep4 },
      { title: "Construction Documents", description: "Precise drawings and specifications are prepared for tendering and building approval.", image: residentialStep5 },
      { title: "Construction Administration", description: "We support the build with site visits and clarifications so the finished home matches the design.", image: residentialStep6 },
    ],
    features: ["Custom home design", "Luxury villas & estates", "Modern apartments", "Sustainable living spaces", "Interior-exterior harmony"],
  },
  {
    slug: "healthcare",
    title: "Healthcare Architecture",
    subtitle: "Designing Healing Environments",
    description: "Our healthcare designs prioritize patient well-being through evidence-based design principles. We create facilities that promote healing, efficiency, and comfort while meeting the most stringent regulatory requirements.",
    image: healthcareImg,
    overviewImage: healthSecondImage,
    deepDiveImage: healthFourthImage,
    process: [
      { title: "Needs Assessment", description: "We work with clinicians and stakeholders to capture operational flows and future growth requirements.", image: health1 },
      { title: "Regulatory Review", description: "Codes and guidelines are mapped early so the design is compliant and approval-ready.", image: health2 },
      { title: "Concept Planning", description: "Block plans and adjacencies are tested to optimize patient flow and staff efficiency.", image: health3 },
      { title: "Detailed Design", description: "Room data sheets, MEP, and finishes are developed to support procurement and construction.", image: health4 },
      { title: "MEP Coordination", description: "Engineering systems are integrated with architecture for maintainability and resilience.", image: health5 },
      { title: "Project Delivery", description: "We support handover, commissioning, and post-occupancy so the facility performs as intended.", image: health6 },
    ],
    features: ["Hospital design", "Clinics & medical centers", "Wellness facilities", "Patient-centered design", "Infection control planning"],
  },
  {
    slug: "commercial",
    title: "Commercial Architecture",
    subtitle: "Spaces That Drive Business",
    description: "We create commercial spaces that enhance brand identity and drive productivity. Our designs balance aesthetics with functionality, creating environments that inspire employees and impress clients.",
    image: commercialHome,
    overviewImage: commercialSecondImage,
    deepDiveImage: commercialFourthImage,
    process: [
      { title: "Market Analysis", description: "We review location, tenant mix, and benchmarks to position the project for success.", image: commercial1 },
      { title: "Space Programming", description: "Requirements are translated into areas and adjacencies that support your business goals.", image: commercial2 },
      { title: "Concept Design", description: "Distinctive massing and identity are proposed to stand out and attract tenants or buyers.", image: commercial3 },
      { title: "Stakeholder Review", description: "Presentations and workshops align investors, operators, and authorities on the direction.", image: commercial4 },
      { title: "Technical Development", description: "Façade, structure, and MEP are detailed for cost certainty and buildability.", image: commercial5 },
      { title: "Project Execution", description: "We support procurement and construction so quality and schedule are maintained.", image: commercial6 },
    ],
    features: ["Office buildings", "Retail spaces", "Corporate headquarters", "Mixed-use commercial", "Sustainable design"],
  },
  {
    slug: "mixed-use",
    title: "Mixed-Use Developments",
    subtitle: "Integrated Urban Living",
    description: "Our mixed-use projects seamlessly blend residential, commercial, and recreational spaces to create vibrant urban communities. We design developments that foster community interaction and sustainable urban living.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200", // Hero: Urban Mixed-Use Skyline
  overviewImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=1200", // Overview: City Precinct
  deepDiveImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200", // Deep Dive: Modern Interior/Atrium
    process: [
      { 
        title: "Market Analysis", 
        description: "We review location, tenant mix, and benchmarks to position the project for success.", 
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800" // Data/Urban Mapping
      },
      { 
        title: "Space Programming", 
        description: "Requirements are translated into areas and adjacencies that support your business goals.", 
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" // Architectural Planning
      },
      { 
        title: "Concept Design", 
        description: "Distinctive massing and identity are proposed to stand out and attract tenants or buyers.", 
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" // Modern Glass Massing
      },
      { 
        title: "Stakeholder Review", 
        description: "Presentations and workshops align investors, operators, and authorities on the direction.", 
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" // Professional Collaboration
      },
      { 
        title: "Technical Development", 
        description: "Façade, structure, and MEP are detailed for cost certainty and buildability.", 
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" // Construction Detail/Steel
      },
      { 
        title: "Project Execution", 
        description: "We support procurement and construction so quality and schedule are maintained.", 
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" // Construction Site
      },
    ],
    features: ["Urban regeneration", "Transit-oriented design", "Community spaces", "Retail integration", "Green infrastructure"],
  },
  {
    slug: "institutional",
    title: "Institutional Projects",
    subtitle: "Architecture for Learning & Culture",
    description: "We design institutional buildings that inspire learning, foster creativity, and serve communities for generations. From universities to cultural centers, our designs embody the values of the institutions they house.",
    image: instituteHome,
    overviewImage: instituteSecondImage,
    deepDiveImage: instituteFourthImage,
    process: [
      { title: "Stakeholder Engagement", description: "We align leadership, users, and funders on vision, programme, and constraints.", image: institute1 },
      { title: "Programmatic Analysis", description: "Spaces and uses are defined so the building supports pedagogy, research, or culture.", image: institute2 },
      { title: "Vision Development", description: "Narrative and imagery are crafted so the design reflects the institution’s identity.", image: institute3 },
      { title: "Schematic Design", description: "Plans and sections are tested for flow, light, and flexibility before we lock the concept.", image: institute4 },
      { title: "Design Refinement", description: "Materials, structure, and details are developed for durability and long-term value.", image: institute5 },
      { title: "Construction Oversight", description: "We monitor quality and intent through construction to opening and beyond.", image: institute6 },
    ],
    features: ["Educational facilities", "Cultural centers", "Libraries & museums", "Government buildings", "Religious architecture"],
  },
  {
    slug: "interiors",
    title: "High-End Interior Design",
    subtitle: "Luxury From Within",
    description: "Our interior design studio creates sophisticated spaces that reflect refined taste and modern luxury. We curate every element — from custom furniture to lighting — to create cohesive, breathtaking interiors.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200", // Main: High-end Interior
    overviewImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200", // Verified Overview: Minimalist Living Area  deepDiveImage: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=1200", // Deep Dive: Textures
    deepDiveImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    process: [
    { 
      title: "Style Consultation", 
      description: "We explore references and preferences to define a direction that feels personal and timeless.", 
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Mood & Material Boards", 
      description: "Palettes, textures, and key pieces are curated so you can see and feel the outcome.", 
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Space Planning", 
      description: "Layouts are optimized for circulation, function, and focal points before we detail.", 
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Custom Furniture Design", 
      description: "Unique pieces are designed and specified to fit the space and the narrative.", 
      image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=800"
      
    },
    { 
      title: "Procurement", 
      description: "We source, order, and track items so quality and delivery match the design.", 
      image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80&w=800"    },
    { 
      title: "Styling & Installation", 
      description: "Final placement and accessories bring the scheme to life for handover.", 
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"    },
  ],
    features: ["Luxury residential interiors", "Corporate office design", "Hospitality spaces", "Custom furniture", "Art curation"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    subtitle: "Delivering Excellence On Time",
    description: "Our project management services ensure that every project is delivered on time, within budget, and to the highest quality standards. We coordinate all stakeholders to bring architectural visions to life seamlessly.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200", // Main: Project Leadership/Meeting
  overviewImage: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200", // Overview: Business Office Environment
  deepDiveImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200", // Deep Dive: Management Strategy
  process: [
    { 
      title: "Project Planning", 
      description: "Scope, programme, and team are defined so everyone works to the same goals.", 
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" // Planning/Charts
    },
    { 
      title: "Team Coordination", 
      description: "Design, consultants, and contractors are aligned through regular meetings and documentation.", 
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" // Teamwork/Collaboration
    },
    { 
      title: "Budget Management", 
      description: "Costs are tracked and forecast so decisions are informed and the project stays on budget.", 
      image: "https://images.pexels.com/photos/5900222/pexels-photo-5900222.jpeg?auto=compress&cs=tinysrgb&w=800" // Finance/Analytics
    },
    { 
      title: "Quality Control", 
      description: "Reviews and inspections ensure deliverables meet the agreed standards.", 
      image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800" // Review/Checking
    },
    { 
      title: "Timeline Tracking", 
      description: "Milestones and dependencies are monitored so delays are caught and mitigated early.", 
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" // Schedule/Tracking
    },
    { 
      title: "Handover & Closeout", 
      description: "Snagging, training, and documentation are completed for a smooth handover.", 
      image: "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=800" // Handshake/Completion
    },
  ],
    features: ["End-to-end management", "Budget optimization", "Vendor coordination", "Quality assurance", "Risk mitigation"],
  },
];

export const projectCategories: ProjectCategoryData[] = [
  {
    slug: "residential",
    title: "Residential Projects",
    subtitle: "Homes That Inspire",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200", // Hero: Modern Luxury Villa
  projects: [
    { 
      title: "Villa Serene", 
      location: "Mumbai", 
      year: "2024", 
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800" // Luxury white villa with pool
    },
    { 
      title: "The Meadows Residence", 
      location: "Pune", 
      year: "2023", 
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800" // Modern house with green lawn
    },
    { 
      title: "Skyline Apartments", 
      location: "Bangalore", 
      year: "2023", 
      image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800" // High-rise modern building
    },
    { 
      title: "Riverside Estate", 
      location: "Goa", 
      year: "2022", 
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800" // Tropical estate/villa vibe
    },
  ],
  },
  {
    slug: "healthcare",
    title: "Healthcare Projects",
    subtitle: "Healing Spaces",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1200",
    projects: [
      { title: "City Medical Center", location: "Delhi", year: "2024", image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Wellness Hub", location: "Chennai", year: "2023", image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Children's Hospital Wing", location: "Hyderabad", year: "2023", image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { title: "Regional Care Campus", location: "Bangalore", year: "2022", image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800" },
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
      { title: "Co-Work Campus", location: "Pune", year: "2024", image: interiorsImg },
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
      { title: "Transit Hub Plaza", location: "Chennai", year: "2023", image: civicImg },
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
      { title: "Lifestyle Mall", location: "Bangalore", year: "2024", image: mixedUseImg },
    ],
  },
];

export const navServices = services.map(s => ({ title: s.title, path: `/services/${s.slug}` }));
export const navProjects = projectCategories.map(p => ({ title: p.title, path: `/projects/${p.slug}` }));
