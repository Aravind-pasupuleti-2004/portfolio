import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Brain } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll-based section detection
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'HTML', icon: '🌐', level: 90 },
    { name: 'CSS', icon: '🎨', level: 85 },
    { name: 'JavaScript', icon: '⚡', level: 80 },
    { name: 'Java', icon: '☕', level: 75 },
    { name: 'C++', icon: '⚙️', level: 70 },
    { name: 'Python', icon: '🐍', level: 85 }
  ];

  const projects = [
    {
      name: 'StockEase',
      description: 'A comprehensive stock market analysis and trading platform with real-time data visualization and portfolio management features.',
      icon: <Database className="w-8 h-8" />,
      tech: ['Html/Css', 'Java Script', 'MySql', 'Python/Flask'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      name: 'Code-Debugger',
      description: 'An intelligent code debugging tool that helps developers identify and fix issues across multiple programming languages.',
      icon: <Code className="w-8 h-8" />,
      tech: ['Python', 'Flask', 'ReactJs', 'OpenAi Api'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      name: 'House Price Prediction Model',
      description: 'Machine learning model that predicts house prices based on various factors using advanced regression techniques.',
      icon: <Brain className="w-8 h-8" />,
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
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
    // Method 1: Direct download from public folder
    // Place your CV file in the public folder as 'cv.pdf'
    const link = document.createElement('a');
    link.href = '/aravind resume 2025 sde.pdf';
    link.download = 'Aravind_Resume_2025_SDE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Method 2: If you want to open CV in new tab instead
    // window.open('/cv.pdf', '_blank');
    
    // Method 3: If CV is hosted externally
    // window.open('https://drive.google.com/file/d/your-file-id/view', '_blank');
  };

  return (
    <div className="portfolio">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-menu">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`nav-item ${activeSection === item ? 'active' : ''}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="section hero">
          <div className="hero-content">
            <div className="profile-image">
              <div className="profile-inner">
                👨‍💻
              </div>
            </div>
            <h1 className="hero-title">Meher Aravind Pasupuleti</h1>
            <p className="hero-subtitle">Software Developer</p>
            <p className="hero-description">
              Passionate about creating innovative solutions that bridge technology and human needs. 
              Specialized in modern web development and machine learning applications.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button className="btn-secondary" onClick={handleDownloadCV}>
                 Download CV
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="about-container">
            <h2 className="section-title">About Me</h2>
            <div className="glass-card">
              <p className="about-text">
                I'm a passionate developer with a strong foundation in both frontend and backend technologies. 
                My journey began with curiosity about how things work, which led me to explore various programming 
                languages and frameworks. I love solving complex problems and creating elegant solutions that make 
                a real impact.
              </p>
              <p className="about-text">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source 
                projects, or learning about artificial intelligence and machine learning. I believe in continuous 
                learning and staying updated with the ever-evolving tech landscape.
              </p>
              <div className="stats-grid">
                
                <div className="stat-item">
                  <div className="stat-number pink">3</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number blue">6+</div>
                  <div className="stat-label">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="skills-container">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-progress"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="projects-container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project.name} className="project-card">
                  <div className="project-content">
                    <div className="project-icon">
                      {project.icon}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="contact-container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-description">
              I'm always interested in new opportunities and exciting projects. 
              Whether you want to discuss a potential collaboration or just say hello, 
              feel free to reach out!
            </p>
            
            <div className="contact-grid">
              <a href="1706301meheraravind@gmail.com" className="contact-item">
                <Mail className="contact-icon w-8 h-8" />
                <div className="contact-info">
                  <div className="contact-label">Email</div>
                  <div className="contact-value">1706301meheraravind@gmail.com</div>
                </div>
              </a>

              <a href="tel:+91 7396268728" className="contact-item">
                <Phone className="contact-icon w-8 h-8" />
                <div className="contact-info">
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">+91 7396268728</div>
                </div>
              </a>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com/in/yourprofile" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                <Linkedin className="social-icon" />
              </a>
              <a href="https://github.com/yourusername" className="social-link github" target="_blank" rel="noopener noreferrer">
                <Github className="social-icon" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <button className="fab" onClick={() => scrollToSection('contact')}>
        <Mail className="w-8 h-8" />
      </button>
    </div>
  );
};

export default App;