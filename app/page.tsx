export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-center mb-6">
        SpendWise AI
      </h1>

      <p className="text-gray-400 text-center max-w-xl mb-8 text-lg">
        Find hidden AI overspending in minutes. Audit your AI tool stack and discover smarter savings instantly.
      </p>

        <a
        href="/audit"
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
>
       Start Free Audit
</a>


      <div className="grid md:grid-cols-3 gap-6 mt-20 w-full max-w-6xl">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-xl font-semibold mb-3">AI Spend Analysis</h2>
          <p className="text-gray-400">
            Track and analyze your monthly AI tool expenses easily.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-xl font-semibold mb-3">Smart Recommendations</h2>
          <p className="text-gray-400">
            Get better pricing and tool suggestions instantly.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-xl font-semibold mb-3">Save More</h2>
          <p className="text-gray-400">
            Discover hidden opportunities to reduce yearly AI costs.
          </p>
        </div>
      </div>
    </main>
  );
}