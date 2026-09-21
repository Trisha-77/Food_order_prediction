import { Link } from 'react-router-dom';

export default function Hero() {
  return <section className="hero-section"><div className="container position-relative"><div className="row align-items-center g-5">
    <div className="col-lg-7"><span className="eyebrow"><i className="bi bi-stars" /> FRONTEND PROTOTYPE</span>
      <h1>AI-Powered Food<br className="d-none d-lg-block" /> Order Prediction</h1>
      <p className="hero-copy">Predict a customer's next food choice using machine learning based on their preferences, order history, location, and ordering behavior.</p>
      <div className="d-flex flex-wrap gap-3"><Link className="btn btn-primary btn-lg" to="/predict"><i className="bi bi-magic me-2" />Predict Food</Link><Link className="btn btn-outline-primary btn-lg" to="/analytics">Explore Analytics <i className="bi bi-arrow-right ms-2" /></Link></div>
    </div>
    <div className="col-lg-5"><div className="hero-visual shadow-lg"><div className="hero-card-label"><span className="pulse-dot" />Prediction preview</div><div className="food-orb">🍛</div><h3>Biryani</h3><p className="text-muted mb-0">Your likely next food order</p><div className="mini-bars"><span /><span /><span /><span /></div></div></div>
  </div></div></section>;
}
