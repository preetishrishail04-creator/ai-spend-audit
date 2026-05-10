"use client";

import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("auditForm");

    if (saved) {
      const data = JSON.parse(saved);
      const spend = Number(data.spend);

      const estimatedSavings = spend * 0.2; // 20% savings
      setSavings(estimatedSavings);
    }
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">Your Audit Result</h1>
      <p className="text-xl text-gray-300">
        Estimated Savings: ${savings}/month (${savings * 12}/year)
      </p>
    </main>
  );
}