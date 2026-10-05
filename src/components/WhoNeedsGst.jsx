


// import { motion } from "framer-motion";
// import { Check, ArrowRight } from "lucide-react";
// import {
//   FaChartLine,
//   FaShoppingCart,
//   FaTruck,
//   FaHandshake,
// } from "react-icons/fa";

// import { whoNeedsGst } from "../data";
// import lpiMascot from "../assets/lpi-mascot (4).png";

// const itemIcons = [FaChartLine, FaShoppingCart, FaTruck, FaHandshake];

// export default function WhoNeedsGst() {
//   return (
//     <section className="relative overflow-hidden bg-white py-10 sm:py-24 lg:py-28">
//       {/* Shimmer keyframes */}
//       <style>{`
//         @keyframes shimmerSlide {
//           0% { transform: translateX(-120%); }
//           100% { transform: translateX(120%); }
//         }
//         .card-shimmer {
//           animation: shimmerSlide 3.2s ease-in-out infinite;
//         }
//         .group:hover .card-shimmer {
//           animation-play-state: paused;
//           opacity: 0;
//         }
//       `}</style>

//       {/* ================= SECTION BACKGROUND DECORATION ================= */}
//       <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
//       <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl" />

//     <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
//         <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

//           {/* =======================================================
//               LEFT SIDE
//           ======================================================= */}
//           <div>
//             {/* ================= SECTION HEADING ================= */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
//                 Not sure if you need it?
//               </p>

//               <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
//                 Who needs GST registration
//               </h2>

//               <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-800 sm:text-lg">
//                 Any one of these applies to you? You're required — or better
//                 off — registering for GST.
//               </p>
//             </motion.div>

//             {/* ===================================================
//                 4 CARDS
//             =================================================== */}
//             <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
//               {whoNeedsGst.map((item, i) => {
//                 const Icon = itemIcons[i % itemIcons.length];

//                 return (
//                   <motion.div
//                     key={item.title}
//                     initial={{ opacity: 0, y: 25 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, margin: "-40px" }}
//                     transition={{ duration: 0.5, delay: i * 0.1 }}
//                     className="
//                       group
//                       relative
//                       overflow-hidden
//                       rounded-2xl
//                       border
//                       border-transparent
//                       bg-blue-600
//                       p-6
//                       text-center

//                       shadow-[0_8px_16px_-4px_rgba(10,20,40,0.2),0_20px_45px_-15px_rgba(10,20,40,0.5)]

//                       transition-all
//                       duration-500

//                       hover:-translate-y-2
//                       hover:border-gold-500/40
//                       hover:bg-white
//                       hover:shadow-[0_12px_20px_-4px_rgba(10,20,40,0.25),0_30px_60px_-15px_rgba(10,20,40,0.4)]

//                       sm:p-7
//                     "
//                   >
//                     {/* ================= CARD SHIMMER SWEEP ================= */}
//                     <div
//                       className="
//                         card-shimmer
//                         pointer-events-none
//                         absolute
//                         inset-0
//                         bg-gradient-to-r
//                         from-transparent
//                         via-white/15
//                         to-transparent
//                         transition-opacity
//                         duration-500
//                       "
//                     />

//                     {/* ================= DOTTED TEXTURE ================= */}
//                     <div
//                       className="pointer-events-none absolute inset-0 opacity-[0.4] transition-opacity duration-500 group-hover:opacity-0"
//                       style={{
//                         backgroundImage:
//                           "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
//                         backgroundSize: "18px 18px",
//                       }}
//                     />

//                     {/* ================= TOP RIGHT GLOW ================= */}
//                     <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-500/20 blur-2xl transition-opacity duration-500 group-hover:opacity-0" />

//                     {/* ================= BOTTOM LEFT GLOW ================= */}
//                     <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

//                     {/* ================= TOP ACCENT LINE ================= */}
//                     <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold-500/0 via-gold-500/80 to-gold-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//                     {/* ================= CHECK BADGE ================= */}
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.4 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true, margin: "-40px" }}
//                       transition={{
//                         duration: 0.4,
//                         delay: i * 0.1 + 0.35,
//                         type: "spring",
//                         stiffness: 260,
//                         damping: 18,
//                       }}
//                       className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 transition-colors duration-500 group-hover:bg-gold-500/10 group-hover:ring-gold-500/40"
//                     >
//                       <Check
//                         className="h-3.5 w-3.5 text-white transition-colors duration-500 group-hover:text-gold-600"
//                         strokeWidth={3}
//                       />
//                     </motion.div>

