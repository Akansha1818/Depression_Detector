from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np
import matplotlib
matplotlib.use("Agg") 
import matplotlib.pyplot as plt
import io
import base64

app = Flask(__name__)
CORS(app)

model2 = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")
label_encoders = joblib.load("label_encoders.pkl")
training_columns = joblib.load("columns.pkl")

df_raw = pd.read_csv("student_depression_dataset.csv")

def predict_depression(input_dict):
    print("✅ Received input:", input_dict)

    COLUMN_RENAME_MAP = {
        "SuicidalThoughts": "Have you ever had suicidal thoughts ?",
        "FamilyHistory": "Family History of Mental Illness",
        "WorkHours": "Work/Study Hours",
        "FinancialStress": "Financial Stress",
        "SleepDuration": "Sleep Duration",
        "DietaryHabits": "Dietary Habits",
        "StudySatisfaction": "Study Satisfaction",
        "JobSatisfaction": "Job Satisfaction",
        "AcademicPressure": "Academic Pressure",
        "WorkPressure": "Work Pressure",
    }

    input_dict = {COLUMN_RENAME_MAP.get(k, k): v for k, v in input_dict.items()}

    df = pd.DataFrame([input_dict])

    for col, le in label_encoders.items():
        if col in df.columns:
            try:
                df[col] = le.transform(df[col])
            except ValueError:
                print(f"⚠️ ValueError in column {col}, using most common class instead.")
                most_common_label = le.classes_[0]
                df[col] = le.transform([most_common_label] * len(df))

    for col in training_columns:
        if col not in df.columns:
            df[col] = 0

    df = df[training_columns]

    print("🔍 Processed input DataFrame:")
    print(df.head())

    print("🧾 Final columns used:")
    print(df.columns.tolist())

    scaled = scaler.transform(df)
    pred = model2.predict(scaled)
    prob = model2.predict_proba(scaled)[0][1]
    if pred[0] == 1:
        result = "Depressed"
    else:
        prob = 1 - prob
        result = "Not Depressed"
    print("🔮 Prediction:", result, "| Confidence:", prob)

    return f"{result} ({prob * 100:.2f}%)"


def generate_plot(plot_type):
    plt.figure(figsize=(6, 4))
    
    if plot_type == "depression_distribution":
        df_raw["Depression"].value_counts().plot(kind="bar")
        plt.title("Depression Distribution")
        plt.xlabel("Depression")
        plt.ylabel("Count")
        insight = (
            "This chart shows the proportion of students classified as depressed or not. "
            "Globally, student depression is a growing concern, with studies estimating that around 20-30% "
            "of university students experience significant depressive symptoms."
        )

    elif plot_type == "gender_vs_depression":
        data = df_raw.groupby(["Gender", "Depression"]).size().unstack().fillna(0)
        data.plot(kind="bar", stacked=True)
        plt.title("Gender vs Depression")
        plt.xlabel("Gender")
        plt.ylabel("Count")
        insight = (
            "Studies have found that female students report higher levels of depression compared to males. "
            "This plot helps visualize the gender-based differences in depression prevalence among students."
        )

    elif plot_type == "age_distribution_by_depression":
        for label, group in df_raw.groupby("Depression"):
            group["Age"].plot(kind="kde", label=str(label))
        plt.title("Age Distribution by Depression")
        plt.xlabel("Age")
        plt.legend(title="Depression")
        insight = (
            "Depression is often reported more in young adults. "
            "This plot shows how depression varies across different age groups in the student population."
        )

    elif plot_type == "cgpa_distribution_by_depression":
        for label, group in df_raw.groupby("Depression"):
            group["CGPA"].plot(kind="kde", label=str(label))
        plt.title("CGPA Distribution by Depression")
        plt.xlabel("CGPA")
        plt.legend(title="Depression")
        insight = (
            "Academic performance can be affected by mental health. "
            "Research shows that depression may lead to lower GPAs, and students struggling academically may also feel more depressed."
        )

    elif plot_type == "academic_pressure_boxplot":
        depressed = df_raw[df_raw["Depression"] == 1]["Academic Pressure"]
        not_depressed = df_raw[df_raw["Depression"] == 0]["Academic Pressure"]
        plt.boxplot([not_depressed, depressed], tick_labels=["Not Depressed", "Depressed"])
        plt.title("Academic Pressure by Depression Status")
        plt.ylabel("Academic Pressure")
        insight = (
            "High academic pressure is a known risk factor for student depression. "
            "This plot highlights how students reporting higher levels of academic pressure also show higher depression rates."
        )

    elif plot_type == "cgpa_vs_financial_stress":
        colors = df_raw["Depression"].map({0: "blue", 1: "red"})
        plt.scatter(df_raw["CGPA"], df_raw["Financial Stress"], c=colors, alpha=0.6)
        plt.xlabel("CGPA")
        plt.ylabel("Financial Stress")
        plt.title("CGPA vs Financial Stress colored by Depression")
        insight = (
            "Financial stress has a strong link to student mental health. "
            "Students experiencing both academic difficulties and financial concerns may be at a higher risk of depression."
        )

    else:
        plt.text(0.5, 0.5, f"No plot for '{plot_type}'", ha='center')
        insight = f"No valid data for plot type: {plot_type}"


    plt.tight_layout()
    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    encoded_img = base64.b64encode(buf.read()).decode("utf-8")
    plt.close()

    return encoded_img, insight

@app.route("/")
def home():
    return "Student Depression Trends API is running."

@app.route("/student_trends")
def student_trends():
    plot_type = request.args.get("plot_type", "").strip().lower().replace(" ", "_")  # ✅ Normalized
    if not plot_type:
        return jsonify({"error": "Missing plot_type parameter"}), 400

    image_data, insight = generate_plot(plot_type)
    return jsonify({"image_data": image_data, "insight": insight})

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    if not data:
        return jsonify("Invalid request. No JSON data received."), 400

    try:
        prediction = predict_depression(data)
        return jsonify(prediction)
    except Exception as e:
        print("❌ Error during prediction:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
