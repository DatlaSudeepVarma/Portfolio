import { ArrowUpRight, Box, ChevronDown, Download, Mail } from "lucide-react";

const profile = {
  name: "Your Name",
  role: "Software Engineer · Creative Developer",
  tagline: "I build fast, immersive digital experiences.",
  location: "City, Country",
  email: "you@example.com",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/your-handle",
  linkedin: "https://linkedin.com/in/your-handle",
};

const navLinks = ["About", "Work", "Results", "Certifications", "Skills", "Contact"];

const primaryButton =
  "inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 text-sm font-medium text-black shadow-[0_0_24px_-6px_var(--color-cyan-400)] transition-shadow hover:shadow-[0_0_36px_-4px_var(--color-cyan-400)]";
const outlineButton =
  "inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm font-medium transition-colors hover:border-cyan-400/60 hover:text-cyan-300";
const iconButton =
  "grid size-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-cyan-400/60 hover:text-cyan-300";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#05060a] text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 size-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      {/* Top bar */}
      <header className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-cyan-400">.</span>
        </a>
        <nav className="hidden gap-1 lg:flex">
          {navLinks.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={profile.resumeUrl} download className={`${outlineButton} hidden sm:inline-flex`}>
            <Download className="size-4" /> Resume
          </a>
          <a href="#contact" className={primaryButton}>
            Let&apos;s talk
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-400">
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
            Available for work · {profile.location}
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="mt-4 font-mono text-sm uppercase tracking-widest text-cyan-400">{profile.role}</p>
          <p className="mt-6 max-w-lg text-lg text-zinc-400">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className={primaryButton}>
              View my work <ArrowUpRight className="size-4" />
            </a>
            <a href={profile.resumeUrl} download className={outlineButton}>
              <Download className="size-4" /> Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2">
            <a href={profile.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className={iconButton}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-4">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className={iconButton}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-4">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className={iconButton}>
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        {/* 3D scene goes here later */}
        <div className="relative flex aspect-square w-full max-w-xl items-center justify-center justify-self-center rounded-2xl border border-dashed border-cyan-400/30 bg-cyan-400/[0.03]">
          <div className="flex flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-cyan-400/70">
            <Box className="size-5" />
            3D hero scene
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="relative mx-auto mb-8 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500"
      >
        Scroll
        <ChevronDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
