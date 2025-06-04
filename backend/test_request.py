import requests

data = {
    'id': 3,
    'Gender': 'Female',
    'Age': 21,
    'City': 'Bangalore',
    'Profession': 'Student',
    'Academic Pressure': 3.5,
    'Work Pressure': 2.0,
    'CGPA': 8.2,
    'Study Satisfaction': 2.0,
    'Job Satisfaction': 1.0,
    'Sleep Duration': 'Less than 5 hours',
    'Dietary Habits': 'Moderate',
    'Degree': 'BSc',
    'Have you ever had suicidal thoughts ?': 'Yes',
    'Work/Study Hours': 9.0,
    'Financial Stress': 4.0,
    'Family History of Mental Illness': 'No'
}

response = requests.post("http://127.0.0.1:5000/predict", json=data)
print("Status code:", response.status_code)
print("Response:", response.text)
