"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, Mail, MessageCircle, ExternalLink, 
  Code2, Palette, Globe, Briefcase, GraduationCap,
  ArrowDown, Github, Linkedin, Instagram, X, ChevronLeft, ChevronRight
} from 'lucide-react';

// --- DATA CONFIGURATION ---
const DATA = {
  name: "Krrish Chaudhary",
  heroTitle: "DESIGNER. DEVELOPER.",
  heroSubtitle: "Based in India — Redefining digital aesthetics through minimalist code and high-fidelity design.",
  about: "I help businesses improve their online presence with clean design and fast, responsive websites.bWhether you need eye-catching social media posts, a landing page, or a simple website that gets the job done, I can deliver high-quality work at a fair price. What you get when you work with me: • Clear communication • Quick turnaround • Clean, modern design • Functional and optimized websitesI don’t overcomplicate things . I focus on what works.",
  links: {
    linkedin: "https://www.linkedin.com/in/krish-chaudhary-107a9a304/",
    instagram: "https://www.instagram.com/krrrrrrrrrrrrrrrrish/",
    github: "https://github.com/chaudharyKrrish7",
    whatsapp: "https://wa.me/919667751906",
    email: "mailto:krrishchaudhary070513@gmail.com"
  },
  skills: [
    { name: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "JavaScript" , "Python"], icon: <Code2 className="text-purple-500" /> },
    { name: "Design", items: ["Photoshop", "Illustrator", "Graphic Design", "UI/UX" , "Premiere Pro" , "Canva"], icon: <Palette className="text-purple-500" /> },
    { name: "Marketing", items: ["SEO", "Digital Marketing", "PR", "Content Strategy"], icon: <Globe className="text-purple-500" /> }
  ],
  experience: [
    {
      role: "Digital Marketing Intern",
      company: "Flickmatch",
      duration: "2025 Jan - Present",
      description: "I manage both brand growth strategy and visual design, creating high-performing social and video content across Instagram, LinkedIn, and campaigns. I handle end-to-end content—from copy and design to performance analysis—ensuring strong, localized, and authority-driven brand presence."
    },
    {
      role: "Graphic Designer ",
      company: "Independent Clientele",
      duration: "2024 - Present",
      description: "Creating high-fidelity visual identities and professional design assets."
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "JECRC University",
      duration: "2024 - 2028",
    }
  ],
  projects: [
    { 
        title: "Sports Designs", 
        category: "Sports Branding", 
        img: "/images/gd/sd/manutd.webp",
        gallery: [ "/images/gd/sd/2.webp" ,"/images/gd/sd/2xp6.webp","/images/gd/sd/6.webp","/images/gd/sd/barpsg.webp","/images/gd/sd/d3.webp","/images/gd/sd/manutd.webp"] 
    },
    { 
        title: "Poster Design", 
        category: "Poster Designs", 
        img: "/images/gd/pd/2.webp",
        gallery: ["/images/gd/pd/2.webp" ,"/images/gd/pd/1.webp","/images/gd/pd/3.webp","/images/gd/pd/4.webp","/images/gd/pd/5.webp"] 
    },
    { 
        title: "Web Development for Startups", 
        category: "Community Startup", 
        img: "/images/wd/um/2.webp",
        gallery: ["/images/wd/um/1.webp","/images/wd/um/2.webp","/images/wd/pf/1.webp","/images/wd/pf/2.webp"]
    }
    ,{ 
        title: "Marketing Management for Startups", 
        category: "Community Startup", 
        img: "/images/vd/ir/1.webp",
        gallery: ["/images/vd/ir/1.webp","/images/vd/ir/2.webp","/images/vd/pd/1.webp",]
    }
  ]
};

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12">
    <p className="text-purple-500 font-mono text-xs uppercase tracking-[0.3em] mb-2">{subtitle}</p>
    <h2 className="text-4xl md:text-5xl font-black tracking-tighter">{children}</h2>
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
    <div className="bg-black text-white min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* 1. STICKY NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.a href="#" className="text-lg font-black tracking-tighter" whileHover={{ scale: 1.05 }}>
            KRRISH CHAUDHARY<span className="text-purple-500">.</span>
          </motion.a>
          
          <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold tracking-[0.2em]">
            <a href="#about" className="hover:text-purple-400 transition-colors uppercase">About</a>
            <a href="#work" className="hover:text-purple-400 transition-colors uppercase">Work</a>
            <a href={DATA.links.email} className="bg-white text-black px-5 py-2 rounded-full hover:invert transition-all uppercase">Hire Me</a>
          </div>

          <div className="md:hidden">
            <a href={DATA.links.email} className="bg-white text-black px-4 py-2 rounded-full text-[9px] font-bold uppercase">Contact</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-purple-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-6">Based in India</p>
          <h1 className="text-[clamp(3rem,12vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-8">
            DESIGNER.<br /><span className="text-neutral-800">DEVELOPER.</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 px-4">{DATA.heroSubtitle}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.a href="#work" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-black px-10 py-4 rounded-full font-bold hover:invert transition-all w-full md:w-auto text-center">VIEW WORK</motion.a>
            <motion.a href={DATA.links.email} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-white border border-white/10 px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all w-full md:w-auto text-center uppercase">Get in Touch</motion.a>
          </div>
        </motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10"><ArrowDown className="text-neutral-700" size={24} /></motion.div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading subtitle="The Person">About Me</SectionHeading>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{DATA.about}</p>
            <motion.a href="./images/resume.pdf" download whileHover={{ x: 5 }} className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:invert transition-all">
              <Download size={20} /> DOWNLOAD RESUME
            </motion.a>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-neutral-900 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src="./images/Krish.webp" alt="Krrish Chaudhary" className="w-full h-full object-cover" />
            </div>
            
            <div className="aspect-square bg-purple-500/10 rounded-3xl flex flex-col items-center justify-center border border-purple-500/20">
                <span className="text-4xl mb-2">🇮🇳</span>
                <span className="text-[10px] font-bold tracking-widest text-purple-500">INDIA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <SectionHeading subtitle="Capabilities">Skills & Toolkit</SectionHeading>
        <div className="grid md:grid-cols-3 gap-6">
          {DATA.skills.map((skill, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.3)' }} className="p-8 bg-neutral-900/50 border border-white/5 rounded-[32px] transition-colors">
              <div className="mb-6">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">{skill.items.map(item => (<span key={item} className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-400">{item}</span>))}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. EXPERIENCE */}
      <section className="py-24 px-6 max-w-6xl mx-auto bg-neutral-950 rounded-[40px] md:rounded-[60px]">
        <div className="flex items-center gap-4 mb-12">
            <Briefcase className="text-purple-500" size={32} />
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter">Experience</h3>
        </div>
        <div className="space-y-12">
          {DATA.experience.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-8 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-2" />
              <p className="text-xs text-purple-400 font-mono mb-1">{exp.duration}</p>
              <h4 className="text-xl font-bold">{exp.role}</h4>
              <p className="text-gray-500 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-400 max-w-2xl">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. EDUCATION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="text-purple-500" size={32} />
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter">Education</h3>
        </div>
        <div className="space-y-12">
          {DATA.education.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-8 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-2" />
              <p className="text-xs text-purple-400 font-mono mb-1">{edu.duration}</p>
              <h4 className="text-xl font-bold">{edu.degree}</h4>
              <p className="text-gray-500">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. PROJECTS WITH MINI GALLERY FEATURE */}
      <section id="work" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <SectionHeading subtitle="Portfolio">Selected Works</SectionHeading>
        <div className="grid md:grid-cols-2 gap-8">
          {DATA.projects.map((project, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              whileHover={{ scale: 0.98 }} 
              className="group cursor-pointer"
              onClick={() => openGallery(project)}
            >
              <div className="rounded-[40px] overflow-hidden bg-neutral-900 aspect-video mb-6">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex justify-between items-center px-4">
                <div><h4 className="text-2xl font-bold">{project.title}</h4><p className="text-gray-500">{project.category}</p></div>
                <div className="bg-white/5 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="text-purple-500" size={20} />
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
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-10 right-10 text-white hover:text-purple-500 transition-colors z-[210]"
            >
                <X size={40} />
            </button>

            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 items-center">
                <div className="relative group w-full md:w-2/3 aspect-video md:aspect-auto">
                    <motion.img 
                        key={currentImgIdx}
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        src={selectedProject.gallery[currentImgIdx]} 
                        className="w-full max-h-[75vh] object-contain rounded-3xl"
                    />
                    
                    {selectedProject.gallery.length > 1 && (
                        <>
                            <button 
                                onClick={() => setCurrentImgIdx(prev => prev === 0 ? selectedProject.gallery.length - 1 : prev - 1)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md transition-all"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button 
                                onClick={() => setCurrentImgIdx(prev => prev === selectedProject.gallery.length - 1 ? 0 : prev + 1)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md transition-all"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}
                </div>

                <div className="w-full md:w-1/3 space-y-6">
                    <div>
                        <p className="text-purple-500 font-mono text-sm uppercase tracking-widest mb-2">{selectedProject.category}</p>
                        <h3 className="text-4xl font-black">{selectedProject.title}</h3>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                        {selectedProject.gallery.map((img, idx) => (
                            <img 
                                key={idx} 
                                src={img} 
                                onClick={() => setCurrentImgIdx(idx)}
                                className={`w-24 aspect-square object-cover rounded-xl cursor-pointer transition-all ${currentImgIdx === idx ? 'ring-2 ring-purple-500 scale-95' : 'opacity-40'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="bg-white text-black py-32 px-6 rounded-t-[60px]">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading subtitle="Contact">Ready to launch?</SectionHeading>
          <div className="mt-12 space-y-8">
            <p className="text-2xl md:text-3xl font-medium text-gray-700">Have a project in mind? Let's talk about it.</p>
            <motion.a 
              href={DATA.links.email}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-black text-white text-2xl font-black py-8 px-16 rounded-[40px] shadow-2xl transition-all uppercase"
            >
              Send me an Email
            </motion.a>
          </div>
          
          <div className="mt-20 flex flex-wrap justify-center items-center gap-12">
            <a href={DATA.links.whatsapp} className="flex items-center gap-3 font-bold hover:text-green-600 transition-colors uppercase">
              <MessageCircle size={28} className="text-green-500" /> WhatsApp
            </a>
            <a href={DATA.links.linkedin} target="_blank" className="flex items-center gap-3 font-bold hover:text-blue-700 transition-colors uppercase">
              <Linkedin size={28} className="text-blue-600" /> LinkedIn
            </a>
            <a href={DATA.links.github} target="_blank" className="flex items-center gap-3 font-bold hover:text-gray-600 transition-colors uppercase">
              <Github size={28} /> GitHub
            </a>
            <a href={DATA.links.instagram} target="_blank" className="flex items-center gap-3 font-bold hover:text-pink-600 transition-colors uppercase">
              <Instagram size={28} className="text-pink-500" /> Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white text-black py-10 px-6 text-center border-t border-gray-100">
         <p className="text-[10px] font-bold tracking-widest text-gray-400">© 2026 {DATA.name.toUpperCase()}</p>
      </footer>
    </div>
  );
}
