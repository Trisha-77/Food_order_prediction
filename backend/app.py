"""API service that exposes the Food Order Prediction Random Forest to the frontend."""

import random

import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler

LOCATIONS = ["Downtown", "Uptown", "Suburbs", "City Center"]
TIMES = ["Morning", "Afternoon", "Evening", "Night"]
PREVIOUS_ORDERS = ["Pizza", "Burger", "Salad", "Biryani", "Pasta", "Sandwich"]
CUISINES = ["Italian", "Indian", "Chinese", "American"]
FREQUENCIES = ["Low", "Medium", "High"]


class PredictionRequest(BaseModel):
    location: str
    timeOfDay: str
    previousOrder: str
    preferredCuisine: str
    orderFrequency: str


def build_model():
    """Recreate the original script's data generation, preprocessing, and training flow."""
    random.seed(42)
    records = []
    for _ in range(5000):
        location = random.choice(LOCATIONS)
        time = random.choice(TIMES)
        previous_order = random.choice(PREVIOUS_ORDERS)
        cuisine = random.choice(CUISINES)
        frequency = random.choice(FREQUENCIES)
        if cuisine == "Italian":
            food = random.choice(["Pizza", "Pasta"])
        elif cuisine == "Indian":
            food = "Biryani"
        elif cuisine == "Chinese":
            food = "Salad"
        else:
            food = random.choice(["Burger", "Sandwich"])
        records.append([location, time, previous_order, cuisine, frequency, food])

    frame = pd.DataFrame(records, columns=["Location", "Time_of_Day", "Previous_Order", "Preferred_Cuisine", "Order_Frequency", "Food_Item"])
    feature_encoders = {}
    for column in frame.columns:
        if column != "Food_Item":
            encoder = LabelEncoder()
            frame[column] = encoder.fit_transform(frame[column])
            feature_encoders[column] = encoder

    food_encoder = LabelEncoder()
    frame["Food_Item"] = food_encoder.fit_transform(frame["Food_Item"])
    features = frame.drop("Food_Item", axis=1)
    target = frame["Food_Item"]
    scaler = StandardScaler()
    scaled_features = scaler.fit_transform(features)
    train_features, _, train_target, _ = train_test_split(scaled_features, target, test_size=0.2, random_state=42)
    model = RandomForestClassifier(n_estimators=150, max_depth=None, random_state=42)
    model.fit(train_features, train_target)
    return model, feature_encoders, food_encoder, scaler


MODEL, FEATURE_ENCODERS, FOOD_ENCODER, SCALER = build_model()
app = FastAPI(title="FoodPredict API")
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"], allow_methods=["GET", "POST"], allow_headers=["*"])


@app.get("/")
def health_check():
    return {"message": "FoodPredict API is running"}


@app.post("/predict")
def predict_order(request: PredictionRequest):
    values = {"Location": request.location, "Time_of_Day": request.timeOfDay, "Previous_Order": request.previousOrder, "Preferred_Cuisine": request.preferredCuisine, "Order_Frequency": request.orderFrequency}
    valid_options = {"Location": LOCATIONS, "Time_of_Day": TIMES, "Previous_Order": PREVIOUS_ORDERS, "Preferred_Cuisine": CUISINES, "Order_Frequency": FREQUENCIES}
    for feature, value in values.items():
        if value not in valid_options[feature]:
            raise HTTPException(status_code=400, detail=f"Invalid {feature} value.")

    sample = pd.DataFrame([values])
    for column, encoder in FEATURE_ENCODERS.items():
        sample[column] = encoder.transform(sample[column])
    prediction = MODEL.predict(SCALER.transform(sample))
    return {"food": FOOD_ENCODER.inverse_transform(prediction)[0]}
