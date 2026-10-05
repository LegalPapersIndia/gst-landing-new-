

// // import { motion } from "framer-motion";
// // import {
// //   FaFileSignature,
// //   FaGlobe,
// //   FaEdit,
// //   FaBan,
// //   FaFileInvoice,
// //   FaUserTie,
// // } from "react-icons/fa";
// // import { services } from "../data";

// // import imgRegistration from "../assets/services/Forms-bro (2).png";
// // import imgForeigners from "../assets/services/Foreigners.png";
// // import imgModification from "../assets/services/Modification1.png";
// // import imgCancellation from "../assets/services/Cancellation.png";
// // import imgReturns from "../assets/services/Return.png";
// // import imgProfessionalTax from "../assets/services/professional.png";

// // const serviceImages = [
// //   imgRegistration,
// //   imgForeigners,
// //   imgModification,
// //   imgCancellation,
// //   imgReturns,
// //   imgProfessionalTax,
// // ];

// // const serviceIcons = [
// //   FaFileSignature,
// //   FaGlobe,
// //   FaEdit,
// //   FaBan,
// //   FaFileInvoice,
// //   FaUserTie,
// // ];

// // export default function Services() {
// //   return (
// //     <section
// //       id="services"
// //       className="bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff] py-10 sm:py-20"
// //     >
// //       {/* Shimmer keyframes */}
// //       <style>{`
// //         @keyframes shimmerSlide {
// //           0% { transform: translateX(-120%); }
// //           100% { transform: translateX(120%); }
// //         }
// //         .card-shimmer {
// //           animation: shimmerSlide 3.4s ease-in-out infinite;
// //         }
// //         .group:hover .card-shimmer {
// //           animation-duration: 1.6s;
// //         }
// //         @keyframes iconPulse {
// //           0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.35); }
// //           50% { box-shadow: 0 0 0 8px rgba(249,115,22,0); }
// //         }
// //         .icon-pulse {
// //           animation: iconPulse 2.4s ease-in-out infinite;
// //         }
// //       `}</style>

// //     <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
// //         {/* Heading */}
// //         <div className="mx-auto max-w-3xl text-center">
// //           <h2 className="mt-5 font-display text-4xl font-bold text-navy-600 md:text-5xl">
// //             Everything under GST,
// //             <span className="text-gold-500"> handled in one place</span>
// //           </h2>

// //           <p className="mt-5 text-lg leading-8 text-slate-600">
// //             Registration is usually the start, not the end. We stay on as your
// //             compliance desk for whatever comes after.
// //           </p>
// //         </div>

// //         {/* Cards */}
// //         <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
// //           {services.map((s, i) => {
// //             const image = serviceImages[i % serviceImages.length];
// //             const Icon = serviceIcons[i % serviceIcons.length];

// //             return (
// //               <motion.div
// //                 key={s.title}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{
// //                   duration: 0.5,
// //                   delay: (i % 3) * 0.08,
// //                 }}
// //                 whileHover={{ y: -6 }}
// //                 className="
// //                   group
// //                   relative
// //                   overflow-hidden
// //                   rounded-xl
// //                   border
// //                   border-navy-900/10
// //                   bg-white
// //                   px-2.5
// //                   pb-2.5
// //                   pt-2
// //                   sm:px-4
// //                   sm:pb-4
// //                   sm:pt-3
// //                   text-center

// //                   shadow-[0_8px_16px_-6px_rgba(10,20,40,0.1),0_20px_45px_-20px_rgba(10,20,40,0.3)]

// //                   transition-all
// //                   duration-500

// //                   hover:border-blue-300
// //                   hover:shadow-[0_12px_20px_-6px_rgba(37,99,235,0.15),0_28px_55px_-20px_rgba(37,99,235,0.3)]
// //                 "
// //               >
// //                 {/* Shimmer sweep — halka blue, jaise InTheNews section mai */}
// //                 <div
// //                   className="
// //                     card-shimmer
// //                     pointer-events-none
// //                     absolute
// //                     inset-0
// //                     bg-gradient-to-r
// //                     from-transparent
// //                     via-blue-400/10
// //                     to-transparent
// //                   "
// //                 />

