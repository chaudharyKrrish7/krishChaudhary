"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, Mail, MessageCircle, ExternalLink, 
  Code2, Palette, Globe, Briefcase, GraduationCap,
  ArrowDown, Github, Linkedin, Instagram, X, ChevronLeft, ChevronRight,
  ArrowRight
} from 'lucide-react';

// --- DATA CONFIGURATION ---
const DATA = {
  name: "Krish Chaudhary",
  heroTitle: "DIGITAL",
  heroTitle2: "PERFORMANCE.",
  heroSubtitle: "Based in Gurugram. I engineer high-fidelity digital experiences and conversion-focused funnels. Intersecting minimalist design with aggressive frontend architecture.",
  about: "Aesthetic is irrelevant if it doesn't scale. I partner with founders and agencies to build digital assets that command attention and drive revenue. From high-retention video creatives to responsive frontend architecture, I focus purely on output and ROI. No fluff. Just clean execution and measurable growth.",
  links: {
    linkedin: "https://www.linkedin.com/in/krish-chaudhary-107a9a304/",
    instagram: "https://www.instagram.com/krrrrrrrrrrrrrrrrish/",
    github: "https://github.com/chaudharyKrrish7",
    
    // PRE-FILLED WHATSAPP TEMPLATE
    whatsapp: "https://wa.me/919667751906?text=Hey%20Krish%2C%20I%20saw%20your%20portfolio.%20Let's%20discuss%20scaling%20my%20digital%20presence.",
    
    // PRE-FILLED EMAIL TEMPLATE (MAIN CTA)
    emailAction: "mailto:krrishchaudhary070513@gmail.com?subject=Project%20Inquiry%3A%20Digital%20Performance&body=Hey%20Krish%2C%0A%0AI%20saw%20your%20portfolio.%20We%20need%20to%20upgrade%20our%20digital%20assets%20and%20improve%20our%20conversion%20rate.%0A%0ALet's%20discuss%20a%20potential%20project.%0A%0A-%20%5BYour%20Name%20%2F%20Company%5D"
  },
  skills: [
    { name: "Frontend Architecture", items: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Python"], icon: <Code2 className="text-white" /> },
    { name: "Design & Creative", items: ["UI/UX", "Photoshop", "Illustrator", "Premiere Pro", "Motion Graphics"], icon: <Palette className="text-white" /> },
    { name: "Growth Strategy", items: ["SEO", "Digital Marketing", "Content Strategy", "Conversion Optimization"], icon: <Globe className="text-white" /> }
  ],
  experience: [
    {
      role: "Digital Marketing & Design",
      company: "Flickmatch",
      duration: "2025 Jan - Present",
      description: "Managing brand growth strategy, performance analysis, and visual design. Creating high-converting social and video content designed strictly to capture attention and drive localized authority."
    },
    {
      role: "Independent Designer & Developer",
      company: "Freelance Clientele",
      duration: "2024 - Present",
      description: "Creating high-fidelity visual identities, auditing e-commerce funnels, and producing professional design assets for independent brands."
    }
  ],
  projects: [
    { 
// <<<<<<< HEAD
        title: "Sports Branding", 
        category: "Visual Identity & Design", 
// =======
        title: "Sports Design", 
        category: "Sports Branding", 
// >>>>>>> 1b61c2224aa8346bdcea69090240126dde71aca9
        img: "/images/gd/sd/manutd.webp",
        gallery: [ "/images/gd/sd/2.webp" ,"/images/gd/sd/2xp6.webp","/images/gd/sd/6.webp","/images/gd/sd/barpsg.webp","/images/gd/sd/d3.webp","/images/gd/sd/manutd.webp"] 
    },
    { 
// <<<<<<< HEAD
        title: "Commercial Posters", 
        category: "Graphic Design", 
// =======
        title: "Poster Design", 
        category: "Poster Designs", 
// >>>>>>> 1b61c2224aa8346bdcea69090240126dde71aca9
        img: "/images/gd/pd/2.webp",
        gallery: ["/images/gd/pd/2.webp" ,"/images/gd/pd/1.webp","/images/gd/pd/3.webp","/images/gd/pd/4.webp","/images/gd/pd/5.webp"] 
    },
    { 
        title: "Startup Web Infrastructure", 
        category: "Frontend Development", 
        img: "/images/wd/um/2.webp",
        gallery: ["/images/wd/um/1.webp","/images/wd/um/2.webp","/images/wd/pf/1.webp","/images/wd/pf/2.webp"]
    },
    { 
        title: "Marketing & Video Creatives", 
        category: "Content Strategy", 
        img: "/images/vd/ir/1.webp",
        gallery: ["/images/vd/ir/1.webp","/images/vd/ir/2.webp","/images/vd/pd/1.webp"]
    }
  ]
};

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12">
    <p className="text-neutral-500 font-mono text-xs uppercase tracking-[0.3em] mb-2">{subtitle}</p>
    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">{children}</h2>
  </div>
);

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImgIdx(0);
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* 1. STICKY NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.a href="#" className="text-lg font-black tracking-tighter uppercase" whileHover={{ scale: 1.05 }}>
            Krish Chaudhary<span className="text-neutral-500">.</span>
          </motion.a>
          
          <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase">
            <a href="#about" className="hover:text-neutral-400 transition-colors">Approach</a>
            <a href="#work" className="hover:text-neutral-400 transition-colors">Portfolio</a>
            <a href={DATA.links.emailAction} className="bg-white text-black px-6 py-2.5 rounded-sm hover:bg-neutral-200 transition-all flex items-center gap-2">
              Start Project <ArrowRight size={14}/>
            </a>
          </div>

          <div className="md:hidden">
            <a href={DATA.links.emailAction} className="bg-white text-black px-4 py-2 rounded-sm text-[10px] font-bold uppercase">Connect</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            {DATA.heroTitle}<br /><span className="text-neutral-700">{DATA.heroTitle2}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl font-light leading-relaxed mb-12 px-4">{DATA.heroSubtitle}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.a href={DATA.links.emailAction} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-white text-black px-10 py-4 rounded-sm font-bold hover:bg-neutral-200 transition-all w-full md:w-auto text-center flex items-center justify-center gap-2 uppercase tracking-wide text-sm">
              <Mail size={18} /> Send Inquiry
            </motion.a>
            <motion.a href="#work" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="text-white border border-white/20 px-10 py-4 rounded-sm font-bold hover:bg-white/5 transition-all w-full md:w-auto text-center uppercase tracking-wide text-sm">
              View Case Studies
            </motion.a>
          </div>
        </motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10"><ArrowDown className="text-neutral-600" size={24} /></motion.div>
      </section>

      {/* 3. APPROACH & ABOUT */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <motion.div className="md:col-span-7" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading subtitle="The Philosophy">Engineering Output</SectionHeading>
            <p className="text-neutral-400 text-xl leading-relaxed mb-10 font-light">{DATA.about}</p>
            <motion.a href="./images/resume.pdf" download whileHover={{ x: 5 }} className="inline-flex items-center gap-3 text-white border-b border-white pb-1 font-bold uppercase tracking-widest text-xs hover:text-neutral-400 hover:border-neutral-400 transition-all">
              <Download size={16} /> Download Full CV
            </motion.a>
          </motion.div>
          
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] bg-neutral-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 rounded-sm">
                <img src="./images/Krish.webp" alt="Krish Chaudhary" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="bg-neutral-900 p-8 flex-1 flex flex-col items-center justify-center border border-white/5 rounded-sm">
                    <span className="text-4xl mb-3">📍</span>
                    <span className="text-[10px] font-bold tracking-widest text-neutral-500 text-center uppercase">Based in<br/>India</span>
                </div>
                <div className="bg-neutral-900 p-8 flex-1 flex flex-col items-center justify-center border border-white/5 rounded-sm">
                    <span className="text-4xl mb-3">⚡</span>
                    <span className="text-[10px] font-bold tracking-widest text-neutral-500 text-center uppercase">Fast<br/>Execution</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE & EXPERIENCE */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid lg:grid-cols-2 gap-20">
            {/* SKILLS */}
            <div>
                <SectionHeading subtitle="Capabilities">Technical Arsenal</SectionHeading>
                <div className="space-y-6">
                {DATA.skills.map((skill, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 bg-neutral-900 border border-white/5 hover:border-white/20 transition-colors rounded-sm">
                        <div className="flex items-center gap-4 mb-6">
                            {skill.icon}
                            <h3 className="text-xl font-bold uppercase tracking-wide">{skill.name}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">{skill.items.map(item => (<span key={item} className="text-xs bg-black px-4 py-2 text-neutral-400 border border-white/5 rounded-sm uppercase tracking-wider">{item}</span>))}</div>
                    </motion.div>
                ))}
                </div>
            </div>

            {/* EXPERIENCE */}
            <div>
                <SectionHeading subtitle="Track Record">Experience</SectionHeading>
                <div className="space-y-12 mt-8">
                {DATA.experience.map((exp, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-8 border-l border-neutral-800">
                    <div className="absolute w-2 h-2 bg-white rounded-full -left-[4.5px] top-2" />
                    <p className="text-xs text-neutral-500 font-mono mb-2">{exp.duration}</p>
                    <h4 className="text-2xl font-bold uppercase tracking-wide">{exp.role}</h4>
                    <p className="text-neutral-400 mb-4 font-mono text-sm uppercase">{exp.company}</p>
                    <p className="text-base text-neutral-500 leading-relaxed">{exp.description}</p>
                    </motion.div>
                ))}
                </div>
            </div>
        </div>
      </section>

      {/* 5. PORTFOLIO WITH GALLERY */}
      <section id="work" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
        <SectionHeading subtitle="Selected Works">Portfolio</SectionHeading>
        <div className="grid md:grid-cols-2 gap-10">
          {DATA.projects.map((project, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="group cursor-pointer"
              onClick={() => openGallery(project)}
            >
              <div className="overflow-hidden bg-[#111] aspect-[4/3] mb-6 rounded-sm border border-white/5 group-hover:border-white/20 transition-all flex items-center justify-center p-4">
                <img src={project.img} alt={project.title} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-center pr-4">
                <div>
                    <h4 className="text-2xl font-bold uppercase tracking-tight mb-1">{project.title}</h4>
                    <p className="text-neutral-500 text-sm font-mono uppercase tracking-widest">{project.category}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="text-white" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MINI GALLERY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-6"
          >
            <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 text-neutral-500 hover:text-white transition-colors z-[210] bg-white/5 p-4 rounded-sm"
            >
                <X size={24} />
            </button>

            <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 items-center">
                <div className="relative group w-full lg:w-2/3 aspect-video lg:aspect-auto">
                    <motion.img 
                        key={currentImgIdx}
                        initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.3 }}
                        src={selectedProject.gallery[currentImgIdx]} 
                        className="w-full lg:h-[80vh] object-contain rounded-sm"
                    />
                    
                    {selectedProject.gallery.length > 1 && (
                        <>
                            <button 
                                onClick={() => setCurrentImgIdx(prev => prev === 0 ? selectedProject.gallery.length - 1 : prev - 1)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-4 border border-white/10 text-white backdrop-blur-md transition-all rounded-sm"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button 
                                onClick={() => setCurrentImgIdx(prev => prev === selectedProject.gallery.length - 1 ? 0 : prev + 1)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-4 border border-white/10 text-white backdrop-blur-md transition-all rounded-sm"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}
                </div>

                <div className="w-full lg:w-1/3 space-y-8">
                    <div>
                        <p className="text-neutral-500 font-mono text-xs uppercase tracking-[0.2em] mb-4">{selectedProject.category}</p>
                        <h3 className="text-5xl font-black uppercase tracking-tighter leading-tight">{selectedProject.title}</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-2 pr-4">
                        {selectedProject.gallery.map((img, idx) => (
                            <img 
                                key={idx} 
                                src={img} 
                                onClick={() => setCurrentImgIdx(idx)}
                                className={`w-full aspect-square object-cover rounded-sm cursor-pointer transition-all border ${currentImgIdx === idx ? 'border-white opacity-100' : 'border-transparent opacity-30 hover:opacity-60'}`}
                            />
                        ))}
                    </div>
                    <p className="text-neutral-500 text-sm font-mono pt-4 border-t border-white/10">Image {currentImgIdx + 1} of {selectedProject.gallery.length}</p>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. PROFESSIONAL FOOTER & CTA */}
      <footer id="contact" className="bg-white text-black pt-32 pb-10 px-6 mt-32 rounded-t-[10px]">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 mb-32">
                <div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Let's Build<br/>Something.</h2>
                    <p className="text-xl text-neutral-600 font-light max-w-md mb-10">Currently accepting new projects. Let's discuss your objectives and how we can scale your digital presence.</p>
                    <motion.a 
                        href={DATA.links.emailAction}
                        whileHover={{ x: 10 }}
                        className="inline-flex items-center gap-4 bg-black text-white text-lg font-bold py-5 px-10 rounded-sm transition-all uppercase tracking-wide"
                    >
                        Initiate Project <ArrowRight size={20} />
                    </motion.a>
                </div>

                <div className="grid grid-cols-2 gap-10 font-mono text-sm uppercase tracking-widest">
                    <div className="space-y-6 flex flex-col">
                        <span className="text-neutral-400 font-sans font-bold text-xs">SOCIALS</span>
                        <a href={DATA.links.linkedin} target="_blank" className="hover:text-neutral-500 transition-colors">LinkedIn</a>
                        <a href={DATA.links.github} target="_blank" className="hover:text-neutral-500 transition-colors">GitHub</a>
                        <a href={DATA.links.instagram} target="_blank" className="hover:text-neutral-500 transition-colors">Instagram</a>
                    </div>
                    <div className="space-y-6 flex flex-col">
                        <span className="text-neutral-400 font-sans font-bold text-xs">CONTACT</span>
                        <a href={DATA.links.emailAction} className="hover:text-neutral-500 transition-colors">Email</a>
                        <a href={DATA.links.whatsapp} className="hover:text-neutral-500 transition-colors">WhatsApp</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-black/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
                <p>© {new Date().getFullYear()} KRISH CHAUDHARY.</p>
                <div className="flex gap-8">
                    <span>All Rights Reserved</span>
                    <span>Gurugram, IN</span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
