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
    if (!tool || !plan || !spend) {
  alert("Please fill Tool, Plan, and Monthly Spend");
  return;
}
    localStorage.setItem(
      "auditForm",
      JSON.stringify({ tool, plan, spend, seats, teamSize, useCase })
    );
    window.location.href = "/results"
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">AI Spend Audit</h1>

      <div className="space-y-4 max-w-md">
        <select
  className="w-full p-3 rounded big-white text-black"
  value={tool}
  onChange={(e) => setTool(e.target.value)}
>
  <option value="">Select Tool</option>
  <option value="ChatGPT">ChatGPT</option>
  <option value="Claude">Claude</option>
  <option value="Cursor">Cursor</option>
  <option value="GitHub Copilot">GitHub Copilot</option>
</select>
        <select
  className="w-full p-3 rounded big-white text-black"
  value={plan}
  onChange={(e) => setPlan(e.target.value)}
>
  <option value="">Select Plan</option>
  <option value="Free">Free</option>
  <option value="Pro">Pro</option>
  <option value="Team">Team</option>
  <option value="Enterprise">Enterprise</option>
</select>
        <input
  type="number"
  className="w-full p-3 rounded big-white text-black caret-black"
  placeholder="Monthly Spend"
  value={spend}
  onChange={(e) => setSpend(e.target.value)}
/>
        <input
  type="number"
  className="w-full p-3 rounded big-white text-black caret-black"
  placeholder="Seats"
  value={seats}
  onChange={(e)=>setSeats(e.target.value)}
/>
        <input
  type="number"
  className="w-full p-3 rounded big-white text-black caret-black"
  placeholder="Team Size"
  value={teamSize}
  onChange={(e)=>setTeamSize(e.target.value)}
/>
       <select
  className="w-full p-3 rounded big-white text-black"
  value={useCase}
  onChange={(e) => setUseCase(e.target.value)}
>
  <option value="">Select Use Case</option>
  <option value="Coding">Coding</option>
  <option value="Writing">Writing</option>
  <option value="Research">Research</option>
  <option value="Mixed">Mixed</option>
</select>

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