// //                 {/* Side icon badge — orange, bigger on desktop, compact on mobile */}
// //                 <div className="icon-pulse absolute left-2 top-2 sm:left-4 sm:top-4 z-10 flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-md transition-transform duration-500 group-hover:scale-110">
// //                   <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
// //                 </div>

// //                 {/* Tag */}
// //                 {s.tag && (
// //                   <span className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 rounded-full bg-green-100 px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-green-700">
// //                     {s.tag}
// //                   </span>
// //                 )}

// //                 {/* Image */}
// //                 <div className="relative z-10 mt-1 flex h-24 sm:h-48 items-center justify-center overflow-hidden">
// //                   <img
// //                     src={image}
// //                     alt={s.title}
// //                     loading="lazy"
// //                     className="h-24 w-24 sm:h-48 sm:w-48 object-contain transition-all duration-500 group-hover:scale-110"
// //                   />
// //                 </div>

// //                 {/* Title */}
// //                 <h3 className="relative z-10 mt-1 text-sm sm:text-lg font-bold transition-colors group-hover:text-gold-600">
// //                   {s.title}
// //                 </h3>

// //                 {/* Description */}
// //                 <p className="relative z-10 mt-1 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">
// //                   {s.desc}
// //                 </p>

// //                 {/* Bottom Accent */}
// //                 <div className="absolute bottom-0 left-0 z-10 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-transform duration-500 group-hover:scale-x-100" />
// //               </motion.div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }




// // import { motion } from "framer-motion";
// // import {
// //   FaFileSignature,
// //   FaGlobe,
// //   FaEdit,
// //   FaBan,
// //   FaFileInvoice,
// //   FaUserTie,
// // } from "react-icons/fa";
// // import { services } from "../data";

// // import imgRegistration from "../assets/services/Forms-bro (2).png";
// // import imgForeigners from "../assets/services/Foreigners.png";
// // import imgModification from "../assets/services/Modification1.png";
// // import imgCancellation from "../assets/services/Cancellation.png";
// // import imgReturns from "../assets/services/Return.png";
// // import imgProfessionalTax from "../assets/services/professional.png";

// // const serviceImages = [
// //   imgRegistration,
// //   imgForeigners,
// //   imgModification,
// //   imgCancellation,
// //   imgReturns,
// //   imgProfessionalTax,
// // ];

// // const serviceIcons = [
// //   FaFileSignature,
// //   FaGlobe,
// //   FaEdit,
// //   FaBan,
// //   FaFileInvoice,
// //   FaUserTie,
// // ];

// // export default function Services() {
// //   return (
// //     <section
// //       id="services"
// //       className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff] py-10 sm:py-20"
// //     >
// //       {/* Shimmer + icon pulse keyframes */}
// //       <style>{`
// //         @keyframes shimmerSlide {
// //           0% { transform: translateX(-120%); }
// //           100% { transform: translateX(120%); }
// //         }
// //         .card-shimmer {
// //           animation: shimmerSlide 3.4s ease-in-out infinite;
// //         }
// //         .group:hover .card-shimmer {
// //           animation-duration: 1.6s;
// //         }
// //         @keyframes iconPulse {
// //           0%, 100% { box-shadow: 0 6px 14px -4px rgba(249,115,22,0.45), 0 0 0 0 rgba(249,115,22,0.35); }
// //           50% { box-shadow: 0 6px 14px -4px rgba(249,115,22,0.45), 0 0 0 8px rgba(249,115,22,0); }
// //         }
// //         .icon-pulse {
// //           animation: iconPulse 2.4s ease-in-out infinite;
// //         }
// //       `}</style>

// //       {/* Soft background blobs */}
// //       <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
// //       <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />

