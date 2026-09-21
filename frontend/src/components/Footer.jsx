import { Link } from 'react-router-dom';

export default function Footer() {
  return <footer className="footer mt-auto"><div className="container py-4 py-md-5">
    <div className="row align-items-center g-3">
      <div className="col-md-5"><div className="fw-bold fs-5">🍴 FoodPredict</div><p className="mb-0 text-white-50">AI-Powered Food Order Prediction</p></div>
      <div className="col-md-4 d-flex flex-wrap gap-3">{['Home', 'Predict', 'Analytics', 'About'].map(name => <Link key={name} to={name === 'Home' ? '/' : `/${name.toLowerCase()}`}>{name}</Link>)}</div>
      <div className="col-md-3 text-md-end text-white-50 small">Built with React + Bootstrap</div>
    </div>
  </div></footer>;
}
