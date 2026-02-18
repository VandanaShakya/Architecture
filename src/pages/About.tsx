import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { aboutTeamImg } from "@/data/siteData";
import { Link } from "react-router-dom";
import aboutSecond from "@/assets/about-second-image.jpg";


const About = () => {
  return (
    <Layout>
      <HeroBanner image={aboutTeamImg} title="About ArchStudio" subtitle="Our Story" height="full" />



{/* about second section */}
<section className="relative bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Dot Pattern (Top Right) */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }}>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="text-[#a67c52] font-medium text-lg mb-4 tracking-wide">
            About
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-[1.2] mb-8 max-w-xl">
            Our Work Ideas are Tailored to Meet & Exceed Your Satisfaction
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              Discover the art of architectural innovation at Inner Value, where
              visionary designs meet unparalleled expertise. Our team of passionate
              architects is committed to transforming your dreams into architectural
              masterpieces.
            </p>
            <p>
              Whether you’re planning a new residential haven, a
              cutting-edge commercial space, or a timeless restoration project, we
              have the creativity and technical prowess to bring your vision to life.
            </p>
            <p>
              We blend modern aesthetics with sustainable practices to create spaces
              that not only inspire but also stand the test of time. Each design is a
              testament to our unwavering dedication to excellence.
            </p>
            
          </div>
        </div>

        {/* Right Column: Image with Architectural Offset Frame */}
        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
          
          {/* The Decorative Border Frame (Behind Image) */}
          <div className="absolute -left-6 -top-6 w-[100%] h-[100%] border border-gray-300 z-0 hidden md:block"></div>
          
          {/* Main Image Container */}
          <div className="relative z-10 shadow-2xl">
            <img 
              src={aboutSecond}
              alt="Architectural Workspace" 
              className="w-full h-auto object-cover block"
            />
          </div>
          
        </div>
      </div>
    </section>




      {/* Story */}
      <section className="py-14 lg:py-12">
        

        <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-[#A86550] text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Our Heritage
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-gray-900">
            A Legacy of Design Excellence
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
              Founded with a passion for transformative architecture, ArchStudio has grown from a small design practice into one of the region's most respected architectural firms. Our portfolio spans residential, commercial, healthcare, and institutional projects across India and beyond. We believe that great architecture has the power to elevate everyday life, foster community, and leave a lasting legacy for generations to come.
            </p>
        </div>

        {/* Three Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: The Vision */}
          <div className="group relative p-8 border border-gray-300 bg-white transition-all duration-500 hover:border-[#A86550] hover:shadow-[0_0_15px_rgba(168,101,80,0.2)]">
            <div className="mb-6 text-[#A86550]">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"/><path d="M3 21v-3l9-9"/><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l-3-3Z"/><path d="m9 11 3 3"/></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-tight">The Vision</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Founded with a passion for transformative architecture, ArchStudio has grown from a small design practice into one of the region's most respected architectural firms.
            </p>
          </div>

          {/* Card 2: The Portfolio */}
          <div className="group relative p-8 border border-gray-300 bg-white transition-all duration-500 hover:border-[#A86550] hover:shadow-[0_0_15px_rgba(168,101,80,0.2)]">
            <div className="mb-6 text-[#A86550]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-tight">The Portfolio</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Our portfolio spans residential, commercial, healthcare, and institutional projects across India and beyond, showcasing our versatility and technical depth.
            </p>
          </div>

          {/* Card 3: The Impact */}
          <div className="group relative p-8 border border-gray-300 bg-white transition-all duration-500 hover:border-[#A86550] hover:shadow-[0_0_15px_rgba(168,101,80,0.2)]">
            <div className="mb-6 text-[#A86550]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-tight">The Impact</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              We believe that great architecture has the power to elevate everyday life, foster community, and leave a lasting legacy for generations to come.
            </p>
          </div>

        </div>
      </div>
    </section>
      </section>



{/* about third section */}
<section className="relative bg-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Background Decorative Dots - Top Center-ish */}
      <div className="absolute top-10 left-[45%] w-24 h-32 opacity-20 hidden lg:block"
           style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}>
      </div>

      {/* Background Decorative Dots - Bottom Right */}
      <div className="absolute bottom-10 right-10 w-32 h-24 opacity-20 hidden lg:block"
           style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-[#A86550] text-lg font-medium mb-4">
            We bring your ideas to life
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-8">
            You convey the idea, and we deliver a refined interface.
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            We specialize in translating your ideas into reality, transforming 
            concepts into refined and visually stunning architectural interfaces. Our 
            expertise lies in delivering not just structures, but exquisite and 
            aesthetically pleasing designs that captivate the senses. With a keen 
            focus on beauty and functionality, we ensure that every architectural 
            project we undertake is not just a structure, but a work of art. Our 
            commitment to excellence guarantees that your vision will be brought 
            to life in the most refined and captivating manner possible, creating 
            architectural interfaces that leave a lasting impression and elevate the 
            overall experience.
          </p>
        </div>

        {/* Right Side: Stats Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
          
          {/* Card 1 */}
          <div className="bg-white p-10 shadow-xl rounded-sm border-b-2 border-transparent hover:border-[#A86550] transition-all duration-300 flex flex-col justify-center min-h-[200px]">
            <span className="text-5xl font-bold text-gray-800 mb-2">20+</span>
            <span className="text-gray-500 font-medium">Years of Experience</span>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 shadow-xl rounded-sm border-b-2 border-transparent hover:border-[#A86550] transition-all duration-300 flex flex-col justify-center min-h-[200px]">
            <span className="text-5xl font-bold text-gray-800 mb-2">170+</span>
            <span className="text-gray-500 font-medium">Projects Completed</span>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 shadow-xl rounded-sm border-b-2 border-transparent hover:border-[#A86550] transition-all duration-300 flex flex-col justify-center min-h-[200px]">
            <span className="text-5xl font-bold text-gray-800 mb-2">10+</span>
            <span className="text-gray-500 font-medium">Staff</span>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-10 shadow-xl rounded-sm border-b-2 border-transparent hover:border-[#A86550] transition-all duration-300 flex flex-col justify-center min-h-[200px]">
            <span className="text-5xl font-bold text-gray-800 mb-2">5+</span>
            <span className="text-gray-500 font-medium">Received Awards</span>
          </div>

        </div>
      </div>
    </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-40 overflow-hidden bg-gray-900">
      {/* Background Image Tag */}
      <img 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
        alt="Modern Architecture Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50" 
      />

      {/* Dark Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
          Ready to Work Together?
        </h2>
        
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-[#A86550] text-white text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:bg-[#8e5443] hover:shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </section>  
    </Layout>
  );
};

export default About;