// //       <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
// //         {/* Heading */}
// //         <div className="mx-auto max-w-3xl text-center">
// //           <h2 className="mt-5 font-display text-4xl font-bold text-navy-600 md:text-5xl">
// //             Everything under GST,
// //             <span className="text-gold-500"> handled in one place</span>
// //           </h2>

// //           <p className="mt-5 text-lg leading-8 text-slate-600">
// //             Registration is usually the start, not the end. We stay on as your
// //             compliance desk for whatever comes after.
// //           </p>
// //         </div>

// //         {/* Cards */}
// //         <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-3">
// //           {services.map((s, i) => {
// //             const image = serviceImages[i % serviceImages.length];
// //             const Icon = serviceIcons[i % serviceIcons.length];

// //             return (
// //               <motion.div
// //                 key={s.title}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{
// //                   duration: 0.6,
// //                   delay: (i % 3) * 0.12,
// //                 }}
// //                 whileHover={{ y: -8 }}
// //                 className="
// //                   group
// //                   relative
// //                   flex
// //                   h-full
// //                   flex-col
// //                   overflow-hidden
// //                   rounded-2xl
// //                   border
// //                   border-navy-900/10
// //                   bg-white

// //                   shadow-[0_8px_16px_-6px_rgba(10,20,40,0.1),0_20px_45px_-20px_rgba(10,20,40,0.3)]

// //                   transition-all
// //                   duration-500

// //                   hover:border-blue-300
// //                   hover:shadow-[0_12px_20px_-6px_rgba(37,99,235,0.18),0_28px_55px_-20px_rgba(37,99,235,0.35)]
// //                 "
// //               >
// //                 {/* ================= IMAGE (full, cut nahi hogi) ================= */}
// //                 <div className="relative h-36 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 sm:h-56">
// //                   <img
// //                     src={image}
// //                     alt={s.title}
// //                     loading="lazy"
// //                     className="h-full w-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-110 sm:p-3"
// //                   />

// //                   {/* Halka bottom fade */}
// //                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />

// //                   {/* Blue tint on hover */}
// //                   <div className="pointer-events-none absolute inset-0 bg-blue-600/0 transition-colors duration-500 group-hover:bg-blue-600/10" />

// //                   {/* Shimmer sweep */}
// //                   <div className="card-shimmer pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

// //                   {/* Tag */}
// //                   {s.tag && (
// //                     <span className="absolute right-2 top-2 z-10 rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-700 shadow-sm sm:right-4 sm:top-4 sm:px-3.5 sm:py-1.5 sm:text-xs">
// //                       {s.tag}
// //                     </span>
// //                   )}
// //                 </div>

// //                 {/* ================= ICON BADGE (image pe overlap) ================= */}
// //                 <div className="icon-pulse relative z-10 -mt-5 ml-3 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-orange-500 text-white transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-blue-600 sm:-mt-7 sm:ml-5 sm:h-14 sm:w-14">
// //                   <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
// //                 </div>

// //                 {/* ================= CONTENT ================= */}
// //                 <div className="flex flex-1 flex-col px-3 pb-4 pt-2 sm:px-5 sm:pb-6 sm:pt-3">
// //                   <h3 className="text-sm font-bold text-navy-600 transition-colors duration-300 group-hover:text-gold-600 sm:text-xl">
// //                     {s.title}
// //                   </h3>

// //                   <p className="mt-1 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
// //                     {s.desc}
// //                   </p>
// //                 </div>

// //                 {/* ================= BOTTOM ACCENT LINE ================= */}
// //                 <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-500 group-hover:w-full" />
// //               </motion.div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import { motion } from "framer-motion";
// import {
//   FaFileSignature,
//   FaGlobe,
//   FaEdit,
//   FaBan,
//   FaFileInvoice,
//   FaUserTie,
// } from "react-icons/fa";
// import { ArrowRight, Sparkles } from "lucide-react";
// import { services } from "../data";

