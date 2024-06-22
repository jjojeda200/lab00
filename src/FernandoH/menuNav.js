import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';

// Componentes de las páginas
const Home = () => {
  return <div>Home Page</div>;
};

const About = () => {
  return <div>About Page</div>;
};

const Services = () => {
  return <div>Services Page</div>;
};

const Contact = () => {
  return <div>Contact Page</div>;
};

// Componente del menú de navegación
const NavMenu = () => {
  const location = useLocation();
  const menuItems = [
    { path: '/', label: 'Home', showOn: ['/', '/about', '/services', '/contact'] },
    { path: '/about', label: 'About', showOn: ['/about', '/services', '/contact'] },
    { path: '/services', label: 'Services', showOn: ['/services', '/contact'] },
    { path: '/contact', label: 'Contact', showOn: ['/contact'] },
  ];

  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          item.showOn.includes(location.pathname) && (
            <li key={index}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
