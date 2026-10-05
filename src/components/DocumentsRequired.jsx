

// import { motion } from "framer-motion";
// import { FileCheck2 } from "lucide-react";
// import { documentsRequired } from "../data";

// import iconPan from "../assets/documents/doc-pan.png";
// import iconAadhaar from "../assets/documents/doc-aadhaar.png";
// import iconPhoto from "../assets/documents/doc-photo.png";
// import iconAddress from "../assets/documents/doc-address.png";
// import iconBank from "../assets/documents/doc-bank.png";
// import iconSignature from "../assets/documents/doc-signature.png";

// const docIcons = [
//   iconPan,
//   iconAadhaar,
//   iconPhoto,
//   iconAddress,
//   iconBank,
//   iconSignature,
// ];

// export default function DocumentsRequired() {
//   return (
//     <section className="relative overflow-hidden border-t border-navy-900/5 bg-white">
//       {/* Shimmer + icon pulse keyframes (unique names, dusre sections se clash nahi hoga) */}
//       <style>{`
//         @keyframes docShimmerSlide {
//           0% { transform: translateX(-120%); }
//           100% { transform: translateX(120%); }
//         }
//         .doc-shimmer {
//           animation: docShimmerSlide 3.4s ease-in-out infinite;
//         }
//         .group:hover .doc-shimmer {
//           animation-duration: 1.6s;
//         }
//         @keyframes docIconPulse {
//           0%, 100% { box-shadow: 0 6px 14px -4px rgba(249,115,22,0.45), 0 0 0 0 rgba(249,115,22,0.35); }
//           50% { box-shadow: 0 6px 14px -4px rgba(249,115,22,0.45), 0 0 0 8px rgba(249,115,22,0); }
//         }
//         .doc-icon-pulse {
//           animation: docIconPulse 2.4s ease-in-out infinite;
//         }
//       `}</style>

//       {/* Soft background blobs */}
//       <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-300/10 blur-3xl" />
//       <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />

//       <div className="relative mx-auto max-w-[1400px] px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
//         {/* Heading - Same position */}
//         <div className="flex items-center gap-2">
//           <FileCheck2 className="h-6 w-6 text-gold-500" strokeWidth={1.5} />

//           <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
//             Keep ready
//           </p>
//         </div>

//         <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
//           Documents you'll need
//         </h2>

//         {/* Documents Grid */}
//         <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-3">
//           {documentsRequired.map((doc, i) => {
//             const icon = docIcons[i % docIcons.length];

//             return (
//               <motion.div
//                 key={doc}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-40px" }}
//                 transition={{
//                   duration: 0.6,
//                   delay: (i % 3) * 0.12,
//                 }}
//                 whileHover={{ y: -8 }}
//                 className="
//                   group
//                   relative
//                   flex
//                   h-full
//                   flex-col
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-slate-200
//                   bg-white

//                   shadow-[0_8px_16px_-6px_rgba(10,20,40,0.1),0_20px_45px_-20px_rgba(10,20,40,0.3)]

//                   transition-all
//                   duration-500

//                   hover:border-orange-300
//                   hover:shadow-[0_12px_20px_-6px_rgba(249,115,22,0.2),0_28px_55px_-20px_rgba(249,115,22,0.35)]
//                 "
//               >
//                 {/* ================= IMAGE (bada, full dikhega) ================= */}
//                <div className="relative h-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 sm:h-44">
//                   {/* Decorative circles */}
//                   <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-100/70 transition-transform duration-500 group-hover:scale-125" />
//                   <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-blue-100/60 transition-transform duration-500 group-hover:scale-125" />

//                   <img
//                     src={icon}
//                     alt={doc}
//                     loading="lazy"
//                     className="relative z-10 h-full w-full object-contain p-3 drop-shadow-[0_10px_14px_rgba(15,35,65,0.15)] transition-transform duration-700 ease-out group-hover:scale-110 sm:p-4"
//                   />

//                   {/* Orange tint on hover */}
//                   <div className="pointer-events-none absolute inset-0 z-20 bg-orange-500/0 transition-colors duration-500 group-hover:bg-orange-500/10" />

//                   {/* Shimmer sweep */}
//                   <div className="doc-shimmer pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
//                 </div>

//                 {/* ================= ICON BADGE (image pe overlap) ================= */}
//                 <div className="doc-icon-pulse relative z-10 -mt-5 ml-3 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-orange-500 text-white transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-blue-600 sm:-mt-7 sm:ml-5 sm:h-14 sm:w-14">
//                   <FileCheck2 className="h-4 w-4 sm:h-6 sm:w-6" />
//                 </div>

//                 {/* ================= CONTENT ================= */}
//                 <div className="flex flex-1 flex-col px-3 pb-4 pt-2 sm:px-5 sm:pb-6 sm:pt-3">
//                   <p className="text-sm font-bold leading-snug text-[#173252] transition-colors duration-300 group-hover:text-orange-600 sm:text-xl">
//                     {doc}
//                   </p>

