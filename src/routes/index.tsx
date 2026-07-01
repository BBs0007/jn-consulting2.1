import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Building2,
  FileText,
  Sparkles,
  Briefcase,
  Clock,
  Award,
  Users,
  Instagram,
  Plus,
  Minus,
} from "lucide-react";
const logoAsset = { url: "/jn-logo.png" };
import heroImg from "@/assets/hero-advisor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JN Consulting — Hackensack NJ Tax Experts" },
      {
        name: "description",
        content:
          "Stress-free tax preparation, planning & resolution in Hackensack, NJ. A decade of trusted, minority-owned expertise — maximum refund guaranteed.",
      },
      { property: "og:title", content: "JN Consulting — Hackensack NJ Tax Experts" },
      {
        property: "og:description",
        content:
          "Stress-free tax preparation, planning & resolution in Hackensack, NJ. A decade of trusted, minority-owned expertise.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const CALENDLY = "https://calendly.com/jnconsultingservices";
const PHONE = "(201) 281-0811";
const PHONE_TEL = "tel:+12012810811";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <Process />
      <Stats />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
}

/* ---------- Top utility bar ---------- */
function TopBar() {
  return (
    <div className="hidden md:block border-b border-border bg-[var(--brand-blue-deep)] text-primary-foreground/90">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
            131 Main Street #150, Hackensack, NJ 07601
          </span>
          <a href="mailto:Hello@jnconsultingservices.com" className="inline-flex items-center gap-2 hover:text-[var(--brand-orange)] transition">
            <Mail className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
            Hello@jnconsultingservices.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href={PHONE_TEL} className="inline-flex items-center gap-2 hover:text-[var(--brand-orange)] transition">
            <Phone className="h-3.5 w-3.5 text-[var(--brand-orange)]" /> {PHONE}
          </a>
          <span className="opacity-40">|</span>
          <button className="hover:text-[var(--brand-orange)] transition">EN</button>
          <button className="hover:text-[var(--brand-orange)] transition">ES</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="JN Consulting" className="h-12 w-auto" />
          <span className="sr-only">JN Consulting</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9 text-sm font-medium">
          <a href="#services" className="hover:text-[var(--brand-blue)] transition">Services</a>
          <a href="#why" className="hover:text-[var(--brand-blue)] transition">Why JN</a>
          <a href="#process" className="hover:text-[var(--brand-blue)] transition">Process</a>
          <a href="#faq" className="hover:text-[var(--brand-blue)] transition">FAQ</a>
          <a href="#contact" className="hover:text-[var(--brand-blue)] transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href={PHONE_TEL} className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue-deep)]">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-5 py-2.5 text-sm font-semibold text-[var(--brand-blue-deep)] shadow-[var(--shadow-soft)] hover:translate-y-[-1px] hover:shadow-[var(--shadow-pop)] transition"
          >
            Book a free call <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[var(--brand-blue-deep)] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
            HACKENSACK · NJ · MINORITY-OWNED SINCE 2014
          </span>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.25rem)] font-extrabold leading-[0.95] text-[var(--brand-blue-deep)]">
            Taxes done <span className="italic font-serif text-[var(--brand-blue)]">fast</span>,
            <br />
            done <span className="text-[var(--brand-orange)]">right</span>,
            <br />
            done with care.
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted-foreground">
            For more than a decade, JN Consulting has helped families and small
            businesses across New Jersey file with confidence — and walk away with
            the maximum refund they deserve.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-pop)] hover:translate-y-[-1px] transition"
              style={{ background: "var(--gradient-cta)" }}
            >
              <Calendar className="h-4 w-4" />
              Schedule My Free Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-[var(--brand-blue-deep)] hover:border-[var(--brand-blue)] transition"
            >
              Explore services <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {[
              "Maximum refund guarantee",
              "In-person, mail or email filing",
              "Bilingual: English / Español",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--brand-orange)]/15 text-[var(--brand-orange)]">
                  <Check className="h-3 w-3" />
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-pop)] ring-1 ring-border">
            <img
              src={heroImg}
              alt="JN Consulting advisor reviewing tax documents with a client"
              className="h-full w-full object-cover"
              width={1408}
              height={1664}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-blue-deep)]/40 via-transparent to-transparent" />
          </div>

          {/* floating cards */}
          <div className="absolute -left-6 top-10 hidden md:flex items-center gap-3 rounded-2xl bg-card p-3.5 pr-5 shadow-[var(--shadow-pop)] ring-1 ring-border">
            <div className="h-10 w-10 rounded-xl bg-[var(--brand-orange)]/15 grid place-items-center">
              <Award className="h-5 w-5 text-[var(--brand-orange)]" />
            </div>
            <div className="text-sm">
              <div className="font-semibold text-[var(--brand-blue-deep)]">10+ years</div>
              <div className="text-xs text-muted-foreground">trusted in NJ</div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-10 hidden md:flex items-center gap-3 rounded-2xl bg-[var(--brand-blue-deep)] p-3.5 pr-5 shadow-[var(--shadow-pop)] text-primary-foreground">
            <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center">
              <ShieldCheck className="h-5 w-5 text-[var(--brand-orange)]" />
            </div>
            <div className="text-sm">
              <div className="font-semibold">IRS-compliant</div>
              <div className="text-xs opacity-80">accurate filings, every time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const items = [
    "Tax Preparation",
    "Small Business",
    "Tax Planning",
    "Tax Resolution",
    "LLC & Corporations",
    "Estates & Trusts",
    "Non-Profits",
    "Partnerships",
  ];
  return (
    <div className="border-y border-border bg-[var(--brand-blue-deep)] text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm tracking-wide">
        {items.map((t, i) => (
          <span key={t} className="inline-flex items-center gap-3 opacity-90">
            {t}
            {i < items.length - 1 && <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Services ---------- */
const services = [
  {
    icon: FileText,
    title: "Tax Preparation",
    desc: "Stress-free personal filings — done quickly, reviewed carefully, optimized for the maximum refund.",
    points: ["Federal & state returns", "Direct deposit in days", "Audit-ready accuracy"],
  },
  {
    icon: Briefcase,
    title: "Small Business Tax",
    desc: "Built for entrepreneurs: LLCs, S-Corps and partnerships. We translate the tax code into strategy.",
    points: ["Quarterly planning", "Deduction discovery", "Bookkeeping support"],
  },
  {
    icon: ShieldCheck,
    title: "Tax Resolution",
    desc: "Behind on filings or dealing with the IRS? We negotiate, organize and represent — calmly.",
    points: ["Back-tax filings", "IRS notices handled", "Payment plans"],
  },
  {
    icon: Building2,
    title: "Estates, Trusts & Non-Profits",
    desc: "Specialized returns for benefit plans, trusts, estates and 501(c) organizations.",
    points: ["1041 & 990 returns", "Beneficiary support", "Year-round guidance"],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Services"
          title={
            <>
              Everything you need to file <em className="italic font-serif text-[var(--brand-blue)]">with confidence.</em>
            </>
          }
          intro="Whether you're filing a W-2 or running a growing business, we bring a decade of hands-on expertise to every return."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-pop)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="h-14 w-14 rounded-2xl grid place-items-center bg-[var(--brand-blue)]/10 text-[var(--brand-blue-deep)] group-hover:bg-[var(--brand-orange)] group-hover:text-[var(--brand-blue-deep)] transition">
                  <s.icon className="h-7 w-7" />
                </div>
                <span className="text-xs font-mono tracking-wider text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-[var(--brand-blue-deep)]">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-[var(--brand-orange)]" /> {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue-deep)] group-hover:text-[var(--brand-blue)]"
              >
                Get started <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] uppercase text-[var(--brand-orange)]">
        <span className="h-px w-10 bg-[var(--brand-orange)]" />
        {eyebrow}
      </div>
      <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-[var(--brand-blue-deep)] leading-[1.05]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

/* ---------- Why us ---------- */
function WhyUs() {
  const points = [
    {
      icon: Award,
      title: "A decade of expertise",
      body: "10+ years preparing returns for individuals, families and small businesses across New Jersey.",
    },
    {
      icon: Users,
      title: "Minority-owned, community-rooted",
      body: "We grew up here. We serve our neighbors with the patience and respect they deserve.",
    },
    {
      icon: Clock,
      title: "On your schedule",
      body: "Meet in person at our Hackensack office, by mail, or fully online — whichever fits your life.",
    },
    {
      icon: ShieldCheck,
      title: "Accurate, every time",
      body: "Meticulous review process to keep your filing IRS-compliant and audit-ready.",
    },
  ];

  return (
    <section id="why" className="relative py-24 lg:py-32 bg-[var(--brand-blue-deep)] text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.06] pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[var(--brand-orange)]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] uppercase text-[var(--brand-orange)]">
            <span className="h-px w-10 bg-[var(--brand-orange)]" />
            Why JN
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-[1.05]">
            Real expertise.
            <br />
            <span className="italic font-serif text-[var(--brand-orange)]">Real people.</span>
          </h2>
          <p className="mt-6 text-primary-foreground/80 text-lg">
            We're not a chain or a faceless app. We're advisors who answer the
            phone, explain the why behind every number, and treat your return
            like it's our own.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-6 py-3.5 text-sm font-semibold text-[var(--brand-blue-deep)] hover:translate-y-[-1px] transition"
          >
            Talk to an advisor <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:bg-white/[0.07] transition"
            >
              <div className="h-11 w-11 rounded-xl bg-[var(--brand-orange)]/15 grid place-items-center text-[var(--brand-orange)]">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
function Process() {
  const steps = [
    {
      n: "01",
      title: "Book your free call",
      body: "Pick a time on Calendly. No paperwork, no pressure — just a friendly conversation.",
    },
    {
      n: "02",
      title: "Send your documents",
      body: "Drop them off in person, mail them, or upload securely from anywhere.",
    },
    {
      n: "03",
      title: "We prepare & review",
      body: "Our advisors maximize every deduction and double-check every line for accuracy.",
    },
    {
      n: "04",
      title: "File & get your refund",
      body: "E-file in minutes. Most clients see direct-deposit refunds within 10–21 days.",
    },
  ];
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="The process"
          title={
            <>
              Four simple steps from <em className="italic font-serif text-[var(--brand-blue)]">stress</em> to refund.
            </>
          }
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
              <div className="font-display text-5xl font-extrabold text-[var(--brand-orange)]">{s.n}</div>
              <h3 className="mt-6 text-lg font-semibold text-[var(--brand-blue-deep)]">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 text-[var(--brand-blue)]/30">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */
function Stats() {
  const stats = [
    { n: "10+", l: "years in business" },
    { n: "100+", l: "locations nationwide" },
    { n: "1k+", l: "happy filers" },
    { n: "21d", l: "average refund time" },
  ];
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-[var(--brand-orange)] to-[#f6c44a] p-10 lg:p-14 grid md:grid-cols-4 gap-8 shadow-[var(--shadow-pop)]">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl lg:text-6xl font-extrabold text-[var(--brand-blue-deep)]">
                {s.n}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-[var(--brand-blue-deep)]/80">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="Get planning today"
            title={
              <>
                Let's start your <em className="italic font-serif text-[var(--brand-blue)]">best</em> tax season yet.
              </>
            }
            intro="Send a quick message — we'll get back within one business day. Or pick a time and skip the back-and-forth."
          />

          <div className="mt-10 space-y-5">
            <ContactRow icon={Phone} label="Call or text" value={PHONE} href={PHONE_TEL} />
            <ContactRow icon={Phone} label="Office" value="(973) 604-7509" href="tel:+19736047509" />
            <ContactRow icon={Mail} label="Email" value="Hello@jnconsultingservices.com" href="mailto:Hello@jnconsultingservices.com" />
            <ContactRow icon={MapPin} label="Visit" value="131 Main Street #150, Hackensack, NJ 07601" />
          </div>

          <div className="mt-10 flex items-center gap-3">
            <a
              href="https://www.instagram.com/Jnconsultingservices"
              target="_blank"
              rel="noreferrer"
              className="h-11 w-11 rounded-full border border-border bg-card grid place-items-center hover:bg-[var(--brand-orange)] hover:border-[var(--brand-orange)] transition"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/Torotaxesnjhackensack"
              target="_blank"
              rel="noreferrer"
              className="h-11 w-11 rounded-full border border-border bg-card grid place-items-center hover:bg-[var(--brand-orange)] hover:border-[var(--brand-orange)] transition"
              aria-label="Toro Taxes Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <Wrap
      {...(href ? { href } : {})}
      className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-[var(--brand-blue)] transition group"
    >
      <div className="h-11 w-11 rounded-xl bg-[var(--brand-blue)]/10 grid place-items-center text-[var(--brand-blue-deep)] group-hover:bg-[var(--brand-orange)] transition">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-semibold text-[var(--brand-blue-deep)]">{value}</div>
      </div>
    </Wrap>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-[var(--shadow-soft)]"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" name="name" placeholder="Maria Gonzalez" />
        <Field label="Email" name="email" type="email" placeholder="you@email.com" />
      </div>
      <Field label="Phone" name="phone" placeholder="(201) 555-0100" />
      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          How can we help?
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us a bit about your situation…"
          className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-4 focus:ring-[var(--brand-blue)]/10 transition"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          We reply within one business day. Your info stays private.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-pop)] hover:translate-y-[-1px] transition"
          style={{ background: "var(--gradient-cta)" }}
        >
          {sent ? "Message sent ✓" : "Send message"}
          {!sent && <ArrowUpRight className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-4 focus:ring-[var(--brand-blue)]/10 transition"
      />
    </div>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  {
    q: "When will I receive my refund?",
    a: "If you e-file with direct deposit, most refunds arrive within 10–21 days. Paper returns can take 6–8 weeks.",
  },
  {
    q: "What documents do I need to file?",
    a: "Bring ID, last year's return, W-2s/1099s, deduction records, and any letters from the IRS. We'll send you a custom checklist after your free call.",
  },
  {
    q: "What are your fees?",
    a: "Pricing is based on the forms your situation requires. We offer a free, no-obligation estimate to every new and returning client.",
  },
  {
    q: "How fast can I get my refund?",
    a: "With direct deposit and e-file, most clients see their refund within 10 days. Some situations take a bit longer.",
  },
  {
    q: "How do I know I'm getting quality service?",
    a: "Our advisors carefully review every return, and we stand behind our work with a service guarantee — our goal is your maximum refund, done right.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHead
          eyebrow="FAQ"
          title={
            <>
              Answers to the questions <em className="italic font-serif text-[var(--brand-blue)]">we hear most.</em>
            </>
          }
        />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left py-6 flex gap-6 items-start group"
              >
                <span className="font-mono text-xs text-[var(--brand-orange)] pt-1.5">0{i + 1}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--brand-blue-deep)] group-hover:text-[var(--brand-blue)] transition">
                      {f.q}
                    </h3>
                    <span className="mt-1 h-8 w-8 rounded-full border border-border grid place-items-center shrink-0">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </div>
                  <div
                    className="grid transition-all duration-300"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-4 text-muted-foreground max-w-2xl">{f.a}</p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-[var(--brand-blue-deep)] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white p-3">
            <img src={logoAsset.url} alt="JN Consulting" className="h-12 w-auto" />
          </div>
          <p className="mt-6 max-w-md text-primary-foreground/75">
            Trusted Hackensack tax experts. A mistake on your return shouldn't
            cost you your refund — let us handle it, the right way.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-semibold text-[var(--brand-blue-deep)] hover:translate-y-[-1px] transition"
          >
            Schedule a free call <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-wider text-[var(--brand-orange)]">Services</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#services" className="hover:text-[var(--brand-orange)]">Tax Preparation</a></li>
            <li><a href="#services" className="hover:text-[var(--brand-orange)]">Small Business</a></li>
            <li><a href="#services" className="hover:text-[var(--brand-orange)]">Tax Planning</a></li>
            <li><a href="#services" className="hover:text-[var(--brand-orange)]">Tax Resolution</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-wider text-[var(--brand-orange)]">Company</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#why" className="hover:text-[var(--brand-orange)]">Why JN</a></li>
            <li><a href="#process" className="hover:text-[var(--brand-orange)]">Process</a></li>
            <li><a href="#faq" className="hover:text-[var(--brand-orange)]">FAQ</a></li>
            <li><a href="#contact" className="hover:text-[var(--brand-orange)]">Contact</a></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-wider text-[var(--brand-orange)]">Get in touch</div>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-[var(--brand-orange)]" /> {PHONE}</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-[var(--brand-orange)]" /> Hello@jnconsultingservices.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[var(--brand-orange)]" /> 131 Main Street #150, Hackensack, NJ 07601</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} JN Consulting Services. All rights reserved.</p>
          <p>Minority-owned & operated · Hackensack, NJ</p>
        </div>
      </div>
    </footer>
  );
}
