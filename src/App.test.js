import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero section', () => {
  render(<App />);
  const heroElement = screen.getByText(/Full Stack Developer & AI Enthusiast/i);
  expect(heroElement).toBeInTheDocument();
});

test('renders navigation menu', () => {
  render(<App />);
  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);
  const skillsLink = screen.getByText(/Skills/i);
  const projectsLink = screen.getByText(/Projects/i);
  const contactLink = screen.getByText(/Contact/i);
  
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(skillsLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

test('renders featured projects', () => {
  render(<App />);
  const stockEaseProject = screen.getByText(/StockEase/i);
  const codeDebuggerProject = screen.getByText(/AI Code Debugger Assistant/i);
  const chatAppProject = screen.getByText(/Real-Time Chat Application/i);
  const drugMarketingProject = screen.getByText(/Bulk Drug Marketing AI Assistant/i);
  const techeonProject = screen.getByText(/Techeon 2026 Event Website/i);
  const voiceAgentProject = screen.getByText(/AI Voice Customer Support Agent/i);
  const excelAnalysisProject = screen.getByText(/Excel Data Analysis AI/i);

  expect(stockEaseProject).toBeInTheDocument();
  expect(codeDebuggerProject).toBeInTheDocument();
  expect(chatAppProject).toBeInTheDocument();
  expect(drugMarketingProject).toBeInTheDocument();
  expect(techeonProject).toBeInTheDocument();
  expect(voiceAgentProject).toBeInTheDocument();
  expect(excelAnalysisProject).toBeInTheDocument();
});