//                   {/* Orange animated line */}
//                   <div className="mt-2 h-[3px] w-6 rounded-full bg-orange-400/40 transition-all duration-500 group-hover:w-12 group-hover:bg-orange-500 sm:mt-3" />
//                 </div>

//                 {/* ================= BOTTOM ACCENT LINE ================= */}
//                 <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 group-hover:w-full" />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { FileCheck2, ClipboardList, Check } from "lucide-react";
import { documentsRequired } from "../data";

import iconPan from "../assets/documents/doc-pan.png";
import iconAadhaar from "../assets/documents/doc-aadhaar.png";
import iconPhoto from "../assets/documents/doc-photo.png";
import iconAddress from "../assets/documents/doc-address.png";
import iconBank from "../assets/documents/doc-bank.png";
import iconSignature from "../assets/documents/doc-signature.png";

const docIcons = [
  iconPan,
  iconAadhaar,
  iconPhoto,
  iconAddress,
  iconBank,
  iconSignature,
];

/* Har card ka apna colour theme */
const themes = [
  { grad: "from-orange-400 to-amber-500", soft: "from-orange-50 to-amber-50", text: "text-orange-600", ring: "hover:border-orange-300" },
  { grad: "from-sky-400 to-blue-600", soft: "from-sky-50 to-blue-50", text: "text-blue-600", ring: "hover:border-blue-300" },
  { grad: "from-emerald-400 to-teal-600", soft: "from-emerald-50 to-teal-50", text: "text-emerald-600", ring: "hover:border-emerald-300" },
  { grad: "from-violet-400 to-purple-600", soft: "from-violet-50 to-purple-50", text: "text-purple-600", ring: "hover:border-purple-300" },
  { grad: "from-rose-400 to-red-500", soft: "from-rose-50 to-red-50", text: "text-red-600", ring: "hover:border-red-300" },
  { grad: "from-cyan-400 to-indigo-500", soft: "from-cyan-50 to-indigo-50", text: "text-indigo-600", ring: "hover:border-indigo-300" },
];

function DocCard({ doc, i }) {
  const icon = docIcons[i % docIcons.length];
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
        className={`relative h-32 overflow-hidden bg-gradient-to-br ${t.soft} sm:h-44`}
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
          className={`pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${t.grad} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40 sm:h-40 sm:w-40`}
        />

        <img
          src={icon}
          alt={doc}
          loading="lazy"
          className="relative z-10 h-full w-full object-contain p-3 drop-shadow-[0_10px_14px_rgba(15,35,65,0.15)] transition-transform duration-700 ease-out group-hover:scale-110 sm:p-4"
        />

        {/* big number */}
        <span className="absolute left-2.5 top-1.5 z-20 font-display text-3xl font-extrabold leading-none text-slate-900/10 sm:left-4 sm:top-3 sm:text-5xl">
          {String(i + 1).padStart(2, "0")}
        </span>

        {/* checked badge */}
        <span
          className={`absolute right-2 top-2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${t.grad} text-white shadow-md sm:right-4 sm:top-4 sm:h-7 sm:w-7`}
        >
          <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={3} />
        </span>
      </div>

      {/* ================= ICON BADGE ================= */}
      <motion.div
        whileHover={{ rotate: [0, -12, 12, 0] }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 -mt-5 ml-3 flex h-10 w-10 items-center justify-center rounded-xl border-[3px] border-white bg-gradient-to-br ${t.grad} text-white shadow-lg sm:-mt-7 sm:ml-5 sm:h-14 sm:w-14 sm:rounded-2xl sm:border-4`}
      >
        <FileCheck2 className="h-4 w-4 sm:h-6 sm:w-6" />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col px-3 pb-4 pt-2.5 sm:px-5 sm:pb-6 sm:pt-3">
        <p className="text-sm font-extrabold leading-snug text-[#173252] sm:text-xl">
          {doc}
        </p>

        <div
          className={`mt-2 h-[3px] w-8 rounded-full bg-gradient-to-r ${t.grad} transition-all duration-500 group-hover:w-16 sm:mt-3`}
        />
      </div>

      {/* bottom accent line */}
      <span
        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${t.grad} transition-all duration-500 group-hover:w-full`}
      />
    </motion.div>
  );
}

export default function DocumentsRequired() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f5f9ff] to-white py-12 sm:py-20">
      {/* background decoration */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
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
            <ClipboardList className="h-4 w-4" />
            Keep ready
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl md:text-5xl">
            Documents{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              you'll need
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Keep these handy and your GST registration can be filed the same
            day.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {documentsRequired.map((doc, i) => (
            <DocCard key={doc} doc={doc} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}