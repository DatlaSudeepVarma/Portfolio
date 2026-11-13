const stats = [
  { value: "25+", label: "Projects shipped" },
  { value: "12", label: "Certifications" },
  { value: "50k+", label: "Users reached" },
  { value: "3", label: "Awards & hackathons" },
];

export function Results() {
  return (
    <section id="results" className="relative bg-[#05060a] text-zinc-100">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">02 — Impact</p>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">Results in numbers</h2>

        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <li
              key={s.label}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-colors hover:border-cyan-400/40 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-violet-500/15 blur-2xl" />
              <p className="relative w-fit bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
                {s.value}
              </p>
              <p className="relative mt-2 text-sm text-zinc-400">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
