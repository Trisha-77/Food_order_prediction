import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/predict', label: 'Predict' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top app-navbar">
      <div className="container">
        <NavLink className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <span className="brand-mark">🍴</span><span>FoodPredict</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {links.map(({ to, label, end }) => <li className="nav-item" key={to}>
              <NavLink end={end} className="nav-link" to={to}>{label}</NavLink>
            </li>)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