// import imgRegistration from "../assets/services/Forms-bro (2).png";
// import imgForeigners from "../assets/services/Foreigners.png";
// import imgModification from "../assets/services/Modification1.png";
// import imgCancellation from "../assets/services/Cancellation.png";
// import imgReturns from "../assets/services/Return.png";
// import imgProfessionalTax from "../assets/services/professional.png";

// /* CTA button kahan jaye: yahan apni form/section ki id daalo */
// const CTA_HREF = "#lead-form";

// const serviceImages = [
//   imgRegistration,
//   imgForeigners,
//   imgModification,
//   imgCancellation,
//   imgReturns,
//   imgProfessionalTax,
// ];

// const serviceIcons = [
//   FaFileSignature,
//   FaGlobe,
//   FaEdit,
//   FaBan,
//   FaFileInvoice,
//   FaUserTie,
// ];

// /* Har card ka apna colour theme */
// const themes = [
//   { grad: "from-orange-400 to-amber-500", soft: "from-orange-50 to-amber-50", text: "text-orange-600", ring: "hover:border-orange-300" },
//   { grad: "from-sky-400 to-blue-600", soft: "from-sky-50 to-blue-50", text: "text-blue-600", ring: "hover:border-blue-300" },
//   { grad: "from-violet-400 to-purple-600", soft: "from-violet-50 to-purple-50", text: "text-purple-600", ring: "hover:border-purple-300" },
//   { grad: "from-rose-400 to-red-500", soft: "from-rose-50 to-red-50", text: "text-red-600", ring: "hover:border-red-300" },
//   { grad: "from-emerald-400 to-teal-600", soft: "from-emerald-50 to-teal-50", text: "text-emerald-600", ring: "hover:border-emerald-300" },
//   { grad: "from-cyan-400 to-indigo-500", soft: "from-cyan-50 to-indigo-50", text: "text-indigo-600", ring: "hover:border-indigo-300" },
// ];

// function ServiceCard({ s, i }) {
//   const image = serviceImages[i % serviceImages.length];
//   const Icon = serviceIcons[i % serviceIcons.length];
//   const t = themes[i % themes.length];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 36 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-40px" }}
//       transition={{ duration: 0.55, delay: (i % 3) * 0.12, ease: "easeOut" }}
//       whileHover={{ y: -8 }}
//       className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_28px_-14px_rgba(10,30,70,0.25)] transition-all duration-300 hover:shadow-[0_28px_55px_-18px_rgba(10,30,70,0.35)] sm:rounded-3xl ${t.ring}`}
//     >
//       {/* ================= IMAGE ================= */}
//       <div
//         className={`relative h-32 overflow-hidden bg-gradient-to-br ${t.soft} sm:h-52`}
//       >
//         {/* dotted texture */}
//         <div
//           className="pointer-events-none absolute inset-0 opacity-60"
//           style={{
//             backgroundImage:
//               "radial-gradient(rgba(30,91,160,0.10) 1px, transparent 1px)",
//             backgroundSize: "16px 16px",
//           }}
//         />

//         {/* glow circle behind image */}
//         <div
//           className={`pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${t.grad} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40 sm:h-44 sm:w-44`}
//         />

//         <img
//           src={image}
//           alt={s.title}
//           loading="lazy"
//           className="relative h-full w-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-110 sm:p-3"
//         />

//         {/* big number */}
//         <span className="absolute left-2.5 top-1.5 font-display text-3xl font-extrabold leading-none text-slate-900/10 sm:left-4 sm:top-3 sm:text-5xl">
//           {String(i + 1).padStart(2, "0")}
//         </span>

//         {/* tag */}
//         {s.tag && (
//           <span className="absolute right-2 top-2 z-10 rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-green-700 shadow-sm ring-1 ring-green-200 sm:right-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
//             {s.tag}
//           </span>
//         )}
//       </div>

