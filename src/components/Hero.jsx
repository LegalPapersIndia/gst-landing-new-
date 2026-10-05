


// import { motion } from "framer-motion";
// import { CheckCircle2, BadgeCheck } from "lucide-react";
// import LeadForm from "./LeadForm";
// import mascot from "../assets/hero-gst-form (3).png";
// import secureIcon from "../assets/card.png";
// import speedIcon from "../assets/card2.png";
// import supportIcon from "../assets/card3.png";

// const points = [
//   "1 Day GST Application",
//   "GST Apply in Tatkal",
//   "Advisor for GST",
//   "GST Billing Software",
//   "GST Registration",
//   "Same Day Process for GST",
// ];

// const statText = "25K+ GST Certificates Issued";

// const trustBadges = [
//   { image: secureIcon, label: "100% Secure Process" },
//   { image: speedIcon, label: "Fast Turnaround" },
//   { image: supportIcon, label: "Dedicated Expert Support" },
// ];

// // Typewriter container — types out each character, then reverses (erases) and loops
// const typeContainer = {
//   hidden: { opacity: 1 },
//   visible: {
//     transition: {
//       staggerChildren: 0.035,
//       repeat: Infinity,
//       repeatType: "reverse",
//       repeatDelay: 1.4,
//     },
//   },
// };

// const typeChar = {
//   hidden: { opacity: 0, y: 4 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.18 } },
// };

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff]">
//       {/* Shimmer keyframes for the stat box */}
//       <style>{`
//         @keyframes shimmerSlide {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-shimmer-slide {
//           animation: shimmerSlide 2.6s ease-in-out infinite;
//         }
//         @keyframes statGlowPulse {
//           0%, 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.45); }
//           50% { box-shadow: 0 0 0 10px rgba(37,99,235,0); }
//         }
//         .stat-glow-pulse {
//           animation: statGlowPulse 2.4s ease-in-out infinite;
//         }
//       `}</style>

//       {/* ================= BACKGROUND DECORATION ================= */}

//       {/* Soft blue glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-32
//           top-20
//           h-80
//           w-80
//           rounded-full
//           bg-blue-300/20
//           blur-3xl
//         "
//       />

//       {/* Soft orange glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[-100px]
//           top-10
//           h-72
//           w-72
//           rounded-full
//           bg-orange-300/15
//           blur-3xl
//         "
//       />

//       {/* Bottom blue glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-[-160px]
//           left-1/2
//           h-96
//           w-96
//           -translate-x-1/2
//           rounded-full
//           bg-blue-200/20
//           blur-3xl
//         "
//       />

//       {/* Decorative dotted texture */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.35]"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(30,91,160,0.10) 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       {/* ================= MAIN CONTAINER ================= */}

//       <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-8 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:px-8 lg:pb-14 lg:pt-8">
//         {/* =====================================================
//             LEFT — HEADLINE + CONTENT
//         ====================================================== */}

//         <div className="order-1">
//           {/* Small heading */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="
//               font-mono
//               text-sm
//               font-bold
//               uppercase
//               tracking-[0.16em]
//               text-orange-500

//               sm:text-base
//               sm:tracking-[0.2em]
//             "
//           >
//             GST Registration · Pan-India
//           </motion.p>

//           {/* Main Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="
//               mt-4
//               font-display
//               text-[2.35rem]
//               font-extrabold
//               leading-[1.08]
//               tracking-tight
//               text-[#126dc4]

//               sm:text-5xl

//               lg:text-[3.65rem]
//             "
//           >
//             Get GST Registration
//             <br />
//             in just{" "}
//             <span className="relative inline-block italic text-orange-500">
//               one day.
//               {/* Underline */}
//               <svg
//                 viewBox="0 0 160 14"
//                 className="
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-3
//                   w-full
//                   text-orange-500
//                 "
//                 preserveAspectRatio="none"
//               >
//                 <path
//                   d="M2 9.5C30 2.5 75 2 100 6.5C120 10 140 6 158 4"
//                   stroke="currentColor"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                   fill="none"
//                 />
//               </svg>
//             </span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="
//               mt-6
//               max-w-lg
//               text-base
//               leading-relaxed
//               text-slate-600

//               sm:text-lg
//             "
//           >
//             Legal Papers India handles the paperwork, the portal and the
//             follow-up with the department — so your registration doesn't sit
//             stuck on a query you didn't know how to answer.
//           </motion.p>

//           {/* Mascot — visible ONLY on mobile/tablet, right below the description */}
//           {/* Mascot — visible ONLY on mobile/tablet, right below the description */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.25 }}
//             className="
//     mt-5
//     flex
//     justify-center
//     lg:hidden
//   "
//           >
//             <img
//               src={mascot}
//               alt="Legal Papers India advisor"
//               className="
//       w-96
//       object-contain
//       drop-shadow-[0_12px_20px_rgba(30,70,120,0.20)]

//       sm:w-[28rem]
//       md:w-[30rem]
//     "
//             />
//           </motion.div>

