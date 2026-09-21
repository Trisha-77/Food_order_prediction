import { foodEmojis } from '../data/predictionData';
const labels = [['location', 'Location'], ['timeOfDay', 'Time'], ['previousOrder', 'Previous Order'], ['preferredCuisine', 'Preferred Cuisine'], ['orderFrequency', 'Order Frequency']];
export default function PredictionResult({ prediction, onReset }) {
  if (!prediction) return null;
  return <section className="result-card"><div className="result-banner text-center"><span className="eyebrow">PREDICTION RESULT</span><div className="result-emoji">{foodEmojis[prediction.food]}</div><h2>{prediction.food}</h2><p>Predicted Next Food Order</p></div><div className="p-4 p-md-5"><h3 className="h5 mb-3">Customer details used</h3><dl className="detail-list mb-4">{labels.map(([key, label]) => <div key={key}><dt>{label}</dt><dd>{prediction[key]}</dd></div>)}</dl><div className="alert alert-success border small mb-4"><i className="bi bi-check-circle me-2" />This result was returned by the Random Forest prediction API.</div><button className="btn btn-outline-primary" onClick={onReset}><i className="bi bi-arrow-counterclockwise me-2" />Predict Again</button></div></section>;
}
