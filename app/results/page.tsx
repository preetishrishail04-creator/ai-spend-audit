"use client";
import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [savings, setSavings] = useState(0);
  const [tool, setTool] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("auditForm");
    if (saved) {
      const data = JSON.parse(saved);
      const monthly = Number(data.spend) * 0.2;
      setSavings(monthly);
      setTool(data.tool);
    }
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">Your Audit Result</h1>

      <p className="text-gray-400 mb-6">
      Here’s how much you could save on your AI tools.
     </p>

      <p className="text-2xl mb-4">
        Tool: {tool}
      </p>

      <p className="text-xl text-gray-300">
        Estimated Savings: ${savings}/month (${savings * 12}/year)
      </p>

      <p className="text-green-400 mt-4">
        Recommendation: Consider switching to a lower-cost plan.
      </p>

      <button
       onClick={() => window.location.href = "/audit"}
       className="mt-6 bg-white text-black px-6 py-3 rounded"
>
       Edit Audit
      </button>
       <button
       onClick={() => window.location.href = "/"}
        className="mt-4 bg-gray-700 text-white px-6 py-3 rounded"
>
        Home
        </button>

    </main>
  );
}