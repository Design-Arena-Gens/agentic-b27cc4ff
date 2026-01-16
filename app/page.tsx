import Link from "next/link";

const features = [
  {
    title: "Design at the Speed of Thought",
    description:
      "Spin up polished product concepts in seconds with our AI-assisted workflow that keeps you in control."
  },
  {
    title: "Collaborate Effortlessly",
    description:
      "Invite teammates, capture feedback, and move from idea to launch without leaving the platform."
  },
  {
    title: "Launch Anywhere",
    description:
      "Export responsive assets and deploy to your preferred stack with one-click integrations."
  }
];

const testimonials = [
  {
    quote:
      "Aurora transformed how our team prototypes. We went from weeks of iteration to days without sacrificing quality.",
    author: "Taylor Reed, Product Lead at Lumen"
  },
  {
    quote: "Everything from the interface to export tooling feels crafted with care. It's become our go-to launchpad.",
    author: "Morgan Hall, Founder of Orbit Studio"
  }
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <span className="pill">Launch smarter</span>
          <h1>Craft luminous product experiences with Aurora</h1>
          <p>
            Aurora is the creative companion for teams that want to explore ideas, gather feedback, and ship beautiful
            experiences faster than ever.
          </p>
          <div className="cta-group">
            <Link href="#get-started" className="button primary">
              Get Started
            </Link>
            <Link href="#learn-more" className="button ghost">
              Learn More
            </Link>
          </div>
          <ul className="stats">
            <li>
              <span>120K+</span>
              Makers designing with Aurora
            </li>
            <li>
              <span>98%</span>
              Customer satisfaction
            </li>
            <li>
              <span>24/7</span>
              Concierge support
            </li>
          </ul>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-large" />
          <div className="orb orb-medium" />
          <div className="orb orb-small" />
        </div>
      </section>

      <section id="learn-more" className="panel">
        <div className="panel-header">
          <p className="eyebrow">Built for modern teams</p>
          <h2>Everything you need to turn inspiration into launch-ready products.</h2>
        </div>
        <div className="feature-grid">
          {features.map(({ title, description }) => (
            <article key={title} className="feature-card">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel panel-accent">
        <div className="panel-content">
          <h2>Loved by teams who value craft and velocity</h2>
          <div className="testimonial">
            {testimonials.map(({ quote, author }) => (
              <blockquote key={author}>
                <p>{quote}</p>
                <cite>{author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="get-started" className="cta-panel">
        <h2>Bring Aurora to your workflow</h2>
        <p>
          Start with a free 14-day trial. No credit card required. Upgrade anytime to unlock unlimited projects and
          advanced collaboration.
        </p>
        <div className="cta-group">
          <Link href="#" className="button primary">
            Start Free Trial
          </Link>
          <Link href="#" className="button ghost">
            View Pricing
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Aurora Labs. Built with care for creative teams.</p>
      </footer>
    </main>
  );
}
