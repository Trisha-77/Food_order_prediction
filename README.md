# Food_order_prediction

## Frontend

The `frontend/` folder contains the FoodPredict dashboard built with React, Vite, Bootstrap, React Router, and Recharts. Its prediction form calls the separate FastAPI service in `backend/`, which recreates the project's synthetic dataset, preprocessing, and Random Forest training flow without changing the original ML script. The analytics charts remain static frontend representations of the synthetic data.

## Run the full application

Open two terminals after installing Python 3.10+:

```powershell
cd backend
python -m pip install -r requirements.txt
python -m uvicorn app:app --reload
```

```powershell
cd frontend
npm install
npm run dev
```
