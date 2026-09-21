import { useState } from 'react';
import { formOptions } from '../data/predictionData';

const initialForm = { location: '', timeOfDay: '', previousOrder: '', preferredCuisine: '', orderFrequency: '' };
const fields = [
  ['location', 'Location', formOptions.location], ['timeOfDay', 'Time of Day', formOptions.timeOfDay],
  ['previousOrder', 'Previous Order', formOptions.previousOrder], ['preferredCuisine', 'Preferred Cuisine', formOptions.preferredCuisine],
  ['orderFrequency', 'Order Frequency', formOptions.orderFrequency],
];

export default function PredictionForm({ onPrediction, isLoading }) {
  const [form, setForm] = useState(initialForm); const [submitted, setSubmitted] = useState(false);
  const updateField = event => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = event => { event.preventDefault(); setSubmitted(true); if (Object.values(form).every(Boolean)) onPrediction(form); };
  return <form noValidate onSubmit={submit} className="prediction-form">
    <div className="row g-4">{fields.map(([name, label, options]) => <div className="col-md-6" key={name}><label htmlFor={name} className="form-label fw-semibold">{label}</label><select id={name} name={name} className={`form-select ${submitted && !form[name] ? 'is-invalid' : ''}`} value={form[name]} onChange={updateField} required><option value="">Select {label}</option>{options.map(option => <option key={option}>{option}</option>)}</select><div className="invalid-feedback">Please select a {label.toLowerCase()}.</div></div>)}</div>
    <div className="d-flex flex-wrap gap-3 mt-4 pt-2"><button className="btn btn-primary px-4" type="submit" disabled={isLoading}>{isLoading ? <><span className="spinner-border spinner-border-sm me-2" />Predicting...</> : <><i className="bi bi-magic me-2" />Predict Food</>}</button><button className="btn btn-light border px-4" type="button" disabled={isLoading} onClick={() => { setForm(initialForm); setSubmitted(false); }}>Reset form</button></div>
  </form>;
}
