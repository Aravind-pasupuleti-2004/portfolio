import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, Phone, ExternalLink, Code, Database,
  MessageSquare, Bot, Calendar, Mic, BarChart3, Radio
} from 'lucide-react';
import './App.css';

const ROLES = [
  'MCA STUDENT',
  'AGENTIC AI BUILDER',
  'FULL-STACK ENGINEER'
];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [clock, setClock] = useState('');
  const [typedText, setTypedText] = useState('');
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const deletingRef = useRef(false);

  // Live clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(now.toLocaleTimeString('en-GB', { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Typewriter role cycler
  useEffect(() => {
    const type = () => {
      const current = ROLES[roleIndexRef.current];
      if (!deletingRef.current) {
        charIndexRef.current += 1;
        setTypedText(current.slice(0, charIndexRef.current));
        if (charIndexRef.current === current.length) {
          deletingRef.current = true;
          return 1400;
        }
      } else {
        charIndexRef.current -= 1;
        setTypedText(current.slice(0, charIndexRef.current));
        if (charIndexRef.current === 0) {
          deletingRef.current = false;
          roleIndexRef.current = (roleIndexRef.current + 1) % ROLES.length;
          return 300;
        }
      }
      return 55;
    };

    let timeoutId;
    const loop = () => {
      const delay = type();
      timeoutId = setTimeout(loop, delay);
    };
    loop();
    return () => clearTimeout(timeoutId);
  }, []);

  // Section reveal + active nav tracking
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Python', icon: '🐍', level: 90 },
    { name: 'React', icon: '⚛️', level: 85 },
    { name: 'JavaScript', icon: '⚡', level: 85 },
    { name: 'Flask', icon: '🧪', level: 85 },
    { name: 'Node.js', icon: '🟢', level: 75 },
    { name: 'MySQL', icon: '🗄️', level: 80 },
    { name: 'Agentic AI / LLM Integration', icon: '🤖', level: 85 },
    { name: 'HTML / CSS', icon: '🌐', level: 90 }
  ];

  const projects = [
    {
      file: 'FILE_01',
      name: 'StockEase - Inventory Management System',
      description: 'Web application for managing inventory and stock records, with full CRUD operations, real-time tracking, and search/filter over a MySQL database.',
      icon: <Database className="w-8 h-8" />,
      tech: ['Flask', 'Python', 'MySQL', 'HTML/CSS', 'JavaScript'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      file: 'FILE_02',
      name: 'AI Code Debugger Assistant',
      description: 'AI-powered coding assistant that debugs and explains code locally, using code analysis and bug detection backed by a local LLM.',
      icon: <Code className="w-8 h-8" />,
      tech: ['React', 'Flask', 'Python', 'Ollama (Llama 2)', 'REST API'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      file: 'FILE_03',
      name: 'Real-Time Chat Application',
      description: 'Real-time messaging platform for instant communication, with live messaging, multiple users, online status, and persistent chat history.',
      icon: <MessageSquare className="w-8 h-8" />,
      tech: ['Node.js', 'Express.js', 'Socket.IO', 'MongoDB'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      file: 'FILE_04',
      name: 'Bulk Drug Marketing AI Assistant',
      description: 'AI assistant that recommends pharmaceutical buyers and sellers from trade data, using natural language queries for lead generation.',
      icon: <Bot className="w-8 h-8" />,
      tech: ['Flask', 'Python', 'LLM API / Ollama', 'Excel Database'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      file: 'FILE_05',
      name: 'Techeon 2026 Event Website',
      description: "Official event website for the MCA department's technical fest, with event information, registration pages, and a responsive UI.",
      icon: <Calendar className="w-8 h-8" />,
      tech: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      file: 'FILE_06',
      name: 'AI Voice Customer Support Agent',
      description: 'AI phone agent that answers customer calls and resolves common queries via voice, using speech recognition and text-to-speech.',
      icon: <Mic className="w-8 h-8" />,
      tech: ['Python', 'Twilio', 'Whisper', 'LLM API', 'SQLite'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      file: 'FILE_07',
      name: 'Excel Data Analysis AI',
      description: 'AI tool that performs complete data analysis from Excel files, covering cleaning, EDA, visualization, and automated reports.',
      icon: <BarChart3 className="w-8 h-8" />,
      tech: ['Python', 'Pandas', 'Streamlit', 'Plotly', 'LLM'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/aravind resume 2025 sde.pdf';
    link.download = 'Aravind_Resume_2025_SDE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="portfolio">
      <div className="grid-bg" aria-hidden="true" />
      <div className="scanline-overlay" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <div className="hud-frame" aria-hidden="true">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">M.ARAVIND<span className="brand-dot">_</span></div>
          <ul className="nav-menu">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`nav-item ${activeSection === item ? 'active' : ''}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <div className="nav-status">
            <span className="status-dot" />
            <span className="status-text">ONLINE</span>
            <span className="clock">{clock}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="section hero">
          <div className="hero-inner">
            <div>
              <p className="eyebrow">SYSTEM_BOOT / STATUS: READY</p>
              <h1 className="hero-title">MEHER ARAVIND<br />PASUPULETI</h1>
              <p className="hero-role">
                {typedText}
                <span className="cursor-blink">▍</span>
              </p>
              <p className="hero-description">
                MCA student building software and AI-driven systems — from inventory
                platforms and real-time chat apps to AI copilots and agentic AI tools.
                My final-year project applied reinforcement learning to UAV flight
                stability; these days I'm most interested in building agentic AI.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                  View Mission Log
                </button>
                <button className="btn-secondary" onClick={handleDownloadCV}>
                  Download Dossier
                </button>
              </div>
              <p className="hero-coords">17.3850° N / 78.4867° E — HYDERABAD, IN</p>
            </div>

            <div className="radar-wrap" aria-hidden="true">
              <div className="radar-ring r1" />
              <div className="radar-ring r2" />
              <div className="radar-ring r3" />
              <div className="radar-ring r4" />
              <div className="radar-cross" />
              <div className="radar-sweep" />
              <div className="radar-blip" style={{ top: '28%', left: '62%' }} />
              <div className="radar-blip" style={{ top: '58%', left: '38%' }} />
              <div className="radar-blip" style={{ top: '70%', left: '68%' }} />
              <span className="radar-label">TRACKING 7 ACTIVE PROJECTS</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="panel-header">
            <span className="panel-tag">Pilot_Log</span>
            <span className="panel-id">Entry_01</span>
          </div>
          <h2 className="section-title">About</h2>
          <div className="glass-card">
            <p className="about-text">
              I'm an MCA student with a strong foundation in both frontend and backend
              technologies. My journey began with curiosity about how things work, which led me
              to explore various programming languages and frameworks. I love solving complex
              problems and building solutions that make a real impact.
            </p>
            <p className="about-text">
              For my final-year project, I applied reinforcement learning to UAV flight
              stability. These days I'm most interested in building agentic AI — systems
              that can plan, use tools, and act on their own — and I'm always experimenting
              with the latest developments in applied AI.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">7</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number blue">15+</div>
                <div className="stat-label">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="panel-header">
            <span className="panel-tag">Diagnostics</span>
            <span className="panel-id">Sys_Check</span>
          </div>
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-row">
                <span className="skill-icon">{skill.icon}</span>
                <div className="skill-info">
                  <div className="skill-top">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-value">{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ '--level': `${skill.level}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="panel-header">
            <span className="panel-tag">Archive</span>
            <span className="panel-id">7 Files</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.name} className="project-card">
                <div className="project-top">
                  <div className="project-icon">{project.icon}</div>
                  <div className="project-meta">
                    <span className="project-file">{project.file}</span>
                    <span className="project-status">Operational</span>
                  </div>
                </div>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.demoUrl} className="btn-small primary">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a href={project.codeUrl} className="btn-small secondary">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="panel-header">
            <span className="panel-tag">Uplink</span>
            <span className="panel-id">Standby</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always interested in new opportunities and exciting projects. Whether you want to
            discuss a potential collaboration or just say hello, feel free to reach out.
          </p>

          <div className="contact-grid">
            <a href="mailto:1706301meheraravind@gmail.com" className="contact-item">
              <Mail className="contact-icon w-8 h-8" />
              <div className="contact-info">
                <div className="contact-label">Email</div>
                <div className="contact-value">1706301meheraravind@gmail.com</div>
              </div>
            </a>

            <a href="tel:+917396268728" className="contact-item">
              <Phone className="contact-icon w-8 h-8" />
              <div className="contact-info">
                <div className="contact-label">Phone</div>
                <div className="contact-value">+91 7396268728</div>
              </div>
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/meher-aravind-pasupuleti-77aa78288/"
              className="social-link linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/Aravind-pasupuleti-2004"
              className="social-link github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="social-icon" />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        SIGNAL_END // M.ARAVIND © {new Date().getFullYear()}
      </footer>

      {/* Floating Action Button */}
      <button className="fab" onClick={() => scrollToSection('contact')} aria-label="Contact">
        <Radio className="w-6 h-6" />
      </button>
    </div>
  );
};

export default App;
