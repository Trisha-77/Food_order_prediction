import { useState } from 'react';
import PredictionForm from '../components/PredictionForm';
import PredictionResult from '../components/PredictionResult';
import SectionTitle from '../components/SectionTitle';
import { requestPrediction } from '../services/predictionApi';

export default function Predict() {
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const handlePrediction = async customerDetails => {
    setError(''); setIsLoading(true);
    try { const { food } = await requestPrediction(customerDetails); setPrediction({ ...customerDetails, food }); }
    catch (requestError) { setError(requestError.response?.data?.detail || 'Unable to reach the prediction service. Start the backend and try again.'); }
    finally { setIsLoading(false); }
  };
  return <main className="container section-space page-grow"><SectionTitle eyebrow="RANDOM FOREST PREDICTION" title="Predict Your Next Food Order" description="Enter customer information to get a prediction from the trained Random Forest model." />{prediction ? <PredictionResult prediction={prediction} onReset={() => setPrediction(null)} /> : <section className="form-shell">{error && <div className="alert alert-danger" role="alert"><i className="bi bi-exclamation-circle me-2" />{error}</div>}<PredictionForm onPrediction={handlePrediction} isLoading={isLoading} /></section>}</main>;
}