//                     {/* =================================================
//                         CARD CONTENT - CENTERED
//                     ================================================= */}
//                     <div className="relative z-10 flex flex-col items-center">

//                       {/* ================= ICON ================= */}
//                       <div className="relative">
//                         {/* Icon Glow (hover pe blue) */}
//                         <div className="absolute inset-0 scale-125 rounded-full bg-white/0 blur-md transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-500/40" />

//                         {/* Icon Circle (hover pe blue) */}
//                         <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 transition-all duration-500 group-hover:bg-blue-600 group-hover:ring-blue-600">
//                           <Icon className="h-8 w-8 text-orange-500 transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:text-white" />
//                         </div>
//                       </div>

//                       {/* ================= TITLE ================= */}
//                       <p className="mt-5 font-display text-lg font-bold text-white transition-colors duration-500 group-hover:text-black sm:text-xl">
//                         {item.title}
//                       </p>

//                       {/* ================= DESCRIPTION ================= */}
//                       <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70 transition-colors duration-500 group-hover:text-slate-800 sm:text-[16px]">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* =======================================================
//               RIGHT SIDE - MASCOT AREA
//           ======================================================= */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="
//               relative
//               flex
//               min-h-[430px]
//               flex-col
//               items-center
//               justify-center
//               sm:min-h-[580px]
//               lg:min-h-[680px]
//             "
//           >
//             <motion.div
//               animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.35, 0.18] }}
//               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//               className="pointer-events-none absolute left-1/2 top-[25%] h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
//             />

//             <motion.div
//               animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
//               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//               className="pointer-events-none absolute bottom-[15%] right-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"
//             />

//             <motion.div
//               initial={{ opacity: 0, y: -15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="relative z-20 mb-2 text-center"
//             />

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="relative z-20 max-w-md text-center"
//             >
//               <h3 className="font-display text-2xl font-bold leading-tight text-black sm:text-3xl">
//                 Get your GST registration,
//                 <span className="block text-blue-600">
//                   done correctly and hassle-free.
//                 </span>
//               </h3>
//             </motion.div>

//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="relative z-10 mt-8 w-full sm:mt-16"
//             >
//               <motion.img
//                 src={lpiMascot}
//                 alt="LPI GST Registration Mascot"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
//                 className="mx-auto h-auto w-full max-w-[620px] object-contain drop-shadow-[0_28px_35px_rgba(10,20,40,0.16)] sm:max-w-[680px] lg:max-w-[720px]"
//               />
//             </motion.div>

//             <motion.span
//               animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute left-5 top-[35%] h-3 w-3 rounded-full bg-blue-500"
//             />

//             <motion.span
//               animate={{ y: [0, 18, 0], opacity: [0.2, 0.7, 0.2] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute right-8 top-[42%] h-4 w-4 rounded-full bg-gold-500"
//             />

//             <motion.span
//               animate={{ x: [0, 10, 0], opacity: [0.2, 0.6, 0.2] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute bottom-[20%] left-14 h-2 w-2 rounded-full bg-blue-400"
//             />

//             {/* ================= SIMPLE PROCESS / EXPERT SUPPORT ================= */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.7 }}
//               className="
//                 relative
//                 z-20
//                 mt-2
//                 flex
//                 items-center
//                 gap-2
//                 text-sm
//                 font-bold
//                 text-slate-800
//                 sm:mt-[-8px]
//               "
//             >
//               <span className="font-bold">Simple process</span>
//               <ArrowRight className="h-4 w-4 text-gold-600" />
//               <span className="font-bold">Expert support</span>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import {
  FaChartLine,
  FaShoppingCart,
  FaTruck,
  FaHandshake,
} from "react-icons/fa";

import { whoNeedsGst } from "../data";
import lpiMascot from "../assets/lpi-mascot (4).png";

const itemIcons = [FaChartLine, FaShoppingCart, FaTruck, FaHandshake];

/* Har card ka apna colour theme */
const themes = [
  { grad: "from-orange-400 to-amber-500", soft: "bg-orange-50", text: "text-orange-600", hover: "hover:border-orange-300" },
  { grad: "from-sky-400 to-blue-600", soft: "bg-blue-50", text: "text-blue-600", hover: "hover:border-blue-300" },
  { grad: "from-emerald-400 to-teal-600", soft: "bg-emerald-50", text: "text-emerald-600", hover: "hover:border-emerald-300" },
  { grad: "from-violet-400 to-purple-600", soft: "bg-purple-50", text: "text-purple-600", hover: "hover:border-purple-300" },
];

