import { useState, useEffect } from 'react';
import { Menu, X, Check } from 'lucide-react';
import './App.css';

const DISCORD_URL = 'https://discord.gg/KGp3VrGJ62';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-container">
          <div className="logo-text">Desact <span className="logo-accent">Cloud</span></div>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#pricing" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          <a href="#status" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Status</a>
          <a href={DISCORD_URL} className="nav-link">Login</a>
          <a href={DISCORD_URL} className="btn btn-primary">Sign Up</a>
        </div>

        <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <header className="hero">
    <div className="container">
      <div className="hero-content">
        <h1 className="hero-title">Premium Hosting Solutions</h1>
        <p className="hero-subtitle">
          High-performance servers with enterprise-grade infrastructure. Deploy in seconds, scale effortlessly.
        </p>
        <div className="hero-buttons">
          <a href="#pricing" className="btn btn-primary btn-large">Get Started</a>
          <a href="#services" className="btn btn-secondary btn-large">View Features</a>
        </div>
      </div>
    </div>
  </header>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Minecraft Hosting",
      desc: "High-performance Minecraft servers with DDoS protection and 24/7 support",
      icon: "🎮",
      color: "#22c55e",
      link: "#pricing"
    },
    {
      title: "Discord Bot Hosting",
      desc: "Reliable hosting for your Discord bots with 99.9% uptime guarantee",
      icon: "💬",
      color: "#3b82f6",
      link: "#pricing"
    },
    {
      title: "VPS Hosting",
      desc: "Powerful virtual private servers with full root access and flexibility",
      icon: "📊",
      color: "#8b5cf6",
      link: "#pricing"
    },
    {
      title: "Web Hosting",
      desc: "Fast and secure web hosting with SSL certificates and daily backups",
      icon: "🌐",
      color: "#f97316",
      link: "#pricing"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Hosting Services</h2>
          <p className="section-subtitle">
            Choose from our premium hosting solutions designed for performance, reliability, and scalability.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: service.color }}>
                <span>{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <a href={service.link} className="service-link" style={{ color: service.color }}>
                View Plans
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const mcPlans = [
    {
      name: "2 GB RAM",
      price: "₹40",
      description: "Small SMP / Testing",
      features: ["2 GB RAM", "Fast CPU", "99.9% Uptime", "Custom Panel", "DDoS Protection"],
    },
    {
      name: "4 GB RAM",
      price: "₹80",
      description: "Friends & Survival Servers",
      features: ["4 GB RAM", "High Performance CPU", "DDoS Protection", "Custom Panel", "24/7 Support"],
    },
    {
      name: "6 GB RAM",
      price: "₹100",
      description: "Plugins / Modpacks",
      features: ["6 GB RAM", "Ultra NVMe storage", "Full Root Access", "Custom Panel", "Priority Support"],
    },
    {
      name: "8 GB RAM",
      price: "₹140",
      description: "Large SMP / Mini-Games",
      features: ["8 GB RAM", "Dedicated Resources", "Advanced DDoS Prot.", "Custom Panel", "Instant Setup"],
    },
    {
      name: "16 GB RAM",
      price: "₹200",
      description: "Networks / Heavy Modpacks",
      features: ["16 GB RAM", "Extreme Performance", "Priority Support", "Custom Control Panel", "Auto Backups"],
      featured: true
    },
  ];

  const vpsPlans = [
    {
      name: "16 GB VPS",
      price: "₹400",
      description: "Ideal for bots & light hosting",
      features: ["16 GB RAM", "High-performance CPU", "NVMe SSD Storage", "Custom Control Panel", "Full Root Access"],
    },
    {
      name: "32 GB VPS",
      price: "₹1,000",
      description: "Ideal for game panels & servers",
      features: ["32 GB RAM", "Dedicated Resources", "DDoS Protection", "Custom Control Panel", "24/7 Monitoring"],
    },
    {
      name: "64 GB VPS",
      price: "₹1,700",
      description: "Ideal for heavy workloads & networks",
      features: ["64 GB RAM", "Ultra-fast NVMe SSD", "24/7 Monitoring", "Custom Control Panel", "Priority Support"],
    }
  ];

  const PlanGrid = ({ title, plans }) => (
    <div className="plan-section">
      <h3 className="plan-section-title">{title}</h3>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
            <div className="pricing-header">
              <div className="plan-icon">💾</div>
              <h4 className="plan-name">{plan.name}</h4>
              <div className="plan-price">
                <span className="price-amount">{plan.price}</span>
                <span className="price-period">/ month</span>
              </div>
              <p className="plan-description">{plan.description}</p>
            </div>
            <div className="plan-features">
              {plan.features.map((feature, fIndex) => (
                <div key={fIndex} className="plan-feature">
                  <Check size={16} className="feature-check" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <a href={DISCORD_URL} className="btn btn-plan">
              Order Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Minecraft Hosting Plans</h2>
        </div>
        <PlanGrid title="" plans={mcPlans} />

        <div className="section-divider"></div>

        <div className="section-header" style={{ marginTop: '80px' }}>
          <h2 className="section-title">VPS Hosting Plans</h2>
        </div>
        <PlanGrid title="" plans={vpsPlans} />

        <div className="included-features">
          <h3 className="included-title">⚙️ Included with every plan</h3>
          <div className="included-grid">
            <div className="included-item">NVMe SSD Storage</div>
            <div className="included-item">High-Performance CPU</div>
            <div className="included-item">DDoS Protection</div>
            <div className="included-item">Full Panel & FTP Access</div>
            <div className="included-item">24/7 Ticket Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServerStatus = () => {
  const locations = [
    { name: "India", city: "Mumbai, Delhi", uptime: "99.9%", latency: "~15ms", network: "1Gbps", status: "Online", flag: "🇮🇳" },
    { name: "Germany", city: "Frankfurt, Berlin", uptime: "99.9%", latency: "~8ms", network: "10Gbps", status: "Online", flag: "🇩🇪" },
    { name: "Singapore", city: "Central, East", uptime: "99.9%", latency: "~12ms", network: "5Gbps", status: "Online", flag: "🇸🇬" },
    { name: "USA", city: "New York, California", uptime: "99.9%", latency: "~5ms", network: "25Gbps", status: "Online", flag: "🇺🇸" },
    { name: "Bangladesh", city: "Dhaka, Chittagong", uptime: "99.8%", latency: "~18ms", network: "2Gbps", status: "Online", flag: "🇧🇩" },
    { name: "Europe", city: "London, Amsterdam", uptime: "99.9%", latency: "~6ms", network: "20Gbps", status: "Online", flag: "🇪🇺" }
  ];

  return (
    <section id="status" className="status-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Global Server Status</h2>
          <p className="section-subtitle">Real-time uptime monitoring for all our nodes.</p>
        </div>
        <div className="status-grid">
          {locations.map((loc, index) => (
            <div key={index} className="status-card">
              <div className="status-header">
                <div className="status-location">
                  <span className="status-flag">{loc.flag}</span>
                  <div className="status-info">
                    <h4 className="status-name">{loc.name}</h4>
                    <p className="status-city">{loc.city}</p>
                  </div>
                </div>
                <div className="status-badge online">
                  <span className="status-dot"></span>
                  <span>{loc.status}</span>
                </div>
              </div>
              <div className="status-metrics">
                <div className="metric">
                  <span className="metric-label">Latency</span>
                  <span className="metric-value">{loc.latency}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Uptime</span>
                  <span className="metric-value">{loc.uptime}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Network</span>
                  <span className="metric-value">{loc.network}</span>
                </div>
              </div>
              <div className="status-footer">
                <span className="operational-dot"></span>
                <span className="operational-text">All services operational</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-text">Desact <span className="logo-accent">Cloud</span></div>
          <p className="footer-tagline">© 2025 Desact. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href={DISCORD_URL} className="footer-link">Support</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ServicesSection />
      <PricingSection />
      <ServerStatus />
      <Footer />
    </div>
  );
}

export default App;
