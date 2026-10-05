import { motion } from "framer-motion";
import {
  Quote,
  ShieldCheck,
  Users,
  Headphones,
  ArrowRight,
} from "lucide-react";

// Director's photo: src/assets/director.png
import directorImg from "../assets/director.png";

/* ------------------------------------------------------------------
   DATA: change name, role and message here
   ------------------------------------------------------------------ */
const director = {
  name: "Sarthak Gupta",
  role: "Director, Legal Papers India",
  eyebrow: "From the Director's desk",
  heading: "Compliance should never slow your business down",
  message: [
    "Every business owner dreams of growing without unnecessary roadblocks. That is the thought behind Legal Papers India: to make GST registration and compliance simple, so you never lose valuable time to complicated paperwork.",
    "Our focus is straightforward: the right guidance, a clear process and delivery on time. You only need to share your documents. We take care of the rest.",
  ],
};

const points = [
  { icon: ShieldCheck, text: "Expert-led guidance" },
  { icon: Users, text: "Dedicated support team" },
  { icon: Headphones, text: "Clear, transparent process" },
];

export default function DirectorMessage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-white to-[#fff7ed] py-10 sm:py-12 lg:py-14">
      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-orange-400/15 blur-3xl"
      />

     <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        {/* items-start: photo aligns with the top of "From the Director's desk" */}
        <div className="grid items-start gap-10 lg:grid-cols-[320px_1fr] lg:gap-12">
          {/* =========================================================
              LEFT: DIRECTOR IMAGE
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:mx-0 lg:max-w-none"
          >
            {/* Offset gold frame */}
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl border-2 border-gold-500/60" />

            {/* Dotted pattern */}
            <div
              className="pointer-events-none absolute -left-4 -top-4 h-16 w-16 opacity-60 sm:-left-5 sm:-top-5 sm:h-20 sm:w-20"
              style={{
                backgroundImage:
                  "radial-gradient(#f97316 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
              }}
            />

            {/* Image card */}
            <div className="relative aspect-[5/5.5] overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 via-white to-orange-100 shadow-[0_20px_50px_-15px_rgba(10,20,40,0.45)]">
              <img
                src={directorImg}
                alt={director.name}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />

              {/* Bottom fade */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating name badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 left-3 right-3 z-10 rounded-xl border border-white/60 bg-white/90 px-4 py-2.5 shadow-[0_15px_35px_-12px_rgba(10,20,40,0.35)] backdrop-blur"
            >
              <p className="font-display text-base font-bold text-navy-600">
                {director.name}
              </p>
              <p className="mt-0.5 text-xs font-semibold text-orange-600 sm:text-sm">
                {director.role}
              </p>
            </motion.div>
          </motion.div>

          {/* =========================================================
              RIGHT: MESSAGE
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mt-2 lg:mt-0"
          >
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-gold-600 sm:text-sm">
              {director.eyebrow}
            </p>

            <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-navy-600 sm:text-3xl">
              {director.heading}
            </h2>

            {/* Quote block */}
            <div className="relative mt-5 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-[0_10px_30px_-15px_rgba(10,20,40,0.3)] sm:p-6">
              <span className="absolute -top-4 left-5 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
                <Quote className="h-4 w-4" />
              </span>

              <div className="space-y-3 pt-1 text-sm leading-relaxed text-slate-700 sm:text-base">
                {director.message.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="h-[3px] w-8 rounded-full bg-orange-500" />
                <p className="text-sm font-bold text-navy-600">
                  {director.name}
                </p>
              </div>
            </div>

            {/* Trust points */}
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {points.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="group flex items-center gap-2.5 rounded-xl border border-navy-900/10 bg-white px-3 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-all duration-500 group-hover:rotate-12 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-semibold text-navy-600 sm:text-sm">
                      {p.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.a
              href="#top-form"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_25px_-8px_rgba(249,115,22,0.6)] transition-colors duration-300 hover:bg-blue-600 sm:w-auto sm:text-base"
            >
              Talk to our experts
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}