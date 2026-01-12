
import React, { useState, useEffect } from 'react';
import { CV_DATA } from './constants';
import { Project } from './types';

const Navbar: React.FC = () => (
  <nav className="flex justify-between items-center py-8 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-100">
    <div className="flex gap-8 text-xs font-semibold tracking-widest text-gray-500 uppercase">
      <a href="#" className="hover:text-black transition-colors">Home</a>
      <a href="#projects" className="hover:text-black transition-colors">Projects</a>
      <a href="#expertise" className="hover:text-black transition-colors">Expertise</a>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-lg mb-1">S</div>
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase leading-none">Sireal</span>
    </div>
    <div className="flex gap-4">
      <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
      </a>
      <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto text-center">
    <h1 className="serif text-5xl md:text-8xl leading-tight mb-4">{CV_DATA.name}</h1>
    <p className="serif text-2xl md:text-4xl italic text-gray-400 mb-12">
      {CV_DATA.title} <br className="hidden md:block" /> {CV_DATA.subtitle}
    </p>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-3 text-left space-y-12">
        <div>
          <h3 className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">Biography</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            {CV_DATA.biography}
          </p>
        </div>
        <div>
          <h3 className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">Contact</h3>
          <p className="text-sm text-gray-600 leading-loose">
            {CV_DATA.contact.location}<br />
            {CV_DATA.contact.email}<br />
            {CV_DATA.contact.website}
          </p>
        </div>
        <div>
          <h3 className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">Services</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            {CV_DATA.services.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </div>

      <div className="md:col-span-6 flex justify-center relative">
        <div className="w-full max-w-sm aspect-[4/5] bg-gray-100 profile-frame relative">
          <img 
            src="https://picsum.photos/seed/sireal_profile/800/1000" 
            alt="Sireal Profile" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="absolute top-1/2 -left-12 -translate-y-1/2 opacity-20 pointer-events-none hidden md:block">
           <svg width="60" height="100" viewBox="0 0 60 100">
              <path d="M0 10 Q 15 0, 30 10 T 60 10" fill="none" stroke="black" strokeWidth="2" />
              <path d="M0 30 Q 15 20, 30 30 T 60 30" fill="none" stroke="black" strokeWidth="2" />
              <path d="M0 50 Q 15 40, 30 50 T 60 50" fill="none" stroke="black" strokeWidth="2" />
           </svg>
        </div>
      </div>

      <div className="md:col-span-3 text-right flex flex-col justify-center space-y-12">
        {CV_DATA.stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">{stat.label}</h3>
            <p className="serif text-5xl md:text-7xl">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Section: React.FC<{ title: string; children: React.ReactNode; id?: string }> = ({ title, children, id }) => (
  <section id={id} className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100">
    <h2 className="serif text-4xl md:text-5xl mb-16 text-center">{title}</h2>
    {children}
  </section>
);

const Expertise: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {CV_DATA.skills.map((skill, i) => (
      <div key={i} className="p-8 bg-white border border-gray-100 hover:shadow-xl hover:shadow-gray-100 transition-all">
        <h3 className="serif text-xl mb-6 pb-2 border-b border-gray-100">{skill.category}</h3>
        <ul className="space-y-3">
          {skill.items.map((item, j) => (
            <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const Experience: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    {CV_DATA.activities.map((activity, i) => (
      <div key={i} className="space-y-4 group">
        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 px-2 py-1 border border-gray-200 rounded group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
          {activity.tag}
        </span>
        <h3 className="serif text-2xl group-hover:translate-x-1 transition-transform">{activity.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
      </div>
    ))}
  </div>
);

const Projects: React.FC<{ onSelect: (project: Project) => void }> = ({ onSelect }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
    {CV_DATA.projects.map((project, i) => (
      <div key={i} className="group cursor-pointer" onClick={() => onSelect(project)}>
        <div className="aspect-square bg-gray-100 mb-6 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
          />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 block mb-2">{project.category}</span>
            <h3 className="serif text-2xl group-hover:underline underline-offset-4">{project.title}</h3>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{project.description}</p>
      </div>
    ))}
  </div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}>
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in slide-in-from-bottom-8 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white rounded-full border border-gray-100 shadow-sm hover:bg-gray-50 transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square md:aspect-auto h-full bg-gray-100 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 block mb-4">{project.category}</span>
            <h2 className="serif text-4xl md:text-5xl mb-6">{project.title}</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="font-semibold text-black">{project.description}</p>
              <div className="h-px bg-gray-100 w-16"></div>
              <p className="text-sm">{project.details}</p>
            </div>
            <div className="mt-12 flex gap-4">
              <button className="px-6 py-3 bg-black text-white text-[10px] font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors">
                View Live Site
              </button>
              <button className="px-6 py-3 border border-gray-200 text-[10px] font-bold tracking-widest uppercase hover:bg-gray-50 transition-colors">
                Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial: React.FC = () => (
  <section className="py-32 px-6 max-w-5xl mx-auto text-center">
    <blockquote className="serif text-3xl md:text-5xl leading-tight text-gray-800">
      "시리얼님과 함께 일하게 된 것은 정말 큰 행운이었습니다. 프로젝트의 시작부터 마무리까지 모든 과정을 전문적으로 이끌어주셨고, 결과물 또한 기대 이상이었습니다. 워크플로우 자동화 분야에서 신뢰할 수 있는 최고의 파트너로 강력 추천합니다."
    </blockquote>
    <div className="mt-12 flex flex-col items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mb-4 grayscale">
        <img src="https://picsum.photos/seed/client/100/100" alt="Client" />
      </div>
      <p className="text-sm font-bold uppercase tracking-widest">김민수 대표</p>
      <p className="text-xs text-gray-400">CEO, (주)이노베이션 테크</p>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-100 text-center">
    <div className="mb-16">
      <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">Describe Your Project</p>
      <h2 className="serif text-6xl md:text-9xl mb-8 flex items-center justify-center group cursor-pointer">
        Call Sireal 
        <span className="ml-4 transform group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300">↗</span>
      </h2>
    </div>
    
    <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-widest uppercase text-gray-400 gap-8">
      <p>© 2025 Sireal. All Rights Reserved.</p>
      <p className="text-black">{CV_DATA.contact.email}</p>
      <div className="flex gap-4">
        <a href="#" className="hover:text-black">Twitter</a>
        <a href="#" className="hover:text-black">Linkedin</a>
        <a href="#" className="hover:text-black">Youtube</a>
        <a href="#" className="hover:text-black">Blog</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Section title="Expertise & Tech Stack" id="expertise">
        <Expertise />
      </Section>
      <Section title="Education & Experience">
        <Experience />
      </Section>
      <Section title="My Latest Projects" id="projects">
        <Projects onSelect={setSelectedProject} />
      </Section>
      <Testimonial />
      <Footer />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default App;
