"use client";
import React from "react";
import Link from "next/link";
import { Github } from "lucide-react"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-sans">
      <nav className="bg-gray-900 border-b border-gray-700 py-4 px-6 flex justify-between items-center sticky top-0 z-10">
        <div className="text-2xl font-bold text-blue-400">🎓 StudentScan</div>

        <ul className="flex space-x-6 text-md font-medium text-gray-300 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/predict">Check Yourself</Link>
          </li>
          <li>
            <Link href="/trends">Student Trends</Link>
          </li>
          <li>
            <a
              href="https://github.com/Akansha1818"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </li>
        </ul>
      </nav>

      <section className="text-center py-20 px-6 md:px-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-300 mb-4">
          Are You a Student Feeling Overwhelmed?
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Discover how stress, academic pressure, and lifestyle factors could be
          affecting your mental health. Let our AI help you assess your
          emotional well-being.
        </p>
        <div className="mt-10 flex justify-center space-x-6">
          <Link href="/predict">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition">
              Start Assessment
            </button>
          </Link>
          <Link href="/trends">
            <button className="bg-gray-800 border border-blue-500 text-blue-400 px-6 py-3 rounded-xl shadow-md hover:bg-gray-700 transition">
              View Student Insights
            </button>
          </Link>
        </div>
      </section>

      <section className="bg-gray-800 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-300 mb-4">
          Why StudentScan?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          StudentScan is built specifically for students dealing with stress,
          academic burnout, and lifestyle imbalance. We aim to identify patterns
          and support early detection of depression with data-driven tools.
        </p>
      </section>
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-300 mb-4">
          Factors causing depression
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Age</h3>
            <p className="text-gray-300">
              Age is a significant factor in mental health, influencing
              emotional resilience and vulnerability.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Academic Pressure
            </h3>
            <p className="text-gray-300">
              Academic pressure can lead to stress and anxiety, impacting
              overall mental well-being.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Work Pressure
            </h3>
            <p className="text-gray-300">
              Work pressure can contribute to burnout and mental health
              challenges, especially in high-stress environments.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">CGPA</h3>
            <p className="text-gray-300">
              Cumulative Grade Point Average (CGPA) can reflect academic stress
              and its impact on mental health.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Study Satisfaction
            </h3>
            <p className="text-gray-300">
              Satisfaction with study habits can influence motivation and mental
              health, affecting overall well-being.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Job Satisfaction
            </h3>
            <p className="text-gray-300">
              Job satisfaction plays a crucial role in mental health, impacting
              stress levels and emotional well-being.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Sleep Duration
            </h3>
            <p className="text-gray-300">
              Sleep duration is essential for mental health, with insufficient
              sleep linked to increased stress and anxiety.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Dietary Habits
            </h3>
            <p className="text-gray-300">
              Dietary habits can significantly affect mental health, with
              nutrition playing a key role in emotional well-being.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Degree</h3>
            <p className="text-gray-300">
              The type of degree pursued can influence stress levels and mental
              health, with varying demands across disciplines.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Suicidal Thoughts
            </h3>
            <p className="text-gray-300">
              Suicidal thoughts are a critical indicator of mental health,
              requiring immediate attention and support.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Financial Stress
            </h3>
            <p className="text-gray-300">
              Financial stress can exacerbate mental health issues, impacting
              emotional stability and overall well-being.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Mental Health
            </h3>
            <p className="text-gray-300">
              Understanding mental health is crucial for identifying challenges
              and promoting emotional well-being.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-300 mb-4">
          Helpful Resources
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Whether you're seeking professional help or looking for ways to
          support a friend, these resources can guide you.
        </p>
        <ul className="text-blue-400 space-y-2">
          <li>
            <a
              href="https://www.nimh.nih.gov/health/topics/depression"
              target="_blank"
              className="hover:underline"
            >
              National Institute of Mental Health – Depression
            </a>
          </li>
          <li>
            <a
              href="https://www.mentalhealth.gov/"
              target="_blank"
              className="hover:underline"
            >
              MentalHealth.gov
            </a>
          </li>
          <li>
            <a
              href="https://www.crisistextline.org/"
              target="_blank"
              className="hover:underline"
            >
              Crisis Text Line (Text HOME to 741741)
            </a>
          </li>
          <li>
            <a
              href="https://studentsagainstdepression.org/"
              target="_blank"
              className="hover:underline"
            >
              Students Against Depression
            </a>
          </li>
        </ul>
      </section>

      <footer className="bg-gray-900 text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} StudentScan . Akanksha Thakur
      </footer>
    </main>
  );
}
