


import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaSearch,
  FaPaperPlane,
  FaCertificate,
} from "react-icons/fa";
import { processSteps } from "../data";

const stepIcons = [
  FaClipboardList,
  FaSearch,
  FaPaperPlane,
  FaCertificate,
];

export default function ProcessSteps() {
  return (
    <section className="border-t border-navy-900/5 bg-white">
     <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8">

        <div>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
            How it works
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
            Four steps to your GSTIN
          </h2>
        </div>

        <div className="relative mt-14">

          {/* Desktop horizontal line - same */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent lg:block" />

          {/* Mobile vertical line */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              block
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-gold-500/40
              to-transparent
              lg:hidden
            "
          />

          <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {processSteps.map((step, i) => {
              const Icon = stepIcons[i % stepIcons.length];

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "-40px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                  }}
                  className="
                    group
                    relative
                    text-center
                    lg:text-left
                  "
                >
                  <div className="relative inline-flex">

                    <motion.div
                      initial={{
                        scale: 0.6,
                        opacity: 0,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.12 + 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="
                        relative
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-navy-900/10
                        bg-white
                        shadow-[0_10px_25px_-12px_rgba(10,20,40,0.35)]
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:bg-navy-600
                        group-hover:shadow-[0_15px_35px_-15px_rgba(18,109,196,0.5)]
                      "
                    >
                      <Icon className="h-5 w-5 text-gold-600 transition-colors duration-300 group-hover:text-gold-300" />
                    </motion.div>

                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 font-mono text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>

                  <p className="mt-4 font-display text-xl font-bold text-black">
                    {step.title}
                  </p>

                  <p className="mt-2 text-base leading-relaxed text-slate-800">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}