# 🧠 Depression Detector

A full-stack web application that predicts signs of student depression based on academic, demographic, and behavioral input. It uses machine learning for prediction and provides data visualizations to identify key mental health trends among students.

---

## 🔗 Live Demo

- **Frontend** (Next.js): [https://student-scan.onrender.com/](https://student-scan.onrender.com/)
- **Backend** (Flask + ML Model): [https://studentscan.onrender.com/](https://studentscan.onrender.com/)

---

## 🧩 Tech Stack

### 🚀 Frontend
- Next.js (React Framework)
- Tailwind CSS (or custom CSS)
- Plotly.js for interactive charts

### 🧠 Backend
- Flask (REST API)
- scikit-learn, xgboost, tensorflow (ML models)
- pandas, numpy (data handling)
- joblib (model persistence)

---

## ⚙️ Features

- 🧾 **Prediction Form**: Input student-related data to get a mental health prediction.
- 📊 **Trends Visualization**: Explore data insights and trends across the student population.
- 🔌 **API Integration**: Frontend communicates with Flask API to fetch predictions and plots.
- 🧠 **Machine Learning**: Trained models classify depression risk based on student data.

---

## 📂 Project Structure
Depression_Detector/
│
├── frontend/ # Next.js frontend
│ ├── app/
│ ├── public/
│ ├── .next/
│ └── ...
│
├── backend/ # Flask backend
│ ├── main.py
│ ├── model.pkl / model.h5
│ └── ...

## 🔧 Getting Started (Local Development)

### Frontend
cd frontend
npm install
npm run dev

### Backend
cd backend
pip install -r requirements.txt
python main.py
