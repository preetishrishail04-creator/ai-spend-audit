"use client";

import { useState, useEffect } from "react";

export default function AuditPage() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [seats, setSeats] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [useCase, setUseCase] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("auditForm");
    if (saved) {
      const data = JSON.parse(saved);
      setTool(data.tool || "");
      setPlan(data.plan || "");
      setSpend(data.spend || "");
      setSeats(data.seats || "");
      setTeamSize(data.teamSize || "");
      setUseCase(data.useCase || "");
    }
  }, []);

  const saveData = () => {
    localStorage.setItem(
      "auditForm",
      JSON.stringify({ tool, plan, spend, seats, teamSize, useCase })
    );
    alert("Saved!");
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">AI Spend Audit</h1>

      <div className="space-y-4 max-w-md">
        <input className="w-full p-3 text-black rounded" placeholder="Tool" value={tool} onChange={(e)=>setTool(e.target.value)} />
        <input className="w-full p-3 text-black rounded" placeholder="Plan" value={plan} onChange={(e)=>setPlan(e.target.value)} />
        <input className="w-full p-3 text-black rounded" placeholder="Monthly Spend" value={spend} onChange={(e)=>setSpend(e.target.value)} />
        <input className="w-full p-3 text-black rounded" placeholder="Seats" value={seats} onChange={(e)=>setSeats(e.target.value)} />
        <input className="w-full p-3 text-black rounded" placeholder="Team Size" value={teamSize} onChange={(e)=>setTeamSize(e.target.value)} />
        <input className="w-full p-3 text-black rounded" placeholder="Use Case" value={useCase} onChange={(e)=>setUseCase(e.target.value)} />

        <button
          onClick={saveData}
          className="bg-white text-black px-6 py-3 rounded"
        >
          Generate Audit
        </button>
      </div>
    </main>
  );
}