function NeedCard({ item, i }) {
  const Icon = itemIcons[i % itemIcons.length];
  const t = themes[i % themes.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_28px_-14px_rgba(10,30,70,0.25)] transition-all duration-300 hover:shadow-[0_28px_55px_-18px_rgba(10,30,70,0.35)] sm:p-6 ${t.hover}`}
    >
      {/* top coloured line */}
      <div
        className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${t.grad}`}
      />

      {/* big faded number */}
      <span className="pointer-events-none absolute right-4 top-3 font-display text-5xl font-extrabold leading-none text-slate-900/[0.06] sm:text-6xl">
        {String(i + 1).padStart(2, "0")}
      </span>

      {/* glow blob (hover pe badhta hai) */}
      <div
        className={`pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-gradient-to-br ${t.grad} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
      />

      {/* icon */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.08 }}
        transition={{ duration: 0.5 }}
        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${t.grad} text-white shadow-lg sm:h-16 sm:w-16`}
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.div>

      {/* title */}
      <h3 className="relative mt-5 font-display text-lg font-extrabold leading-snug text-[#173252] sm:text-xl">
        {item.title}
      </h3>

      {/* desc */}
      <p className="relative mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
        {item.desc}
      </p>

      {/* applies tag */}
      <div
        className={`relative mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${t.soft} ${t.text}`}
      >
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
        GST required
      </div>

      {/* bottom accent line */}
      <span
        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${t.grad} transition-all duration-500 group-hover:w-full`}
      />
    </motion.div>
  );
}

export default function WhoNeedsGst() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f5f9ff] to-white py-12 sm:py-20 lg:py-24">
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-300/15 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,91,160,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* =======================================================
              LEFT SIDE
          ======================================================= */}
          <div>
            {/* ================= HEADING ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 ring-1 ring-orange-200">
                <HelpCircle className="h-4 w-4" />
                Not sure if you need it?
              </span>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl lg:text-5xl">
                Who needs{" "}
                <span className="bg-gradient-to-r from-[#126dc4] to-cyan-500 bg-clip-text text-transparent">
                  GST registration?
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                Any one of these applies to you? You're required — or better
                off — registering for GST.
              </p>
            </motion.div>

            {/* ================= CARDS ================= */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
              {whoNeedsGst.map((item, i) => (
                <NeedCard key={item.title} item={item} i={i} />
              ))}
            </div>
          </div>

          {/* =======================================================
              RIGHT SIDE - MASCOT AREA (pehle jaisa hi)
          ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              relative
              flex
              min-h-[430px]
              flex-col
              items-center
              justify-center
              sm:min-h-[580px]
              lg:min-h-[680px]
            "
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.35, 0.18] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-1/2 top-[25%] h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
            />

            <motion.div
              animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute bottom-[15%] right-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"
            />

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-20 mb-2 text-center"
            />

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative z-20 max-w-md text-center"
            >
              <h3 className="font-display text-2xl font-bold leading-tight text-black sm:text-3xl">
                Get your GST registration,
                <span className="block text-blue-600">
                  done correctly and hassle-free.
                </span>
              </h3>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mt-8 w-full sm:mt-16"
            >
              <motion.img
                src={lpiMascot}
                alt="LPI GST Registration Mascot"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
                className="mx-auto h-auto w-full max-w-[620px] object-contain drop-shadow-[0_28px_35px_rgba(10,20,40,0.16)] sm:max-w-[680px] lg:max-w-[720px]"
              />
            </motion.div>

            <motion.span
              animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-5 top-[35%] h-3 w-3 rounded-full bg-blue-500"
            />

            <motion.span
              animate={{ y: [0, 18, 0], opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-8 top-[42%] h-4 w-4 rounded-full bg-gold-500"
            />

            <motion.span
              animate={{ x: [0, 10, 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[20%] left-14 h-2 w-2 rounded-full bg-blue-400"
            />

            {/* ================= SIMPLE PROCESS / EXPERT SUPPORT ================= */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="
                relative
                z-20
                mt-2
                flex
                items-center
                gap-2
                text-sm
                font-bold
                text-slate-800
                sm:mt-[-8px]
              "
            >
              <span className="font-bold">Simple process</span>
              <ArrowRight className="h-4 w-4 text-gold-600" />
              <span className="font-bold">Expert support</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}