//       {/* ================= ICON BADGE ================= */}
//       <motion.div
//         whileHover={{ rotate: [0, -12, 12, 0] }}
//         transition={{ duration: 0.5 }}
//         className={`relative z-10 -mt-5 ml-3 flex h-10 w-10 items-center justify-center rounded-xl border-[3px] border-white bg-gradient-to-br ${t.grad} text-white shadow-lg sm:-mt-7 sm:ml-5 sm:h-14 sm:w-14 sm:rounded-2xl sm:border-4`}
//       >
//         <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
//       </motion.div>

//       {/* ================= CONTENT ================= */}
//       <div className="flex flex-1 flex-col px-3 pb-4 pt-2.5 sm:px-5 sm:pb-6 sm:pt-3">
//         <h3 className="text-sm font-extrabold leading-snug text-[#173252] sm:text-xl">
//           {s.title}
//         </h3>

//         <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
//           {s.desc}
//         </p>

//         {/* learn more row */}
//         <a
//           href={CTA_HREF}
//           className={`mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-bold sm:pt-5 sm:text-sm ${t.text}`}
//         >
//           Get started
//           <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5 sm:h-4 sm:w-4" />
//         </a>
//       </div>

//       {/* bottom accent line */}
//       <span
//         className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${t.grad} transition-all duration-500 group-hover:w-full`}
//       />
//     </motion.div>
//   );
// }

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff] py-12 sm:py-20"
//     >
//       {/* background decoration */}
//       <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
//       <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-300/15 blur-3xl" />
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.35]"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(30,91,160,0.08) 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
//         {/* ================= HEADING ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 ring-1 ring-orange-200">
//             <Sparkles className="h-4 w-4" />
//             Our Services
//           </span>

//           <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl md:text-5xl">
//             Everything under GST,{" "}
//             <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//               handled in one place
//             </span>
//           </h2>

//           <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
//             Registration is usually the start, not the end. We stay on as your
//             compliance desk for whatever comes after.
//           </p>
//         </motion.div>

//         {/* ================= CARDS ================= */}
//         <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 xl:grid-cols-3">
//           {services.map((s, i) => (
//             <ServiceCard key={s.title} s={s} i={i} />
//           ))}
//         </div>

//         {/* ================= BOTTOM CTA ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#0b4f99] to-[#126dc4] px-5 py-5 text-center shadow-[0_20px_40px_-18px_rgba(18,109,196,0.7)] sm:mt-14 sm:flex-row sm:px-8 sm:text-left"
//         >
//           <div>
//             <p className="font-display text-lg font-extrabold text-white sm:text-xl">
//               Not sure which service you need?
//             </p>
//             <p className="mt-0.5 text-sm text-blue-100">
//               Talk to our GST expert, free consultation.
//             </p>
//           </div>

//           <a
//             href={CTA_HREF}
//             className="inline-flex shrink-0 items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
//           >
//             Get Free Consultation
//             <ArrowRight className="h-4 w-4" />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import {
  FaFileSignature,
  FaGlobe,
  FaEdit,
  FaBan,
  FaFileInvoice,
  FaUserTie,
} from "react-icons/fa";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "../data";

import imgRegistration from "../assets/services/Forms-bro (2).png";
import imgForeigners from "../assets/services/Foreigners.png";
import imgModification from "../assets/services/Modification1.png";
import imgCancellation from "../assets/services/Cancellation.png";
import imgReturns from "../assets/services/Return.png";
import imgProfessionalTax from "../assets/services/professional.png";

/* "Get started" link kahan jaye: yahan apne form ki id daalo */
const CTA_HREF = "#lead-form";

const serviceImages = [
  imgRegistration,
  imgForeigners,
  imgModification,
  imgCancellation,
  imgReturns,
  imgProfessionalTax,
];

const serviceIcons = [
  FaFileSignature,
  FaGlobe,
  FaEdit,
  FaBan,
  FaFileInvoice,
  FaUserTie,
];

