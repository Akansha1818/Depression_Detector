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

## Frontend
cd frontend

npm install

npm run dev

## Backend
cd backend

pip install -r requirements.txt

python main.py



### 🧪 API Endpoints
## POST /predict

Predicts depression risk based on input student data.


Input: JSON object with fields like age, gender, CGPA, sleep hours, etc.

Output:

json
Copy
Edit
{
  "prediction": "",
  "confidence": __
}

GET /student_trends?plot_type=<type>
Returns a base64 image of trend plots.


Supported plot_type values: age, gender, cgpa, social, sleep, etc.


Output: Base64 string of a matplotlib/plotly image



### 🚀 Deployment on Render
## 🔷 Frontend (Next.js)

Build Command: npm install && npm run build

Start Command: npm start

Publish Directory: (not needed for web service)

Live: https://student-scan.onrender.com


## 🔶 Backend (Flask)

Start Command: python main.py

Make sure to handle PORT environment variable from os.environ

Live: https://studentscan.onrender.com

