"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const graphSections = [
  {
    title: "Depression Distribution",
    endpoint: "depression_distribution"
  },
  {
    title: "Gender vs Depression",
    endpoint: "gender_vs_depression"
  },
  {
    title: "Age Distribution by Depression",
    endpoint: "age_distribution_by_depression"
  },
  {
    title: "CGPA Distribution by Depression",
    endpoint: "cgpa_distribution_by_depression"
  },
  {
    title: "Academic Pressure by Depression Status",
    endpoint: "academic_pressure_boxplot"
  },
  {
    title: "CGPA vs Financial Stress (Colored by Depression)",
    endpoint: "cgpa_vs_financial_stress"
  }
];

export default function StudentTrendsPage() {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchAllImages() {
      setLoading(true);
      const loadedImages = {};
      for (let section of graphSections) {
        try {
          const res = await fetch(`http://localhost:5000/student_trends?plot_type=${section.endpoint}`);
          const data = await res.json();
          loadedImages[section.title] = {
            image: data.image_data,
            insight: data.insight,
          };
        } catch (err) {
          console.error(`Error loading ${section.title}`, err);
        }
      }
      setImages(loadedImages);
      setLoading(false);
    }
    fetchAllImages();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-700 py-4 px-6 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-lg sm:text-2xl font-bold">📊 Student Mental Health Trends</h1>
        <div className="hidden md:flex gap-4 text-sm font-medium">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/predict" className="hover:text-blue-400">Check Yourself</Link>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col text-center bg-white/10 py-4 px-6 border-b border-white/10">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</Link>
          <Link href="/predict" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Predict</Link>
        </div>
      )}

      <section className="text-center pt-16 pb-10 px-4 sm:px-6">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
          Explore Depression Trends Among Students
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Visual insights based on survey data.
        </p>
      </section>

      {loading ? (
        <div className="flex justify-center items-center my-10">
          <div className="animate-spin border-t-4 border-blue-500 rounded-full w-12 h-12"></div>
        </div>
      ) : (
        <div className="space-y-12 px-4 sm:px-6 pb-16">
          {graphSections.map(({ title }) => (
            <div key={title} className="bg-white/10 p-4 sm:p-6 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              {images[title]?.image ? (
                <>
                  <img
                    src={`data:image/png;base64,${images[title].image}`}
                    alt={title}
                    className="w-full h-auto rounded-xl"
                  />
                  <h2 className="mt-4 text-xl text-gray-300 italic">
                    {images[title].insight}
                  </h2>
                </>
              ) : (
                <p className="text-gray-400">Failed to load chart</p>
              )}
            </div>
          ))}
        </div>
      )}

      <footer className="text-center mt-auto text-sm text-gray-400 py-6 border-t border-white/10 px-4">
        &copy; {new Date().getFullYear()} StudentScan . Akanksha Thakur
      </footer>
    </div>
  );
}
