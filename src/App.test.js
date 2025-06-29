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
  const codeDebuggerProject = screen.getByText(/Code-Debugger/i);
  const housePriceProject = screen.getByText(/House Price Prediction Model/i);
  
  expect(stockEaseProject).toBeInTheDocument();
  expect(codeDebuggerProject).toBeInTheDocument();
  expect(housePriceProject).toBeInTheDocument();
});