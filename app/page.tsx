"use client";
import "./globals.css";
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Globe } from 'lucide-react';
import BubbleCursor from "./BubbleCursor";
import Image from "next/image";
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          setVisibleSections(prev => new Set([...prev, section.id]));
        }
      });
    };



    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    // Map 'about' to 'home' since about content is in the home section
    const actualId = targetId === 'about' ? 'home' : targetId;
    const element = document.getElementById(actualId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const skills = {
    languages: [
      { name: 'Python', icon: '/images/python.png' },
      { name: 'JavaScript', icon: '/images/javascript.png' },
      { name: 'Java', icon: '/images/java.png' },
      { name: 'C++', icon: '/images/c-plus-plus.png' },
      { name: 'HTML', icon: '/images/html-5.png' },
      { name: 'CSS', icon: '/images/css3.png' },
      { name: 'MongoDB', icon: '/images/mongodb.png' },
      { name: 'PostgreSQL', icon: '/images/postgres.png' },
      { name: 'MySQL', icon: '/images/mysql.png' }
    ],
    frameworks: [
      { name: 'Django', icon: '/images/django.png' },
      { name: 'Flask', icon: '/images/flask.png' },
      { name: 'FastAPI', icon: '/images/fastapi.svg' },
      { name: 'Next.js', icon: '/images/nextjs.svg' },
      { name: 'React.js', icon: '/images/reactjs.png' },
      { name: 'TailwindCSS', icon: '/images/tailwind.png' }
    ],
    tools: [
      { name: 'Linux', icon: '/images/linux.png' },
      { name: 'Git', icon: '/images/git.png' },
      { name: 'Docker', icon: '/images/docker.png' },
      { name: 'GitHub', icon: '/images/github.png' }
    ]
  };

  const education = [
    {
      institution: 'Bennett University',
      degree: 'BTech CSE',
      period: '2023 - 2027',
      status: 'Ongoing',
      icon: '🎓'
    },
    {
      institution: 'Colonel Central Academy',
      degree: 'XI - XII',
      period: '2020-2022',
      marks: 'XII Boards - 85%',
      icon: '📚'
    },
    {
      institution: 'Lt Atul Kataryia Memorial School',
      degree: 'Nursery - X',
      period: '2008-2020',
      marks: 'X Boards - 96.4 %',
      icon: '🏫'
    }
  ];

  const certifications = [
  {
    title: 'Machine Learning A-Z: AI, Python & R',
    issuer: 'Udemy',
    date: 'Oct 31 2024',
    credential: 'UC-794b9437-ab82-4ca0-980d-e56af1caf902',
    pdf: '/images/ml.pdf'
  },
  {
    title: 'Mastering Data Structures & Algorithms using C and C++',
    issuer: 'Udemy',
    date: 'Oct 31 2024',
    credential: 'UC-a2782255-29f0-406c-8ff5-c4607806ed4f',
    pdf: '/images/dsa.pdf'
  },
  {
    title: 'Python for Computer Vision with OpenCV and Deep Learning',
    issuer: 'Udemy',
    date: 'Nov 10 2025',
    credential: 'UC-ffb5e846-787e-4b04-8624-babda6a3e69a',
    pdf: '/images/IVP.pdf'
  },
  {
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM',
    date: 'Nov 10 2025',
    credential: 'https://coursera.org/verify/ECUOBERXUAZZ',
    pdf: '/images/AoI.pdf'
  }
];


  const projects = [
    {
      title: 'HawkShield',
      description: 'An AI-powered intelligent surveillance system that provides real-time monitoring, threat detection, and seamless camera integration for modern security needs.',
      tech: ['React', 'Node.js', 'Supabase', 'WebRTC', 'YOLO'],
      deployedLink: 'https://hawk-shield-frontend.vercel.app',
      githubLink: 'https://github.com/divinegupta0611/HawkShield',
      image: '/images/hawkshield.png'
    },
    {
      title: 'FHS - Federated Hospital System',
      description: "Solving healthcare AI's biggest paradox: hospitals collaborating to improve disease detection models without ever sharing a single patient record.",
      tech: ['React', 'Node.js', 'TensorFlow.js', 'Supabase', 'XGBoost'],
      deployedLink: 'https://federated-hospital-system-frontend.vercel.app',
      githubLink: 'https://github.com/divinegupta0611/Federated-Hospital-System',
      image: '/images/fhs.png'
    },
    {
      title: 'Smart Augmentation',
      description: 'An all-in-one Python toolkit that supercharges computer vision pipelines with 30+ augmentation techniques, from elastic deformations to FMix, plus built-in analysis and batch processing.',
      tech: ['Python', 'OpenCV', 'NumPy', 'PIL/Pillow'],
      deployedLink: 'https://pypi.org/project/smart-augmentation/',
      githubLink: 'https://github.com/divinegupta0611/Data_Augmentation',
      image: '/images/smart-augmentation.jpg'
    },
    {
      title: 'SyncPad',
      description: 'A feature-rich collaborative whiteboard enabling seamless real-time brainstorming and teamwork with Socket.io-powered instant sync, persistent canvas state, and secure room-based collaboration.',
      tech: ['React', 'Node.js', 'SocketIO', 'Supabase'],
      deployedLink: 'https://sync-pad-frontend-silk.vercel.app',
      githubLink: 'https://github.com/divinegupta0611/SyncPad',
      image: '/images/syncpad.jpg'
    },
    {
      title: 'Spark',
      description: 'A Tinder-style swipe interface for discovering companies - swipe through business profiles with real-time news and details to find your next opportunity or investment.',
      tech: ['React', 'Node.js', 'Mongodb', 'APIs'],
      deployedLink: 'https://spark-frontend-olive.vercel.app/',
      githubLink: 'https://github.com/divinegupta0611/Spark',
      image: '/images/spark.png'
    },
    {
      title: 'fin-sentiment',
      description: 'A Python library that fetches company news and performs sentiment analysis using LSTM to provide individual article sentiments and an overall sentiment score',
      tech: ['Python', 'Numpy', 'APIs', 'LSTM'],
      deployedLink: 'https://pypi.org/project/fin-sentiment',
      githubLink: 'https://pypi.org/project/fin-sentiment',
      image: '/images/finsentiment.png'
    },
    {
      title: 'Assetly',
      description: 'A smart bill management platform where users scan bills, track expiry dates, get timely notifications, and raise complaints from a single unified dashboard',
      tech: ['React', 'Node.js', 'Python', 'OCR', 'Supabase'],
      deployedLink: 'https://github.com/divinegupta0611/Assetly',
      githubLink: 'https://github.com/divinegupta0611/Assetly',
      image: '/images/assetly.jpg'
    },
    {
      title: 'DNS Server',
      description: 'A Node.js-based custom DNS server with a web interface for managing and serving DNS records (A and CNAME types) stored in a MySQL database',
      tech: ['Reactjs', 'Nodejs', 'HTML', 'CSS'],
      deployedLink: 'https://github.com/divinegupta0611/DNS-Server',
      githubLink: 'https://github.com/divinegupta0611/DNS-Server',
      image: ''
    }
  ];

  const services = [
    {
      title: 'Full Stack Development',
      description: 'End-to-end web application development with modern frameworks',
      icon: '💻'
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud architecture design and deployment on AWS',
      icon: '☁️'
    },
    {
      title: 'Technical Writing',
      description: 'Creating comprehensive technical documentation and articles',
      icon: '✍️'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL API design and implementation',
      icon: '🔌'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white scroll-smooth">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      
      {/* Animated gradient orbs */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slower"></div>

      {/* Bubble Cursor */}
      <BubbleCursor />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, 50px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
          animation-fill-mode: both;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 10s linear infinite;
        }
        .animate-blink {
          animation: blink 1s ease-in-out infinite;
        }
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-lg shadow-cyan-500/50 ${
        scrolled ? 'bg-black/50 backdrop-blur-lg border-b border-cyan-500/30' : 'bg-black/30 backdrop-blur-md border-b border-cyan-500/20'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 text-xl font-bold animate-fade-in">
              <span className="text-cyan-400 animate-pulse">&gt;_</span>
              <span> Divine Gupta</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Services', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => smoothScroll(e, item.toLowerCase())}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-200 hover:scale-110 relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20 animate-slide-down">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Services', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => smoothScroll(e, item.toLowerCase())}
                  className="block text-gray-300 hover:text-cyan-400 transition-all duration-200 hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
          <div className="relative animate-float">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                <Image
                  src="/images/pfp.jpeg"
                  alt="Divine Gupta"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>

            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl animate-pulse"></div>
          </div>
        </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
            Divine Gupta
          </h1>
          <p className="text-2xl md:text-3xl font-mono text-cyan-400 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Debugging Life One Epoch at a Time<span className="animate-blink">|</span>
          </p>

          {/* About Me Box */}
          <div className={`max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 mb-8 transition-all duration-700 ${
            visibleSections.has('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h2>
            <div className="text-left text-gray-300 space-y-4">
              <p className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                Hi 👋, I’m Divine Gupta, a passionate AI/ML and full-stack developer currently pursuing BTech in Computer Science and Engineering.
                I enjoy exploring the intersection of technology and creativity, building innovative solutions that solve real-world problems.
                Constantly curious, I dedicate myself to learning new tools, frameworks, and techniques to stay at the forefront of the tech world.
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
                I love turning ideas into working projects, experimenting, and improving through iteration. Driven by curiosity and a
                growth mindset, I aim to create impactful, efficient, and meaningful solutions that make a difference while continuously
                challenging myself to grow as a developer and thinker.
              </p>
              <p className="text-cyan-400 font-semibold animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                I love to build stuff and learn new technologies.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
              Resume
            </button>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
            <a href="https://github.com/divinegupta0611" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/divine-gupta-95a11a286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30">
              <Linkedin size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=guptadivine0611@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 text-cyan-400 transition-all duration-700 ${
            visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Skills</h2>
          <h3 className={`text-2xl md:text-3xl font-semibold text-center mb-16 text-gray-300 transition-all duration-700 delay-100 ${
            visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>My Toolbox</h3>

          <div className="space-y-16">
            <div>
              <h4 className={`text-2xl font-bold text-center mb-8 text-cyan-300 transition-all duration-700 delay-200 ${
                visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>Languages & Databases</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {skills.languages.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/50 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 ${
                      visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${300 + index * 50}ms` }}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3 transform transition-transform duration-300 hover:scale-125 mx-auto" />
                    <p className="text-gray-300 font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className={`text-2xl font-bold text-center mb-8 text-cyan-300 transition-all duration-700 ${
                visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>Frameworks</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.frameworks.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/50 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 ${
                      visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3 transform transition-transform duration-300 hover:scale-125 mx-auto" />
                    <p className="text-gray-300 font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className={`text-2xl font-bold text-center mb-8 text-cyan-300 transition-all duration-700 ${
                visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>Other Tools</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {skills.tools.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/50 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 ${
                      visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3 transform transition-transform duration-300 hover:scale-125 mx-auto" />
                    <p className="text-gray-300 font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400 transition-all duration-700 ${
            visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg border border-cyan-500/30 hover:scale-105 transition-transform duration-300"
                />

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 text-cyan-300">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300 hover:bg-cyan-500/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-200 hover:gap-3"
                  >
                    <Globe size={16} /> Deployed
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-200 hover:gap-3"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Education Section */}
      <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400 transition-all duration-700 ${
            visibleSections.has('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Education</h2>
          
          <div className="space-y-6 mb-16">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 ${
                  visibleSections.has('education') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl transform transition-transform duration-300 hover:scale-125">{edu.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-cyan-300">{edu.institution}</h3>
                      {edu.status && (
                        <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-sm text-blue-300 animate-pulse">
                          {edu.status}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mb-1">{edu.period}</p>
                    <p className="text-gray-300">{edu.degree}</p>
                    {edu.marks && <p className="text-gray-400 text-sm mt-1">{edu.marks}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className={`text-3xl font-bold text-center mb-12 text-cyan-400 transition-all duration-700 ${
            visibleSections.has('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 ${
                  visibleSections.has('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <h4 className="text-lg font-bold mb-2 text-cyan-300">{cert.title}</h4>
                <p className="text-gray-400 mb-2">Credential Id: {cert.credential}</p>
                <p className="text-gray-400 mb-1">Issued on: {cert.date}</p>
                <p className="text-gray-400">Issued By: {cert.issuer}</p>
                <button
                  onClick={() => window.open(cert.pdf, '_blank')}
                  className="mt-4 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 rounded-lg text-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  VIEW CERTIFICATE
                </button>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400 transition-all duration-700 ${
            visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 group ${
                  visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-300">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-cyan-400 transition-all duration-700 ${
            visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Get In Touch</h2>
          <p className={`text-xl text-gray-300 mb-12 transition-all duration-700 delay-200 ${
            visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className={`flex flex-wrap justify-center gap-6 transition-all duration-700 delay-400 ${
            visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a
              href="mailto:guptadivine0611@gmail.com"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-cyan-500/30 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/30 flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-cyan-500/20 text-center text-gray-400">
        <p>&copy; 2025 Divine Gupta. All rights reserved.</p>
      </footer>
    </div>
  );
}