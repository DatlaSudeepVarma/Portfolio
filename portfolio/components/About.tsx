import { Briefcase, MapPin, Sparkles, UserRound } from "lucide-react";

const about = {
  intro: "Who you are, what you do, and what drives you, in one or two sentences.",
  body: "A second paragraph about your approach, the kind of problems you love solving, and what you're aiming for next.",
  facts: [
    { icon: MapPin, label: "Based in", value: "City, Country" },
    { icon: Sparkles, label: "Focus", value: "Web & 3D" },
    { icon: Briefcase, label: "Open to", value: "Full-time · Freelance" },
  ],
};

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#05060a] text-zinc-100">
      <div className="pointer-events-none absolute -left-40 top-1/3 size-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">01 — About</p>
        <h2 className="mb-12 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl md:mb-16">
          A little about me
        </h2>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Portrait goes here later */}
          <div className="relative flex aspect-[4/5] w-full max-w-xs items-center sm:max-w-sm lg:max-w-md justify-center justify-self-center rounded-2xl border border-dashed border-cyan-400/30 bg-cyan-400/[0.03] lg:justify-self-start">
            <div className="flex flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-cyan-400/70">
              <UserRound className="size-5" />
              Portrait / avatar
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-zinc-400">
            <p className="text-2xl leading-snug text-zinc-100">{about.intro}</p>
            <p>{about.body}</p>

            <ul className="mt-4 grid gap-4 sm:grid-cols-3">
              {about.facts.map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-colors hover:border-cyan-400/40"
                >
                  <Icon className="mb-3 size-5 text-cyan-400" />
                  <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">{label}</p>
                  <p className="mt-1 text-base text-zinc-100">{value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