/* Har card ka apna colour theme */
const themes = [
  { grad: "from-orange-400 to-amber-500", soft: "from-orange-50 to-amber-50", text: "text-orange-600", ring: "hover:border-orange-300" },
  { grad: "from-sky-400 to-blue-600", soft: "from-sky-50 to-blue-50", text: "text-blue-600", ring: "hover:border-blue-300" },
  { grad: "from-violet-400 to-purple-600", soft: "from-violet-50 to-purple-50", text: "text-purple-600", ring: "hover:border-purple-300" },
  { grad: "from-rose-400 to-red-500", soft: "from-rose-50 to-red-50", text: "text-red-600", ring: "hover:border-red-300" },
  { grad: "from-emerald-400 to-teal-600", soft: "from-emerald-50 to-teal-50", text: "text-emerald-600", ring: "hover:border-emerald-300" },
  { grad: "from-cyan-400 to-indigo-500", soft: "from-cyan-50 to-indigo-50", text: "text-indigo-600", ring: "hover:border-indigo-300" },
];

function ServiceCard({ s, i }) {
  const image = serviceImages[i % serviceImages.length];
  const Icon = serviceIcons[i % serviceIcons.length];
  const t = themes[i % themes.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (i % 3) * 0.12, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_28px_-14px_rgba(10,30,70,0.25)] transition-all duration-300 hover:shadow-[0_28px_55px_-18px_rgba(10,30,70,0.35)] sm:rounded-3xl ${t.ring}`}
    >
      {/* ================= IMAGE ================= */}
      <div
        className={`relative h-32 overflow-hidden bg-gradient-to-br ${t.soft} sm:h-52`}
      >
        {/* dotted texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(rgba(30,91,160,0.10) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* glow circle behind image */}
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${t.grad} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40 sm:h-44 sm:w-44`}
        />

        {/* image: card wahi, image andar se bada (zoom) */}
        <img
          src={image}
          alt={s.title}
          loading="lazy"
          className="relative h-full w-full origin-center scale-125 object-contain p-0 transition-transform duration-700 ease-out group-hover:scale-[1.35] sm:scale-[1.3] sm:group-hover:scale-[1.4]"
        />

        {/* big number */}
        <span className="absolute left-2.5 top-1.5 z-10 font-display text-3xl font-extrabold leading-none text-slate-900/10 sm:left-4 sm:top-3 sm:text-5xl">
          {String(i + 1).padStart(2, "0")}
        </span>

        {/* tag */}
        {s.tag && (
          <span className="absolute right-2 top-2 z-10 rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-green-700 shadow-sm ring-1 ring-green-200 sm:right-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
            {s.tag}
          </span>
        )}
      </div>

      {/* ================= ICON BADGE ================= */}
      <motion.div
        whileHover={{ rotate: [0, -12, 12, 0] }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 -mt-5 ml-3 flex h-10 w-10 items-center justify-center rounded-xl border-[3px] border-white bg-gradient-to-br ${t.grad} text-white shadow-lg sm:-mt-7 sm:ml-5 sm:h-14 sm:w-14 sm:rounded-2xl sm:border-4`}
      >
        <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col px-3 pb-4 pt-2.5 sm:px-5 sm:pb-6 sm:pt-3">
        <h3 className="text-sm font-extrabold leading-snug text-[#173252] sm:text-xl">
          {s.title}
        </h3>

        <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
          {s.desc}
        </p>

        {/* get started row */}
        <a
          href={CTA_HREF}
          className={`mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-bold sm:pt-5 sm:text-sm ${t.text}`}
        >
          Get started
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5 sm:h-4 sm:w-4" />
        </a>
      </div>

      {/* bottom accent line */}
      <span
        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${t.grad} transition-all duration-500 group-hover:w-full`}
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff] py-12 sm:py-20"
    >
      {/* background decoration */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-300/15 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,91,160,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 ring-1 ring-orange-200">
            <Sparkles className="h-4 w-4" />
            Our Services
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl md:text-5xl">
            Everything under GST,{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              handled in one place
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            Registration is usually the start, not the end. We stay on as your
            compliance desk for whatever comes after.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 xl:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}