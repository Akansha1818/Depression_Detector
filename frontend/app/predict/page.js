"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function PredictPage() {
  const [formData, setFormData] = useState({
    Gender: "",
    Age: "",
    City: "",
    Profession: "",
    AcademicPressure: "",
    WorkPressure: "",
    CGPA: "",
    StudySatisfaction: "",
    JobSatisfaction: "",
    SleepDuration: "",
    DietaryHabits: "",
    Degree: "",
    SuicidalThoughts: "",
    WorkHours: "",
    FinancialStress: "",
    FamilyHistory: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Fields that need to be stored as float
    const floatFields = [
      "Age",
      "AcademicPressure",
      "WorkPressure",
      "CGPA",
      "StudySatisfaction",
      "JobSatisfaction",
      "WorkHours",
      "FinancialStress",
    ];

    setFormData({
      ...formData,
      [name]: floatFields.includes(name) ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/predict", formData);
      setResult(response.data);
    } catch (error) {
      setResult("Prediction failed. Please try again later.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-sans">
      <nav className="bg-gray-900 border-b border-gray-700 py-4 px-6 flex justify-between items-center sticky top-0 z-10">
        <div className="text-2xl font-bold text-blue-400">🎓 StudentScan</div>
        <ul className="flex space-x-6 text-md font-medium text-gray-300">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/trends">Student Trends</Link>
          </li>
        </ul>
      </nav>

      <div className="min-h-screen bg-gray-900 text-white py-12 px-6 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-300">
          Student Depression Check
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            "Gender",
            "City",
            "Profession",
            "DietaryHabits",
            "Degree",
            "SuicidalThoughts",
            "FamilyHistory",
          ].map((field) => (
            <div key={field}>
              <label className="block mb-1">
                {field.replace(/([A-Z])/g, " $1")}:
              </label>
              <input
                type="text"
                name={field}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-600 p-2 rounded"
              />
            </div>
          ))}

          {[
            "Age",
            "AcademicPressure",
            "WorkPressure",
            "CGPA",
            "StudySatisfaction",
            "JobSatisfaction",
            "WorkHours",
            "FinancialStress",
          ].map((field) => (
            <div key={field}>
              <label className="block mb-1">
                {field.replace(/([A-Z])/g, " $1")}:
              </label>
              <input
                type="number"
                step="0.1"
                name={field}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-600 p-2 rounded"
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="block mb-1">Sleep Duration:</label>
            <select
              name="SleepDuration"
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 p-2 rounded"
            >
              <option value="">Select</option>
              <option value="Less than 5 hours">Less than 5 hours</option>
              <option value="5-6 hours">5-6 hours</option>
              <option value="7-8 hours">7-8 hours</option>
              <option value="More than 8 hours">More than 8 hours</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Predict
            </button>
          </div>
        </form>

        {result && (
          <div className="mt-10 text-center text-xl font-semibold">
            Prediction: <span className="text-blue-400">{result}</span>
          </div>
        )}
      </div>
    </main>
  );
}