//           {/* Points list — 3-column grid on mobile AND desktop */}
//           <motion.ul
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="
//               mt-7
//               grid
//               grid-cols-2
//               gap-x-4
//               gap-y-3

//               sm:gap-x-6
//             "
//           >
//             {points.map((p) => (
//               <li
//                 key={p}
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                   text-sm
//                   font-bold
//                   leading-5
//                   text-[#173252]

//                   sm:text-base
//                 "
//               >
//                 <CheckCircle2
//                   className="
//                     h-5
//                     w-5
//                     shrink-0
//                     text-orange-500
//                   "
//                 />

//                 {p}
//               </li>
//             ))}
//           </motion.ul>

//           {/* Stat box — gold/amber gradient, with pulsing icon + looping typewriter text */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="
//               stat-glow-pulse
//               relative
//               mt-7
//               w-full
//               max-w-lg
//               overflow-hidden
//               rounded-2xl
//               bg-gradient-to-r
//               from-[#D4AF37] to-[#F5D76E]
//               px-4
//               py-1

//               shadow-[0_15px_30px_-10px_rgba(217,164,6,0.45)]

//               sm:py-2.5
//             "
//           >
//             {/* animated shimmer sweep */}
//             <div
//               className="
//                 animate-shimmer-slide
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 bg-gradient-to-r
//                 from-transparent
//                 via-white/30
//                 to-transparent
//               "
//             />

//             <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
//               <motion.span
//                 animate={{
//                   scale: [1, 1.18, 1],
//                   rotate: [0, -8, 8, 0],
//                 }}
//                 transition={{
//                   duration: 2.2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/25 sm:h-9 sm:w-9"
//               >
//                 <BadgeCheck className="h-5 w-5 text-navy-900 sm:h-6 sm:w-6" />
//               </motion.span>

//               {/* Typewriter text — types out, erases, loops */}
//               <motion.p
//                 variants={typeContainer}
//                 initial="hidden"
//                 animate="visible"
//                 className="
//                   text-center
//                   text-base
//                   font-extrabold
//                   tracking-wide
//                   text-navy-900

//                   sm:text-xl
//                 "
//               >
//                 {statText.split("").map((char, i) => (
//                   <motion.span
//                     key={i}
//                     variants={typeChar}
//                     className="inline-block"
//                   >
//                     {char === " " ? "\u00A0" : char}
//                   </motion.span>
//                 ))}

//                 {/* Blinking cursor */}
//                 <motion.span
//                   animate={{ opacity: [1, 0, 1] }}
//                   transition={{
//                     duration: 0.8,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="ml-0.5 inline-block w-[2px] translate-y-[2px] bg-navy-900"
//                   style={{ height: "1em" }}
//                 />
//               </motion.p>
//             </div>
//           </motion.div>

//           {/* Trust badges row — DESKTOP ONLY, fills empty space below stat box */}
//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.55 }}
//             className="
//               mt-8
//               hidden
//               max-w-lg
//               grid-cols-3
//               gap-4

//               lg:grid
//             "
//           >
//             {trustBadges.map(({ image, label }) => (
//               <motion.div
//                 key={label}
//                 whileHover={{ y: -4 }}
//                 className="
//                   group
//                   flex
//                   flex-col
//                   items-center
//                   gap-2.5
//                   rounded-2xl
//                   border
//                   border-blue-300/40
//                   bg-blue-400
//                   px-3
//                   py-4
//                   text-center
//                   shadow-[0_10px_20px_-10px_rgba(96,165,250,0.4)]
//                   transition-all
//                   duration-300

//                   hover:bg-white
//                   hover:shadow-[0_16px_30px_-10px_rgba(96,165,250,0.35)]
//                 "
//               >
//               <span
//                   className="
//                     flex
//                     h-18
//                     w-18
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-white/20
//                     transition-colors
//                     duration-300

//                     group-hover:bg-blue-400/10
//                   "
//                 >
//                   <img
//                     src={image}
//                     alt={label}
//                     className="h-14 w-14 object-contain"
//                   />
//                 </span>
//                 <span
//                   className="
//                     text-xs
//                     font-bold
//                     leading-tight
//                     text-white
//                     transition-colors
//                     duration-300

//                     group-hover:text-[#173252]
//                   "
//                 >
//                   {label}
//                 </span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* =====================================================
//             RIGHT — FORM + IMAGE (desktop)
//         ====================================================== */}

//         <div
//           className="
//             order-2
//             flex
//             flex-col
//             items-center

//             lg:items-center
//           "
//         >
//           {/* =================================================
//               FORM
//               Mobile: FIRST
//               Desktop: SECOND
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 25,
//               scale: 0.97,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.6,
//               delay: 0.35,
//             }}
//             className="
//               order-1
//               relative
//               mt-2
//               w-full
//               max-w-sm

//               lg:order-2
//               lg:mt-8
//               lg:max-w-md
//             "
//           >
//             {/* Form */}
//             <LeadForm />
//           </motion.div>

