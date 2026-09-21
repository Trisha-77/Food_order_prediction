const stats = [
  ['bi-database', '5,000+', 'Records'], ['bi-grid-3x3-gap', '6', 'Food Categories'],
  ['bi-globe2', '4', 'Cuisine Types'], ['bi-diagram-3', 'RF', 'Random Forest Model'],
];
export default function StatsCards() {
  return <div className="row g-3 g-lg-4">{stats.map(([icon, value, label]) => <div className="col-6 col-lg-3" key={label}><article className="stat-card h-100"><i className={`bi ${icon}`} /><div><strong>{value}</strong><span>{label}</span></div></article></div>)}</div>;
}