//           {/* =================================================
//               MASCOT IMAGE — DESKTOP ONLY
//               (mobile version now sits below the description above)
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 30,
//               scale: 0.88,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.7,
//               delay: 0.2,
//               ease: "easeOut",
//             }}
//             className="
//               order-2
//               relative
//               hidden
//               mt-0
//               items-end
//               justify-center

//               lg:order-1
//               lg:flex
//             "
//           >
//             {/* Soft image glow */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 bottom-5
//                 left-1/2
//                 h-40
//                 w-64
//                 -translate-x-1/2
//                 rounded-full
//                 bg-blue-300/25
//                 blur-3xl
//               "
//             />

//             <img
//               src={mascot}
//               alt="Legal Papers India advisor"
//               className="
//                 relative
//                 z-10
//                 w-64
//                 object-contain
//                 drop-shadow-[0_22px_35px_rgba(30,70,120,0.22)]

//                 md:w-80

//                 lg:w-[22rem]

//                 xl:w-[25rem]
//               "
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import LeadForm from "./LeadForm";
import mascot from "../assets/image.png";
import secureIcon from "../assets/card.png";
import speedIcon from "../assets/card2.png";
import supportIcon from "../assets/card3.png";

const points = [
  "1 Day GST Application",
  "GST Apply in Tatkal",
  "Advisor for GST",
  "GST Billing Software",
  "GST Registration",
  "Same Day Process for GST",
];

const trustBadges = [
  { image: secureIcon, label: "100% Secure Process" },
  { image: speedIcon, label: "Fast Turnaround" },
  { image: supportIcon, label: "Dedicated Expert Support" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff]">
      {/* ================= BACKGROUND DECORATION ================= */}

      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

      {/* Soft orange glow */}
      <div className="pointer-events-none absolute right-[-100px] top-10 h-72 w-72 rounded-full bg-orange-300/15 blur-3xl" />

      {/* Bottom blue glow */}
      <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />

      {/* Decorative dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,91,160,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-8 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:px-8 lg:pb-14 lg:pt-8">
        {/* =====================================================
            LEFT — HEADLINE + CONTENT
        ====================================================== */}

        <div className="order-1">
          {/* Small heading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-orange-500 sm:text-base sm:tracking-[0.2em]"
          >
            GST Registration · Pan-India
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-[#126dc4] sm:text-5xl lg:text-[3.65rem]"
          >
            Get GST Registration
            <br />
            in just{" "}
            <span className="relative inline-block italic text-orange-500">
              one day.
              {/* Underline */}
              <svg
                viewBox="0 0 160 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-orange-500"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9.5C30 2.5 75 2 100 6.5C120 10 140 6 158 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Legal Papers India handles the paperwork, the portal and the
            follow-up with the department — so your registration doesn't sit
            stuck on a query you didn't know how to answer.
          </motion.p>

          {/* Banner image — mobile/tablet only, full width (edge to edge) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="-mx-4 mt-6 sm:-mx-6 lg:hidden"
          >
            <img
              src={mascot}
              alt="25K+ GST certificates issued by Legal Papers India"
              className="h-auto w-full object-cover"
            />
          </motion.div>

          {/* Points list */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 sm:gap-x-6"
          >
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 text-sm font-bold leading-5 text-[#173252] sm:text-base"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" />
                {p}
              </li>
            ))}
          </motion.ul>

          {/* Trust badges row — DESKTOP ONLY */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8 hidden max-w-lg grid-cols-3 gap-4 lg:grid"
          >
            {trustBadges.map(({ image, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-2.5 rounded-2xl border border-blue-300/40 bg-blue-400 px-3 py-4 text-center shadow-[0_10px_20px_-10px_rgba(96,165,250,0.4)] transition-all duration-300 hover:bg-white hover:shadow-[0_16px_30px_-10px_rgba(96,165,250,0.35)]"
              >
                <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-blue-400/10">
                  <img
                    src={image}
                    alt={label}
                    className="h-14 w-14 object-contain"
                  />
                </span>
                <span className="text-xs font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#173252]">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            RIGHT — FORM + IMAGE (desktop)
        ====================================================== */}

        <div className="order-2 flex flex-col items-center lg:items-center">
          {/* FORM — Mobile: first, Desktop: second */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative order-1 mt-2 w-full max-w-sm lg:order-2 lg:mt-8 lg:max-w-md"
          >
            <LeadForm />
          </motion.div>

          {/* BANNER IMAGE — DESKTOP ONLY */}
         {/* BANNER IMAGE — DESKTOP ONLY */}
<motion.div
  initial={{ opacity: 0, y: 30, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
  className="relative order-2 mt-0 hidden items-end justify-center lg:order-1 lg:flex"
>
  <img
    src={mascot}
    alt="25K+ GST certificates issued by Legal Papers India"
    className="relative z-10 h-auto w-64 object-contain drop-shadow-[0_22px_35px_rgba(30,70,120,0.22)] md:w-80 lg:w-[22rem] xl:w-[25rem]"
  />
</motion.div>
        </div>
      </div>
    </section>
  );
}